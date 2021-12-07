var animations = [
    [
        {
            id: '#i01',
            duration: 15000,
            delayBefore: 0,
            delayAfter: 0,
            easing:"linear",
            animations: { opacity:1, scale:[1, 2], left:0}
        },
        {
            id: '#i02',
            duration: 550,
            delayBefore: 500,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { opacity:1, left:0}
        },
        {
            id: '#i03',
            duration: 550,
            delayBefore: 500,
            delayAfter: 2000,
            easing:"easeOutCubic",
            animations: { opacity:1, left:"10px"}
        },
    ],
    [
        {
            id: '#i02',
            duration: 300,
            delayBefore: 0,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { left:"-100%"}
        },
    ],
    [
        {
            id: '#i04',
            duration: 550,
            delayBefore: 0,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { opacity:1, left:0}
        },
        {
            id: '#i03',
            duration: 550,
            delayBefore: 0,
            delayAfter: 2500,
            easing:"easeOutCubic",
            animations: { rotateZ:[-90, 0]}
        },
    ],
    [
        {
            id: '#i04',
            duration: 300,
            delayBefore: 0,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { left:"-100%"}
        },
    ],
    [
        {
            id: '#i05',
            duration: 550,
            delayBefore: 0,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { opacity:1, left:0}
        },
        {
            id: '#i03',
            duration: 550,
            delayBefore: 0,
            delayAfter: 2500,
            easing:"easeOutCubic",
            animations: { rotateZ:[-180, -90]}
        },
    ],
    [
        {
            id: '#i05',
            duration: 300,
            delayBefore: 0,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { left:"-100%"}
        },
    ],
    [
        {
            id: '#i06',
            duration: 550,
            delayBefore: 500,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { opacity:1, top:0}
        },
        {
            id: '#i03',
            duration: 550,
            delayBefore: 0,
            delayAfter: 2200,
            easing:"easeOutCubic",
            animations: { rotateZ:[-270, -180]}
        },
    ],
    [
        {
            id: '#i03',
            duration: 300,
            delayBefore: 0,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { opacity:0}
        },
        {
            id: '#i06',
            duration: 300,
            delayBefore: 0,
            delayAfter: 0,
            easing:"easeOutCubic",
            animations: { opacity:0}
        },
    ],
    {
        id: '#i07',
        duration: 800,
        delayBefore: 0,
        delayAfter: 0,
        easing:"easeOutCubic",
        animations: { opacity:1}
    },
    {
        id: '#i08',
        duration: 550,
        delayBefore: 0,
        delayAfter: 0,
        easing:"easeOutCubic",
        animations: { opacity:1, top:0}
    },
]
new YAnimation(animations, { loop: false, clearAfterEnd: false }).startAnimation()