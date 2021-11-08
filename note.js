function popup() {
    var evt = window.event || evt;
    var popup = document.getElementById(evt.target.id.slice(0,8)+'_window');
    popup.classList.toggle("show");
}