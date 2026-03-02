import"./chunk-HU6DUUP4.js";var r=`@import '@taiga-ui/styles/utils';

.scale {
    @media @tui-mouse {
        &:hover {
            transform: scale(1.15);
        }
    }

    &:active {
        transform: scale(0.95);
    }
}

.overlay {
    &::after {
        opacity: 0;
        background: linear-gradient(
            -45deg,
            #a1a1b3 0.36%,
            #d4d1d8 46.96%,
            #f7fafa 67.14%,
            #d4d1d8 83.19%,
            #a1a1b3 93.03%
        );
    }

    @media @tui-mouse {
        &:hover::after {
            opacity: 0.5;
        }
    }

    &:active::after {
        opacity: 1;
    }
}

.highlight {
    @media @tui-mouse {
        &:hover::before {
            backdrop-filter: brightness(1.1);
        }
    }

    &:active::before {
        backdrop-filter: brightness(0.9);
    }
}

.offset:hover {
    transform: translate3d(0, -0.25rem, 0);
}

.background {
    &::after {
        background: url('/assets/images/not-found.svg') top;
        background-size: 300%;
    }

    &:hover::after {
        transform: scale(1.15);
    }
}

.shadow:hover {
    box-shadow: var(--tui-shadow-small-hover);
}
`;export{r as default};
