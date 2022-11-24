import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    EXAMPLE_ID,
    SLIDER_PAGE_URL,
} from '@demo-integrations/support/properties/shared.entities';

describe(`Slider`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
    });

    it(`correctly displays values with float percentage progress`, () => {
        cy.tuiVisit(`${SLIDER_PAGE_URL}/API?tuiMode=null&max=89&min=0&step=1&size=s`);

        cy.get(`input[type="range"]`).as(`slider`);

        const makeSnapOnValue = (value: number): void => {
            cy.get(`@slider`).invoke(`val`, value).trigger(`input`);

            cy.get(`tui-doc-demo`)
                .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                .matchImageSnapshot(`01-slider-float-percentage-${value}`);
        };

        makeSnapOnValue(4);
        makeSnapOnValue(7);
        makeSnapOnValue(13);
        makeSnapOnValue(24);
        makeSnapOnValue(39);
        makeSnapOnValue(78);
    });

    it(`correctly sets control value on input change (using TuiSliderKeyStepsDirective)`, () => {
        cy.tuiVisit(SLIDER_PAGE_URL);

        cy.get(`#keySteps`)
            .findByAutomationId(EXAMPLE_ID)
            .should(`be.visible`)
            .as(`example`);
        cy.get(`@example`).find(`input[type="range"]`).as(`slider`);
        cy.get(`@example`)
            .findByAutomationId(`key-steps-example-control-value`)
            .as(`controlValue`);

        cy.get(`@slider`).tuiScrollIntoView();

        const testsMeta = [
            {inputStep: 1, prettifiedControlValue: `14,500`},
            {inputStep: 4, prettifiedControlValue: `43,000`},
            {inputStep: 9, prettifiedControlValue: `90,500`},
            {inputStep: 16, prettifiedControlValue: `220,000`},
            {inputStep: 18, prettifiedControlValue: `260,000`},
            {inputStep: 21, prettifiedControlValue: `370,000`},
            {inputStep: 27, prettifiedControlValue: `790,000`},
            {inputStep: 30, prettifiedControlValue: `1,000,000`},
        ] as const;

        for (const {inputStep, prettifiedControlValue} of testsMeta) {
            cy.get(`@slider`).invoke(`val`, inputStep).trigger(`change`);
            cy.get(`@controlValue`).contains(prettifiedControlValue);
            cy.get(`@example`).matchImageSnapshot(`02-slider-key-steps-${inputStep}step`);
        }
    });

    it(`with \`min\` > 0`, () => {
        cy.tuiVisit(`${SLIDER_PAGE_URL}/API?min=1&max=10&segments=9`);

        cy.get(`tui-doc-demo`)
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`03-min_1__max_10__value_1__segments_9`);
    });

    it(`with \`min\` < 0 && \`max\` > 0 `, () => {
        cy.tuiVisit(`${SLIDER_PAGE_URL}/API?min=-5&max=5&segments=5`);

        cy.get(`tui-doc-demo`)
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`04-min_-5__max_5__value_1__segments_5`);
    });

    describe(`programmatically change value`, () => {
        describe(`ngModel`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(SLIDER_PAGE_URL);

                cy.get(`#complex`)
                    .findByAutomationId(EXAMPLE_ID)
                    .should(`be.visible`)
                    .as(`example`);
                cy.get(`@example`).find(`input[type="range"]`).as(`slider`);
                cy.get(`@example`)
                    .find(`button[icon="tuiIconMinus"]`)
                    .should(`be.visible`)
                    .as(`minusButton`);
                cy.get(`@example`)
                    .find(`button[icon="tuiIconPlus"]`)
                    .should(`be.visible`)
                    .as(`plusButton`);

                cy.get(`@slider`).tuiScrollIntoView();
            });

            it(`decrease value by 1 step`, () => {
                cy.get(`@minusButton`).click();

                checkSlider(`@slider`, {
                    expectedValue: `0.75`,
                    expectedFillPercentage: `16.6667%`,
                });

                cy.get(`@example`).matchImageSnapshot(
                    `05-slider-ngModel-decrease-by-1-step`,
                    {padding: [30, 0, 0, 0]},
                );
            });

            it(`increase value by 1 step`, () => {
                cy.get(`@plusButton`).click();

                checkSlider(`@slider`, {
                    expectedValue: `1.25`,
                    expectedFillPercentage: `50%`,
                });

                cy.get(`@example`).matchImageSnapshot(
                    `06-slider-ngModel-increase-by-1-step`,
                    {padding: [30, 0, 0, 0]},
                );
            });

            it(`increase value by 2 step`, () => {
                cy.get(`@plusButton`).click().click();

                checkSlider(`@slider`, {
                    expectedValue: `1.5`,
                    expectedFillPercentage: `66.6667%`,
                });

                cy.get(`@example`).matchImageSnapshot(
                    `07-slider-ngModel-increase-by-2-step`,
                    {padding: [30, 0, 0, 0]},
                );
            });
        });
        describe(`formController`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(SLIDER_PAGE_URL);

                cy.get(`#segments`)
                    .findByAutomationId(EXAMPLE_ID)
                    .should(`be.visible`)
                    .as(`example`);
                cy.get(`@example`).find(`input[type="range"]`).as(`slider`);
                cy.get(`@example`).find(`button`).should(`be.visible`).as(`tickLabels`);

                cy.get(`@slider`).tuiScrollIntoView();
            });

            it(`=> 0`, () => {
                cy.get(`@tickLabels`).first().click();

                checkSlider(`@slider`, {
                    expectedValue: `0`,
                    expectedFillPercentage: `0%`,
                });

                cy.get(`@example`).matchImageSnapshot(`08-slider-formControl-0`);
            });

            it(`=> 500`, () => {
                cy.get(`@tickLabels`).eq(2).click();

                checkSlider(`@slider`, {
                    expectedValue: `500`,
                    expectedFillPercentage: `50%`,
                });

                cy.get(`@example`).matchImageSnapshot(`08-slider-formControl-500`);
            });

            it(`=> 750`, () => {
                cy.get(`@tickLabels`).eq(3).click();

                checkSlider(`@slider`, {
                    expectedValue: `750`,
                    expectedFillPercentage: `75%`,
                });

                cy.get(`@example`).matchImageSnapshot(`08-slider-formControl-750`);
            });

            it(`=> 1000`, () => {
                cy.get(`@tickLabels`).last().click();

                checkSlider(`@slider`, {
                    expectedValue: `1000`,
                    expectedFillPercentage: `100%`,
                });

                cy.get(`@example`).matchImageSnapshot(`08-slider-formControl-1000`);
            });
        });
    });
});

function checkSlider(
    sliderSelector: string,
    {
        expectedValue,
        expectedFillPercentage,
    }: {expectedValue: string; expectedFillPercentage: string},
): void {
    cy.get(sliderSelector)
        .should(`have.value`, expectedValue)
        .filter(
            (_, $el) =>
                getComputedStyle($el).getPropertyValue(`--tui-slider-fill-percentage`) ===
                expectedFillPercentage,
        );
}
