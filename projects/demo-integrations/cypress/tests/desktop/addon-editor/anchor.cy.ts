import {WAIT_BEFORE_SCREENSHOT} from '@demo-integrations/support/properties/shared.entities';

describe(`Editor's anchors`, () => {
    beforeEach(() => {
        cy.viewport(1280, 500).tuiVisit(`components/editor`);

        cy.get(`tui-doc-example[heading="Anchors"]`).tuiScrollIntoView().as(`wrapper`);

        cy.get(`@wrapper`).findByAutomationId(`tui-doc-example`).as(`example`);
    });

    it(`all content`, () => {
        cy.get(`@example`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`anchors-example-content`);
    });

    it(`editor`, () => {
        cy.get(`@wrapper`)
            .find(`tui-editor`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`anchors-editor-content`);
    });

    describe(`anchors`, () => {
        beforeEach(() => {
            cy.get(`@wrapper`)
                .find(`tui-editor`)
                .then(el => el.remove());

            cy.get(`@wrapper`)
                .find(`h4`)
                .contains(`Text`)
                .next()
                .then(el => el.remove());

            cy.get(`@wrapper`)
                .find(`h4`)
                .contains(`HTML`)
                .next()
                .tuiScrollIntoView()
                .as(`content`);
        });

        for (const anchor of [
            `moser`,
            `thirlwell`,
            `briggs`,
            `introduction`,
            `knowles`,
            `war`,
        ]) {
            it(`anchor is #${anchor}`, () => {
                cy.get(`@example`)
                    .find(`a[href="#${anchor}"]`)
                    .click({force: true})
                    .wait(2000);

                cy.matchImageSnapshot(`anchor-${anchor}`, {capture: `viewport`});
            });
        }
    });
});
