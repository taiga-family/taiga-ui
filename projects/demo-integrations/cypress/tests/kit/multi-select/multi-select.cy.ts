describe(`MultiSelect`, () => {
    describe(`Description and examples page`, () => {
        beforeEach(() => {
            cy.viewport(`macbook-13`);
            cy.tuiVisit(`components/multi-select`, {pauseAnimation: false});
        });

        it(`does not overflow arrow icon by many tags`, () => {
            cy.get(`#object-array`).findByAutomationId(`tui-doc-example`).as(`wrapper`);

            cy.get(`@wrapper`).find(`tui-multi-select`).click();

            [0, 1, 2, 3].forEach(() => cy.get(`[tuioption]`).first().click());

            cy.get(`@wrapper`).findByAutomationId(`tui-multi-select__arrow`).click();

            cy.get(`@wrapper`)
                .tuiWaitBeforeAction()
                .matchImageSnapshot(`01-not-overflow-by-tags`);
        });

        [`s`, `m`, `l`].forEach((size, index) => {
            it(`multiselect inside dialog with tuiTextfieldSize=${size}`, () => {
                cy.get(`tui-multi-select-example-9 button`).eq(index).click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .findByAutomationId(`tui-multi-select__arrow`)
                    .click({force: true});

                [0, 1, 2].forEach(index => {
                    cy.get(`tui-data-list-wrapper`)
                        .findByAutomationId(`tui-data-list-wrapper__option`)
                        .eq(index)
                        .click({force: true});
                });

                cy.get(`tui-dialog`)
                    .tuiWaitBeforeAction()
                    .matchImageSnapshot(
                        `04-multi-select-inside-dialog-with-field-size-${size}`,
                        {capture: `viewport`},
                    );
            });
        });
    });

    describe(`API page`, () => {
        describe(`sizes`, () => {
            beforeEach(() => cy.viewport(400, 812));

            [`s`, `m`, `l`].forEach(size => {
                it(`tuiTextfieldSize=${size}`, () => {
                    cy.tuiVisit(
                        `components/multi-select/API?tuiMode=null&tuiTextfieldCleaner=true&tuiTextfieldSize=${size}`,
                        {pauseAnimation: false},
                    );

                    cy.getByAutomationId(`tui-multi-select__arrow`).click({force: true});

                    [0, 1, 2, 3, 4].forEach(index => {
                        cy.get(`tui-data-list-wrapper`)
                            .findByAutomationId(`tui-data-list-wrapper__option`)
                            .eq(index)
                            .click({force: true});
                    });

                    cy.tuiWaitBeforeAction().matchImageSnapshot(
                        `02-multi-select-size-${size}`,
                        {capture: `viewport`},
                    );
                });
            });
        });

        describe(`Form changes by updateOn`, () => {
            [`submit`, `blur`, `change`].forEach(type => {
                it(`updateOn: ${type}`, () => {
                    cy.tuiVisit(`components/multi-select/API`, {pauseAnimation: false});

                    cy.getByAutomationId(`tui-demo-button__toggle-details`)
                        .click()
                        .wait(100);

                    cy.getByAutomationId(`tui-demo-select__expand-update-on`)
                        .click()
                        .wait(100);

                    cy.get(`tui-data-list[role=listbox]`)
                        .find(`button`)
                        .contains(type)
                        .click({force: true});

                    cy.get(`#demo-content`).tuiWaitBeforeAction().matchImageSnapshot(
                        // initial
                        `multi-select-update-on-${type}__1`,
                    );
                    cy.getByAutomationId(`tui-multi-select__arrow`).click();

                    [0, 1, 2].forEach(index =>
                        cy
                            .get(`tui-data-list-wrapper`)
                            .findByAutomationId(`tui-data-list-wrapper__option`)
                            .eq(index)
                            .click({force: true}),
                    );
                    cy.get(`tui-data-list-wrapper`).matchImageSnapshot(
                        // selected-values
                        `multi-select-update-on-${type}__2`,
                    );

                    cy.getByAutomationId(`tui-multi-select__arrow`).click({force: true});
                    cy.get(`#demo-content`).tuiWaitBeforeAction().matchImageSnapshot(
                        // hide-dropdown
                        `multi-select-update-on-${type}__3`,
                    );

                    cy.get(`#demo-content`).click({force: true});
                    cy.get(`#demo-content`).tuiWaitBeforeAction().matchImageSnapshot(
                        // blur event
                        `multi-select-update-on-${type}__4`,
                    );

                    cy.getByAutomationId(`tui-demo-button__submit-state`).click({
                        force: true,
                    });
                    cy.get(`#demo-content`).tuiWaitBeforeAction().matchImageSnapshot(
                        // submit event
                        `multi-select-update-on-${type}__5`,
                    );

                    cy.getByAutomationId(`tui-demo-button__reset-state`).click({
                        force: true,
                    });
                    cy.get(`#demo-content`).tuiWaitBeforeAction().matchImageSnapshot(
                        // reset
                        `multi-select-update-on-${type}__6`,
                    );
                });
            });
        });
    });

    it(`checking that the arrow icon is rotated when enabled tuiTextfieldCleaner`, () => {
        cy.tuiVisit(`components/multi-select/API?tuiMode=null&tuiTextfieldCleaner=true`, {
            pauseAnimation: false,
        });

        cy.getByAutomationId(`tui-multi-select__arrow`).click({force: true});

        [0, 1, 2, 3, 4].forEach(index => {
            cy.get(`tui-data-list-wrapper`)
                .findByAutomationId(`tui-data-list-wrapper__option`)
                .eq(index)
                .click({force: true});
        });

        cy.tuiWaitBeforeAction().matchImageSnapshot(`02-multi-select-before-clear`, {
            capture: `viewport`,
        });

        cy.getByAutomationId(`tui-multi-select__arrow`).click({force: true});

        cy.getByAutomationId(`tui-input-tag__cleaner`)
            .tuiWaitBeforeAction()
            .click({force: true});

        cy.tuiWaitBeforeAction().matchImageSnapshot(`03-multi-select-after-clear`, {
            capture: `viewport`,
        });
    });

    it(`should scroll to end on focus`, () => {
        cy.tuiVisit(`components/multi-select/API?expandable=false&sandboxWidth=350`, {
            pauseAnimation: false,
        });
        cy.getByAutomationId(`tui-multi-select__arrow`).click({force: true});

        [0, 1, 2, 3, 4].forEach(index => {
            cy.get(`tui-data-list-wrapper`)
                .findByAutomationId(`tui-data-list-wrapper__option`)
                .eq(index)
                .click({force: true});
        });

        cy.get(`button`).first().focus();
        cy.tuiWaitBeforeAction()
            .getByAutomationId(`tui-multi-select__arrow`)
            .click({force: true});

        cy.tuiWaitBeforeAction().matchImageSnapshot(`03-multi-select-scroll-to-end`, {
            capture: `viewport`,
        });
    });
});
