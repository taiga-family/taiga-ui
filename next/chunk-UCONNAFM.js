import"./chunk-HU6DUUP4.js";var i=`:host {
    display: grid;
    grid-template-columns: repeat(6, 6.5rem);
    grid-auto-rows: 7rem;
    align-items: start;
    gap: 1rem;
}

.card {
    display: flex;
    block-size: 7rem;
    flex-direction: column;

    &:first-child {
        grid-column: span 2;
    }

    [tuiTitle] {
        color: var(--tui-text-primary);
        margin-block-end: auto;
    }
}

.restaurant {
    display: flex;
    block-size: 15rem;
    grid-column: span 3;
    grid-row: span 2;
    flex-direction: column;
    justify-content: space-between;

    .footer {
        display: flex;
        justify-content: space-between;

        button {
            border-radius: 5rem;
            backdrop-filter: blur(1rem) brightness(0.5);
        }
    }
}

.blur {
    display: flex;
    grid-column: span 3;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    color: var(--tui-text-primary);

    .button {
        border-radius: 100%;
        margin-inline-start: auto;
    }
}

.reviews {
    grid-column: span 3;
    grid-row: span 3;

    .scrollbar {
        margin: 0.75rem -1.5rem 1.25rem;
        scroll-snap-type: x mandatory;
        overscroll-behavior-x: contain;
    }

    .wrapper {
        display: flex;
        padding: 0 1.5rem;
        gap: 0.625rem;

        &::after {
            content: '';
            min-inline-size: 0.625rem;
        }
    }

    .review {
        display: flex;
        flex-direction: column;
        min-inline-size: calc(100% - 0.75rem);
        padding: 0.75rem 1rem 1rem;
        border-radius: 1rem;
        scroll-snap-align: start;
        scroll-margin: 1.5rem;
    }

    [tuiCell] {
        margin-block-start: auto;
    }
}

.mask {
    grid-column: span 3;
    grid-row: span 3;
    padding: 4rem 2rem 7rem;

    .footer {
        display: flex;
        gap: 0.75rem;
        margin-block-start: 4rem;
    }

    .add {
        inline-size: 3rem;
        border-radius: var(--tui-radius-xs);
    }
}
`;export{i as default};
