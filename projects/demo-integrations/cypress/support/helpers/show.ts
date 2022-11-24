export const tuiShow = (selector: string): void => {
    cy.get(`body`, {log: false}).then($body => {
        if ($body.find(selector).length > 0) {
            cy.get(selector, {log: false}).invoke(
                `attr`,
                `style`,
                `opacity: 1; visibility: visible; pointer-events: auto`,
            );
        }
    });
};
