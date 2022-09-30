import {RANGE_PAGE_URL} from '../../../support/shared.entities';

const initializeBaseAliases = (exampleId: string): void => {
    cy.get(`${exampleId} tui-range`).should(`be.visible`).as(`range`);
    cy.get(`${exampleId} tui-range input[type=range]:first-child`)
        .should(`be.visible`)
        .as(`leftSlider`);
    cy.get(`${exampleId} tui-range input[type=range]:last-child`)
        .should(`be.visible`)
        .as(`rightSlider`);
};

describe(`Range`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
    });

    describe(`examples page`, () => {
        beforeEach(() => {
            cy.tuiVisit(RANGE_PAGE_URL);
        });

        describe(`change selected range on click`, () => {
            const exampleId = `#base`;

            beforeEach(() => {
                initializeBaseAliases(exampleId);

                cy.get(exampleId).tuiScrollIntoView();
            });

            it(`click on the beginning of the track changes only nearest (left) slider`, () => {
                cy.get(`@range`).click(`left`);
                cy.get(`@leftSlider`).should(`have.value`, 0);
                cy.get(`@rightSlider`).should(`have.value`, 6);

                cy.get(exampleId).matchImageSnapshot(`01-range-click-checks-0-6`);
            });

            it(`click on the end of the track changes only nearest (right) slider`, () => {
                cy.get(`@range`).click(`right`);
                cy.get(`@leftSlider`).should(`have.value`, 4);
                cy.get(`@rightSlider`).should(`have.value`, 10);

                cy.get(exampleId).matchImageSnapshot(`02-range-click-checks-4-10`);
            });

            it(`click between two thumbs triggers only nearest thumb`, () => {
                cy.get(`@range`).click(100, 0);
                cy.get(`@range`).click(`right`);

                cy.get(`@leftSlider`).should(`have.value`, 1);
                cy.get(`@rightSlider`).should(`have.value`, 10);
                cy.get(exampleId).matchImageSnapshot(`03-range-click-checks-1-10`);

                cy.get(`@range`).click(`center`);
                cy.get(`@leftSlider`).should(`have.value`, 5);
                cy.get(`@rightSlider`).should(`have.value`, 10);
                cy.get(exampleId).matchImageSnapshot(`03-range-click-checks-5-10`);
            });
        });

        describe(`keyboard interactions`, () => {
            describe(`basic range (from 0 to 1000 with 250 steps). Initial value [0, 250]`, () => {
                const exampleId = `#segments`;

                beforeEach(() => {
                    initializeBaseAliases(exampleId);

                    cy.get(exampleId).tuiScrollIntoView();
                });

                const checkValuesAfterPressing = (
                    key: string,
                    [leftSliderValue, rightSliderValue]: [number, number],
                ): void => {
                    cy.get(`body`).type(`{${key}}`);
                    cy.get(`@leftSlider`).should(`have.value`, leftSliderValue);
                    cy.get(`@rightSlider`).should(`have.value`, rightSliderValue);
                    cy.get(`${exampleId} output`)
                        .invoke(`text`)
                        .should(
                            `match`,
                            new RegExp(
                                `\\s${leftSliderValue},.+${rightSliderValue}\\s`,
                                `gs`,
                            ),
                        );
                };

                it(`pressing of Arrow Right increases by one step (after focus on right slider)`, () => {
                    cy.get(`@leftSlider`).should(`have.value`, 0);
                    cy.get(`@rightSlider`).should(`have.value`, 250);
                    cy.get(`@rightSlider`).focus();

                    checkValuesAfterPressing(`rightarrow`, [0, 500]);
                    checkValuesAfterPressing(`rightarrow`, [0, 750]);
                    checkValuesAfterPressing(`rightarrow`, [0, 1000]);
                });

                it(`pressing of Arrow Right increases by one step (after focus on left slider)`, () => {
                    cy.get(`@range`).click(`right`);
                    cy.get(`@leftSlider`).should(`have.value`, 0);
                    cy.get(`@rightSlider`).should(`have.value`, 1000);
                    cy.get(`@leftSlider`).focus();

                    checkValuesAfterPressing(`rightarrow`, [250, 1000]);
                    checkValuesAfterPressing(`rightarrow`, [500, 1000]);
                    checkValuesAfterPressing(`rightarrow`, [750, 1000]);
                    checkValuesAfterPressing(`rightarrow`, [1000, 1000]);
                });

                it(`pressing of Arrow Left decreases by one step (after setting right thumb active via click)`, () => {
                    cy.get(`@range`).click(`right`);
                    cy.get(`@leftSlider`).should(`have.value`, 0);
                    cy.get(`@rightSlider`).should(`have.value`, 1000);

                    checkValuesAfterPressing(`leftarrow`, [0, 750]);
                    checkValuesAfterPressing(`leftarrow`, [0, 500]);
                    checkValuesAfterPressing(`leftarrow`, [0, 250]);
                    checkValuesAfterPressing(`leftarrow`, [0, 0]);
                });

                it(`cannot set left thumb more than right thumb (by Arrow Right)`, () => {
                    cy.get(`@leftSlider`).should(`have.value`, 0);
                    cy.get(`@rightSlider`).should(`have.value`, 250);
                    cy.get(`@leftSlider`).focus();

                    checkValuesAfterPressing(`rightarrow`, [250, 250]);
                    checkValuesAfterPressing(`rightarrow`, [250, 250]);
                    checkValuesAfterPressing(`rightarrow`, [250, 250]);
                });

                it(`cannot set right thumb less than left thumb (by ArrowLeft)`, () => {
                    cy.get(`@range`).click(`right`);
                    cy.get(`@leftSlider`).focus();

                    cy.get(`body`).type(`{rightarrow}{rightarrow}`);
                    cy.get(`@leftSlider`).should(`have.value`, 500);
                    cy.get(`@rightSlider`).should(`have.value`, 1000);

                    cy.get(`@rightSlider`).focus();
                    cy.get(`body`).type(
                        `{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}`,
                    );

                    cy.get(`@leftSlider`).should(`have.value`, 500);
                    cy.get(`@rightSlider`).should(`have.value`, 500);

                    cy.get(`@rightSlider`).focus();
                    cy.get(`body`).type(
                        `{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}`,
                    );

                    cy.get(`@leftSlider`).focus();
                    cy.get(`body`).type(
                        `{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}`,
                    );

                    cy.get(`@leftSlider`).should(`have.value`, 500);
                    cy.get(`@rightSlider`).should(`have.value`, 500);
                });
            });

            describe(`range with keySteps (from 0 to 1M) with 8 steps. Initial value [0, 100_000]`, () => {
                const exampleId = `#key-steps`;

                beforeEach(() => {
                    initializeBaseAliases(exampleId);

                    cy.get(exampleId).tuiScrollIntoView();
                });

                const checkValuesAfterPressing = (
                    key: string,
                    [leftSliderValue, rightSliderValue]: [number, number],
                ): void => {
                    cy.get(`body`).type(`{${key}}`);
                    cy.get(`${exampleId} output`)
                        .invoke(`text`)
                        .should(
                            `match`,
                            new RegExp(
                                `\\s${leftSliderValue},.+${rightSliderValue}\\s`,
                                `gs`,
                            ),
                        );
                };

                it(`ArrowUp increases value of the focused slider`, () => {
                    cy.get(`@rightSlider`).focus();

                    checkValuesAfterPressing(`uparrow`, [0, 300_000]);
                    checkValuesAfterPressing(`uparrow`, [0, 500_000]);
                    checkValuesAfterPressing(`uparrow`, [0, 750_000]);
                    checkValuesAfterPressing(`uparrow`, [0, 1_000_000]);

                    cy.get(`@leftSlider`).focus();

                    checkValuesAfterPressing(`uparrow`, [5_000, 1_000_000]);
                    checkValuesAfterPressing(`uparrow`, [10_000, 1_000_000]);
                    checkValuesAfterPressing(`uparrow`, [55_000, 1_000_000]);
                    checkValuesAfterPressing(`uparrow`, [100_000, 1_000_000]);
                });

                it(`ArrowDown decreases value of the focused slider`, () => {
                    cy.get(`@rightSlider`).focus();

                    checkValuesAfterPressing(`downarrow`, [0, 55_000]);
                    checkValuesAfterPressing(`downarrow`, [0, 10_000]);
                    checkValuesAfterPressing(`downarrow`, [0, 5_000]);
                });

                it(`cannot set position of the LEFT slider MORE THAN position of the RIGHT slider (by ArrowUp)`, () => {
                    cy.get(`@leftSlider`).focus();
                    cy.get(`body`).type(`{uparrow}{uparrow}{uparrow}{uparrow}`);

                    checkValuesAfterPressing(`uparrow`, [100_000, 100_000]);
                    checkValuesAfterPressing(`uparrow`, [100_000, 100_000]);
                    checkValuesAfterPressing(`uparrow`, [100_000, 100_000]);
                });

                it(`cannot set position of the RIGHT slider LESS THAN position of the LEFT slider (by ArrowDown)`, () => {
                    cy.get(`@leftSlider`).focus();
                    cy.get(`body`).type(`{uparrow}`);

                    cy.get(`@rightSlider`).focus();
                    cy.get(`body`).type(`{downarrow}{downarrow}{downarrow}`);

                    checkValuesAfterPressing(`downarrow`, [5_000, 5_000]);
                    checkValuesAfterPressing(`downarrow`, [5_000, 5_000]);
                    checkValuesAfterPressing(`downarrow`, [5_000, 5_000]);
                });
            });
        });
    });
});
