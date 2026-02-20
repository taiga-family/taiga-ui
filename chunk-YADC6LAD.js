import"./chunk-HU6DUUP4.js";var n=`[data-appearance~='compact'] {
    padding: 1rem !important;
    border-radius: var(--tui-radius-s) !important;
}

[data-appearance='sheet'] {
    inline-size: 100vw;
    align-self: flex-end;
    padding: 1.25rem 1rem ~'max(1.25rem, env(safe-area-inset-bottom))';

    --tui-from: translate3d(0, 100vh, 0);

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiSlide;
    }

    > header,
    > ng-component > header {
        font: var(--tui-typography-heading-h6);
    }

    > p,
    > ng-component > p {
        margin: 1rem 0 0;
    }

    > button {
        background: none !important;
    }
}
`;export{n as default};
