import"./chunk-42JZD6NG.js";var i=`@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
}

.cell {
    inline-size: 21.25rem;
}

.img {
    display: block;
    margin: auto;
    max-inline-size: 25rem;
}

.img-min {
    block-size: 5rem;
}

.title {
    margin: 0;
    text-align: center;
}

.grid {
    display: grid;
    grid-gap: 1.25rem;

    .tui-island {
        border: 1px solid var(--tui-border-normal);
    }
}

.grid-container {
    grid-template-columns: repeat(3, 2fr);
    grid-auto-rows: max-content;

    @media @tui-desktop {
        grid-template-columns: repeat(1, 2fr);
    }
}

[tuiCardLarge] {
    color: var(--tui-text-primary);
}

.preview {
    display: flex;
    grid-column: 1 / -1;
    background: #b3bdc8 !important;
    border-radius: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    border: none;
    overflow: hidden;

    .title {
        margin-block-start: 2.1875rem;
    }

    [tuiCardLarge] {
        .transition(transform);

        display: inline;
        box-shadow: none;
        border: 1px solid var(--tui-border-normal);
        border-block-end: none;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        background: var(--tui-background-base);
        transform: translateY(2.5rem);
    }

    &:hover [tuiCardLarge] {
        transform: translateY(0);
    }
}
`;export{i as default};
