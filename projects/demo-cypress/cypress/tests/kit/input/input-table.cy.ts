describe(`InputTable`, () => {
    it(`editing fields inside a table`, () => {
        cy.tuiVisit(`components/input#table`);
        cy.get(`tui-doc-example[heading="Table"]`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        for (const index of [0, 1, 2, 3, 4]) {
            cy.get(`@wrapper`)
                .find(`tbody tr td`)
                .eq(index)
                .findByAutomationId(`tui-primitive-textfield__wrapper`)
                .find(`input`)
                .eq(0)
                .focus();

            cy.get(`@wrapper`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`components/input_table__${index}_1`);

            cy.get(`@wrapper`).find(`thead tr th`).eq(index).click();

            cy.get(`@wrapper`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`components/input_table__${index}_2`);

            if (index > 0) {
                cy.get(`@wrapper`)
                    .find(`tbody tr td`)
                    .eq(index - 1)
                    .findByAutomationId(`tui-primitive-textfield__wrapper`)
                    .find(`input`)
                    .eq(0)
                    .focus();

                cy.get(`@wrapper`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`components/input_table__${index}_3`);
            }
        }
    });
});
