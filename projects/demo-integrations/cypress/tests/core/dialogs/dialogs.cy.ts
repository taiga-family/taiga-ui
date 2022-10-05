import {DIALOG_PAGE_URL, WAIT_BEFORE_SCREENSHOT} from '../../../support/shared.entities';

describe(`Dialogs`, () => {
    for (const [index, {width, height}] of [
        {width: 720, height: 900},
        {width: 1620, height: 900},
    ].entries()) {
        describe(`${width}x${height}`, () => {
            beforeEach(() => {
                cy.viewport(width, height);
                cy.tuiVisit(DIALOG_PAGE_URL);
            });

            it(`A dialog and a nested dialog are open correctly`, () => {
                cy.get(`tui-dialog-example-2 button`).first().click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .wait(WAIT_BEFORE_SCREENSHOT)
                    .matchImageSnapshot(`${index}-1-dialogs`);

                cy.get(`dialog-example button`).eq(1).click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .eq(1)
                    .wait(WAIT_BEFORE_SCREENSHOT)
                    .matchImageSnapshot(`${index}-2-dialogs`);
            });

            it(`Mobile dialog works`, () => {
                cy.get(`tui-dialog-example-4 button`).first().click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`)
                    .wait(WAIT_BEFORE_SCREENSHOT)
                    .matchImageSnapshot(`${index}-3-dialogs`);
            });

            it(`Dialog with directive works`, () => {
                cy.get(`tui-dialog-example-6 button`).first().click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`).matchImageSnapshot(
                    `${index}-4-dialogs-dialog-directive`,
                );
            });

            it(`show simple`, () => {
                cy.get(`tui-dialog-example-1 button`).eq(0).click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`).matchImageSnapshot(`${index}-5-dialogs`);
            });

            it(`show simple with custom button`, () => {
                cy.get(`tui-dialog-example-1 button`).eq(1).click();

                cy.tuiHide(`tui-doc-page`);
                cy.tuiWaitKitDialog();

                cy.get(`tui-dialog`).matchImageSnapshot(`${index}-6-dialogs`);
            });
        });
    }
});
