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

function addRow() {
    const col1 = document.getElementById('resizable')
    const col2 = document.getElementById('resizable2')
    const col3 = document.getElementById('col3')
    const col4 = document.getElementById('col4')
    const col5 = document.getElementById('col5')
    const col6 = document.getElementById('col6')
    const col7 = document.getElementById('col7')
    const col8 = document.getElementById('col8')
    const col9 = document.getElementById('resizable3')
    const col10 = document.getElementById('col10')
    const col11 = document.getElementById('col11')

    const container1 = document.createElement('div')
    container1.className = 're_content'
    const txt1 = document.createElement('input')
    txt1.type = 'text'
    container1.appendChild(txt1)

    const container2 = document.createElement('div')
    container2.className = 're_content'
    const txt2 = document.createElement('input')
    txt2.type = 'text'
    container2.appendChild(txt2)

    const container3 = document.createElement('div')
    container3.className = 're_content'
    const txt3 = document.createElement('input')
    txt3.type = 'month'
    container3.appendChild(txt3)

    const container4 = document.createElement('div')
    container4.className = 're_content'
    const txt4 = document.createElement('input')
    txt4.type = 'text'
    container4.appendChild(txt4)

    const container5 = document.createElement('div')
    container5.className = 're_content'
    const txt5 = document.createElement('input')
    txt5.type = 'text'
    container5.appendChild(txt5)

    const container6 = document.createElement('div')
    container6.className = 're_content'
    const select = document.createElement('select')
    select.id = 'study_type'
    select.name = 'type'
    select.style = 'border: none'
    const opt1 = document.createElement('option')
    const optxt1 = document.createTextNode('研究类型')
    opt1.append(optxt1)
    const opt2 = document.createElement('option')
    opt2.value = 'RCT'
    const optxt2 = document.createTextNode('RCT')
    opt2.append(optxt2)
    const opt3 = document.createElement('option')
    opt3.value = '横断面研究'
    const optxt3 = document.createTextNode('横断面研究')
    opt3.append(optxt3)
    const opt4 = document.createElement('option')
    opt4.value = '队列研究'
    const optxt4 = document.createTextNode('队列研究')
    opt4.append(optxt4)
    const opt5 = document.createElement('option')
    opt5.value = '病例对照研究'
    const optxt5 = document.createTextNode('病例对照研究')
    opt5.append(optxt5)
    const opt6 = document.createElement('option')
    opt6.value = '诊断实验'
    const optxt6 = document.createTextNode('诊断实验')
    opt6.append(optxt6)

    select.appendChild(opt1)
    select.appendChild(opt2)
    select.appendChild(opt3)
    select.appendChild(opt4)
    select.appendChild(opt5)
    select.appendChild(opt6)
    container6.appendChild(select)

    const container7 = document.createElement('div')
    container7.className = 're_content'
    const txt7 = document.createElement('input')
    txt7.type = 'text'
    container7.appendChild(txt7)

    const container8 = document.createElement('div')
    container8.className = 're_content'
    const txt8 = document.createElement('input')
    txt8.type = 'text'
    container8.appendChild(txt8)

    const container9 = document.createElement('div')
    container9.className = 're_content'
    const txt9 = document.createElement('input')
    txt9.type = 'text'
    container9.appendChild(txt9)

    const container10 = document.createElement('div')
    container10.className = 're_content'
    const Dselect = document.createElement('select')
    Dselect.id = 'result'
    Dselect.name = 'type'
    Dselect.style = 'border: none'
    const Dopt1 = document.createElement('option')
    const Doptxt1 = document.createTextNode('其他设计&方法')
    Dopt1.append(Doptxt1)
    const Dopt2 = document.createElement('option')
    Dopt2.value = '亚组分析'
    const Doptxt2 = document.createTextNode('亚组分析')
    Dopt2.append(Doptxt2)
    const Dopt3 = document.createElement('option')
    Dopt3.value = '分层分析'
    const Doptxt3 = document.createTextNode('分层分析')
    Dopt3.append(Doptxt3)
    const Dopt4 = document.createElement('option')
    Dopt4.value = '缺失值填补方法'
    const Doptxt4 = document.createTextNode('缺失值填补方法')
    Dopt4.append(Doptxt4)
    const Dopt5 = document.createElement('option')
    Dopt5.value = '敏感性分析'
    const Doptxt5 = document.createTextNode('敏感性分析')
    Dopt5.append(Doptxt5)
    const Dopt6 = document.createElement('option')
    Dopt6.value = '倾向性评分'
    const Doptxt6 = document.createTextNode('倾向性评分')
    Dopt6.append(Doptxt6)
    const Dopt7 = document.createElement('option')
    Dopt7.value = '工具变量'
    const Doptxt7 = document.createTextNode('工具变量')
    Dopt7.append(Doptxt7)
    const Dopt8 = document.createElement('option')
    Dopt8.value = '多因素模型分析'
    const Doptxt8 = document.createTextNode('多因素模型分析')
    Dopt8.append(Doptxt8)

    Dselect.appendChild(Dopt1)
    Dselect.appendChild(Dopt2)
    Dselect.appendChild(Dopt3)
    Dselect.appendChild(Dopt4)
    Dselect.appendChild(Dopt5)
    Dselect.appendChild(Dopt6)
    Dselect.appendChild(Dopt7)
    Dselect.appendChild(Dopt8)
    container10.appendChild(Dselect)

    const container11 = document.createElement('div')
    container11.className = 're_content'
    const Rselect = document.createElement('select')
    Rselect.id = 'result'
    Rselect.name = 'type'
    Rselect.style = 'border: none'
    const Ropt1 = document.createElement('option')
    const Roptxt1 = document.createTextNode('结论')
    Ropt1.append(Roptxt1)
    const Ropt2 = document.createElement('option')
    Ropt2.value = '与我一致'
    const Roptxt2 = document.createTextNode('与我一致')
    Ropt2.append(Roptxt2)
    const Ropt3 = document.createElement('option')
    Ropt3.value = '与我相左'
    const Roptxt3 = document.createTextNode('与我相左')
    Ropt3.append(Roptxt3)

    Rselect.appendChild(Ropt1)
    Rselect.appendChild(Ropt2)
    Rselect.appendChild(Ropt3)
    container11.appendChild(Rselect)

    col1.appendChild(container1)
    col2.appendChild(container2)
    col3.appendChild(container3)
    col4.appendChild(container4)
    col5.appendChild(container5)
    col6.appendChild(container6)
    col7.appendChild(container7)
    col8.appendChild(container8)
    col9.appendChild(container9)
    col10.appendChild(container10)
    col11.appendChild(container11)
}

function deleteRow(){
    const col1 = document.getElementById('resizable')
    const col2 = document.getElementById('resizable2')
    const col3 = document.getElementById('col3')
    const col4 = document.getElementById('col4')
    const col5 = document.getElementById('col5')
    const col6 = document.getElementById('col6')
    const col7 = document.getElementById('col7')
    const col8 = document.getElementById('col8')
    const col9 = document.getElementById('resizable3')
    const col10 = document.getElementById('col10')
    const col11 = document.getElementById('col11')

    if (col1.childElementCount > 3) {
        col1.removeChild(col1.lastElementChild)
        col2.removeChild(col2.lastElementChild)
        col3.removeChild(col3.lastElementChild)
        col4.removeChild(col4.lastElementChild)
        col5.removeChild(col5.lastElementChild)
        col6.removeChild(col6.lastElementChild)
        col7.removeChild(col7.lastElementChild)
        col8.removeChild(col8.lastElementChild)
        col9.removeChild(col9.lastElementChild)
        col10.removeChild(col10.lastElementChild)
        col11.removeChild(col11.lastElementChild)
    }
    
}