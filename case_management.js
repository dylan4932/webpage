function addCase(){
    const case_con = document.getElementById('case_con')

    const my_case = document.createElement('div')
    my_case.className = 'mycase'
    my_case.id = 'case'+case_con.childElementCount

    const case_link = document.createElement('a')
    case_link.href ='#' // 这里从后端获取对应Case 的链接

    const case_des = document.createElement('div')
    case_des.className = 'case_description'
    case_des.id = my_case.id + '_description'

    const case_name = document.createElement('div')
    case_name.className = 'case_number'
    const name_p = document.createElement('p')
    name_p.id = my_case.id+'_name'
    const name_txt = document.createTextNode('我的新案例'+ case_con.childElementCount)
    name_p.append(name_txt)
    case_name.appendChild(name_p)

    const describe = document.createElement('div')
    describe.className = 'case_des'
    const des_p = document.createElement('p')
    des_p.id = my_case.id+'_info'
    const des_txt = document.createTextNode('我的新案例解释')
    des_p.append(des_txt)
    describe.appendChild(des_p)

    case_link.appendChild(case_name)
    case_link.appendChild(describe)
    case_des.appendChild(case_link)


    const function_con = document.createElement('div')
    function_con.className = "case_function"

    const function_icon1 = document.createElement('i')
    function_icon1.className = 'bx bx-edit-alt'
    function_icon1.setAttribute('onclick', 'editCase()')
    function_icon1.id = 'case'+case_con.childElementCount+'_icon1'

    const function_icon2 = document.createElement('i')
    function_icon2.className = 'bx bx-trash'
    function_icon2.setAttribute('onclick', 'deleteCase()')
    function_icon2.id = 'case'+case_con.childElementCount+'_icon2'

    function_con.appendChild(function_icon1)
    function_con.appendChild(function_icon2)

    my_case.appendChild(case_des)
    my_case.appendChild(function_con)

    case_con.appendChild(my_case)
}

function deleteCase(){

    var evt = window.event || evt;
    const ans = confirm('确认删除？')
    if(ans){
        const case_con = document.getElementById('case_con')
        const case_to_delete = document.getElementById(evt.target.id.slice(0,5))

        case_con.removeChild(case_to_delete)
    }
}

function editCase() {
    var evt = window.event || evt;

    const name_container = document.getElementById(evt.target.id.slice(0,5)+'_name')
    const information1 = name_container.innerText

    const edit1_container = document.createElement('textarea')
    edit1_container.value = information1
    edit1_container.className = 'name_textarea'
    edit1_container.id = evt.target.id.slice(0,5) + '_nametext'

    const info_container = document.getElementById(evt.target.id.slice(0,5)+'_info')
    const information2 = info_container.innerText

    const edit2_container = document.createElement('textarea')
    edit2_container.value = information2
    edit2_container.className = 'info_textarea'
    edit2_container.id = evt.target.id.slice(0,5) + '_destext'

    const case_des = document.getElementById(evt.target.id.slice(0,5)+'_description')

    const save_btn = document.createElement('button')
    const save_txt = document.createTextNode('保存')
    save_btn.append(save_txt)
    save_btn.id = evt.target.id.slice(0,5)+'_savebtn'
    save_btn.className = 'case_save'
    save_btn.setAttribute('onclick', 'saveCase()')

    if(case_des.childElementCount == 1){
        case_des.removeChild(case_des.lastElementChild)
        // case_des.removeChild(case_des.lastElementChild)
        case_des.appendChild(edit1_container)
        case_des.appendChild(edit2_container)
        case_des.appendChild(save_btn)
    }

}

function saveCase(){
    var evt = window.event || evt;
    const casenum = evt.target.id.slice(0,5)

    const name_input = document.getElementById(casenum+'_nametext')
    const info_input = document.getElementById(casenum+'_destext')

    const info1 = name_input.value
    const info2 = info_input.value

    const case_des = document.getElementById(casenum+'_description')

    case_des.removeChild(case_des.lastElementChild)
    case_des.removeChild(case_des.lastElementChild)
    case_des.removeChild(case_des.lastElementChild)

    const case_link = document.createElement('a')
    case_link.href ='#' // 这里从后端获取对应Case 的链接

    const case_name = document.createElement('div')
    case_name.className = 'case_number'
    const name_p = document.createElement('p')
    name_p.id = casenum+'_name'
    const name_txt = document.createTextNode(info1)
    name_p.append(name_txt)
    case_name.appendChild(name_p)

    const describe = document.createElement('div')
    describe.className = 'case_des'
    const des_p = document.createElement('p')
    des_p.id = casenum+'_info'
    const des_txt = document.createTextNode(info2)
    des_p.append(des_txt)
    describe.appendChild(des_p)

    case_link.appendChild(case_name)
    case_link.appendChild(describe)

    case_des.appendChild(case_link)
}