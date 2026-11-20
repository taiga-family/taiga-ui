import"./chunk-LQ6M4NCU.js";var t=`.tiles {
    inline-size: 10rem;
    gap: 1rem;
    grid-auto-rows: minmax(var(--tui-height-m), auto);
}

.tall {
    --tui-height: 2;
}

.content {
    display: flex;
    flex-direction: column;
    transition-property: box-shadow;
    transition-duration: var(--tui-duration);
    block-size: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    background: var(--tui-background-base);
    border-radius: var(--tui-radius-l);
    border: 1px solid var(--tui-border-normal);
    cursor: ns-resize;

    tui-tile._dragged & {
        box-shadow: var(--tui-shadow-small-hover);
    }
}
`;export{t as default};
