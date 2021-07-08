
function popWin(){
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block'
    const pop = document.getElementById('light')


    const report = document.createElement('div')
    const header = document.createElement('h1')
    const headerText = document.createTextNode('---------基本报告--------')
    header.append(headerText)

    const title = document.createElement('h3')
    const title_content = document.getElementById('input_title')
    const title_text = document.createTextNode('---研究名称---'+title_content.value)
    title.append(title_text)

    const subtitle = document.createElement('h3')
    const subtext = document.createTextNode('---研究背景---')
    subtitle.append(subtext)

    const label0 = document.createElement('p')
    const box0 = document.getElementById('check1')
    const text0 = document.createTextNode('临床现象: 这里需要从sub1.html 中读取id 为 check1 的input 并显示')
    label0.append(text0)

    const label1 = document.createElement('p')
    const box1 = document.getElementById('check2')
    const text1 = document.createTextNode('现有科学依据: 这里需要从sub1.html 中读取id 为 check2 的input 并显示')
    label1.append(text1)

    const label2 = document.createElement('p')
    const box2 = document.getElementById('check3')
    const text2 = document.createTextNode('研究者观点与现有解释对比: 这里需要从sub1.html 中读取id 为 check3 的input 并显示')
    label2.append(text2)

    const label3 = document.createElement('p')
    const box3 = document.getElementById('check4')
    const text3 = document.createTextNode('因果推断: 这里需要从sub1.html 中读取id 为 check4 的input 并显示')
    label3.append(text3)

    const label4 = document.createElement('h3')
    const box4 = document.getElementById('check5')
    const text4 = document.createTextNode('---研究目标--- 这里需要从sub1.html 中读取id 为 check5 的input 并显示')
    label4.append(text4)

    const l0 = document.createElement('hr')
    const l1 = document.createElement('hr')
    const l2 = document.createElement('hr')
    const l3 = document.createElement('hr')
    const l4 = document.createElement('hr')
    const br = document.createElement('br')

    const a = document.createElement('a')
    const aText = document.createTextNode('<a> ---下载--- </a>')    //  可供用户下载生成的报告
    a.append(aText)

    report.appendChild(header)
    report.appendChild(title)
    report.appendChild(l0)
    report.appendChild(subtitle)
    report.appendChild(label0)
    report.appendChild(l1)
    report.appendChild(label1)
    report.appendChild(l2)
    report.appendChild(label2)
    report.appendChild(l3)
    report.appendChild(label3)
    report.appendChild(l4)
    report.appendChild(label4)
    report.appendChild(br)
    report.appendChild(a)

    pop.appendChild(report)
}

function search(){
    const body = document.getElementById('search_container')
    const box1 = document.createElement('label')
    const text = document.createTextNode('建议减胎时机为孕早期，具有高危因素（≥40 岁高龄，或有反复胚胎自然流产、遗传病家族史或有分娩遗传病胎儿高风险）的女性可期待至孕中期再行减胎术。（2C）注：此处生成为用户通过关键词检索得到的在数据库中相应数据建议.')

    box1.append(text)
    const br = document.createElement('br')
    const btn = document.createElement('button')
    const btn_text = document.createTextNode('意见报告')    //此处应从数据库中获取相关意见报告并通过按钮打开
    const hr = document.createElement('hr')
    btn.append(btn_text)

    body.appendChild(box1)
    body.appendChild(br)
    body.appendChild(btn)
    body.appendChild(hr)
}

function closeWin() {
    const pop = document.getElementById('light') 
    pop.style.display = 'none';
    document.getElementById('fade').style.display = 'none'
    pop.removeChild(pop.lastElementChild)
}

function filterSearch() {
    const opt1 = document.getElementById('心脏')
    const opt2 = document.getElementById('肾脏')
    const opt3 = document.getElementById('神经')
    const opt4 = document.getElementById('生殖')
    const opt5 = document.getElementById('心脑血管')
    const opt6 = document.getElementById('外科')

    const disease = document.getElementById('disease')
    const intervention = document.getElementById('intervention')
    const comparison = document.getElementById('comparison')
    const outcome = document.getElementById('outcome')

    const d_container1 = document.getElementById('心脏疾病')
    const i_container1 = document.getElementById('心脏干预')
    const o_container1 = document.getElementById('心脏预期')

    const d_container2 = document.getElementById('肾脏疾病')
    const i_container2 = document.getElementById('肾脏干预')
    const o_container2 = document.getElementById('肾脏预期')

    const d_container3 = document.getElementById('神经疾病')
    const i_container3 = document.getElementById('神经干预')
    const o_container3 = document.getElementById('神经预期')

    const d_container4 = document.getElementById('生殖疾病')
    const i_container4 = document.getElementById('生殖干预')
    const o_container4 = document.getElementById('生殖预期')

    const d_container5 = document.getElementById('心脑血管疾病')
    const i_container5 = document.getElementById('心脑血管干预')
    const o_container5 = document.getElementById('心脑血管预期')

    const d_container6 = document.getElementById('外科疾病')
    const i_container6 = document.getElementById('外科干预')
    const o_container6 = document.getElementById('外科预期')

    if(opt1.checked && i_container1.childElementCount == 0){
        Add(d_container1, i_container1, o_container1) 
        disease.appendChild(d_container1)
        intervention.appendChild(i_container1)
        outcome.appendChild(o_container1)

    } if(!opt1.checked) {
        removeAll(d_container1)
        removeAll(i_container1)
        removeAll(o_container1)

    } if (opt2.checked && i_container2.childElementCount == 0) {
        Add(d_container2, i_container2, o_container2)
        disease.appendChild(d_container2) 
        intervention.appendChild(i_container2)
        outcome.appendChild(o_container2)

    } if (!opt2.checked) {
        removeAll(d_container2)
        removeAll(i_container2)
        removeAll(o_container2)

    } if (opt3.checked && i_container3.childElementCount == 0) {
        Add(d_container3, i_container3, o_container3)
        disease.appendChild(d_container3) 
        intervention.appendChild(i_container3)
        outcome.appendChild(o_container3)

    } if (!opt3.checked) {
        removeAll(d_container3)
        removeAll(i_container3)
        removeAll(o_container3)
    } if (opt4.checked && i_container4.childElementCount == 0) {
        Add(d_container4, i_container4, o_container4)
        disease.appendChild(d_container4) 
        intervention.appendChild(i_container4)
        outcome.appendChild(o_container4)

    } if (!opt4.checked) {
        removeAll(d_container4)
        removeAll(i_container4)
        removeAll(o_container4)
    
    } if (opt5.checked && i_container5.childElementCount == 0) {
        Add(d_container5, i_container5, o_container5)
        disease.appendChild(d_container5) 
        intervention.appendChild(i_container5)
        outcome.appendChild(o_container5)

    } if (!opt5.checked) {
        removeAll(d_container5)
        removeAll(i_container5)
        removeAll(o_container5)
    }  if (opt6.checked && i_container6.childElementCount == 0) {
        Add(d_container6, i_container6, o_container6)
        disease.appendChild(d_container6) 
        intervention.appendChild(i_container6)
        outcome.appendChild(o_container6)

    } if (!opt6.checked) {
        removeAll(d_container6)
        removeAll(i_container6)
        removeAll(o_container6)
    } 

}

function removeAll(container) {
    while(container.childElementCount > 0) {
        container.removeChild(container.lastElementChild)
    }
}

function Add(d_container, i_container, o_container) {
    //disease
    const d_add1 = document.createElement('input')
    d_add1.type = "checkbox"
    const td1 = document.createElement('p')
    const d_text1 = document.createTextNode('疾病项')
    td1.append(d_text1)
    d_container.appendChild(d_add1)
    d_container.appendChild(td1)

    const d_add2 = document.createElement('input')
    d_add2.type = "checkbox"
    const td2 = document.createElement('p')
    const d_text2 = document.createTextNode('疾病项')
    td2.append(d_text2)
    d_container.appendChild(d_add2)
    d_container.appendChild(td2)

    const d_add3 = document.createElement('input')
    d_add3.type = "checkbox"
    const td3 = document.createElement('p')
    const d_text3 = document.createTextNode('疾病项')
    td3.append(d_text3)
    d_container.appendChild(d_add3)
    d_container.appendChild(td3)

    // intervention  
    const i_add1 = document.createElement('input')
    i_add1.type = "checkbox"
    const ti1 = document.createElement('p')
    const i_text1 = document.createTextNode('干预项')
    ti1.append(i_text1)
    i_container.appendChild(i_add1)
    i_container.appendChild(ti1)

    const i_add2 = document.createElement('input')
    i_add2.type = "checkbox"
    const ti2 = document.createElement('p')
    const i_text2 = document.createTextNode('干预项')
    ti2.append(i_text2)
    i_container.appendChild(i_add2)
    i_container.appendChild(ti2)

    const i_add3 = document.createElement('input')
    i_add3.type = "checkbox"
    const ti3 = document.createElement('p')
    const i_text3 = document.createTextNode('干预项')
    ti3.append(i_text3)
    i_container.appendChild(i_add3)
    i_container.appendChild(ti3)

    // outcome -adds
    const o_add1 = document.createElement('input')
    o_add1.type = "checkbox"
    const to1 = document.createElement('p')
    const o_text1 = document.createTextNode('预期项')
    to1.append(o_text1)
    o_container.appendChild(o_add1)
    o_container.appendChild(to1)

    const o_add2 = document.createElement('input')
    o_add2.type = "checkbox"
    const to2 = document.createElement('p')
    const o_text2 = document.createTextNode('预期项')
    to2.append(o_text2)
    o_container.appendChild(o_add2)
    o_container.appendChild(to2)

    const o_add3 = document.createElement('input')
    o_add3.type = "checkbox"
    const to3 = document.createElement('p')
    const o_text3 = document.createTextNode('预期项')
    to3.append(o_text3)
    o_container.appendChild(o_add3)
    o_container.appendChild(to3)
}

function pop(){
    const body = document.getElementById('addMore')
    const container = document.createElement('div')
    const box = document.createElement('p')
    const txt = document.createTextNode('aaaa')
    box.append(txt)
    container.appendChild(box)
    body.appendChild(container)
}
