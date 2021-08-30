function guide(){
	var evt = window.event || evt;

    // console.log(evt.target)

    const module = document.getElementById(evt.target.id.slice(0,7))

    const tip = document.getElementById(evt.target.id.slice(0,7)+"_tip")
    tip.style.opacity = "0"
    if(module.childElementCount === 2){
        const phase_container = document.createElement("div")
        phase_container.className = "phases"

        const phase1 = document.createElement('div')
        phase1.className="phase_container"
        const phase1_link = document.createElement('a')
        phase1_link.href = "./"+evt.target.id.slice(0,7)+"_phase1.html"

        const phase1_txt = document.createTextNode('├─ Phase1')
        phase1.append(phase1_txt)
        const tip1 = document.createElement('span')
        tip1.className="phasetip"
        const tip1_txt = document.createTextNode('---这是关于phase1的提示---')
        tip1.append(tip1_txt)
        phase1.appendChild(tip1)
        phase1_link.appendChild(phase1)

        const phase2 = document.createElement('div')
        phase2.className="phase_container"

        const phase2_link = document.createElement('a')
        if(evt.target.id.slice(0,7) === 'module2'){
            phase2_link.href = "./"+evt.target.id.slice(0,7)+"_phase2_1.html"
        } else{
            phase2_link.href = "./"+evt.target.id.slice(0,7)+"_phase2.html"
        }
        const phase2_txt = document.createTextNode('└─ Phase2')
        phase2.append(phase2_txt)
        const tip2 = document.createElement('span')
        tip2.className="phasetip"
        const tip2_txt = document.createTextNode('---这是关于phase2的提示---')
        tip2.append(tip2_txt)
        phase2.appendChild(tip2)
        phase2_link.appendChild(phase2)

        const phase3 = document.createElement('div')
        phase3.className="phase_container"

        const phase3_link = document.createElement('a')
        if(evt.target.id.slice(0,7) === 'module2'){
            phase3_link.href = "./"+evt.target.id.slice(0,7)+"_phase3_1.html"
        } else{
            phase3_link.href = "./"+evt.target.id.slice(0,7)+"_phase3.html"
        }
        const phase3_txt = document.createTextNode('└─ Phase3')
        phase3.append(phase3_txt)
        const tip3 = document.createElement('span')
        tip3.className="phasetip"
        const tip3_txt = document.createTextNode('---这是关于phase3的提示---')
        tip3.append(tip3_txt)
        phase3.appendChild(tip3)
        phase3_link.appendChild(phase3)

        const phase4 = document.createElement('div')
        phase4.className="phase_container"
        const phase4_link = document.createElement('a')

        if(evt.target.id.slice(0,7) === 'module1'){
            phase4_link.href = "./"+evt.target.id.slice(0,7)+"_phase4.html"
            const phase4_txt = document.createTextNode('└─ Research Topic')
            phase4.append(phase4_txt)

            const tip4 = document.createElement('span')
            tip4.className="phasetip"
            const tip4_txt = document.createTextNode('---这是关 Research Topic的提示---')
            tip4.append(tip4_txt)
            phase4.appendChild(tip4)
        }else{
            phase4_link.href = "./"+evt.target.id.slice(0,7)+"_phase4.html"
            const phase4_txt = document.createTextNode('└─ Research Framework')
            phase4.append(phase4_txt)
            const tip4 = document.createElement('span')
            tip4.className="phasetip"
            const tip4_txt = document.createTextNode('---这是关 Research Framework的提示---')
            
            tip4.append(tip4_txt)
            phase4.appendChild(tip4)
        }
        
        
        phase4_link.appendChild(phase4)

        phase_container.appendChild(phase1_link)
        phase_container.appendChild(phase2_link)
        phase_container.appendChild(phase3_link)
        phase_container.appendChild(phase4_link)
        module.appendChild(phase_container)
    }
    else if(module.childElementCount === 3){
        module.removeChild(module.lastElementChild)
        tip.style.opacity = ""
    }

    const modules_container = document.getElementById("modules_container")
    const curr = document.getElementById('curr')
    if(curr){
        modules_container.removeChild(curr)
    }
   
    for(var i = 0; i<modules_container.childElementCount;i++){
        const element = modules_container.children[i] 
        if(element.childElementCount !== 2 && element != module){
                element.removeChild(element.lastElementChild)	
            }
    }
}

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

