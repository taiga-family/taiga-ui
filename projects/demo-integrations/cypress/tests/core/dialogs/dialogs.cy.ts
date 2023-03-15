describe(`Dialogs`, () => {
    for (const [index, {width, height}] of [
        {width: 720, height: 900},
        {width: 1620, height: 900},
    ].entries()) {
        describe(`${width}x${height}`, () => {
            beforeEach(() => {
                cy.viewport(width, height);
                cy.tuiVisit(`components/dialog`);
            });

            it(`A dialog and a nested dialog are open correctly`, () => {
                cy.get(`tui-dialog-example-2 button`).first().click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`${index}-1-dialogs`);

                cy.get(`dialog-example button`).eq(1).click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .eq(1)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`${index}-2-dialogs`);
            });

            it(`Mobile dialog works`, () => {
                cy.get(`tui-dialog-example-4 button`).first().click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`${index}-3-dialogs`);
            });

            it(`Dialog with directive works`, () => {
                cy.get(`tui-dialog-example-6 button`).first().click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`${index}-4-dialogs-dialog-directive`);
            });

            it(`show simple`, () => {
                cy.get(`tui-dialog-example-1 button`).eq(0).click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`${index}-5-dialogs`);
            });

            it(`show simple with custom button`, () => {
                cy.get(`tui-dialog-example-1 button`).eq(1).click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`${index}-6-dialogs`);
            });

            describe(`Dialog with confirmation works`, () => {
                beforeEach(() => {
                    cy.get(`tui-dialog-example-8 button`).first().click();

                    cy.tuiHide(`tui-doc-page`);
                    cy.tuiWaitKitDialog();

                    cy.get(`tui-dialog`)
                        .last()
                        .tuiWaitBeforeScreenshot()
                        .matchImageSnapshot(`${index}-7-dialogs`);

                    cy.tuiShow(`tui-doc-page`);
                });

                it(`Pristine form does not show prompt`, () => {
                    cy.get(`tui-dialog .t-close`).click();
                    cy.get(`tui-dialog`).should(`not.exist`);
                });

                it(`Dirty form shows prompt`, () => {
                    cy.get(`tui-dialog input`).type(`Test`);
                    cy.get(`tui-dialog .t-close`).click();
                    cy.tuiHide(`tui-doc-page`);
                    cy.tuiWaitKitDialog();

                    cy.get(`tui-dialog`)
                        .last()
                        .tuiWaitBeforeScreenshot()
                        .matchImageSnapshot(`${index}-7-dialogs-prompt`);
                });

                it(`Form is reset to pristine`, () => {
                    cy.get(`tui-dialog input`).type(`Test`);
                    cy.get(`tui-dialog .t-close`).click();
                    cy.tuiWaitKitDialog();
                    cy.get(`tui-prompt .t-button`).last().click();

                    cy.get(`tui-dialog`).should(`not.exist`);

                    cy.get(`tui-dialog-example-8 button`).first().click();
                    cy.tuiWaitKitDialog();
                    cy.get(`tui-dialog .t-close`).click();

                    cy.get(`tui-dialog`).should(`not.exist`);
                });
            });
        });
    }

    describe(`dismissible & closeable`, () => {
        it(`dismissible = false, closeable = false`, () => {
            cy.tuiVisit(`components/dialog/API?closeable=true&dismissible=false`);

            cy.get(`tui-doc-page .t-content button`).first().click();
            cy.tuiWaitBeforeAction()
                .get(`tui-dialog`)
                .should(`exist`)
                .trigger(`click`, {x: 100, y: 100, force: true})
                .tuiWaitBeforeAction();
            cy.get(`tui-dialog`).should(`be.visible`);
        });

        it(`dismissible = true, closeable = false`, () => {
            cy.tuiVisit(`components/dialog/API?closeable=false&dismissible=true`);

            cy.get(`tui-doc-page .t-content button`).first().click();
            cy.get(`tui-dialog`)
                .should(`exist`)
                .trigger(`click`, {x: 10, y: 10, force: true})
                .tuiWaitBeforeAction()
                .should(`not.exist`);
        });

        it(`dismissible = false, closeable = true`, () => {
            cy.tuiVisit(`components/dialog/API?closeable=true&dismissible=false`);

            cy.get(`tui-doc-page .t-content button`).first().click();
            cy.get(`tui-dialog`)
                .should(`be.visible`)
                .trigger(`click`, {x: 100, y: 100, force: true});

            cy.getByAutomationId(`tui-dialog__close`).click();

            cy.tuiWaitBeforeAction().get(`tui-dialog`).should(`not.exist`);
        });
    });
});
