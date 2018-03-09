var count = 31;
setInterval(function() {
count--;
if(count < 0) {
window.location = 'menu/home.html';
}else{
document.getElementById("countdown").innerHTML = count;
}
}, 1000);