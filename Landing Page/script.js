const scrollRevealOption={
    distance:"100px",
    origin:"bottom",
    duration:1000
};

//header section
ScrollReveal().reveal(".header_section h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_section p",{
    ...scrollRevealOption,
    delay:500
});

ScrollReveal().reveal(".header_section form",{
    ...scrollRevealOption,
    delay:1000
});

ScrollReveal().reveal(".header_section a",{
    ...scrollRevealOption,
    delay:1500
});

const swiper = new Swiper(".swiper",{
    loop:true,
    pagination:{
        el:".swiper-pagination",
    },
});