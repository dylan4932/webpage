
function addSuccess() {
    const success = document.getElementById('info1_success')

    const des_container = document.getElementById('case_des')
    if(success.checked){
        const success_container = document.createElement('div')
        const sTitle = document.createElement('p')
        const sText = document.createTextNode('治疗成功案例：')
        sTitle.append(sText)
        const sInput = document.createElement('input')
        sInput.id = 'info1_input'
        sInput.setAttribute('onclick', 'remind()')
        sInput.className='user_input'

        success_container.appendChild(sTitle)
        success_container.appendChild(sInput)
        des_container.appendChild(success_container)
    }if(!success.checked){
        des_container.removeChild(des_container.lastElementChild)
    }
}

function addFail(){
    const failure = document.getElementById('info1_fail')

    const des_container = document.getElementById('case_des')
    if(failure.checked){
        const failure_container = document.createElement('div')
        const fTitle = document.createElement('p')
        const fText = document.createTextNode('治疗失败案例：')
        fTitle.append(fText)
        const fInput = document.createElement('input')
        fInput.id = 'info1_input'
        fInput.setAttribute('onclick', 'remind()')
        fInput.className='user_input'

        failure_container.appendChild(fTitle)
        failure_container.appendChild(fInput) 
        des_container.appendChild(failure_container)
    }if(!failure.checked){
        des_container.removeChild(des_container.lastElementChild)
    }
}
function addRare(){
    const opt1 = document.getElementById('info2_success')
    const rare_case = document.getElementById('rare_case')

    if(opt1.checked){
        const rare_container = document.createElement('div')
        const rTitle = document.createElement('p')
        const rText = document.createTextNode('罕见病例描述：')
        rTitle.append(rText)

        const rInput = document.createElement('input')
        rInput.id = 'info2_input'
        rInput.setAttribute('onclick', 'remind()')
        rInput.className='user_input'

        rare_container.appendChild(rTitle)
        rare_container.appendChild(rInput)
        rare_case.appendChild(rare_container)
    }if(!opt1.checked){
        rare_case.removeChild(rare_case.lastElementChild)
    }
}


function remind(){
    var evt = window.event || evt;

    const remind = document.getElementById(evt.target.id.slice(0,5)+'_remind1')
    if(evt.target.id.slice(6,10) === 'txt1'){
        const info = document.getElementById(evt.target.id.slice(0,5)+'_container')
        info.style.borderBottom = '2px solid red'
        info.style.borderRadius = '10px'
        info.style.backgroundColor = '#FAE5E9'
    }
    const remind_container = document.getElementById('remind_container')
    if(remind.childElementCount === 1){
        const more_container = document.createElement('details')
        const more_btn = document.createElement('summary')
        const btn_text = document.createTextNode('更多解释')
        const txt_container = document.createElement('p')
        const more_txt = document.createTextNode('这里获取有关'+evt.target.id.slice(0,5)+'更多的remind。或者视频。北京健康促进会（Beijing Health Promotion Association，BJHPA）成立于1998年5月8日。是在政府主管部门及相关部门的支持下，由北京医疗健康系统工作者及有关单位自愿结成，并经北京民政局批准登记成立的区域性、公益性、专业性和非营利性社会组织。旨在运用北京市医疗、卫生、教育等行政的或组织的手段，广泛协调社会各相关部门以及社区、家庭和个人，使其履行各自对健康的责任，共同维护和促进北京市民健康。')
        more_btn.append(btn_text)
        txt_container.append(more_txt)

        more_container.appendChild(more_btn)
        more_container.appendChild(txt_container)
        more_container.style='--duration: 1s'
        remind.appendChild(more_container)

    }

    // remind_container.insertBefore(remind, remind_container.children[0])
    for(var i = 0; i<remind_container.childElementCount;i++){
        const remind_child = remind_container.children[i] 
        const info_con = document.getElementById(remind_child.id.slice(0,5)+'_container')
        if(remind_child.childElementCount !== 1 && remind_child != remind){
                remind_child.removeChild(remind_child.lastElementChild)
                info_con.style.border = ''
                info_con.style.backgroundColor = ''
            }
    }

    const new_details = document.querySelectorAll('details')
    new_details.forEach((el,index) => animateDetailsElement(el, 1000 + index * 1000 ))
}

function setInlineAttribute({ element, duration, maxHeight }) {
    element.setAttribute(
      'style',
      `--duration: ${duration / 1000}s; max-height: ${maxHeight}px;`
    )
  }
  
function calculateContentHeight(element) {
    if (document.createRange) {
      let range = document.createRange()
      range.selectNodeContents(element.lastElementChild)
      if (range.getBoundingClientRect) {
        let rect = range.getBoundingClientRect()
        if (rect) {
          return rect.bottom - rect.top
        }
      }
    }
    return 0
}
  
function animateDetailsElement(element, duration = 600) {
    const initial = element.offsetHeight + 20
    let height = 0
    
    setInlineAttribute({element, duration, maxHeight: initial })
   
    element.addEventListener('click', e => {
      e.preventDefault()
  
      const next = !element.open;
  
      if (next) {
        element.open = next
        height = calculateContentHeight(element)
        setInlineAttribute({ element, duration, maxHeight: initial + height })
        
      } else {
        setInlineAttribute({ element, duration, maxHeight: initial })
        timer = setTimeout(() => {
          element.open = next
        }, duration)
      }
    })
  }
  
//   const details = document.querySelectorAll('details')
//   details.forEach((el,index) => animateDetailsElement(el, 1000 + index * 1000 ))
// window.onscroll = function (e) { 
//     const remindCon = document.getElementById('remind_container')
//     remindCon.style.marginTop = window.pageYOffset+'px'; 
// }