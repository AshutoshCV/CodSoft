// var lastScrollTop = 0;
// var navbar = document.querySelector('.navbar'); // Change to .navbar ID or class selector
// var header = document.querySelector('.header'); // Assuming you want to hide the header as well

// window.addEventListener('scroll', function () {
//     var scrollTop = window.pageYOffset;

//     if (scrollTop > lastScrollTop) {
//         navbar.style.top = '-100px'; // Hide the navbar
//         header.style.top = '-100px'; // Hide the header
//     } else {
//         navbar.style.top = '0'; // Show the navbar
//         header.style.top = '0'; // Show the header
//     }

//     lastScrollTop = scrollTop;

// });

// const colortransitionDiv = document.getElementById('experience');
// const colors = ['red','green','blue','yellow'];
// let currentcolorindex = 0;
// function changebackgroundcolor(){
// colortransitionDiv.style.transition = 'background-color 1s ease';
//     colortransitionDiv.style.backgroundColor = colors[currentcolorindex];

// currentcolorindex = (currentcolorindex+1)% colors.length;
// }
// setInterval(changebackgroundcolor,3000);


let div = document.querySelectorAll('div');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100)

}


