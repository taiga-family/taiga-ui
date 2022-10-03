export const tuiHide = (selector: string): void => {
    cy.get(`body`, {log: false}).then($body => {
        if ($body.find(selector).length > 0) {
            cy.get(selector, {log: false}).invoke(
                `attr`,
                `style`,
                `opacity: 0; visibility: hidden; pointer-events: none`,
            );
        }
    });
};
