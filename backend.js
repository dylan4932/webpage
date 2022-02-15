function input() {

    var evt = window.event || evt;
    const btn = document.getElementById('input_btn')
    btn.classList.add('clicked')
    const container = document.getElementById('nav_list')

    if (container.childElementCount === 11) {
        container.removeChild(container.lastElementChild)
        return
    }
    const content = document.createElement('ul')
    
    const child_content1 = document.createElement('li')
    const content1 = document.createElement('div')
    const content1_txt = document.createTextNode('base question')
    content1.append(content1_txt)
    child_content1.appendChild(content1)

    const child_content2 = document.createElement('li')
    const content2 = document.createElement('div')
    const content2_txt = document.createTextNode('module2 question')
    content2.append(content2_txt)
    child_content2.appendChild(content2)

    const child_content3 = document.createElement('li')
    const content3 = document.createElement('div')
    const content3_txt = document.createTextNode('module2 报告管理')
    content3.append(content3_txt)
    child_content3.appendChild(content3)

    const child_content4 = document.createElement('li')
    const content4 = document.createElement('div')
    const content4_txt = document.createTextNode('path 管理')
    content4.append(content4_txt)
    child_content4.appendChild(content4)

    const child_content5 = document.createElement('li')
    const content5 = document.createElement('div')
    const content5_txt = document.createTextNode('pathQuestion 管理')
    content5.append(content5_txt)
    child_content5.appendChild(content5)

    const child_content6 = document.createElement('li')
    const content6 = document.createElement('div')
    const content6_txt = document.createTextNode('moduleOutput 管理')
    content6.append(content6_txt)
    child_content6.appendChild(content6)


    content.appendChild(child_content1)
    content.appendChild(child_content2)
    content.appendChild(child_content3)
    content.appendChild(child_content4)
    content.appendChild(child_content5)
    content.appendChild(child_content6) 
    container.appendChild(content)

}

function output() {

    var evt = window.event || evt;
    const btn = document.getElementById('input_btn')
    btn.classList.add('clicked')
    const container = document.getElementById('nav_list')

    if (container.childElementCount === 11) {
        container.removeChild(container.lastElementChild)
        return
    }
    const content = document.createElement('ul')
    
    const child_content1 = document.createElement('li')
    const content1 = document.createElement('div')
    const content1_txt = document.createTextNode('base output')
    content1.append(content1_txt)
    child_content1.appendChild(content1)

    const child_content2 = document.createElement('li')
    const content2 = document.createElement('div')
    const content2_txt = document.createTextNode('framework output 管理')
    content2.append(content2_txt)
    child_content2.appendChild(content2)

    const child_content3 = document.createElement('li')
    const content3 = document.createElement('div')
    const content3_txt = document.createTextNode('question output 管理')
    content3.append(content3_txt)
    child_content3.appendChild(content3)



    content.appendChild(child_content1)
    content.appendChild(child_content2)
    content.appendChild(child_content3)
  
    container.appendChild(content)

}