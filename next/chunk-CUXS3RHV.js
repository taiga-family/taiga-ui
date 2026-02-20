import"./chunk-HU6DUUP4.js";var a=`@import '@taiga-ui/styles/utils';

.tiles {
    inline-size: 10rem;
    gap: 1rem;
    grid-auto-rows: minmax(var(--tui-height-m), auto);
}

@media @tui-mobile {
    .tile_tall {
        --tui-height: 2;
    }
}

.content {
    .transition(box-shadow);

    display: flex;
    block-size: 100%;
    align-items: center;
    padding: 0 1rem;
    background: var(--tui-background-base);
    border-radius: var(--tui-radius-l);
    border: 1px solid var(--tui-border-normal);
    cursor: ns-resize;

    tui-tile._dragged & {
        box-shadow: var(--tui-shadow-small-hover);
    }
}
`;export{a as default};
