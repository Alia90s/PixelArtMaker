//defining global variables
const { form, pixelcanvas, colorPicker, rows, cells } = newFunction();


//adding event listeners
form.addEventListener('submit' , function(e) {
    pixelcanvas.innerHTML = '';
    e.preventDefault();
    makeGrid();
});
//adding click event to all cells
pixelcanvas.addEventListener( 'click' , function(e){
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = colorPicker.value;
    }
})


function newFunction() {
    const pixelcanvas = document.getElementById("pixelCanvas");
    const rows = document.getElementById('inputHeight');
    const cells = document.getElementById('inputWidth');
    const colorPicker = document.getElementById('colorPicker');
    const form = document.getElementById('sizePicker');
    return { form, pixelcanvas, colorPicker, rows, cells };
}

// loop over each row to draw grid
function makeGrid() {
    for (let i = 0; i < rows.value; i++) {
        const row = pixelCanvas.insertRow(0);
        for (let j = 0; j < cells.value; j++) {
            row.insertCell(0);
        }
    }
}
