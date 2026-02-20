import"./chunk-HU6DUUP4.js";var e=`@import '@taiga-ui/styles/utils';

.wrapper {
    display: grid;
    inline-size: 100%;
    gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    font: var(--tui-typography-body-xs);

    @media @tui-desktop-min {
        font: var(--tui-typography-body-s);
        inline-size: 31.25rem;
    }
}

.item {
    display: flex;
    block-size: 6.25rem;
    background: var(--tui-background-neutral-1);
    color: var(--tui-text-primary);
    justify-content: center;
    align-items: center;
}

@breakpoints: tui-mobile, tui-mobile-min, tui-mobile-interval, tui-tablet, tui-tablet-min, tui-tablet-interval,
    tui-desktop, tui-desktop-min, tui-desktop-interval, tui-desktop-lg-min;

each(@breakpoints, {
    .@{value} {
        @media @@value {
            background: var(--tui-background-accent-1);
            color: var(--tui-text-primary-on-accent-1);
        }
    }
});

.tui-desktop-lg-min {
    grid-column: span 3;
}
`;export{e as default};
