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
                ctx.fillRect(j * (512 / arr.length), i * (512 / arr.length), (j + 1) * (512 / arr.length), (i + 1) * (512 / arr.length));
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
                ctx.fillRect(j * (512 / arr.length), i * (512 / arr.length), (j + 1) * (512 / arr.length), (i + 1) * (512 / arr.length));
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
    }
})

button3.addEventListener('click', () => {
    let image = document.createElement('img');
    image.setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png');
    image.onload = () => {
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, 512, 512);
        }
    }
})
