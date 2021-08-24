function addNo(){
    var evt = window.event || evt;
    const checked = document.getElementById('opt_checked')
    if(checked){
        checked.className = "options"
        checked.id = ""
    }
    evt.target.id = "opt_checked"
    evt.target.className = "options checked"

    const container = document.getElementById('filter_container')
    if(container.childElementCount!== 3){
        container.removeChild(container.lastElementChild)
        container.removeChild(container.lastElementChild)
    }
}

function addRow(){
    var evt = window.event || evt;

    const checked = document.getElementById('opt_checked')
    if(checked){
        checked.className = "options"
        checked.id = ""
    }
    evt.target.id = "opt_checked"
    evt.target.className = "options checked"

    const container = document.getElementById('filter_container')
    console.log(container.childElementCount)
    if(container.childElementCount === 3){
        const new_filter = document.createElement('div')
        new_filter.className = "filter_content"

        const new_filter_title = document.createElement('div')
        const title_txt = document.createTextNode('选择第二个搜索维度')
        new_filter_title.className = "filter_title"
        new_filter_title.append(title_txt)

        const new_demension = document.createElement('select')
        new_demension.id = "demension2"
        const opt1 = document.createElement('option')
        opt1_txt = document.createTextNode('疾病')
        opt1.value = '疾病'
        opt1.append(opt1_txt)
        const opt2 = document.createElement('option')
        opt2_txt = document.createTextNode('人群')
        opt2.append(opt2_txt)
        const opt3 = document.createElement('option')
        opt3_txt = document.createTextNode('X （暴露/干预措施）')
        opt3.append(opt3_txt)
        const opt4 = document.createElement('option')
        opt4_txt = document.createTextNode('Y （结局）')
        opt4.append(opt4_txt)

        new_demension.appendChild(opt1)
        new_demension.appendChild(opt2)
        new_demension.appendChild(opt3)
        new_demension.appendChild(opt4)

        new_filter.appendChild(new_filter_title)
        new_filter.appendChild(new_demension)

        const new_key = document.createElement('div')
        new_key.className = "key_content"

        const new_key_title = document.createElement('div')
        const key_txt = document.createTextNode('输入第二个关键词')
        new_key_title.className = 'key_title'
        new_key_title.append(key_txt)

        const input_box = document.createElement('input')
        input_box.setAttribute('type', 'text')
        input_box.className = "key_input"
        input_box.id = "key_input2"

        new_key.appendChild(new_key_title)
        new_key.appendChild(input_box)

        container.appendChild(new_filter)
        container.appendChild(new_key)
    }
    document.getElementById("key_input1").value = ""
    document.getElementById("key_input2").value = ""
}

function add(){
    const container = document.getElementById('filter_container')
    const select1 = document.getElementById('demension1')
    const value1 = select1.options[select1.selectedIndex].value;

    const input1 = document.getElementById('key_input1')
    input1.style.border = ""
    const key1 = input1.value

    if(key1 === ""){
        input1.style.border = '2px solid red'
        return;
    }

    const output = key1 + "(" + value1+")";
    var output2 = ""
    const search_centent = document.getElementById('search_content')

    const option = document.getElementById('opt_checked')

    if(container.childElementCount > 3){
        const select2 = document.getElementById('demension2')
        const value2 = select2.options[select2.selectedIndex].value;

        const input2 = document.getElementById('key_input2')
        const key2 = input2.value
        output2 = key2 +' (' + value2 + ")" 

        if(key2 === ""){
            input2.style.border = '2px solid red'
            return;
        }
        
        const search_txt = document.createTextNode(output + " " + option.value+ " " + output2+"; ")
        search_centent.append(search_txt)

    } else if (option && option.value === "NO"){
        const search_txt = document.createTextNode("NO " + output + "; ")
        search_centent.append(search_txt)
    } else{
        
        const search_txt = document.createTextNode(output + "; ")
        search_centent.append(search_txt)
    }

    const label_container = document.getElementById('label_content')

    if(label_container.childElementCount == 1){
        const btn_container = document.createElement('div')
        btn_container.className = 'clear_btn'
        const x_btn = document.createElement("i")
        x_btn.className = 'bx bx-x'
        btn_container.setAttribute('onclick', 'clear_btn()')

        const btn1_container = document.createElement('div')
        btn1_container.className = 'save_btn'
        const x_save = document.createElement("i")
        x_save.className = 'bx bx-save'

        btn_container.appendChild(x_btn)
        btn1_container.appendChild(x_save)
        label_container.appendChild(btn_container)
        label_container.appendChild(btn1_container)
    }

    input1.value = ""
    if(!input2){
        input2.value = ""
    }
}

// function search() {

//     const 
// }

function clear_btn() {
    const container = document.getElementById('label_content')
    console.log(container)
    container.removeChild(container.lastElementChild)
    container.removeChild(container.lastElementChild)

    const search_label = document.getElementById('search_content')
    search_label.innerText = ''
    // const content = document.getElementById('search_content')
    // content.removeChild(content.lastElementChild)
}
