import"./chunk-HU6DUUP4.js";var a=`@import '@taiga-ui/styles/utils';

:host {
    display: block;
    max-inline-size: 30rem;
}

.container {
    max-block-size: 4.5rem;
    overflow: hidden;

    &_expanded {
        max-block-size: 100%;
    }
}

.item {
    .transition(~'transform, opacity');

    opacity: 0;
    transform: scale(0.9);
    margin: 0 0.25rem 0.25rem 0;

    &_visible {
        opacity: 1;
        transform: scale(1);
    }
}

.more {
    margin: 0 0.25rem 0.25rem 0;
}
`;export{a as default};
