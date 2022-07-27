describe(`TuiHint`, () => {
    beforeEach(() => {
        cy.viewport(720, 700);
    });

    it(`TuiHint works`, () => {
        cy.tuiVisit(`/directives/hint`);

        cy.get(`tui-hint-example-1 tui-avatar`)
            .first()
            .trigger(`mouseenter`)
            .wait(1000)
            .get(`tui-hint-example-1`)
            .first()
            .matchImageSnapshot(`hint`);
    });

    it(`Manual hint works`, () => {
        cy.tuiVisit(`/directives/manual-hint/API?tuiMode=null&tuiManualHintShow=true`);

        cy.get(`tui-hint-box`).first().wait(1000).matchImageSnapshot(`manual-hint`);
    });

    it(`Tooltip horizontal direction`, () => {
        cy.tuiVisit(`/components/tooltip`);
        cy.get(`tui-doc-example`)
            .first()
            .trigger(`mouseenter`, {x: 35, y: 200})
            .wait(1000)
            .matchImageSnapshot(`tooltip-left`);
    });

    it(`Tooltip vertical direction`, () => {
        cy.tuiVisit(`/components/tooltip`);
        cy.get(`tui-doc-example`)
            .first()
            .trigger(`mouseenter`, {x: 35, y: 270})
            .wait(1000)
            .matchImageSnapshot(`tooltip-bottom`);
    });
});
