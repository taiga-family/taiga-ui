import"./chunk-HU6DUUP4.js";var i=`@import '@taiga-ui/styles/utils';

.like {
    inline-size: var(--tui-height-m);
    block-size: var(--tui-height-m);
    border-radius: 100%;
    cursor: pointer;

    &::before {
        .fullsize();

        content: '';
        background: currentColor;
        mask: url('/assets/taiga-ui/icons/heart.svg') no-repeat center / 3em 1.5em;
    }

    &:checked::before {
        color: var(--tui-text-negative);
        mask: url('/assets/taiga-ui/icons/heart-filled.svg') no-repeat center;
    }
}
`;export{i as default};
