var particles = Particles.init({
    selector:'.background',
    sizeVariations:2,
    connectParticles:true,
    speed:1,
    color:'#7900FF',
    random:true,

    responsive: [{
        breakpoint:768,
        options:{
            connectParticles:false,
            sizeVariations:5,
        }
        
    }

    ]
})