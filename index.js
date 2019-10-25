let button1 = document.querySelector('#fourx');
let button2 = document.querySelector('#thirtytwox');
let button3 = document.querySelector('#img');
let canvas = document.querySelector('#canvas');

function draw1(arr) {
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

function draw2(arr) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        arr.forEach((row, i) => {
            row.forEach((column, j) => {
                ctx.fillStyle = "rgba(" + column + ")";
                ctx.fillRect(j * 16, i * 16, (j + 1) * 16, (i + 1) * 16);
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
        draw1(arr);
        alert(arr);
    }
})

button2.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json');
    xhr.responseType = 'json';
    xhr.send();
    let arr = [];
    xhr.onload = () => {
        arr = xhr.response;
        draw2(arr);
        alert(arr);
    }
})
