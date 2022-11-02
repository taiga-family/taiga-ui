const DEEP_PATHS = [
    /* CORE */
    `components/button`,
    `components/calendar`,
    `components/group`,
    `components/link`,
    `components/notification`,
    /* KIT */
    `components/avatar`,
    `components/badge`,
    `components/badged-content`,
    `components/calendar-month`,
    `components/filter`,
    `components/island`,
    `components/marker-icon`,
    `navigation/stepper`,
    `components/toggle`,
];

const toggleExclusions: Record<string, readonly number[]> = {
    'components/button': [1],
    'components/group': [0], // [adaptive]
    'components/toggle': [2, 4], // [showLoader], [focusable]
};

const selectExclusions: Record<string, readonly number[]> = {
    'components/calendar': [4, 5], // not visible for test props: [min], [minViewedMonth]
    'components/calendar-month': [2], // not visible for test props: [min]
};

const makeDemoSnapshot = (
    path: string,
    stepIndex: number,
    $input: JQuery<HTMLElement>,
    optionIndex: number,
): void => {
    cy.wrap($input)
        .parents(`table.t-table tr`)
        .find(`[automation-id="tui-documentation__property-name"]`)
        .then(propertyName$ => propertyName$.text().trim())
        .then(property => {
            return cy
                .get(`#demoContent`)
                .first()
                .matchImageSnapshot(`${path}/${stepIndex}-${property}-${optionIndex}`);
        });
};

describe(`Deep`, () => {
    for (const path of DEEP_PATHS) {
        it(path, () => {
            let counter = 1;

            cy.viewport(1440, 1920); // TODO: need investigate later, why failed less than 1920px
            cy.tuiVisit(`/${path}/API`);

            cy.get(`table.t-table tui-select`).each(($select, selectIndex) => {
                if (selectExclusions[path]?.includes(selectIndex)) {
                    return cy.wrap($select);
                }

                return cy
                    .wrap($select)
                    .click()
                    .get(`[tuioption]`)
                    .each((_, optionIndex) => {
                        if (optionIndex === 0) {
                            cy.wrap($select).click();

                            return;
                        }

                        cy.wrap($select)
                            .click()
                            .get(`[tuioption]`)
                            .eq(optionIndex)
                            .click({force: true});

                        return makeDemoSnapshot(path, counter++, $select, optionIndex);
                    })
                    .wrap($select)
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
                        return cy.wrap(toggle$);
                    }

                    cy.wrap(toggle$).click();

                    return makeDemoSnapshot(path, counter++, toggle$, 0);
                });
        });
    }
});
