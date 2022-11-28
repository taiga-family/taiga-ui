import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../properties/shared.entities';

export function tuiWaitCodeHighlight(selector = `code`): void {
    cy.get(selector)
        .should(`has.class`, `hljs`)
        .find(`.hljs-ln-numbers`)
        .should(`exist`)
        .wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
}
