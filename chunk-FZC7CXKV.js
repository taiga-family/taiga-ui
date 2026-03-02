import"./chunk-HU6DUUP4.js";var a=`:host {
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
    font: var(--tui-typography-body-xs);

    &:first-child {
        grid-column: span 2;
    }

    .heading {
        font: var(--tui-typography-body-s);
        color: #fff;
        font-weight: bold;
        margin: -0.125rem 0 0;
    }

    .content {
        max-inline-size: 50%;
        color: #fff;
    }

    .badge {
        margin: auto auto -0.125rem -0.125rem;
    }
}

.restaurant {
    display: flex;
    block-size: 15rem;
    grid-column: span 3;
    grid-row: span 2;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    font-size: 1.375rem;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 0.25rem;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }
}

.blur {
    display: flex;
    grid-column: span 3;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    font: var(--tui-typography-heading-h6);
    color: #fff;

    .button {
        border-radius: 100%;
        margin-inline-start: auto;
    }
}

.reviews {
    display: flex;
    grid-column: span 3;
    grid-row: span 3;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1.5rem;

    .heading {
        margin: -0.25rem 0 0;
        font: var(--tui-typography-heading-h6);
    }

    .link {
        float: right;
        font: var(--tui-typography-body-m);

        // Safari 15+
        @supports (float: inline-end) {
            float: inline-end;
        }
    }

    .scrollbar {
        margin: 0.75rem -1.25rem 1.25rem;
        scroll-snap-type: x mandatory;
        overscroll-behavior-x: contain;
    }

    .wrapper {
        display: flex;
        padding: 0 1.25rem;
        gap: 0.625rem;

        &::after {
            content: '';
            min-inline-size: 0.625rem;
        }
    }

    .review {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-inline-size: calc(100% - 0.75rem);
        padding: 0.75rem 1rem 1rem;
        border-radius: 1rem;
        font: var(--tui-typography-body-l);
        scroll-snap-align: start;
        scroll-margin: 1.25rem;
    }

    .footer {
        display: flex;
        align-items: flex-end;
        gap: 0.75rem;
        margin-block-start: auto;
        font: var(--tui-typography-body-s);
    }

    .label {
        flex-direction: column-reverse;
        font-weight: bold;
    }
}

.mask {
    grid-column: span 3;
    grid-row: span 3;
    padding: 4rem 2rem 7rem;
    color: #fff;

    .heading {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font: var(--tui-typography-heading-h6);
        margin: 0;
    }

    .button {
        border-radius: 100%;
        transform: scale(0.75);
    }

    .sum {
        font: var(--tui-typography-heading-h4);
        margin-block-end: 4rem;
    }

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
`;export{a as default};
