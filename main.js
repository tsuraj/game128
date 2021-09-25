import grid from './game/logic.js';

grid.init();
document.addEventListener("keyup", function(e) {
    let direction = null;
    switch(e.keyCode) {
        case 37:
            direction  = "LEFT";
            break;
        case 38:
            direction = "UP";
            break;
        case 39:
            direction = "RIGHT";
            break;
        case 40:
            direction = "DOWN";
            break;
    }

    if(direction !== null) {
        grid.slide(direction);
    }

    return false;
});