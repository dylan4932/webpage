// $("input:checkbox").on('click', function() {
//     var $box = $(this);
//     if ($box.is(":checked")) {
//         var group = "input:checkbox[name='" + $box.attr("name") + "']";
//         $(group).prop("checked", false);
//         $box.prop("checked", true);
//     } else {
//         $box.prop("checked", false);
//     }
// })

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
    info.style.borderBottom = '2px solid #E6CEB1'
    
    const sheet = document.getElementById("sheet")

    const remind_container = document.getElementById('remind_container')
    
  
    const info_rect = info.getBoundingClientRect()
    const control = document.getElementById('info1_container')
    const control_react = control.getBoundingClientRect()
    
    const n = parseInt(evt.target.id.slice(4,5)) - 1

    console.log(info_rect.bottom)
    remind_container.style.top = (info_rect.top+36-60*n-control_react.top) + 'px'
    console.log(sheet.scrollTop)

    if(info_rect.bottom+sheet.scrollTop > 900) {
        
        remind_container.style.top = (info_rect.top+36-60*n-control_react.top-180) + 'px'
        sheet.scrollTo(0, 200)
    } 
    if (info_rect.top < 0){
        sheet.scrollTo(0, 0)
    } 
    // if(info_rect.bottom+sheet.scrollTop > 900) {
 
    // }

    if(remind.childElementCount === 1){
        const title = document.getElementById(evt.target.id.slice(0,5)+'_txt1').innerText
        console.log(title)
        const detail_container = document.createElement('p')
        const detail_txt = document.createTextNode(title)
        detail_container.append(detail_txt)

        const more_container = document.createElement('details')
        const more_btn = document.createElement('summary')
        const btn_text = document.createTextNode('learn more')
        const txt_container = document.createElement('p')
        const more_txt = document.createTextNode(evt.target.id.slice(0,5)+': xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
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
        // more_container.style='--duration: 1s'
        remind.appendChild(more_container)
    }
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

    // const new_details = document.querySelectorAll('details')
    // new_details.forEach((el,index) => animateDetailsElement(el, 1000 + index * 1000 ))
}


function report(){
    const sheet = document.getElementById('sheet')

    const report = document.getElementById('report_container')
    const note = document.getElementById('note_container')

    report.style.opacity = '1'
    note.style.opacity = '1'
    sheet.scrollTo(0,700)
}