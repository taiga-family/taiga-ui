import"./chunk-42JZD6NG.js";var a=`@import '@taiga-ui/core/styles/taiga-ui-local';

.wrapper {
    position: relative;
}

.fade {
    .transition(height);

    block-size: 3.75rem;

    &_expanded {
        block-size: 10rem;
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
