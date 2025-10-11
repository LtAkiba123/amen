(function(){
  const QUESTIONS = window.CPP_QUESTIONS || [];

  // Elements
  const promptEl = document.getElementById('prompt');
  const prefixEl = document.getElementById('codePrefix');
  const suffixEl = document.getElementById('codeSuffix');
  const dropZone = document.getElementById('dropZone');
  const choicesEl = document.getElementById('choices');
  const submitBtn = document.getElementById('submitBtn');

  const overlay = document.getElementById('overlay');
  const overlayCard = document.getElementById('overlayCard');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayBtn = document.getElementById('overlayBtn');

  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');

  // State
  let index = 0;
  let selected = null; // currently placed DOM button
  let shufflerSeed = Date.now();

  function rng(){
    // simple LCG for stable per-session shuffles
    shufflerSeed = (1103515245 * shufflerSeed + 12345) % 2**31;
    return shufflerSeed / 2**31;
  }

  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(rng() * (i+1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderQuestion(i){
    const q = QUESTIONS[i];
    if(!q) return;
    // Clear previous
    promptEl.textContent = q.instruction;
    prefixEl.textContent = q.codePrefix || "";
    suffixEl.textContent = q.codeSuffix || "";
    clearDropZone();

    // Build choices (exactly 4)
    const options = shuffle(q.choices).slice(0,4);
    choicesEl.innerHTML = '';
    options.forEach((label, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip';
      btn.setAttribute('role','listitem');
      btn.setAttribute('draggable','true');
      btn.setAttribute('aria-pressed','false');
      btn.dataset.choice = label;
      btn.dataset.home = 'choices';
      btn.id = `choice-${i}-${idx}`;
      btn.textContent = label;

      // Click-to-toggle placement
      btn.addEventListener('click', () => {
        if (btn.parentElement === dropZone){
          returnChoice(btn);
        } else {
          placeChoice(btn);
        }
      });

      // Drag handlers
      btn.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', btn.id);
        btn.classList.add('dragging');
      });
      btn.addEventListener('dragend', () => btn.classList.remove('dragging'));

      choicesEl.appendChild(btn);
    });

    // Progress
    progressText.textContent = `Question ${i+1}/${QUESTIONS.length}`;
    progressBar.style.width = `${((i)/Math.max(1,(QUESTIONS.length-1)))*100}%`;
  }

  function clearDropZone(){
    // Move any placed chip back
    if (selected && selected.parentElement === dropZone){
      returnChoice(selected, {silent:true});
    }
    dropZone.innerHTML = '';
    dropZone.classList.remove('has-value');
    selected = null;
  }

  function placeChoice(btn){
    // If dropZone already has one, return it first
    if (selected && selected !== btn){
      returnChoice(selected, {silent:true});
    }
    dropZone.appendChild(btn);
    btn.setAttribute('aria-pressed','true');
    btn.style.width = '100%';
    selected = btn;
  }

  function returnChoice(btn, opts={}){
    choicesEl.appendChild(btn);
    btn.setAttribute('aria-pressed','false');
    btn.style.width = '';
    if (!opts.silent) selected = null;
  }

  // DropZone events
  dropZone.addEventListener('dragover', (e) => e.preventDefault());
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const btn = document.getElementById(id);
    if (!btn) return;
    placeChoice(btn);
  });

  // Keyboard support: Space/Enter on blank moves the first highlighted item
  dropZone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      // Place the first choice if nothing selected, otherwise return it.
      if (!selected){
        const first = choicesEl.querySelector('.chip');
        if (first) placeChoice(first);
      } else {
        returnChoice(selected);
      }
    }
  });

  // Submit logic
  submitBtn.addEventListener('click', () => {
    const q = QUESTIONS[index];
    if (!q) return;

    const answer = q.answer;
    const chosen = selected ? selected.dataset.choice : null;

    if (chosen === answer){
      showOverlay(true);
    } else {
      showOverlay(false);
    }
  });

  function showOverlay(isCorrect){
    overlay.hidden = false;
    overlayCard.classList.toggle('success', isCorrect);
    overlayCard.classList.toggle('error', !isCorrect);

    overlayTitle.textContent = isCorrect ? 'Correct Answer!' : 'Wrong Answer!';
    overlayBtn.textContent = isCorrect
      ? (index < QUESTIONS.length - 1 ? 'Next Question »' : 'See Results »')
      : 'Try Again';

    overlayBtn.onclick = () => {
      overlay.hidden = true;
      if (isCorrect){
        if (index < QUESTIONS.length - 1){
          index++;
          renderQuestion(index);
        } else {
          showResults();
        }
      } else {
        // For wrong answer, just clear placement for another attempt
        clearDropZone();
      }
    };
  }

  function showResults(){
    overlay.hidden = false;
    overlayCard.classList.remove('error');
    overlayCard.classList.add('success');
    overlayTitle.textContent = 'Great job! You completed the quiz.';
    overlayBtn.textContent = 'Restart »';
    overlayBtn.onclick = () => {
      overlay.hidden = true;
      index = 0;
      renderQuestion(index);
    };
    // Fill progress to 100%
    progressText.textContent = `Question ${QUESTIONS.length}/${QUESTIONS.length}`;
    progressBar.style.width = '100%';
  }

  // Initialize
  if (!QUESTIONS.length){
    promptEl.textContent = 'No questions loaded.';
    submitBtn.disabled = true;
  } else {
    renderQuestion(index);
  }
})();