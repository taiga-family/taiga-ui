describe(`Stepper`, () => {
    describe(
        `scroll internal scrollable area to active/focused step`,
        {scrollBehavior: false},
        () => {
            it(`horizontal`, () => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(`/navigation/stepper/API?orientation=horizontal`);
                cy.tuiHide(`.t-bg-toggle`);
                cy.get(`#demoContent`).tuiScrollIntoView();

                cy.get(`#demoContent [tuiStep]`).should(`exist`).as(`steps`);

                cy.get(`@steps`).eq(1).click();
                cy.get(`#demoContent`).matchImageSnapshot(`0-horizontal-scroll-step2`);
                cy.get(`@steps`).eq(2).click();
                cy.get(`#demoContent`).matchImageSnapshot(`0-horizontal-scroll-step3`);
            });

            it(`vertical`, () => {
                cy.viewport(350, 170);
                cy.tuiVisit(`/navigation/stepper/API?orientation=vertical`);
                cy.tuiHide(`.t-bg-toggle`);
                cy.get(`#demoContent`).tuiScrollIntoView();

                cy.get(`#demoContent [tuiStep]`).should(`exist`).as(`steps`);

                cy.get(`@steps`).eq(1).click();
                cy.matchImageSnapshot(`1-vertical-scroll-step2`, {
                    capture: `viewport`,
                });
                cy.get(`@steps`).eq(2).click();
                cy.matchImageSnapshot(`1-vertical-scroll-step3`, {
                    capture: `viewport`,
                });
            });
        },
    );
});
