const button3 = document.querySelector('#img');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


function draw(arr) {
    if (canvas && canvas.getContext) {
        arr.forEach((row, rowIdx) => {
            row.forEach((column, colIdx) => {
                if(column.length === 6) {
                    ctx.fillStyle = "#" + column;
                } else {
                    ctx.fillStyle = "rgba(" + column + ")";
                }
                ctx.fillRect(colIdx * 512 / arr.length, rowIdx * 512 / arr.length, (colIdx + 1) * 512 / arr.length, (rowIdx + 1) * 512 / arr.length);
            })
        })
    } else throw new Error('Canvas Error');
}


for(let button of document.querySelectorAll('[canvasButton]')) {
    button.addEventListener('click', () => {
        let xhr = new XMLHttpRequest();
        let type = button.getAttribute('canvasButton');
        xhr.open('GET', 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/' + type + '.json');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () => {
            let arr = [];
            arr = xhr.response;
            draw(arr);
        }
        xhr.onerror = () => {
            throw new Error('Data Error');
        }
    });
}


button3.addEventListener('click', () => {
    let image = document.createElement('img');
    image.setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png');
    image.onload = () => {
        if (canvas && canvas.getContext) {
            ctx.drawImage(image, 0, 0, 512, 512);
        } else throw new Error('Canvas Error');
    }
    image.onerror = () => { 
        throw new Error('Data Error');
    }
});