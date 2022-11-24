import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '@demo-integrations/support/properties/shared.entities';

export function tuiWaitCodeHighlight(selector = `code`): void {
    cy.get(selector)
        .should(`has.class`, `hljs`)
        .find(`.hljs-ln-numbers`)
        .should(`exist`)
        .wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
}
