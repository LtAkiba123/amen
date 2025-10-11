<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codebuddy</title>
    <meta name="color-scheme" content="dark light">
    <style>
        :root{
            --bg:#0f1116;
            --text:#e6edf3;
            --muted:#9aa7b2;
            --primary:#1f8fff;
            --primary-600:#1678db;
            --outline:#2a2f3a;
        }
        *{box-sizing:border-box}
        html,body{height:100%}
        body{
            margin:0;
            font-family: "Segoe UI", Inter, system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            color:var(--text);
            background:radial-gradient(1200px 800px at 10% 20%, #0d1320 0%, var(--bg) 55%);
            background-color:var(--bg);
        }
        a{ color:inherit; text-decoration:none; }

        /* Header brand like the reference */
        header{ border-bottom:1px solid var(--outline); }
        .MainTopBar_container{
            max-width:1200px; margin:0 auto; padding:18px 20px;
            display:flex; align-items:center; justify-content:space-between;
        }
        .MainTopBar_container h1{
            display:flex; align-items:center; gap:.6rem; margin:0;
            font-size:24px; font-weight:700; letter-spacing:.5px; color:var(--primary-600);
        }
        

        
        .Main_container{
            max-width:1200px; margin:0 auto; padding:40px 20px 80px; display:grid; gap:18px;
            text-align:center;
        }
        .Main_titleContainer h1{
            margin:0; font-size:clamp(32px, 4.2vw, 48px); line-height:1.15; letter-spacing:.2px;
            text-shadow:0 1px 0 rgba(0,0,0,.25);
        }
        .Main_underTextSection{ display:flex; gap:14px; flex-wrap:wrap; justify-content:center; margin-top:8px; }
        .GetStarted_container a, .Login_container a{
            display:inline-flex; align-items:center; justify-content:center;
            padding:14px 22px; border-radius:12px; font-weight:700; letter-spacing:.2px;
            border:1px solid transparent; text-transform:uppercase;
        }
        .GetStarted_container a{ background:var(--primary); color:#fff; box-shadow:0 8px 20px rgba(31,143,255,.25); }
        .GetStarted_container a:hover{ background:var(--primary-600); transform:translateY(-1px); }
        .Login_container a{ background:transparent; color:var(--text); border-color:var(--outline); }
        .Login_container a:hover{ background:#0e1320; border-color:#2e3542; }
    </style>

</head>
<body>
    <header>
        <div class="MainTopBar_container">
            <h1>Codebuddy</h1>
        </div>
    </header>
    <div class="Main_container">
        <div class="Main_titleContainer">
            <h1>The free, fun and effective way to learn to code!</h1>
        </div>
        <div class="Main_underTextSection">
            <div class= "GetStarted_container">
                <a href="onboard.php">GET STARTED</a>
            </div>
            <div class="Login_container">
                <a href="login.php">I ALREADY HAVE AN ACCOUNT</a>
            </div>

        </div>
    </div>
</body>
</html>
<?php
?>
