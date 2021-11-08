function popup() {
    var evt = window.event || evt;
    console.log('pop:'+evt.target.id)
    var popup = document.getElementById(evt.target.id+'_window');
    popup.classList.add("show");
    // popup.className = 'note_container show'
}

function close_popup(){
    var evt = window.event || evt;
    console.log('close'+evt.target.id)
    var popup = document.getElementById(evt.target.id.slice(0,9)+'_window');
    popup.classList.remove("show");
    // popup.className = 'note_container show'
}