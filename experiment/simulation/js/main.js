//Your JavaScript goes in here
function togglePower(button) {
    button.classList.toggle('on');
    document.getElementById('off').style.color = "white";
    document.getElementById('on').style.color = "green";
}
const sample_placing_handler = (button) => {
    button.classList.remove('btn-danger');
    button.classList.add('btn-success');
}