import"./chunk-B4AJQJMI.js";var e=`@import '@taiga-ui/styles/utils';

:root {
    --docsearch-primary-color: var(--tui-background-accent-1);
    --docsearch-text-color: var(--tui-text-primary);
    --docsearch-spacing: 0.75rem;
    --docsearch-icon-stroke-width: 1.4;
    --docsearch-highlight-color: var(--docsearch-primary-color);
    --docsearch-muted-color: var(--tui-text-secondary);
    --docsearch-container-background: var(--tui-service-backdrop);
    --docsearch-logo-color: var(--tui-background-accent-1);

    /* modal */
    --docsearch-modal-width: 45rem;
    --docsearch-modal-height: 37rem;
    --docsearch-modal-background: var(--tui-background-elevation-1);
    --docsearch-modal-shadow:
        inset 0.0625rem 0.0625rem 0 0 rgba(255, 255, 255, 0.5), 0 0.1875rem 0.5rem 0 rgb(85, 90, 100);

    /* searchbox */
    --docsearch-searchbox-height: 3.5rem;
    --docsearch-searchbox-background: var(--tui-background-base);
    --docsearch-searchbox-focus-background: var(--tui-background-base);
    --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);

    /* hit */
    --docsearch-hit-height: 3.5rem;
    --docsearch-hit-color: var(--tui-text-primary);
    --docsearch-hit-active-color: var(--tui-background-base);
    --docsearch-hit-background: var(--tui-background-base);
    --docsearch-hit-shadow: 0 0.0625rem 0.1875rem 0 rgb(212, 217, 225);

    /* key */
    --docsearch-key-gradient: none;
    --docsearch-key-shadow:
        inset 0 -2px 0 0 rgb(205, 205, 230), inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
    --docsearch-key-pressed-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 1px 0 rgba(30, 35, 90, 0.4);
    /* footer */
    --docsearch-footer-height: 2.75rem;
    --docsearch-footer-background: var(--tui-background-base);
    --docsearch-footer-shadow: 0 -0.0625rem 0 0 rgb(224, 227, 232), 0 -0.1875rem 0.375rem 0 rgba(69, 98, 155, 0.12);
}

/* Darkmode */
[tuiTheme='dark'] {
    --docsearch-secondary-text-color: #b6b7d5;
    --docsearch-subtle-color: #212139;
    --docsearch-error-color: #ef5350;
    --docsearch-success-color: rgba(67, 160, 71, 0.2);
    --docsearch-highlight-color: #457aff;
    --docsearch-focus-color: #9ac8ff;
    --docsearch-background-color: #36395a;
    --docsearch-icon-color: #b6b7d5;
    --docsearch-key-background: #36395a;
    --docsearch-key-color: #b6b7d5;
    --shimmer-bg: linear-gradient(
        90deg,
        #e0e3e8 0%,
        var(--docsearch-muted-color) 20%,
        var(--docsearch-muted-color) 60%,
        #e0e3e8 95%
    );
    --docsearch-dropdown-menu-background: var(--docsearch-hit-background);
    --docsearch-dropdown-menu-item-hover-background: var(--docsearch-modal-background);
    --docsearch-search-button-background: var(--docsearch-modal-background);
    --docsearch-search-button-text-color: var(--docsearch-text-color);
    --docsearch-text-color: #fff;
    --docsearch-container-background: rgba(9, 10, 17, 0.8);
    --docsearch-modal-background: #292929;
    --docsearch-modal-shadow: inset 0.0625rem 0.0625rem 0 0 rgba(44, 46, 64), 0 0.1875rem 0.5rem 0 rgb(0, 3, 9);
    --docsearch-searchbox-background: #202020;
    --docsearch-searchbox-focus-background: #202020;
    --docsearch-hit-color: rgb(190, 195, 201);
    --docsearch-hit-shadow: none;
    --docsearch-hit-background: #333;
    --docsearch-key-gradient: none;
    --docsearch-key-shadow:
        inset 0 -2px 0 0 rgb(40, 45, 85), inset 0 0 1px 1px rgb(81, 87, 125), 0 2px 2px 0 rgba(3, 4, 9, 0.3);
    --docsearch-key-pressed-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 1px 1px 0 rgba(3, 4, 9, 0.3);
    --docsearch-footer-background: #383838;
    --docsearch-footer-shadow: inset 0 0.0625rem 0 0 rgba(73, 76, 106, 0.5), 0 -0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    --docsearch-logo-color: rgb(255, 255, 255);
    --docsearch-muted-color: rgb(127, 132, 151);
}

tui-algolia-search {
    .center-all();

    &::before {
        .center-top();

        inset-inline-start: 0.5rem;

        --tui-icon-size: 1rem;
    }

    @media @tui-mobile {
        position: relative;
        left: 0;
        inline-size: var(--tui-height-s);
        overflow: hidden;
        transform: none;
        border-radius: 100%;
        order: 2;
    }
}

.DocSearch-Modal {
    border-radius: var(--tui-radius-l);
    overflow: hidden;

    @media @tui-mobile {
        border-radius: 0;
    }
}

.DocSearch-Button-Placeholder {
    padding: 0 0.25rem;
    font: var(--tui-typography-body-s);
}

.DocSearch-Button {
    inline-size: 12rem;
    block-size: var(--tui-height-s);
    border: none;
    margin: 0;
    color: var(--tui-text-primary);
    background: var(--tui-background-base);
    border-radius: 1rem;

    .DocSearch-Search-Icon {
        opacity: 0;
    }

    .DocSearch-Button-Key {
        border: none;
        background: transparent;
        margin: 0;
        color: var(--tui-text-secondary);
    }
}

.DocSearch-Hit-content-wrapper {
    overflow: hidden;
}

.DocSearch-Container {
    backdrop-filter: blur(0.25rem);

    @media @tui-mobile {
        position: fixed;
    }
}
`;export{e as default};
