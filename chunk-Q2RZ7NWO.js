import"./chunk-HU6DUUP4.js";var i=`.header {
    margin-block-end: 1.5rem;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    block-size: 4rem;
    margin-block-end: auto;
}

.pad {
    display: grid;
    grid-template-columns: repeat(3, 4.5rem);
    gap: 0.5rem 1.5rem;
    justify-items: center;
    margin-block-end: 0.5rem;
}

.key {
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: 4.5rem;
    block-size: 4.5rem;
    border: none;
    border-radius: 50%;
    background: transparent;
    font: 2.5rem/1 var(--tui-typography-family-display);
    color: var(--tui-text-primary);
    cursor: pointer;
    transition: background var(--tui-duration-short, 150ms);

    @media (pointer: fine) {
        &:hover {
            background: var(--tui-background-neutral-1-hover);
        }
    }

    &:focus-visible {
        outline: 0.125rem solid var(--tui-border-focus);
        outline-offset: 0.125rem;
    }

    &:active {
        background: var(--tui-background-neutral-1-pressed);
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
}

tui-app-bar {
    align-self: stretch;
}
`;export{i as default};
