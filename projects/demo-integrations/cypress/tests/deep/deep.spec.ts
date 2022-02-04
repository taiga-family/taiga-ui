const DEEP_PATHS = [
    /* CORE */
    'components/button',
    'components/calendar',
    'components/group',
    'components/link',
    'components/notification',
    /* KIT */
    'components/avatar',
    'components/badge',
    'components/badged-content',
    'components/calendar-month',
    'components/filter',
    'components/island',
    'components/marker-icon',
    'navigation/stepper',
    'components/toggle',
];

const toggleExclusions: Record<string, ReadonlyArray<number>> = {
    'components/button': [1],
    'components/group': [0], // [adaptive]
    'components/toggle': [2, 4], // [showLoader], [focusable]
};

const selectExclusions: Record<string, ReadonlyArray<number>> = {
    'components/calendar': [4, 5], // not visible for test props: [min], [minViewedMonth]
    'components/calendar-month': [2], // not visible for test props: [min]
};

const makeDemoSnapshot = (
    path: string,
    stepIndex: number,
    $input: JQuery<HTMLElement>,
    optionIndex: number,
) => {
    cy.wrap($input)
        .parents('.tui-table tr')
        .find('[automation-id="tui-documentation__property-name"]')
        .then(propertyName$ => propertyName$.text().trim())
        .then(property => {
            return cy
                .get(`#demoContent`)
                .first()
                .matchImageSnapshot(`${path}/${stepIndex}-${property}-${optionIndex}`);
        });
};

describe('Deep', () => {
    DEEP_PATHS.forEach(path => {
        it(path, () => {
            let counter = 1;

            cy.goToDemoPage(`/${path}/API`);
            cy.hideHeader();

            cy.get(`.tui-table tui-select`).each(($select, selectIndex) => {
                if (
                    selectExclusions[path] &&
                    selectExclusions[path].includes(selectIndex)
                ) {
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
                            .click();

                        return makeDemoSnapshot(path, counter++, $select, optionIndex);
                    })
                    .wrap($select)
                    .click()
                    .get(`[tuioption]`)
                    .first()
                    .click();
            });

            cy.get('.tui-table')
                .then($table =>
                    $table.find('tui-toggle').length
                        ? cy.get('.tui-table tui-toggle')
                        : [],
                )
                .each((toggle$, index) => {
                    if (
                        toggleExclusions[path] &&
                        toggleExclusions[path].includes(index)
                    ) {
                        return cy.wrap(toggle$);
                    }

                    cy.wrap(toggle$).click();

                    return makeDemoSnapshot(path, counter++, toggle$, 0);
                });
        });
    });
});
