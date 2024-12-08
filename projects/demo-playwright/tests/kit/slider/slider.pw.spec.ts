import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiSliderPO} from '@demo-playwright/utils';
import {maskitoParseNumber} from '@maskito/kit';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('Slider', () => {
    test.use({viewport: {width: 500, height: 500}});

    test.describe('correctly displays values with float percentage progress', () => {
        [4, 7, 13, 24, 39, 78].forEach((value) => {
            test(`value = ${value}`, async ({page}) => {
                await tuiGoto(page, `${DemoRoute.Slider}/API?max=89&min=0&step=1`);

                const {apiPageExample} = new TuiDocumentationPagePO(page);
                const slider = new TuiSliderPO(apiPageExample.getByRole('slider'));

                await slider.setValue(value);

                await expect(apiPageExample).toHaveScreenshot(
                    `01-slider-float-percentage-${value}.png`,
                );
            });
        });
    });

    test.describe('correctly sets control value on input change (using TuiSliderKeyStepsDirective)', () => {
        const testsMeta = [
            {inputStep: 1, expectedControlValue: 14_500},
            {inputStep: 4, expectedControlValue: 43_000},
            {inputStep: 9, expectedControlValue: 90_500},
            {inputStep: 16, expectedControlValue: 220_000},
            {inputStep: 18, expectedControlValue: 260_000},
            {inputStep: 21, expectedControlValue: 370_000},
            {inputStep: 27, expectedControlValue: 790_000},
            {inputStep: 30, expectedControlValue: 1_000_000},
        ] as const;

        testsMeta.forEach(({inputStep, expectedControlValue}) => {
            test(`[inputStep]=${inputStep} & [prettifiedControlValue]=${expectedControlValue}`, async ({
                page,
            }) => {
                await tuiGoto(page, DemoRoute.Slider);

                const documentationPage = new TuiDocumentationPagePO(page);
                const example = documentationPage.getExample('#key-steps');
                const slider = new TuiSliderPO(example.getByRole('slider'));

                await slider.setValue(inputStep);

                const controlValue = await example
                    .getByTestId('key-steps-example-control-value')
                    .textContent()
                    .then((x) => maskitoParseNumber(x || ''));

                expect(controlValue).toBe(expectedControlValue);
                await expect(example).toHaveScreenshot(
                    `02-slider-key-steps-${inputStep}step.png`,
                );
            });
        });
    });

    test('with [min] > 0', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Slider}/API?min=1&max=10&segments=9`);

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toHaveScreenshot(
            '03-min_1__max_10__value_1__segments_9.png',
        );
    });

    test('with [min] < 0 && [max] > 0', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Slider}/API?min=-5&max=5&segments=5`);

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toHaveScreenshot(
            '04-min_-5__max_5__value_1__segments_5.png',
        );
    });

    test.describe('programmatically change value', () => {
        test.describe('ngModel', () => {
            test.use({viewport: {width: 350, height: 500}});

            let example!: Locator;
            let slider!: TuiSliderPO;
            let plusButton!: Locator;
            let minusButton!: Locator;

            test.beforeEach(async ({page, browserName}) => {
                // TODO: why does this test keep failing in safari
                test.skip(
                    browserName !== 'chromium',
                    'This feature is only relevant in Chrome',
                );

                await tuiGoto(page, DemoRoute.Slider);

                example = page.locator('#complex .t-example');
                slider = new TuiSliderPO(example.getByRole('slider'));
                plusButton = example.locator('button.plus');
                minusButton = example.locator('button.minus');
            });

            test('decrease value by 1 step', async ({page}) => {
                await minusButton.click();

                await expect(async () => {
                    expect(await slider.value).toBe(0.75);
                    expect(await slider.fillPercentage).toBe(17);
                }).toPass();

                await expect(page.locator('tui-hint')).toBeAttached();

                await expect(example).toHaveScreenshot(
                    '05-slider-ngModel-decrease-by-1-step.png',
                );
            });

            test('increase value by 1 step', async ({page}) => {
                await plusButton.click();

                await expect(async () => {
                    expect(await slider.value).toBe(1.25);
                    expect(await slider.fillPercentage).toBe(50);
                }).toPass();

                await expect(page.locator('tui-hint')).toBeAttached();

                await expect(example).toHaveScreenshot(
                    '06-slider-ngModel-increase-by-1-step.png',
                );
            });

            test('increase value by 2 steps', async ({page}) => {
                await plusButton.click();
                await plusButton.click();

                await expect(async () => {
                    expect(await slider.value).toBe(1.5);
                    expect(await slider.fillPercentage).toBe(67);
                }).toPass();

                await expect(page.locator('tui-hint')).toBeAttached();

                await expect(example).toHaveScreenshot(
                    '07-slider-ngModel-increase-by-2-step.png',
                );
            });
        });

        test.describe('formController', () => {
            let example!: Locator;
            let slider!: TuiSliderPO;
            let tickLabels!: Locator[];

            test.beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.Slider);

                const documentationPage = new TuiDocumentationPagePO(page);

                example = documentationPage.getExample('#segments');
                slider = new TuiSliderPO(example.getByRole('slider'));

                await page.waitForTimeout(300);

                tickLabels = await example.getByRole('button').all();
            });

            test('=> 0', async () => {
                await tickLabels[0]?.click();

                await expect(async () => {
                    expect(await slider.value).toBe(0);
                    expect(await slider.fillPercentage).toBe(0);
                }).toPass();

                await expect(example).toHaveScreenshot('08-slider-formControl-0.png');
            });

            test('=> 500', async () => {
                await tickLabels[2]?.click();

                await expect(async () => {
                    expect(await slider.value).toBe(500);
                    expect(await slider.fillPercentage).toBe(50);
                }).toPass();

                await expect(example).toHaveScreenshot('08-slider-formControl-500.png');
            });

            test('=> 750', async () => {
                await tickLabels[3]?.click();

                await expect(async () => {
                    expect(await slider.value).toBe(750);
                    expect(await slider.fillPercentage).toBe(75);
                }).toPass();

                await expect(example).toHaveScreenshot('08-slider-formControl-750.png');
            });

            test('=> 1000', async () => {
                await tickLabels.at(-1)?.click();

                await expect(async () => {
                    expect(await slider.value).toBe(1000);
                    expect(await slider.fillPercentage).toBe(100);
                }).toPass();

                await expect(example).toHaveScreenshot('08-slider-formControl-1000.png');
            });
        });
    });
});
