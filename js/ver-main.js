const timeline_wrapper=document.querySelector('.timeline-wrapper');
timelines=document.querySelectorAll('.timeline li .data');

for (const time of timelines) {
    time.addEventListener('click', function(event) {
        event.preventDefault(); 
        time.classList.toggle('show');
    });
}

