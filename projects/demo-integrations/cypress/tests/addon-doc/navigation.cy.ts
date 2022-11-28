import {WAIT_BEFORE_SCREENSHOT} from '../../support/properties/shared.entities';

describe(`Navigation`, () => {
    it(`getting started / [light mode]`, () => {
        cy.tuiVisit(`/getting-started`, {hideNavigation: false, hideHeader: false});

        cy.get(`tui-doc-navigation`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`01-tui-doc-navigation-light-mode`);
    });

    it(`getting started / [night mode]`, () => {
        cy.tuiVisit(`/getting-started`, {
            hideNavigation: false,
            hideHeader: false,
            enableNightMode: true,
        });

        cy.get(`tui-doc-navigation`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`02-tui-doc-navigation-night-mode`);
    });

    describe(`anchor links navigation works`, {scrollBehavior: false}, () => {
        it(`scroll to \`tui-doc-example\``, () => {
            cy.tuiVisit(`/components/input#table`);

            cy.get(`#table`).should(`be.inViewport`);
        });

        it(`scroll to \`tui-doc-code\``, () => {
            cy.tuiVisit(`/getting-started#options`);

            cy.get(`#options`).should(`be.visible`).should(`be.inViewport`);
        });

        it(`scroll after click on link with anchor`, () => {
            cy.tuiVisit(`/getting-started`);

            cy.get(`a[fragment="root"]`).should(`be.visible`).click();
            cy.get(`#root`).should(`be.inViewport`);
        });
    });
});
