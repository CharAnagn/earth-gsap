gsap.registerPlugin(ScrollTrigger);

function init() {

gsap.to('.hero',{ opacity:0,y:70, scrollTrigger:{
    trigger: '.hero',
    start:'top top',
    end:'bottom center',
    scrub:true,
    
}})




gsap.set(".forest",{scrollTrigger:{
    trigger:'.forest',
    start:'top bottom-=50%',
    end:'bottom center-=10%',
    toggleClass: 'active',
    duration:2
}})

gsap.from(".forest .plant #hands",{x:"-20%",opacity:0, scrollTrigger:{
    trigger:'.forest',
    start:'top bottom-=50%',
    end:'bottom center+=70%',
    scrub:true,
    
}})

gsap.from(" #leaves",{y:"30%",opacity:0, scrollTrigger:{
    trigger:'.forest',
    start:'top bottom-=80%',
    end:'bottom center+=50%',
    scrub:true,
}})

gsap.from(".forest .text-forest ",{y:"-10%",opacity:0,transfromOrigin:"center", scrollTrigger:{
    trigger:'.forest',
    start:'top bottom-=80%',
    end:'bottom center+=50%',
    scrub:true,
}})

gsap.from("#dots path",{opacity:0,stagger:1,
    scrollTrigger:{
        trigger:".connections",
        start:"top top",
        end:"bottom center+=50%",
        
       
    }
})

gsap.from("#connection-lines path",{
    opacity:0,
    stagger:2,
    scrollTrigger:{
        trigger:".connections",
        start:"top top",
        end:"bottom center",
        
    }
})

gsap.from(".connections-text p",{
    opacity:0,
    x:-50,
    scrollTrigger:{
        trigger:".connections",
        start:"top top",
        end:"bottom center+=25%",
        scrub:true,
        

    }
})
 

gsap.from("#stars path",{
    yoyo:true,
    opacity:0,
    stagger:0.4,
    repeat:-1,
    duration:0.5,
    scrollTrigger:{
        trigger:".spaceship",
        start:"top top",
        markers:true
    }
})


gsap.from(".human",{opacity:0,y:-50,scrollTrigger:{
    trigger:".human",
    start:"top center",
    end:"bottom center+=50%",
    scrub:true,
    
}})

gsap.timeline({repeat:-1}).to("#human",{
    y:20,
    duration:3,
    ease:"back"
}).to("#human",{
    y:-20,
    duration:3,
    ease:"bacl"
})
.to("#human",{
    y:0,
    duration:3,
    ease:"back"
})

gsap.timeline({repeat:-1,yoyo:true}).to("#right-hand",{
    skewX:10,
    transfromOrigin:"center",
    duration:3
})

gsap.timeline({repeat:-1,yoyo:true}).to("#left-hand",{
skewX:-5,
duration:3
})

gsap.from(".spaceship-text",{
    y:-60,
    opacity:0,
    scrollTrigger:{
        trigger:".spaceship",
        start:"top top+=20%",
        end:"bottom center+=50%",
        scrub:true,
        

    }
})




}

window.addEventListener('load', ()=> init())