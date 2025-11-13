import"./chunk-42JZD6NG.js";var r=`@import '@taiga-ui/core/styles/taiga-ui-local';

.like {
    inline-size: var(--tui-height-m);
    block-size: var(--tui-height-m);
    border-radius: 100%;
    cursor: pointer;

    &::before {
        .fullsize();

        content: '';
        background: currentColor;
        mask: url('/assets/taiga-ui/icons/heart.svg') no-repeat center;
    }

    &:checked::before {
        color: var(--tui-text-negative);
        mask: url('/assets/taiga-ui/icons/heart-filled.svg') no-repeat center;
    }
}
`;export{r as default};
