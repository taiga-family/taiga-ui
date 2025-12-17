import"./chunk-B4AJQJMI.js";var a=`@import '@taiga-ui/core/styles/taiga-ui-local';

app {
    display: block;
}

.app-links {
    display: flex;
    align-items: center;
    gap: 1.25rem;
}

.app-stackblitz {
    .transition(background);

    background: var(--tui-text-tertiary);
    font-size: 1.25rem !important;

    a:hover & {
        background: var(--tui-text-secondary);
    }

    a:active & {
        background: var(--tui-text-primary);
    }

    &::before {
        color: var(--tui-background-base);
        transform: scale(0.6);
    }
}

.app-links-dropdown {
    display: none !important;
}

.app-link-dropdown {
    justify-content: flex-start !important;
}

.app-christmas {
    position: absolute;
    left: 0.3125rem;
    top: 0.4375rem;
    inline-size: 2rem;
    block-size: 2rem;
    transform: rotate(20deg);
    margin-inline-start: 1.25rem;

    @media @tui-mobile {
        left: 2.5rem;
    }
}

@media @tui-mobile {
    // Increasing specificity
    .app-link.app-link,
    .tui-doc-switch-direction.tui-doc-switch-direction {
        display: none;
    }

    .app-links-dropdown {
        display: flex !important;
    }
}

html {
    /* stylelint-disable-next-line */
    font-size: 16px;
}
`;export{a as default};
