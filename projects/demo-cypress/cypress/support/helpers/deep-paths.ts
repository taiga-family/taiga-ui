/// <reference types="cypress" />

export const DEEP_PATHS = [
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
    `icons/marker-icon`,
    `navigation/stepper`,
    `components/toggle`,
];

export const toggleExclusions: Record<string, readonly number[]> = {
    'components/button': [1],
    'components/group': [0], // [adaptive]
    'components/toggle': [2, 4], // [showLoader], [focusable]
};

export const selectExclusions: Record<string, readonly number[]> = {
    'components/calendar': [4, 5], // not visible for test props: [min], [minViewedMonth]
    'components/calendar-month': [2], // not visible for test props: [min]
};

export function tuiMakeCypressDemoSnapshot(
    path: string,
    stepIndex: number,
    $input: JQuery,
    optionIndex: number,
): Cypress.Chainable<string> {
    return cy
        .wrap($input, {log: false})
        .parents(`table.t-table tr`)
        .find(`[automation-id="tui-documentation__property-name"]`)
        .then(propertyName$ => propertyName$.text().trim())
        .then(property => {
            return cy
                .get(`#demo-content`)
                .first()
                .matchImageSnapshot(`${path}/${stepIndex}-${property}-${optionIndex}`);
        });
}
