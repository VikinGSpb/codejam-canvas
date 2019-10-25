let button1 = document.querySelector('#fourx');
let button2 = document.querySelector('#thirtytwox');
let button3 = document.querySelector('#img');
let canvas = document.querySelector('#canvas');

function draw(arr) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        arr.forEach((row, i) => {
            row.forEach((column, j) => {
                ctx.fillStyle = "#" + column;
                ctx.fillRect(j * 128, i * 128, (j + 1) * 128, (i + 1) * 128);
            })
        })
    }
}

button1.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json');
    xhr.responseType = 'json';
    xhr.send();
    let arr = [];
    xhr.onload = () => {
        arr = xhr.response;
        draw(arr);
        alert(arr);
    }
})
