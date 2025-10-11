
function createStackedCircle(id, redirectUrl, y = 0, x = 0) {
    return `
        <div 
            class="stacked-circles" 
            id="${id}" 
            style="cursor:pointer; margin-top: ${y}px; margin-left: ${x}px;"
            onclick="window.location.href='${redirectUrl}'"
        >
            <div class="circle base"></div>
            <div class="circle middle"></div>
            <div class="circle top"></div>
        </div>
    `;
}

window.journeyContent = 
`   
    
    <div class="stacked-circles-container">
     <div class="level-card">   
        <div class="level-label">
        <p>C++ Introduction</p>
        </div>
    </div>
        ${createStackedCircle("btn1", "puzzle-levels/puzzle-level-1/q1.php", 100, -150)}
        ${createStackedCircle("btn2", "https://youtube.com", 100, 150)}
        ${createStackedCircle("btn3", "https://openai.com", 100, -150)}
        <div class="level-card" style="margin-top: 200px;">   
            <div class="level-label">
                <p>Variables</p>
            </div>
        </div>
        ${createStackedCircle("btn4", "https://openai.com", 100, 150)}
        ${createStackedCircle("btn5", "https://openai.com", 100, -150)}
        ${createStackedCircle("btn6", "https://openai.com", 100, 150)}
        <div class="level-card" style="margin-top: 200px;">   
            <div class="level-label">
                <p>Operators</p>
            </div>
        </div>
        ${createStackedCircle("btn7", "https://openai.com", 100, -150)}
        ${createStackedCircle("btn8", "https://openai.com", 100, 150)}
        <div class="level-card" style="margin-top: 200px;">   
            <div class="level-label">
                <p>If-Else Statements</p>
            </div>
        </div>
    ${createStackedCircle("btn9", "https://openai.com", 100, -150)}
    ${createStackedCircle("btn10", "https://openai.com", 100, 150)}
    ${createStackedCircle("btn11", "https://openai.com", 100, -150)} 
    ${createStackedCircle("btn12", "https://openai.com", 100, 150)} 
    ${createStackedCircle("btn13", "https://openai.com", 100, -150)}
    ${createStackedCircle("btn14", "https://openai.com", 100, 150)} 
    ${createStackedCircle("btn15", "https://openai.com", 100, -150)}
    ${createStackedCircle("btn16", "https://openai.com", 100, 150)}
    ${createStackedCircle("btn17", "https://openai.com", 100, -150)}
    </div>
`;