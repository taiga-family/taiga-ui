import"./chunk-LQ6M4NCU.js";var t=`.like {
    inline-size: var(--tui-height-m);
    block-size: var(--tui-height-m);
    border-radius: 100%;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: currentColor;
        mask-image: url('/assets/taiga-ui/icons/heart.svg');
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: 3em 1.5em;
    }

    &:checked::before {
        color: var(--tui-text-negative);
        mask-image: url('/assets/taiga-ui/icons/heart-filled.svg');
        mask-repeat: no-repeat;
        mask-position: center;
    }
}
`;export{t as default};
