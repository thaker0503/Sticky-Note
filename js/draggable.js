window.onload = addListeners;

function addListeners() {
    document.getElementById(id).addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown() {
    window.addEventListener('mousemove', divMove, true);
}

export function divMove(e, id) {
    debugger;
    var div = document.getElementById(id);
    div.style.position = 'absolute';
    div.style.top = e.clientY + 'px';
    div.style.left = e.clientX + 'px';
    
}​