'use strict'
const SubmitButton = document.querySelector('.submit-btn');
const oneStar = document.querySelector('.one');
const twoStar = document.querySelector('.two');
const threeStar = document.querySelector('.three');
const fourStar = document.querySelector('.four');
const fiveStar= document.querySelector('.five');
const rated= document.querySelector ('.selected-number');
const ratingPage = document.querySelector ('.rating-div');
const thankYouPage = document.querySelector ('.thank-you-page');

// defining functions
const Submit = function (){
ratingPage.style.display='none';
thankYouPage.style.display = 'block';
}

// adding event listeners to the buttons
oneStar.addEventListener ('click',function (){ rated.innerHTML = '1';
oneStar.classList.add('clicked');
oneStar.classList.remove('unclicked');
twoStar.classList.add('unclicked');
threeStar.classList.add('unclicked');
fourStar.classList.add('unclicked');
fiveStar.classList.add('unclicked')});

twoStar.addEventListener ('click',function (){ rated.innerHTML = '2';
twoStar.classList.add('clicked');
twoStar.classList.remove('unclicked');
oneStar.classList.add('unclicked');
threeStar.classList.add('unclicked');
fourStar.classList.add('unclicked');
fiveStar.classList.add('unclicked')});

threeStar.addEventListener ('click',function (){ rated.innerHTML = '3';
threeStar.classList.add('clicked');
oneStar.classList.add('unclicked');
twoStar.classList.add('unclicked');
threeStar.classList.remove('unclicked');
fourStar.classList.add('unclicked');
fiveStar.classList.add('unclicked')});

fourStar.addEventListener ('click',function (){ rated.innerHTML = '4';
fourStar.classList.add('clicked');
oneStar.classList.add('unclicked');
twoStar.classList.add('unclicked');
threeStar.classList.add('unclicked');
fourStar.classList.remove('unclicked');
fiveStar.classList.add('unclicked')});

fiveStar.addEventListener ('click',function (){ rated.innerHTML = '5';
fiveStar.classList.add('clicked');
oneStar.classList.add('unclicked');
twoStar.classList.add('unclicked');
threeStar.classList.add('unclicked');
fourStar.classList.add('unclicked');
fiveStar.classList.remove('unclicked')});




 SubmitButton.addEventListener ('click', Submit);