document.addEventListener('DOMContentLoaded', function(){
    const button2 = document.getElementById('more1');
    const card2Blok3 = document.querySelector('.card2-blok3');


    button2.addEventListener('click', function(e){
        console.log("ljhksdaf");
        e.preventDefault();
        card2Blok3.this.classList.toggle('card2-show');
    });
});

// console.log(document.getElementById('button2'))
 console.log(document.querySelector('.card2-blok3'))