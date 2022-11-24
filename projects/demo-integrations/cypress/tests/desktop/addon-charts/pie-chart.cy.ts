import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '@demo-integrations/support/properties/shared.entities';

describe(`PieChart`, () => {
    beforeEach(() => cy.tuiVisit(`components/pie-chart`));

    it(`should be show hints on charts`, () => {
        cy.get(`tui-doc-example[heading="With labels"]`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        cy.get(`@wrapper`)
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`01-pie-chart-with-label-0`);

        cy.get(`@wrapper`)
            .findByAutomationId(`tui-doc-example`)
            .findByAutomationId(`tui-pie-chart__segment`)
            .each((segment, index) => {
                cy.wrap(segment)
                    .trigger(`mouseover`)
                    .trigger(`mouseenter`)
                    .invoke(`show`)
                    .click() // emulate hover
                    .wait(300); // wait animation for skip flaky tests

                cy.get(`@wrapper`).matchImageSnapshot(
                    `01-pie-chart-with-label-${index + 1}`,
                );

                // unfocused pie-chart before next iteration
                cy.get(`@wrapper`).click().wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
            });
    });
});
