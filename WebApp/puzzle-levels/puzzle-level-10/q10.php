<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Codebuddy • C++ Syntax Quiz</title>
  <meta name="color-scheme" content="dark light" />
  <link rel="stylesheet" href="../../css/quiz.css" />
</head>
<body>
  <main class="app">
    <header class="topbar" role="banner">
      <h1 class="app-title">C++ Syntax Quiz</h1>
      <div class="progress">
        <span id="progressText" aria-live="polite">Question 1/1</span>
        <div class="bar"><div id="progressBar" class="bar-fill"></div></div>
      </div>
    </header>

    <section class="quiz" role="region" aria-labelledby="prompt">
      <h2 id="prompt" class="prompt" aria-live="polite"></h2>

      <div class="code-line" aria-label="Code line with a missing token">
        <code class="code">
          <span id="codePrefix"></span>
          <span id="dropZone"
                class="blank"
                role="button"
                tabindex="0"
                aria-label="Blank drop zone"
                aria-dropeffect="move"></span>
          <span id="codeSuffix"></span>
        </code>
      </div>

      <div id="choices" class="choices" role="list" aria-label="Answer choices">
        <!-- Choice buttons inserted by JS -->
      </div>

      <div class="actions">
        <button id="submitBtn" class="btn btn-primary" aria-label="Submit answer">
          Submit Answer »
        </button>
      </div>
    </section>
  </main>

  <div id="overlay" class="overlay" hidden>
    <div id="overlayCard" class="overlay-card" role="dialog" aria-modal="true" aria-live="assertive">
      <h3 id="overlayTitle"></h3>
      <div class="overlay-actions">
        <button id="overlayBtn" class="btn"></button>
      </div>
    </div>
  </div>

  <script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script>
  <zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cmgfvb8he0015l844sdsepfbs'></zapier-interfaces-chatbot-embed>
  <script src="questions.js"></script>
  <script src="app.js"></script>
</body>
</html>