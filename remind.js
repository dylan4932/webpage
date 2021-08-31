function remind(){
    var evt = window.event || evt;

    const remind = document.getElementById(evt.target.id.slice(0,5)+'_remind1')
	  remind.className = "remind clicked"

    const remind_container = document.getElementById('remind_container')
    
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
        video.setAttribute("height", "160")
        video.setAttribute("width", "330")
        video.setAttribute("controls", "")
        const source = document.createElement("source")
        source.setAttribute("src", "./video/sample.mp4")
        source.setAttribute("type", "video/mp4")
        video.appendChild(source)
        video_container.appendChild(video)

        remind.appendChild(video_container)
        remind.appendChild(detail_container)
        more_container.appendChild(more_btn)
        more_container.appendChild(txt_container)
        remind.appendChild(more_container)
    }

    // remind_container.insertBefore(remind, remind_container.children[0])
    for(var i = 0; i<remind_container.childElementCount;i++){
        const remind_child = remind_container.children[i] 
        // const info_con = document.getElementById(remind_child.id.slice(0,5)+'_container')
        if(remind_child.childElementCount !== 1 && remind_child != remind){
                remind_child.removeChild(remind_child.lastElementChild)
				        remind_child.className = "remind"
                if(remind_child.childElementCount !== 1){
                  remind_child.removeChild(remind_child.lastElementChild) 
                  remind_child.removeChild(remind_child.lastElementChild) 
                }
                // info_con.style.border = ''
                // info_con.style.backgroundColor = ''
            }
    }

}