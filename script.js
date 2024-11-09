// Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Mobile menu toggle
// const mobileMenuButton = document.createElement('button');
// mobileMenuButton.innerHTML = '&#9776;'; // Hamburger icon
// mobileMenuButton.classList.add('mobile-menu-button');
// document.querySelector('nav').appendChild(mobileMenuButton);

// const navUl = document.querySelector('nav ul');

// mobileMenuButton.addEventListener('click', () => {
//     navUl.classList.toggle('show');
// });

// // Add mobile menu button styles
// const style = document.createElement('style');
// style.textContent = `
//     .mobile-menu-button {
//         display: none;
//         background: none;
//         border: none;
//         font-size: 1.5rem;
//         cursor: pointer;
//     }

//     @media (max-width: 768px) {
//         .mobile-menu-button {
//             display: block;
//         }

//         nav ul.show {
//             display: flex;
//             flex-direction: column;
//             position: absolute;
//             top: 100%;
//             left: 0;
//             right: 0;
//             background-color: #fff;
//             box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//         }

//         nav ul.show li {
//             margin: 1rem;
//         }
//     }
// `;
// document.head.appendChild(style);

// // Animate services on scroll
// const serviceItems = document.querySelectorAll('.service-item');

// const animateOnScroll = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//             observer.unobserve(entry.target);
//         }
//     });
// };

// const observer = new IntersectionObserver(animateOnScroll, {
//     root: null,
//     threshold: 0.1
// });

// serviceItems.forEach(item => {
//     observer.observe(item);
// });

// // Add animation styles
// const animationStyle = document.createElement('style');
// animationStyle.textContent = `
//     .service-item {
//         opacity: 0;
//         transform: translateY(20px);
//         transition: opacity 0.5s ease, transform 0.5s ease;
//     }

//     .service-item.animate {
//         opacity: 1;
//         transform: translateY(0);
//     }
// `;
// document.head.appendChild(animationStyle);

// // Testimonial slider
// const testimonials = [
//     {
//         text: "Working with Maxon has been an absolute pleasure. Their creative team truly understands our brand and has helped us achieve remarkable growth.",
//         author: "John Doe, CEO of XYZ Company"
//     },
//     {
//         text: "Maxon's innovative approach to marketing has transformed our business. We've seen a significant increase in customer engagement and sales.",
//         author: "Jane Smith, Marketing Director at ABC Corp"
//     },
//     {
//         text: "The team at Maxon goes above and beyond. Their attention to detail and commitment to excellence is unmatched in the industry.",
//         author: "Mike Johnson, Founder of 123 Startup"
//     }
// ];

// let currentTestimonialIndex = 0;
// const testimonialContainer = document.querySelector('.testimonial-container');

// function updateTestimonial() {
//     const testimonial = testimonials[currentTestimonialIndex];
//     testimonialContainer.innerHTML = `
//         <blockquote>${testimonial.text}</blockquote>
//         <cite>- ${testimonial.author}</cite>
//     `;
// }

// function nextTestimonial() {
//     currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
//     updateTestimonial();
// }

// updateTestimonial();
// setInterval(nextTestimonial, 5000);


// Counter Design
document.addEventListener("scroll", () =>{
function counter(id, start, end, duration){
let obj = document.getElementById(id),
current = start,
range = end - start,
increment = end > start ? 1 : -1,
step = Math.abs(Math.floor(duration / range)),
timer = setInterval(() => {
current += increment;
obj.textContent = current;
if(current == end){
clearInterval(timer);
}
}, step);
}
counter("count1", 0, 92, 1000);
counter("count2", 0, 85, 3000);
counter("count3", 0, 67, 2000);
counter("count4", 0, 20, 1000);
});

let navbar = $(".navbar-2");
$(window).scroll(function(){
let oTop = $(".feature_section").offset().top - window.innerHeight;
if( $(window).scrollTop() > oTop){
navbar.addClass("sticky");
}
else{
navbar.removeClass("sticky");
}
});

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});
