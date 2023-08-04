import {
    selectExclusions,
    toggleExclusions,
    tuiMakeCypressDemoSnapshot,
} from '@demo-cypress/support/helpers/deep-paths';

describe(`Deep`, () => {
    for (const path of Cypress.env(`DEEP_PATHS`) ?? []) {
        it(path, () => {
            let counter = 1;

            cy.viewport(1440, 1920); // TODO: need investigate later, why failed less than 1920px
            cy.tuiVisit(`/${path}/API`);

            cy.get(`table.t-table tui-select`).each(($select, selectIndex) => {
                if (selectExclusions[path]?.includes(selectIndex)) {
                    return cy.wrap($select, {log: false});
                }

                return cy
                    .wrap($select, {log: false})
                    .click()
                    .get(`[tuioption]`)
                    .each((_, optionIndex) => {
                        if (optionIndex === 0) {
                            cy.wrap($select, {log: false}).click();

                            return;
                        }

                        cy.wrap($select, {log: false})
                            .click()
                            .get(`[tuioption]`)
                            .eq(optionIndex)
                            .click({force: true});

                        return tuiMakeCypressDemoSnapshot(
                            path,
                            counter++,
                            $select,
                            optionIndex,
                        );
                    })
                    .wrap($select, {log: false})
                    .click()
                    .get(`[tuioption]`)
                    .first()
                    .click({force: true});
            });

            cy.get(`table.t-table`)
                .then($table =>
                    $table.find(`tui-toggle`).length
                        ? cy.get(`table.t-table tui-toggle`)
                        : [],
                )
                .each((toggle$, index) => {
                    if (toggleExclusions[path]?.includes(index)) {
                        return cy.wrap(toggle$, {log: false});
                    }

                    cy.wrap(toggle$, {log: false}).click();

                    return tuiMakeCypressDemoSnapshot(path, counter++, toggle$, 0);
                });
        });
    }
});
