$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  })

// function addSuccess() {
//     const success = document.getElementById('info1_success')

//     const des_container = document.getElementById('case_des')
//     if(success.checked){
//         const success_container = document.createElement('div')
//         const sTitle = document.createElement('p')
//         const sText = document.createTextNode('治疗成功案例：')
//         sTitle.append(sText)
//         const sInput = document.createElement('textarea')
//         sInput.id = 'info1_input'
//         sInput.setAttribute('onclick', 'remind()')
//         sInput.className='user_input'

//         success_container.appendChild(sTitle)
//         success_container.appendChild(sInput)
//         des_container.appendChild(success_container)
//     }if(!success.checked){
//         des_container.removeChild(des_container.lastElementChild)
//     }
// }

// function addFail(){
//     const failure = document.getElementById('info1_fail')

//     const des_container = document.getElementById('case_des')
//     if(failure.checked){
//         const failure_container = document.createElement('div')
//         const fTitle = document.createElement('p')
//         const fText = document.createTextNode('治疗失败案例：')
//         fTitle.append(fText)
//         const fInput = document.createElement('textarea')
//         fInput.id = 'info1_input'
//         fInput.setAttribute('onclick', 'remind()')
//         fInput.className='user_input'

//         failure_container.appendChild(fTitle)
//         failure_container.appendChild(fInput) 
//         des_container.appendChild(failure_container)
//     }if(!failure.checked){
//         des_container.removeChild(des_container.lastElementChild)
//     }
// }
// function addRare(){
//     const opt1 = document.getElementById('info2_success')
//     const rare_case = document.getElementById('rare_case')

//     if(opt1.checked){
//         const rare_container = document.createElement('div')
//         const rTitle = document.createElement('p')
//         const rText = document.createTextNode('罕见病例描述：')
//         rTitle.append(rText)

//         const rInput = document.createElement('textarea')
//         rInput.id = 'info2_input'
//         rInput.setAttribute('onclick', 'remind()')
//         rInput.className='user_input'

//         rare_container.appendChild(rTitle)
//         rare_container.appendChild(rInput)
//         rare_case.appendChild(rare_container)
//     }if(!opt1.checked){
//         rare_case.removeChild(rare_case.lastElementChild)
//     }
// }

function clicked(){
    var evt = window.event || evt;
    const checked = document.getElementById('opt_checked')
    if(checked){
        checked.className = "opt"
        checked.id = ""
    }
    evt.target.className = "opt checked"
    evt.target.id = "opt_checked"
}

function remind(){
    var evt = window.event || evt;

    const remind = document.getElementById(evt.target.id.slice(0,5)+'_remind1')
	remind.className = "remind clicked"
    // if(evt.target.id.slice(6,10) === 'txt1'){
        const info = document.getElementById(evt.target.id.slice(0,5)+'_container')
        info.style.borderBottom = '2px solid red'
        const info_rect = info.getBoundingClientRect()
    // }
	console.log()
    
    const sheet = document.getElementById("sheet")
    // sheet.scrollTo(0, info_rect.top)

    const remind_container = document.getElementById('remind_container')
    
    remind_container.style.marginTop = info_rect.bottom+"px"
    // console.log(remind_container.style.top)

    if(remind.childElementCount === 1){

        const detail_container = document.createElement('p')
        const detail_txt = document.createTextNode('这里显示具体的问题解释，和示例，大概在两到三行左右。如需要获取更多的解释或者提示，请点击更多解释来阅读文字或是视频。')
        detail_container.append(detail_txt)

        const more_container = document.createElement('details')
        const more_btn = document.createElement('summary')
        const btn_text = document.createTextNode('更多解释')
        const txt_container = document.createElement('p')
        const more_txt = document.createTextNode('这里获取有关'+evt.target.id.slice(0,5)+'更多的remind。或者视频。北京健康促进会（Beijing Health Promotion Association，BJHPA）成立于1998年5月8日。是在政府主管部门及相关部门的支持下，由北京医疗健康系统工作者及有关单位自愿结成，并经北京民政局批准登记成立的区域性、公益性、专业性和非营利性社会组织。旨在运用北京市医疗、卫生、教育等行政的或组织的手段，广泛协调社会各相关部门以及社区、家庭和个人，使其履行各自对健康的责任，共同维护和促进北京市民健康。')
        more_btn.append(btn_text)
        txt_container.append(more_txt)

        const video_container = document.createElement("div")
        const video = document.createElement("video")
        video.setAttribute("height", "240")
        video.setAttribute("width", "400")
        video.setAttribute("controls", "")
        // video.setAttribute("autoplay", "")
        const source = document.createElement("source")
        source.setAttribute("src", "./video/sample.mp4")
        source.setAttribute("type", "video/mp4")
        video.appendChild(source)
        video_container.appendChild(video)

        remind.appendChild(video_container)
        remind.appendChild(detail_container)
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
				remind_child.className = "remind"
                if(remind_child.childElementCount !== 1){
                  remind_child.removeChild(remind_child.lastElementChild) 
                  remind_child.removeChild(remind_child.lastElementChild) 
                }
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
//     remindCon.style.marginTop = window.+'px'; 
// }



// function popup(){
//     setTimeout(function(){pop()},100)
// }

// function pop(){
//     const pop = document.getElementById("popup")
//     console.log(pop)
//     pop.style.display = "block"
// }