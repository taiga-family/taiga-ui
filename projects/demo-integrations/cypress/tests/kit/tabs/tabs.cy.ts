describe(`Tabs`, () => {
    beforeEach(() => cy.viewport(1700, 900));

    describe(`Examples`, () => {
        beforeEach(() => cy.tuiVisit(`/navigation/tabs`));

        it(`no extra margin after the last tab`, () => {
            cy.get(`#complex`)
                .tuiFindByExampleId()
                .tuiScrollIntoView()
                .matchImageSnapshot(`01-[wide-screen]-[no-margin-last-tab]`);
        });

        it(`should correctly select tab if child element is also selected`, () => {
            cy.get(`#complex`).tuiFindByExampleId().tuiScrollIntoView().as(`complex`);

            cy.tuiWaitBeforeScreenshot();

            cy.get(`@complex`)
                .get(`button[type="button"]`)
                .contains(`Collaborators`)
                .click({force: true});

            cy.get(`@complex`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`02-1-complex-select-collaborators`);

            cy.get(`tui-dropdown`)
                .get(`button[type="button"]`)
                .contains(`Neil Innes`)
                .click({force: true});

            cy.get(`@complex`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`02-2-complex-select-collaborators`);
        });
    });

    describe(`API`, () => {
        for (const index of [-2, -1, 0, 1, 2, 3, 4, 5, 100, 1000]) {
            it(`clamp active activeItemIndex=${index}`, () => {
                cy.tuiVisit(`/navigation/tabs/API?tuiMode=null&activeItemIndex=${index}`);

                cy.get(`#demo-content`)
                    .tuiScrollIntoView()
                    .tuiWaitBeforeAction()
                    .matchImageSnapshot(`03-activeItemIndex-${index}`);
            });
        }
    });
});
