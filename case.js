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

function mini() {
    var evt = window.event || evt;

    const remind = document.getElementById(evt.target.id.slice(0,5)+'_remind1')
    console.log(evt.target.id.slice(0,5))
    if (remind.childElementCount == 4){
        remind.removeChild(remind.lastElementChild)
        remind.removeChild(remind.lastElementChild)
        remind.removeChild(remind.lastElementChild)
    }
}

function remind(){
    var evt = window.event || evt;

    const remind = document.getElementById(evt.target.id.slice(0,5)+'_remind1')
	remind.className = "remind clicked"
    
    const info = document.getElementById(evt.target.id.slice(0,5)+'_container')
    info.style.borderBottom = '2px solid red'
    
    const sheet = document.getElementById("sheet")

    const remind_container = document.getElementById('remind_container')
    
  
    const info_rect = info.getBoundingClientRect()
    const control = document.getElementById('info1_container')
    const control_react = control.getBoundingClientRect()
    
    const n = parseInt(evt.target.id.slice(4,5)) - 1

    
    remind_container.style.top = (info_rect.top+36-60*n-control_react.top) + 'px'

    if(info_rect.bottom > 300) {
        sheet.scrollTo(0, info_rect.bottom-200)
    } 
    if (info_rect.top < 0){
        sheet.scrollTo(0, 0)
    }

    if(remind.childElementCount === 1){

        // const mini_btn_container = document.createElement('div')
        // mini_btn_container.className = 'mini_btn_container'
        // mini_btn_container.id = evt.target.id.slice(0,5)+'_mini'
        // mini_btn_container.setAttribute('onclick', 'mini()')
        // const mini_btn = document.createElement('i')
        // mini_btn.className = 'bx bx-zoom-out'
        // mini_btn_container.appendChild(mini_btn)

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

        // remind.appendChild(mini_btn_container)
        remind.appendChild(video_container)
        remind.appendChild(detail_container)
        more_container.appendChild(more_btn)
        more_container.appendChild(txt_container)
        more_container.style='--duration: 1s'
        remind.appendChild(more_container)
    }

    // if(remind.childElementCount === 4){
    //   remind.removeChild(remind.lastElementChild)
    //   remind.removeChild(remind.lastElementChild)
    //   remind.removeChild(remind.lastElementChild)
    // }

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
                // remind_child.removeChild(remind_child.lastElementChild)
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