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
const Learnmore = { 'info1.1_remind1': [['临床研究分为多种。人们用研究来检验肿瘤预防、筛检、治疗和方法能否改善肿瘤病人生存质量。人们用临床研究来评价可能有效的肿瘤治疗方法的安全性和有效性。',
                                        '一个病人进入一项治疗研究并不意味着他仅仅接受实验性治疗，情况经常是新药物或新疗法与有效的药物或方法结合应用，来观察是否有额外的效果。',
                                        ' 药物临床研究包括临床试验和生物等效性试验。'], 
                                        ['I 期临床试验初步的临床药理学及人体安全性评价试验。观察人体对于新药的耐受程度和药代动力学，为制定给药方案提供依据。',
                                        'II期临床试验治疗作用初步评价阶段。其目的是初步评价药物对目标适应症患者的治疗作用和安全性，也包括为III期临床试验研究设计和给药剂量方案的确定提供依据。此阶段的研究设计可以根据具体的研究目的，采用多种形式，包括随机盲法对照临床试验。',
                                        'III期临床试验治疗作用确证阶段。其目的是进一步验证药物对目标适应症患者的治疗作用和安全性，评价利益与风险关系，最终为药物注册申请的审查提供充分的依据。试验一般应为具有足够样本量的随机盲法对照试验。',
                                        'IV期临床试验新药上市后应用研究阶段。其目的是考察在广泛使用条件下的药物的疗效和不良反应，评价在普通或者特殊人群中使用的利益与风险关系以及改进给药剂量等。']],

                    'info1.2_remind1': [['临床研究类型分为实验性研究和观察性研究。随机对照临床试验是实验性研究的一种，是临床研究的金标准。观察性研究包括描述性研究和分析性研究，其提供的证据强度弱于随机对照研究。',
                                        '每一种研究设计都有优势和局限性，应根据所具备的实验条件合理选择研究设计的类型。'], 
                                        ['1.队列研究（Cohort Study）。是将某一特定人群按是否暴露于某可疑因素或暴露程度分为不同的亚组，追踪观察两组或多组成员结局（如疾病）发生的情况，比较各组之间结局发生率的差异，从而判定这些因素与该结局之间有无因果关联及关联程度的一种观察性研究方法。还可细分为前瞻性队列研究、历史性队列研究、双向性队列研究。举例：对某一社区人群分两组，一组是吸烟人群，另一组是非吸烟人群，观察八年后肺癌的发病率。这个研究中，两组队列是 “纵向”的，样本是 “人群”。暴露因素是“是否吸烟”，结局是“是否发生肺癌”。队列研究的优势：因为存在明确的时间发生先后，能研究发病率和预后，比RCT有更强的外部效应；但其有局限性：时间长，花费高，存在混杂因素。',
                                        '2. 病例对照研究（Case-Control Study）。是一种探索病因的流行病学研究方法。它是以一组患有某种疾病的人与未患这种病的人相对照，调查他们过去是否暴露于可疑致病因子及暴露程度，通过比较，推断某种因子作为病因的可能性。因此，病例对照研究在某种意义上相当于“回顾性”研究。病例对照研究优势：用于研究少见疾病，比队列研究费用低；局限性：很容易受到偏倚的影响，不能评估患病率,发病率或预后，只能提供优势比,而不是相对风险度。',
                                        '3. 横断面研究（Cross-sectional study）也叫横断面调查或患病率调查。是在某一时点或在一个较短时间区间内收集的描述性资料进行分析，得出这一时点的疾病分布以及人们的某些特征与疾病之间的关联。横断面研究的优势：用于公共卫生调查，用于资源配置，操作相对简单，成本低；局限性：时间关系没有定义，不能确定因果关系；存在幸存者偏倚，不能评价预后，不能评价治疗效果。']],
                    'info2.1_remind1': [['研究人群可以是指具有某种特征的研究参与者。'], 
                                        ['3篇发表于BMJ的病例对照研究的文献作为示例：',
                                        '1.睾酮治疗与静脉血栓栓塞的风险：基于人群的病例对照研究。此研究的数据来源为巨大的数据库，研究者在一定程度上认为可以代表某时段的大部分整体人群，所以在题目中称”研究人群“为“人群”。',
                                        '2.抗胆碱能药物与痴呆风险：病例对照研究。研究人群=”2006年4月至2015年7月期间，有40770名年龄在65-99岁之间被诊断为痴呆症的患者，对照组283933名没有痴呆症患者。“此文献的研究人群来自大型数据库，研究者在题目中并未提到”研究人群“，也是一种您文献检索时可以看到的情况。onion建议研究者在题目中提及”研究人群“。',
                                        '3“芬兰绝经后妇女激素治疗的使用与阿尔茨海默病风险：全国范围病例对照研究”.可以看出此研究的研究对象是“芬兰绝经后妇女”。']],
                    'info2.2_remind1': [['在病例对照研究中，研究者通过研究“变量”之间的关联来预测结局，并进行因果推断。在考虑两个变量之间的关联时，在时间顺序上先出现、或基于临床医学、生物学基础上判断可能是“原因”的变量成为“危险因素变量”（X变量），另一个代表“结局”的变量即为“结局变量”（Y变量）。',
                                        '有时，“危险因素”也被称为“自变量”，“结局变量”也被称为“因变量”，这些术语的意义缺乏自明性，因此 onion 回避了此种用法。',
                                        '在onion 中，将“危险因素”统一称为“X变量”，将“结局变量”称为“Y变量”。',
                                        '请您在输入框中输入您拟定研究的“X变量”的名称'],
                                        ['例如：',
                                        '1.睾酮治疗与静脉血栓栓塞的风险：基于人群的病例对照研究。此研究 X变量=”睾酮治疗“。',
                                        '2.抗胆碱能药物与痴呆风险：病例对照研究中， X变量=”抗胆碱能药物使用“。',
                                        '3.“芬兰绝经后妇女激素治疗的使用与阿尔茨海默病风险：全国范围病例对照研究”， X变量=”激素治疗的使用”']],
                    'info2.3_remind1': [['在病例对照研究中，研究者通过研究“变量”之间的关联来预测结局，并进行因果推断。在考虑两个变量之间的关联时，在时间顺序上先出现、或基于临床医学、生物学基础上判断可能是“原因”的变量成为“预测变量”，另一个代表“结局”的变量即为“结局变量”。',
                                        '有时，“预测变量”也被称为“自变量”，“结局变量”也被称为“因变量”，这些术语的意义缺乏自明性，因而本系统（onion）回避了此种用法。',
                                        '在本系统（onion）中，将“预测变量”统一称为“X变量”，将“结局变量”称为“Y变量”。',
                                        '请您在输入框中输入您拟定研究的“Y变量”的名称'],
                                        ['在病例对照研究中，是一个“由果寻因”的过程，研究根据 Y（结局）进行分组，发生结局的研究对象组成”病例组“、未发生结局的研究对象组成”对照组“。',
                                        '例如：1.在一项研究“服用睾酮”与“静脉血栓风险”之间关联的病例-对照研究中，研究者将数据集中的患者按照是否发生“静脉血栓”（Y结局）分为病例组与对照组。此时，Y变量 = 是否“静脉血栓”',
                                        '2.抗胆碱能药物与痴呆风险：病例对照研究中， Y变量=”痴呆“与否 ',
                                        '3.“芬兰绝经后妇女激素治疗的使用与阿尔茨海默病风险：全国范围病例对照研究”，可以看出此研究的“Y变量”是“阿尔茨海默病”。']],
                    'info2.4_remind1': [["研究目标反映研究需要回答的问题，通常以中性的措辞进行描述，不一定使用“结果导向”的词语。"], 
                                        ["关于“研究目标”的示例：发表在BMJ的两个病例对照研究中，“研究目标”为: ",
                                        "1.确定男性使用睾酮治疗相关的静脉血栓栓塞的风险，尤其是风险的时机。",
                                        "2.评估不同类别抗胆碱能药物暴露的持续时间和水平与随后发生的痴呆症之间的关系。"]],
                    'info2.5_remind1': [["研究假设是研究问题用“假设”的方式进行描述，一般包括一个“预测变量”和一个“结局变量”，也可能包括多个预测变量。",
                                        "“原假设”也称无效假设，可以用H0表示，它是将“研究假设”陈述为“假设比较组间无差异”"], 
                                        ["“研究目标”为确定男性使用睾酮治疗相关的静脉血栓栓塞的风险的研究 ",
                                        "“H0“描述为：假设“使用睾酮治疗的男性”与“未使用睾酮治疗的男性”，在“静脉血栓栓塞的风险”方面无显著性差异。",
                                        "研究假设是研究问题用“假设”的方式进行描述，一般包括一个“预测变量”和一个“结局变量”，也可能包括多个预测变量。",
                                        "“备择假设”，可以用H1表示，它是指经过“统计学差异性检验”拒绝了“原假设”（无效假设）时，研究默认“接受的假设”。",
                                        "“研究目标”为确定男性使用睾酮治疗相关的静脉血栓栓塞的风险的研究 ",
                                        "“H1”可描述为：假设“使用睾酮治疗的男性”与“未使用睾酮治疗的男性”，在“静脉血栓栓塞的风险”方面具有显著性差异。"]]}

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

    const remind = document.getElementById(evt.target.id.slice(0,7)+'_remind1')
	remind.className = "remind clicked"
    
    const info = document.getElementById(evt.target.id.slice(0,5)+'_container')
    info.style.borderBottom = '2px solid #E6CEB1'
    
    const sheet = document.getElementById("sheet")

    const remind_container = document.getElementById('remind_container')
    
  
    const info_rect = info.getBoundingClientRect()
    const control = document.getElementById('info1_container')
    const control_react = control.getBoundingClientRect()
    
    const n = parseInt(evt.target.id.slice(4,5)) - 1

    // console.log(info_rect.bottom)
    remind_container.style.top = (info_rect.top+36-60*n-control_react.top) + 'px'
    // console.log(sheet.scrollTop)

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
        const json = evt.target.id.slice(0,7)+'_remind1'
        const title = document.getElementById(evt.target.id.slice(0,7)+'_txt1').innerText
        // console.log(Learnmore['info5_remind1'][1])
        const detail_container = document.createElement('div')
        Learnmore[json][0].forEach(element => {
            const detail = document.createElement('p')
            const detail_txt = document.createTextNode(element)
            detail.append(detail_txt)
            detail_container.append(detail)
        });
        
        const more_container = document.createElement('details')
        const more_btn = document.createElement('summary')
        const btn_text = document.createTextNode('learn more')

        const txt_container = document.createElement('div')
        Learnmore[json][1].forEach(element => {
            const txts = document.createElement('p')
            const more_txt = document.createTextNode(element)
            more_btn.append(btn_text)
            txts.append(more_txt)
            txt_container.append(txts)
        });
        

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
        // remind.removeChild(remind.lastElementChild)
        
        remind.appendChild(detail_container)
        more_container.appendChild(more_btn)
        more_container.appendChild(txt_container)
        // more_container.style='--duration: 1s'
        remind.appendChild(more_container)
        remind.appendChild(video_container)
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
    sheet.scrollTo(0,1300)
}

function form(){
    var evt = window.event || evt;

    const type1 = document.getElementById('type1')
    const type2 = document.getElementById('type2')
    const type3 = document.getElementById('type3')
    const type4 = document.getElementById('type4')
    type1.checked = false
    type2.checked = false
    type3.checked = false
    type4.checked = false
    if(evt.target.id === 'researchp'){
        return
    }
    
    if(evt.target.id == 'form1' || evt.target.id == 'form2' || evt.target.id == 'form3'){
        type1.removeAttribute('disabled')
        type2.setAttribute('disabled', '')
        type3.setAttribute('disabled', '')
        type4.setAttribute('disabled', '')
        type1.style = 'cursor: pointer'
        type2.style = 'cursor: default'
        type3.style = 'cursor: default'
        type4.style = 'cursor: default'
    }
    if(evt.target.id == 'form4'){
        type1.removeAttribute('disabled')
        type2.removeAttribute('disabled')
        type3.removeAttribute('disabled')
        type4.removeAttribute('disabled')
        type1.style = 'cursor: pointer'
        type2.style = 'cursor: pointer'
        type3.style = 'cursor: pointer'
        type4.style = 'cursor: pointer'
    }
    if(evt.target.id == 'form5'){
        type1.setAttribute('disabled', '')
        type2.removeAttribute('disabled')
        type3.removeAttribute('disabled')
        type4.removeAttribute('disabled')
        type1.style = 'cursor: default'
        type2.style = 'cursor: pointer'
        type3.style = 'cursor: pointer'
        type4.style = 'cursor: pointer'
        
    }
    if(evt.target.id == 'form6' || evt.target.id == 'form7'){
        type3.removeAttribute('disabled')
        type4.removeAttribute('disabled')
        type1.setAttribute('disabled', '')
        type2.setAttribute('disabled', '')
        type1.style = 'cursor: default'
        type2.style = 'cursor: default'
        type3.style = 'cursor: pointer'
        type4.style = 'cursor: pointer'
    }
}