describe(`AlertService`, () => {
    beforeEach(() => {
        cy.viewport(720, 720);
    });

    it(`is shown correctly`, () => {
        cy.tuiVisit(`/services/alert-service`);

        cy.get(`tui-alerts-example-1 button`).first().click().wait(1000);

        cy.get(`tui-alert`).first().matchImageSnapshot(`alert`);
    });
});
