document.addEventListener("DOMContentLoaded", function(){
    
    var next = document.querySelector(".greater");
    var prev = document.querySelector(".lesser");
    var li = document.querySelectorAll('.li_chair');
    var index = 0;
    li[index].classList.add('visible');
    
    
    next.addEventListener("click", function() {
        li[index].classList.remove('visible');
        index++;
        if(index>li.length-1) {
            index = 0;
        } 
        li[index].classList.add('visible');
        
        });
    
    prev.addEventListener("click", function() {
        li[index].classList.remove('visible');
        index--;
        if(index<0) {
            index = li.length - 1;
        }
        li[index].classList.add('visible');
        
        });
       
});