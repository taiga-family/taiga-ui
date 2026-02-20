import"./chunk-HU6DUUP4.js";var i=`@import '@taiga-ui/styles/utils';

:host {
    .transition(background);

    position: relative;
    display: flex;
    block-size: var(--tui-height-s);
    align-items: center;
    padding: 0 0.5rem;
    border-radius: var(--tui-radius-xs);
    background: var(--tui-background-base);

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: -0.75rem;
        z-index: -1;
    }

    &::before {
        inline-size: 1rem;
        border-block-end: 1px solid var(--tui-border-normal);
    }

    &::after {
        top: -1rem;
        bottom: 1rem;
        border-inline-start: 1px solid var(--tui-border-normal);
    }

    &._expandable {
        &:hover {
            cursor: pointer;
            background: var(--tui-background-base-alt);
        }
    }
}

tui-icon {
    position: relative;
    z-index: 1;
    background: inherit;
}
`;export{i as default};
