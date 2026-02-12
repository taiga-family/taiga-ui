import"./chunk-B4AJQJMI.js";var a=`@import '@taiga-ui/styles/utils';

.wrapper {
    position: relative;
}

.fade {
    .transition(max-block-size);

    max-block-size: calc(3 * (1.25rem + var(--tui-typography-offset)));

    &_expanded {
        max-block-size: 15rem;
    }
}

.expand {
    .transition(opacity, visibility);

    position: absolute;
    bottom: 0;
    right: 0;
    transition-delay: var(--tui-duration);

    &_hidden {
        opacity: 0;
        visibility: hidden;
    }
}
`;export{a as default};
