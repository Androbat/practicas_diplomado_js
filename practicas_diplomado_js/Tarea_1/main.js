let colors = ['#CCFFCC', ' #17e5ec', ' #17b2ec', ' #85ec17'];
let button = document.getElementById('button');

button.addEventListener('click', function(){
    console.log("It's working.");
    
    // select a ramdom color from color
    // check this
    let selectRamdomColor = colors[Math.floor(Math.random()) * colors.length];
    
    let setNewcolor = document.getElementById('body');

    setNewcolor.style.background = selectRamdomColor;
});
