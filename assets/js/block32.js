document.addEventListener('DOMContentLoaded', function(){
    const more1 = document.getElementById('more1');
    const card1 = document.querySelector('.card1-blok3');

    const more2 = document.getElementById('more2');
    const card2 = document.querySelector('.card2-blok3');

    const more3 = document.getElementById('more3');
    const card3 = document.querySelector('.card3-blok3');

    more1.addEventListener('click', function(e){
        e.preventDefault();
        card2.classList='card2-blok3';
        card3.classList='card3-blok3';
        card1.classList.toggle('card1-show');
    });

    more2.addEventListener('click', function(e){
        e.preventDefault();
        card1.classList='card1-blok3';
        card3.classList='card3-blok3';
        card2.classList.toggle('card2-show');
    });

    more3.addEventListener('click', function(e){
        e.preventDefault();
        card2.classList='card2-blok3';
        card1.classList='card1-blok3';
        card3.classList.toggle('card3-show');
    });
});

