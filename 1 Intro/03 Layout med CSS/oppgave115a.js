updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="page">
        <div class="header">
            <span>header</span>
            <h3>Oppgave 115 A</h3>
            <div></div>
        </div>
        <div class="meny">meny</div>

        <div class="main">
        
            <div id="app2"></div>

            <hr>
            
            <div id="app3"></div>
            
        </div>
        
        <div class="footer">footer</div>
    </div>
    
    `;
}
