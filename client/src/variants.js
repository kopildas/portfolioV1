const fadeIn =(direction, delay)=>{
    return{
        hidden:{
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 90 : direction === 'right' ? -90 : 0,
            // x: direction === 'leftBox' ? 80 : direction === 'rightBox' ? -80 : 0,
        },
        show: {
            y:0,
            x:0,
            opacity:1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],
            }
        }
    }
}

const fadeIn_2 =(direction, delay)=>{
    return{
        hidden:{
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            // x: direction === 'leftBox' ? 80 : direction === 'rightBox' ? -80 : 0,
        },
        show: {
            y:0,
            x:0,
            opacity:1,
            transition: {
                type: 'tween',
                duration: 1.6,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],
            }
        }
    }
}

const springAnimation =(direction, delay)=>{
    return{
        hidden:{
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            // x: direction === 'leftBox' ? 80 : direction === 'rightBox' ? -80 : 0,
        },
        show: {
            y:0,
            x:0,
            opacity:1,
            transition: {
                type: "spring", 
                // duration: 5, 
                damping: 5,
                    mass: 0.75,
                    stiffness: 100,
                bounce: 0.6,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],
            }
        }
    }
}

export {fadeIn,springAnimation,fadeIn_2}