let hinhanh=[];
let j=0;
let interval;
function loadanh(){
    for(let i=0;i<4;i++){
        hinhanh[i]=new Image();
        hinhanh[i].src="./img/picture"+i+".jpg";
        console.log(hinhanh[i]);
    }
    document.getElementById("anh").src=hinhanh[j].src;
    interval = setInterval(next, 2000);
}
function previous(){
    j--;
    if(j<0)j=hinhanh.length-1;
    document.getElementById("anh").src=hinhanh[j].src;
    resetInterval();
}
function next(){
    j++;
    if(j>=hinhanh.length)j=0;
    document.getElementById("anh").src=hinhanh[j].src;
    resetInterval();
}
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 2000);
}