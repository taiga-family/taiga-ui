import"./chunk-HU6DUUP4.js";var e=`.card {
    background: currentColor right no-repeat;
    border-radius: 1.25rem;
    box-shadow: inset -4rem 0 3rem -2rem;
    padding: 1rem;

    &:hover {
        box-shadow: inset 0 0 3rem -2rem;
        transform: scale(1.1);
    }

    &:active::before {
        backdrop-filter: brightness(0.9);
    }
}

.restaurant {
    background-image: url('/assets/images/restaurant-1.jpg');
    border-radius: 1.25rem;
    box-shadow: inset 0 10rem 7rem -5rem #000;
    padding: 1rem;

    &:hover {
        background-image: url('/assets/images/restaurant-2.jpg');
    }
}

.blur {
    background-image: url('/assets/images/restaurant-2.jpg');
    border-radius: 0;
    padding: 1.25rem;
    clip-path: inset(0 round 5rem); // for crisp edges of blurred background

    &::before {
        backdrop-filter: blur(1rem);
    }
}

.reviews {
    // tuiSurface="floating" preset
}

.mask {
    background: #333 radial-gradient(circle at 80% 70%, #aff218 -20%, transparent 60%);
    border-radius: 0;
    mask: linear-gradient(
        180deg,
        #222 77.89%,
        rgba(36, 36, 36, 0.991) 79.36%,
        rgba(42, 42, 42, 0.964) 80.84%,
        rgba(52, 52, 52, 0.918) 82.31%,
        rgba(67, 67, 67, 0.853) 83.79%,
        rgba(85, 85, 85, 0.768) 85.26%,
        rgba(107, 107, 107, 0.668) 86.73%,
        rgba(132, 132, 132, 0.557) 88.21%,
        rgba(157, 157, 157, 0.443) 89.68%,
        rgba(182, 182, 182, 0.332) 91.16%,
        rgba(204, 204, 204, 0.232) 92.63%,
        rgba(222, 222, 222, 0.147) 94.1%,
        rgba(237, 237, 237, 0.0817) 95.58%,
        rgba(247, 247, 247, 0.0355) 97.05%,
        rgba(253, 253, 253, 0.00865) 98.53%,
        rgba(255, 255, 255, 0) 100%
    );
}
`;export{e as default};
