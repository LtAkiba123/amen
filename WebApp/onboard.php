<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Onboarding</title>
    <style>
        :root {
        --bg: #111418;
        --panel: #1a1f24;
        --panel-2: #21262c;
        --text: #e6edf3;
        --muted: #9aa4af;
        --accent: #1f86d6;
        --accent-2: #3ba3ff;
        --border: #2b3138;
        --shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        * { box-sizing: border-box; }
        html, body { height: 100%; }
        body {
        margin: 0;
        background: var(--bg);
        color: var(--text);
        font: 16px/1.45 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }

        /* Progress bar */
        .progress {
        position: fixed;
        top: 12px;
        left: 24px;
        right: 24px;
        height: 10px;
        background: var(--panel-2);
        border-radius: 999px;
        box-shadow: inset 0 0 0 1px var(--border);
        }
        .progress__fill {
        height: 100%;
        background: linear-gradient(90deg, var(--accent), var(--accent-2));
        border-radius: 999px;
        width: 0%;
        transition: width 380ms ease;
        }

        /* Stage layout */
        .stage {
        min-height: calc(100vh - 96px);
        display: grid;
        place-items: center;
        gap: 24px;
        padding: 96px 24px 120px;
        }

        /* Dialogue bubble (no mascot) */
        .bubble {
        position: relative;
        padding: 12px 16px;
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 12px;
        color: var(--text);
        box-shadow: var(--shadow);
        max-width: min(90vw, 560px);
        text-align: center;
        font-weight: 600;
        }
        .bubble::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 0; height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid var(--panel);
        filter: drop-shadow(0 -1px 0 var(--border));
        }

        /* Content area that changes by step */
        .content {
        display: grid;
        gap: 14px;
        width: min(90vw, 860px);
        justify-content: center;
        }

        /* Card buttons for choices (step: Let's get started / experience) */
        .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 14px;
        }
        .card {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 16px 18px;
        color: var(--text);
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        transition: transform 140ms ease, border-color 140ms ease, background 140ms ease;
        }
        .card:hover {
        transform: translateY(-1px);
        border-color: var(--accent-2);
        background: #1d2228;
        }
        .card .emoji {
        font-size: 22px;
        }

        /* Choice list (step: Small steps, big progress) */
        .choice-list {
        width: min(720px, 90vw);
        display: grid;
        gap: 12px;
        }
        .choice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 14px 16px;
        background: var(--panel);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 12px;
        cursor: pointer;
        transition: border-color 140ms ease, background 140ms ease, box-shadow 140ms ease, transform 120ms ease;
        }
        .choice:hover {
        transform: translateY(-1px);
        border-color: var(--accent-2);
        background: #1d2228;
        }
        .choice.active {
        border-color: var(--accent-2);
        box-shadow: 0 0 0 2px rgba(63, 162, 255, 0.25) inset;
        }
        .choice .label {
        font-weight: 600;
        }
        .choice .tag {
        color: var(--muted);
        font-size: 0.9rem;
        }

        /* Feature list (step: Ready for an exciting journey?) */
        .feature-list {
        width: min(720px, 90vw);
        display: grid;
        gap: 22px;
        }
        .feature {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 16px;
        padding: 8px 2px 0;
        }
        .feature:not(:first-child) {
        border-top: 1px solid var(--border);
        padding-top: 18px;
        }
        .feature .emoji {
        font-size: 28px;
        }
        .feature h4 {
        margin: 0 0 6px;
        font-size: 1.05rem;
        }
        .feature p {
        margin: 0;
        color: var(--muted);
        font-size: 0.95rem;
        }

        /* Footer */
        .footer {
        position: fixed;
        left: 0; right: 0; bottom: 0;
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        padding: 18px 24px;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.35) 30%, rgba(0,0,0,.6) 100%);
        backdrop-filter: blur(2px);
        border-top: 1px solid var(--border);
        }
        .btn {
        appearance: none;
        border: 0;
        padding: 12px 18px;
        border-radius: 10px;
        font-weight: 700;
        letter-spacing: .02em;
        cursor: pointer;
        }
        .btn-primary {
        color: white;
        background: var(--accent);
        box-shadow: 0 4px 0 rgba(0,0,0,.2), inset 0 0 0 1px rgba(255,255,255,.06);
        transition: transform 120ms ease, background 120ms ease, opacity 120ms ease;
        }
        .btn-primary:hover { background: var(--accent-2); }
        .btn-primary:active { transform: translateY(1px); }
        .btn[disabled] { opacity: .55; cursor: not-allowed; }

        /* Fade utility for smooth content swaps */
        .fadeable { 
        opacity: 1;
        transform: translateY(0);
        transition: opacity 200ms ease, transform 200ms ease;
        }
        .fade-out {
        opacity: 0;
        transform: translateY(6px);
        }
    </style>
  </head>
  <body>
    <!-- Progress bar -->
    <div class="progress">
      <div id="progressFill" class="progress__fill" style="width: 0%"></div>
    </div>

    <!-- Center stage -->
    <main class="stage">
      <!-- Dialogue box only (no mascot) -->
      <div id="bubble" class="bubble fadeable" aria-live="polite">
        Hi there, I’m Cody
      </div>

      <!-- Step content swaps as you continue -->
      <div id="content" class="content fadeable" aria-live="polite"></div>
    </main>

    <!-- Footer with Continue -->
    <footer class="footer">
      <button id="continueBtn" class="btn btn-primary">Continue</button>
    </footer>

    <script>
        const steps = [
        {
            bubble: "Hi there, I’m Cody",
            render: (mount) => {
            mount.innerHTML = ""; // No extra content on first screen
            },
        },
        {
            bubble: "Let’s get started",
            render: (mount) => {
            mount.innerHTML = `
                <div class="card-grid">
                ${[
                    ["🧭", "Explore what is coding"],
                    ["🧠", "Challenge my brain"],
                    ["🎯", "Boost my career"],
                    ["🎮", "Just for fun"],
                    ["📚", "Support my education"],
                    ["💻", "Build my own apps"],
                    ["🎨", "Expand creative skills"],
                    ["⋯", "Other"],
                ]
                    .map(
                    ([emoji, label]) => `
                    <button class="card" type="button" aria-label="${label}">
                    <span class="emoji">${emoji}</span>
                    <span>${label}</span>
                    </button>`
                    )
                    .join("")}
                </div>
            `;
            },
        },
        {
            bubble: "What is your level of experience?",
            render: (mount) => {
            mount.innerHTML = `
                <div class="card-grid">
                ${[
                    ["📊", "Complete beginner"],
                    ["📈", "Some experience, need a refresher"],
                    ["🏗️", "Confident in my skills"],
                    ["🏆", "Expert"],
                ]
                    .map(
                    ([emoji, label]) => `
                    <button class="card" type="button" aria-label="${label}">
                    <span class="emoji">${emoji}</span>
                    <span>${label}</span>
                    </button>`
                    )
                    .join("")}
                </div>
            `;
            },
        },
        // New step: time commitment per day
        {
            bubble: "Small steps, big progress. Let’s go!",
            render: (mount) => {
            mount.innerHTML = `
                <div class="choice-list" role="listbox" aria-label="Daily commitment">
                <button class="choice active" type="button" role="option" aria-selected="true">
                    <span class="label">5 min per day</span>
                    <span class="tag">Easygoing</span>
                </button>
                <button class="choice" type="button" role="option" aria-selected="false">
                    <span class="label">15 min per day</span>
                    <span class="tag">Standard</span>
                </button>
                <button class="choice" type="button" role="option" aria-selected="false">
                    <span class="label">30 min per day</span>
                    <span class="tag">Committed</span>
                </button>
                <button class="choice" type="button" role="option" aria-selected="false">
                    <span class="label">60 min per day</span>
                    <span class="tag">Immersive</span>
                </button>
                </div>
            `;

            // Toggle active selection like the screenshot
            const list = mount.querySelector(".choice-list");
            const choices = list.querySelectorAll(".choice");
            choices.forEach((btn) => {
                btn.addEventListener("click", () => {
                choices.forEach((c) => {
                    c.classList.remove("active");
                    c.setAttribute("aria-selected", "false");
                });
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");
                });
            });
            },
        },
        // New step: feature highlights
        {
            bubble: "Ready for an exciting journey?",
            render: (mount) => {
            mount.innerHTML = `
                <div class="feature-list">
                <div class="feature">
                    <div class="emoji">🧠</div>
                    <div>
                    <h4>Improve your brain</h4>
                    <p>10,000+ fun coding puzzles</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="emoji">🧑‍💻</div>
                    <div>
                    <h4>Learn new things</h4>
                    <p>5,000+ programming lessons</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="emoji">⌚</div>
                    <div>
                    <h4>Make learning stick</h4>
                    <p>Smart notifications, bite-sized lessons and more</p>
                    </div>
                </div>
                </div>
            `;
            },
        },
        ];

        const bubbleEl = document.getElementById("bubble");
        const contentEl = document.getElementById("content");
        const progressFill = document.getElementById("progressFill");
        const continueBtn = document.getElementById("continueBtn");

        let stepIndex = 0;

        function setProgress(index) {
        const pct = Math.round(((index + 1) / steps.length) * 100);
        progressFill.style.width = `${pct}%`;
        }

        function renderStep(index, withFade = false) {
        const { bubble, render } = steps[index];

        if (!withFade) {
            bubbleEl.textContent = bubble;
            render(contentEl);
            setProgress(index);
            continueBtn.textContent = index === steps.length - 1 ? "Finish" : "Continue";
            return;
        }

        // Fade out, swap content, fade in
        continueBtn.disabled = true;
        bubbleEl.classList.add("fade-out");
        contentEl.classList.add("fade-out");

        const onOut = () => {
            bubbleEl.removeEventListener("transitionend", onOut);
            // Swap
            bubbleEl.textContent = bubble;
            render(contentEl);
            setProgress(index);

            // Small frame delay to let DOM paint before fading back in
            requestAnimationFrame(() => {
            bubbleEl.classList.remove("fade-out");
            contentEl.classList.remove("fade-out");
            });
        };

        const onIn = (e) => {
            if (e.propertyName !== "opacity") return;
            bubbleEl.removeEventListener("transitionend", onIn);
            contentEl.removeEventListener("transitionend", onIn);
            continueBtn.disabled = false;
            continueBtn.textContent = index === steps.length - 1 ? "Finish" : "Continue";
        };

        bubbleEl.addEventListener("transitionend", onOut, { once: true });
        bubbleEl.addEventListener("transitionend", onIn);
        contentEl.addEventListener("transitionend", onIn);
        }

        continueBtn.addEventListener("click", () => {
        if (stepIndex < steps.length - 1) {
            stepIndex += 1;
            renderStep(stepIndex, true);
        } else {
            // End-of-flow behavior
            continueBtn.disabled = true;
            renderStep(stepIndex, true);
            setTimeout(() => {
            bubbleEl.textContent = "You’re all set!";
            contentEl.innerHTML = "";
            }, 210);
        }
        });

        // Initial render
        renderStep(stepIndex);
    </script>
  </body>
</html>