function page1(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4",{
    y:-40,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2
})
tl.from(".center1 h2",{
    x:-200,
    opacity:0,
    duration:1,
    
})
tl.from(".center1 button",{
    opacity:0,
    duration:1.2,
})
tl.from(".center2 img",{
    opacity:0,
    duration:0.5
},"-=1")
tl.from(".section1bottom img",{
    opacity: 0,
    y:40,
    stagger:0.2,
    duration:2,
    // scrollTrigger: {
    //     trigger: ".section1bottom img",
    //     scroller: "body",
    //     markers: true,
    //     start: "top 80%",
    //     end: "top 50%"
    // }
})
}
page1();
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        
        start: "top 70%",
        end: "top 0",
        scrub: 2,
    }
})

tl2.from(".elem.line1.left",{
    opacity:0,
    x:-300,
    duration:1
},"a")
tl2.from(".elem.line1.right",{
    x: 300,
    opacity: 0,
    duration:1
},"a")
tl2.from(".elem.line2.left",{
    x: -300,
    opacity: 0,
    duration:1
},"b")
tl2.from(".elem.line2.right",{
    x: 300,
    opacity: 0,
    duration:1
},"b")

