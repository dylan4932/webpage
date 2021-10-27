const ele = document.getElementById('resizable');
let x = 0;
let y = 0;

// The dimension of the element
let w = 0;

// Handle the mousedown event
// that's triggered when user drags the resizer
const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;

    // Calculate the dimension of element
    const styles = window.getComputedStyle(ele);
    w = parseInt(styles.width, 10);


    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    //const dy = e.clientY - y;

    // Adjust the dimension of element
    ele.style.width = `${w + dx}px`;
    //ele.style.height = `${h + dy}px`;
};


const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

// Query all resizers
const resizers = ele.querySelectorAll('.resizer');

// Loop over them
[].forEach.call(resizers, function (resizer) {
    resizer.addEventListener('mousedown', mouseDownHandler);
});

// resizable 2
const ele2 = document.getElementById('resizable2');
let w2 = 0;

const mouseDownHandler2 = function (e) {
    x = e.clientX;

    const styles = window.getComputedStyle(ele2);
    w2 = parseInt(styles.width, 10);

    document.addEventListener('mousemove', mouseMoveHandler2);
    document.addEventListener('mouseup', mouseUpHandler2);
};

const mouseMoveHandler2 = function (e) {
    const dx = e.clientX - x;

    ele2.style.width = `${w2 + dx}px`;
};

const mouseUpHandler2 = function () {
    document.removeEventListener('mousemove', mouseMoveHandler2);
    document.removeEventListener('mouseup', mouseUpHandler2);
};

const resizers2 = ele2.querySelectorAll('.resizer');

[].forEach.call(resizers2, function (resizer) {
    resizer.addEventListener('mousedown', mouseDownHandler2);
});

//
const ele3 = document.getElementById('resizable3');
let w3 = 0;

const mouseDownHandler3 = function (e) {
    x = e.clientX;

    const styles = window.getComputedStyle(ele3);
    w3 = parseInt(styles.width, 10);

    document.addEventListener('mousemove', mouseMoveHandler3);
    document.addEventListener('mouseup', mouseUpHandler3);
};

const mouseMoveHandler3 = function (e) {
    const dx = e.clientX - x;

    ele3.style.width = `${w3 + dx}px`;
};

const mouseUpHandler3 = function () {
    document.removeEventListener('mousemove', mouseMoveHandler3);
    document.removeEventListener('mouseup', mouseUpHandler3);
};

const resizers3 = ele3.querySelectorAll('.resizer');

[].forEach.call(resizers3, function (resizer) {
    resizer.addEventListener('mousedown', mouseDownHandler3);
});


//
const ele4 = document.getElementById('resizable4');
let w4 = 0;

const mouseDownHandler4 = function (e) {
    x = e.clientX;

    const styles = window.getComputedStyle(ele4);
    w4 = parseInt(styles.width, 10);

    document.addEventListener('mousemove', mouseMoveHandler4);
    document.addEventListener('mouseup', mouseUpHandler4);
};

const mouseMoveHandler4 = function (e) {
    const dx = e.clientX - x;

    ele4.style.width = `${w4 + dx}px`;
};

const mouseUpHandler4 = function () {
    document.removeEventListener('mousemove', mouseMoveHandler4);
    document.removeEventListener('mouseup', mouseUpHandler4);
};

const resizers4 = ele4.querySelectorAll('.resizer');

[].forEach.call(resizers4, function (resizer) {
    resizer.addEventListener('mousedown', mouseDownHandler4);
});


const ele5 = document.getElementById('resizable5');
let w5 = 0;

const mouseDownHandler5 = function (e) {
    x = e.clientX;

    const styles = window.getComputedStyle(ele5);
    w5 = parseInt(styles.width, 10);

    document.addEventListener('mousemove', mouseMoveHandler5);
    document.addEventListener('mouseup', mouseUpHandler5);
};

const mouseMoveHandler5 = function (e) {
    const dx = e.clientX - x;

    ele5.style.width = `${w5 + dx}px`;
};

const mouseUpHandler5 = function () {
    document.removeEventListener('mousemove', mouseMoveHandler5);
    document.removeEventListener('mouseup', mouseUpHandler5);
};

const resizers5 = ele5.querySelectorAll('.resizer');

[].forEach.call(resizers5, function (resizer) {
    resizer.addEventListener('mousedown', mouseDownHandler5);
});


function article(){
    const container = document.getElementById('display_container')
    if (container.childElementCount > 0){
        container.removeChild(container.lastChild)
    }

    const content = document.createElement('img')
    content.className = 'display_chart'
    content.src = './pic/期刊分析.png';

    container.appendChild(content)
}

function design() {
    const container = document.getElementById('display_container')
    if (container.childElementCount > 0){
        container.removeChild(container.lastChild)
    }

    const content = document.createElement('img')
    content.className = 'display_chart'
    content.src = './pic/研究设计分析.png';

    container.appendChild(content)
}

function result() {
    const container = document.getElementById('display_container')
    if (container.childElementCount > 0){
        container.removeChild(container.lastChild)
    }

    const content = document.createElement('img')
    content.className = 'display_chart'
    content.src = './pic/结论分析.png';

    container.appendChild(content)
}