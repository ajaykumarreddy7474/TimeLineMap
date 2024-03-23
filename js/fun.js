const timeline_wrapper=document.querySelector('.timeline-wrapper');
timelines=document.querySelectorAll('.timeline li .data');

for (const time of timelines) {
    time.addEventListener('click', function(event) {
        event.preventDefault(); 
        time.classList.toggle('show');
    });
}

timeline_wrapper.addEventListener('mousemove',(event)=>{
const timeline =document.querySelector('.timeline');

let scroll_width=event.pageX / timeline_wrapper.clientWidth * (timeline_wrapper.clientWidth - timeline.clientWidth);
console.log(scroll_width.toFixed(1));

timeline.style.left =scroll_width.toFixed(1) + 'px';


});







/* ------------------- loader ------------------- */

