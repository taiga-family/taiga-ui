import"./chunk-LQ6M4NCU.js";var a=`@import '@taiga-ui/styles/utils';

:host {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    font: var(--tui-typography-heading-h6);
    place-items: center;
}

tui-scroll-wheel {
    block-size: 15rem;
    mask-image: linear-gradient(transparent, black 7.5rem, transparent);
    justify-self: start;

    &:first-child {
        justify-self: end;
    }
}

div {
    .transition(color);

    display: flex;
    align-items: center;
    justify-content: center;
    block-size: 3rem;
    font: var(--tui-typography-heading-h6);
    font-variant: tabular-nums;
    scroll-snap-align: start;
    color: var(--tui-text-tertiary);

    &._current {
        color: var(--tui-text-primary);
    }
}

p {
    grid-column: 1 / -1;
}
`;export{a as default};
