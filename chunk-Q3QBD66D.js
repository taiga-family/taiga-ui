import"./chunk-HU6DUUP4.js";var o=`@import '@taiga-ui/styles/utils';

:host {
    inline-size: 100%;
    color: var(--tui-text-primary);
    background: var(--tui-background-base);
    font-family: monospace;
    table-layout: fixed;

    tr:not(:first-child) {
        border-block-start: 1px solid var(--tui-border-normal);
    }

    td {
        padding: 1.5rem 0.5rem;

        &:last-child {
            color: var(--tui-text-secondary);
            padding-inline-end: 0;
        }
    }
}

.circle {
    text-align: center;
}

.demo {
    position: relative;
    display: inline-flex;
    inline-size: 3rem;
    block-size: 3rem;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: inset 0 0 0 1px var(--tui-border-normal);
}

.name {
    .transition(color);

    position: relative;
    display: inline-block;
    min-block-size: 2rem;
    background: var(--tui-background-base-alt);
    border-radius: var(--tui-radius-m);
    padding: 0.25rem 0.75rem;
    box-sizing: border-box;

    &:hover {
        color: transparent;

        .copy {
            opacity: 1;
        }
    }
}

.value {
    position: relative;
    inline-size: fit-content;
    margin-inline-end: 1rem;
    padding: 1rem 0.75rem;
    overflow-wrap: break-word;
    text-align: center;
}

.copy {
    .transition(opacity);

    position: absolute;
    top: 0;
    left: 0;
    background: var(--tui-background-base-alt);
    opacity: 0;
    inline-size: 100%;
    block-size: 100%;
    min-block-size: 2rem;

    ::ng-deep button {
        position: absolute;
        top: 0;
        left: 0;
        block-size: 100%;
        inline-size: 100%;
    }

    &:hover {
        opacity: 1;
    }
}
`;export{o as default};
