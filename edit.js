function edit(){

    var evt = window.event || evt;
    console.log(evt.target.innerText)
    
    if(evt.target.id.slice(7,13) === 'output'){
        const container = document.getElementById(evt.target.id.slice(0,6) + '_content')
        const information = evt.target.innerText

        container.removeChild(container.lastElementChild)

        const edit_container = document.createElement('textarea')
        edit_container.value = information
        edit_container.id = evt.target.id.slice(0,6) + '_textarea'

        const save_btn = document.createElement('button')
        const save_txt = document.createTextNode('保存')
        save_btn.id = evt.target.id.slice(0,6)+'_savebtn'
        save_btn.className = "output_savebtn"
        save_btn.append(save_txt)
        save_btn.setAttribute('onclick', 'save()')

        container.appendChild(edit_container)
        container.appendChild(save_btn)
    }
}

function save(){
    var evt = window.event || evt;

    const container = document.getElementById(evt.target.id.slice(0,6) + '_content')
    const input_box = document.getElementById(evt.target.id.slice(0,6) + '_textarea')

    const information = input_box.value

    container.removeChild(container.lastElementChild)
    container.removeChild(container.lastElementChild)

    const output = document.createElement('div')
    output.id = evt.target.id.slice(0,6)+"_output"
    const output_txt = document.createTextNode(information)
    output.append(output_txt)

    container.appendChild(output)
}

function edit1() {
    const sheet = document.getElementById('home_content')
    sheet.scrollTo(0,0)
}

function edit2() {
    const sheet = document.getElementById('home_content')
    sheet.scrollTo(0,802)
}



