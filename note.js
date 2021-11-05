function popup() {
    var evt = window.event || evt;
    var popup = document.getElementById(evt.target.id+'_window');
    popup.classList.toggle("show");
}