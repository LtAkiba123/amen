<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Register • Codebuddy</title>
	<meta name="color-scheme" content="dark" />
	<style>
		:root{
			--bg-start:#0b5f7e;   /* left deep teal */
			--bg-end:#0f84a7;     /* right lighter teal */
			--card:#11141b;       /* card background */
			--text:#e6edf3;       /* primary text */
			--muted:#a7b3bd;      /* secondary text */
			--line:#2a2f3a;       /* borders */
			--primary:#1f8fff;    /* blue button */
			--primary-600:#1678db;/* blue hover */
			--facebook:#1877F2;
		}
		*{box-sizing:border-box}
		html,body{height:100%}
		body{
			margin:0;
			font-family:"Segoe UI", Inter, system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
			color:var(--text);
			background:radial-gradient(1200px 800px at 50% 10%, rgba(255,255,255,.05), transparent 65%), linear-gradient(100deg, var(--bg-start), var(--bg-end));
			min-height:100dvh;
		}
		a{color:inherit;text-decoration:none}

		.page{
			max-width:1200px; margin:0 auto; padding:48px 20px;
			display:grid; grid-template-columns: 460px 1fr; gap:56px; align-items:center;
		}
		@media (max-width: 980px){ .page{ grid-template-columns: 1fr; gap:36px; padding:32px 16px; } }

		/* Card */
		.card{
			background:var(--card); border:1px solid rgba(0,0,0,.35); border-color:var(--line);
			border-radius:16px; box-shadow:0 18px 60px rgba(0,0,0,.45);
			overflow:hidden; width:100%; max-width:460px; margin-inline:auto;
		}
		.card-inner{ padding:20px 24px 24px; }

		.tabs{ display:flex; align-items:center; justify-content:space-between; gap:12px; padding:8px 6px 0; }
		.tab{ flex:1 1 0; background:none; border:none; color:var(--muted); font-weight:700; padding:12px 8px; cursor:pointer; font-size:18px; }
		.tab.active{ color:var(--text); }
		.tab-underline{ height:4px; background:transparent; border-radius:999px; position:relative; }
		.tab-underline .bar{ position:absolute; left:50%; transform:translateX(-50%); top:0; height:4px; width:44%; background:var(--primary); border-radius:999px; transition:left .25s ease, width .25s ease; }
		.u-login{ left:25%; width:38%; }
		.u-register{ left:75%; width:38%; }

		.field{ position:relative; margin-top:18px; }
		.field input{
			width:100%; padding:14px 14px 14px 44px; border-radius:12px; background:#0e1218; border:1px solid #1c222c;
			color:var(--text); outline:none; font-size:15px; transition:border-color .2s ease, box-shadow .2s ease;
		}
		.field input::placeholder{ color:#7f8b96; }
		.field input:focus{ border-color:#2f3a48; box-shadow:0 0 0 3px rgba(31,143,255,.15); }
		.icon{ position:absolute; inset:0 auto 0 12px; display:grid; place-items:center; width:22px; color:#7f8b96; }

		.primary-btn{
			width:100%; margin-top:18px; padding:14px 18px; border-radius:12px; border:1px solid transparent; background:var(--primary); color:#fff; font-weight:800; letter-spacing:.2px; cursor:pointer; box-shadow:0 10px 22px rgba(31,143,255,.28); transition:background .2s ease, transform .15s ease;
			text-transform:uppercase;
		}
		.primary-btn:hover{ background:var(--primary-600); transform:translateY(-1px) }

		.hr{
			display:flex; align-items:center; gap:12px; color:var(--muted); font-weight:600; justify-content:center; margin:18px 0 14px;
		}
		.hr::before,.hr::after{ content:""; height:1px; background:#22303b; flex:1; border-radius:999px }

		.socials{ display:flex; gap:14px; }
		.social-btn{ flex:1 1 0; display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; border-radius:12px; border:1px solid #1c222c; background:#0e1218; color:#d5dbe1; font-weight:800; }
		.social-btn:hover{ border-color:#2d3946; background:#0f141b; }
		.fb{ background:rgba(24,119,242,.08); border-color:rgba(24,119,242,.25); color:#cfe2ff; }
		.fb:hover{ background:rgba(24,119,242,.12) }

		.terms{ color:#8d98a3; font-size:12px; margin-top:16px; text-align:center; }
		.terms a{ color:#cfe2ff; text-decoration:underline; text-underline-offset:2px }

		/* Right hero */
		.hero{ color:#eaf2f9; }
		.hero h1{ font-size: clamp(34px, 6vw, 60px); line-height:1.05; margin:0 0 18px; text-shadow:0 2px 12px rgba(0,0,0,.25); }
		.bullets{ display:grid; gap:14px; margin-top:16px; }
		.bullet{ display:flex; align-items:center; gap:14px; font-size:18px; color:#eaf2f9; }
		.bullet .bi{ width:26px; height:26px; display:inline-grid; place-items:center; color:#cfe2ff; }

		@media (max-width: 980px){ .hero{ text-align:center; } .bullets{ justify-items:center; } }
	</style>
</head>
<body>
	<div class="page">
		<!-- Left: Auth card -->
		<section class="card" aria-label="Register or Log in">
			<div class="card-inner">
				<div class="tabs" role="tablist">
					<button class="tab" id="tab-login" role="tab" aria-controls="panel-login">Log in</button>
					<button class="tab active" id="tab-register" role="tab" aria-controls="panel-register" aria-selected="true">Register</button>
				</div>
				<div class="tab-underline" aria-hidden="true"><span class="bar u-register" id="tabBar"></span></div>

				<div id="panel-login" role="tabpanel" hidden>
					<div class="field">
						<span class="icon" aria-hidden="true">
							<!-- envelope icon -->
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Z" stroke="#7f8b96" stroke-width="1.6"/><path d="M4 7l8 6 8-6" stroke="#7f8b96" stroke-width="1.6" stroke-linecap="round"/></svg>
						</span>
						<input type="email" placeholder="Email Address" autocomplete="email" />
					</div>
					<div class="field">
						<span class="icon" aria-hidden="true">
							<!-- key icon -->
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="#7f8b96" stroke-width="1.6"/><path d="M13 13l6 6M16 16h3" stroke="#7f8b96" stroke-width="1.6" stroke-linecap="round"/></svg>
						</span>
						<input type="password" placeholder="Password" autocomplete="current-password" />
					</div>
					<button class="primary-btn" type="button">LOG IN</button>
				</div>

				<div id="panel-register" role="tabpanel">
					<div class="field">
						<span class="icon" aria-hidden="true">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Z" stroke="#7f8b96" stroke-width="1.6"/><path d="M4 7l8 6 8-6" stroke="#7f8b96" stroke-width="1.6" stroke-linecap="round"/></svg>
						</span>
						<input type="email" placeholder="Email Address" autocomplete="email" />
					</div>
					<div class="field">
						<span class="icon" aria-hidden="true">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="#7f8b96" stroke-width="1.6"/><path d="M13 13l6 6M16 16h3" stroke="#7f8b96" stroke-width="1.6" stroke-linecap="round"/></svg>
						</span>
						<input type="password" placeholder="Password" autocomplete="new-password" />
					</div>
					<button class="primary-btn" type="button">CREATE ACCOUNT</button>
				</div>

				<div class="hr">OR</div>

				<div class="socials">
					<a class="social-btn fb" href="#" aria-label="Continue with Facebook">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 12.06C22 6.503 17.523 2 12 2S2 6.502 2 12.06C2 17.08 5.657 21.213 10.438 22v-7.03H7.898V12.06h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.47h-1.261c-1.243 0-1.63.777-1.63 1.574v1.914h2.773l-.443 2.91h-2.33V22C18.343 21.213 22 17.08 22 12.06Z"/></svg>
						FACEBOOK
					</a>
					<a class="social-btn" href="#" aria-label="Continue with Google">
						<svg width="20" height="20" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#EA4335" d="M533.5 278.4a320 320 0 0 0-5.1-57.2H272.1v108.2h146.9a125.8 125.8 0 0 1-54.5 82.6l88 68.2C500 436.6 533.5 364.8 533.5 278.4z"/><path fill="#34A853" d="M272.1 544.3c73.5 0 135.2-24.3 180.2-66.1l-88-68.2c-24.5 16.6-55.9 26.4-92.2 26.4-70.8 0-130.8-47.7-152.4-112l-91.5 70.6c41 81.4 125.4 149.3 243.9 149.3z"/><path fill="#4A90E2" d="M119.7 324.4a168.3 168.3 0 0 1 0-104.6l-91.5-70.6C-14.1 193.2-14.1 351 46.9 440.4l72.8-116z"/><path fill="#FBBC05" d="M272.1 107.7c39.9 0 75.7 13.7 103.8 40.6l77.8-77.8C407.2 25.4 345.6 0 272.1 0 153.6 0 69.2 67.9 28.2 149.3l91.5 70.6c21.6-64.2 81.6-112.2 152.4-112.2z"/></svg>
						GOOGLE
					</a>
				</div>

				<p class="terms">By continuing you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
			</div>
		</section>

		<!-- Right: Headline and bullets -->
		<section class="hero">
			<h1>Unlock your<br />Coding Journey</h1>
			<div class="bullets" aria-label="Key benefits">
				<div class="bullet"><span class="bi" aria-hidden="true">🔧</span> Practice-Driven</div>
				<div class="bullet"><span class="bi" aria-hidden="true">∞</span> Unlimited</div>
				<div class="bullet"><span class="bi" aria-hidden="true">🎮</span> Fun</div>
				<div class="bullet"><span class="bi" aria-hidden="true">👤</span> Personalized</div>
				<div class="bullet"><span class="bi" aria-hidden="true">🤖</span> AI Enhanced</div>
			</div>
		</section>
	</div>

	<script>
		// Simple tab switcher to mirror the screenshot interaction
		const tabLogin = document.getElementById('tab-login');
		const tabRegister = document.getElementById('tab-register');
		const panelLogin = document.getElementById('panel-login');
		const panelRegister = document.getElementById('panel-register');
		const bar = document.getElementById('tabBar');

		function activate(which){
			const isLogin = which === 'login';
			tabLogin.classList.toggle('active', isLogin);
			tabRegister.classList.toggle('active', !isLogin);
			panelLogin.hidden = !isLogin;
			panelRegister.hidden = isLogin;
			bar.className = 'bar ' + (isLogin ? 'u-login' : 'u-register');
		}
		tabLogin.addEventListener('click', () => activate('login'));
		tabRegister.addEventListener('click', () => activate('register'));
	</script>
</body>
</html>
