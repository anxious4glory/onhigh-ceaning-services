// footer get year
const date = new Date();
let year = date.getFullYear();
document.getElementById('dynamicYear').innerHTML = year;


// contact form function
// const contactForm = document.querySelector('.contact_form');
// let name = document.getElementById('name');
// let email = document.getElementById('email');
// let subject = document.getElementById('subject');
// let message = document.getElementById('message');

// prevents page from default refresh when submit button is clicked in contact form
// contactForm.addEventListener('submit', (e)=> {
//         e.preventDefault();
        
//         let formInputData = {
//             name: name.value,
//             email: email.value,
//             subject: subject.value,
//             message: message.value
//         }

//         let xhr = new XMLHttpRequest();
//         xhr.open('POST', '/');
//         xhr.setRequestHeader('content-type', 'application/json');
//         xhr.onload = function () {
//             console.log(xhr.responseText);
//             if (xhr.responseText == 'success') {
                
//                 document.getElementById("feedback").innerHTML = "Email Sent Successfully!";
                  
//                 name.value = '';
//                 email.value = '';
//                 subject.value = '';
//                 message.value = '';
//             } else{
//                 document.getElementById("feedback2").innerHTML = "Error Sending Email Try Again!";
//             }
//         }

//         xhr.send(JSON.stringify(formInputData));

// });



// Slider Animation
gsap.to('.text', {y: '0%', duration: 1, stagger: 0.25 });

gsap.to('.about', {

    scrollTrigger: {
        trigger: '.about',
        toggleActions: 'restart none none none'
    },
    duration: 1,
    stagger: 0.25,
    y: '0', 
});

gsap.utils.toArray(".sbmt").forEach(sbmt => {
    let hover = gsap.to('.sbmt', {scale: 1.1, duration: 0.5, paused: true, ease: "power1.inOut"});
    sbmt.addEventListener("mouseenter", () => hover.play());
    sbmt.addEventListener("mouseleave", () => hover.reverse());
  });

gsap.to('.contact_us_header', {
    scrollTrigger: {
        trigger: '.contact_us_header',
        toggleActions: 'restart none none none'
    },
    duration: 1,
    y: '0'
});

gsap.to('.form', {
    scrollTrigger: {
        trigger: '.form',
        toggleActions: 'restart none none none'
    },
    duration: 1, 
    stagger: 0.25,
    y: '0'
});


gsap.to('.formBtn', {
    scrollTrigger: {
        trigger: '.formBtn',
        toggleActions: 'restart none none none'
    },
    y: '0',
    duration: 4,
    ease: "power1.inOut"
});