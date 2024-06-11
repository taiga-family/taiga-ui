import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputTimePO} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

const MOCK_DATE = new Date(2021, 10, 10, 15, 30, 42, 300);

test.describe('InputTime', () => {
    test.use({viewport: {width: 400, height: 400}});

    test.describe('Examples', () => {
        let documentationPage: TuiDocumentationPagePO;

        Array.from(
            [
                'base',
                'dropdown',
                'options',
                'options-max',
                'options-max-and-postfix',
            ].entries(),
        ).forEach(([exampleIndex, id]) => {
            test(id, async ({page}) => {
                await tuiGoto(page, DemoRoute.InputTime, {date: MOCK_DATE});

                documentationPage = new TuiDocumentationPagePO(page);

                const example = documentationPage.getExample(`#${id}`);
                const inputTimeLocators = await example.locator('tui-input-time').all();

                for (const [i, inputTimeLocator] of inputTimeLocators.entries()) {
                    const inputTime = new TuiInputTimePO(inputTimeLocator);

                    await inputTime.textfield.click();
                    await inputTime.textfield.clear();

                    await expect(inputTime.textfield).toBeFocused();
                    await expect(page).toHaveScreenshot(
                        `0${exampleIndex + 1}-input-time-${id}-${i + 1}.png`,
                    );
                }
            });
        });
    });

    test.describe('API', () => {
        let apiPageExample: Locator;
        let inputTime: TuiInputTimePO;

        test.beforeEach(({page}) => {
            apiPageExample = new TuiDocumentationPagePO(page).apiPageExample;
            inputTime = new TuiInputTimePO(apiPageExample.locator('tui-input-time'));
        });

        ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'].forEach(mode => {
            test(`the input is configured for ${mode} mode`, async ({page}) => {
                await tuiGoto(page, `components/input-time/API?mode=${mode}`, {
                    date: MOCK_DATE,
                });

                await inputTime.textfield.click();
                await expect(apiPageExample).toHaveScreenshot(`time_mode_${mode}.png`);
            });
        });

        test.describe('items are passed', () => {
            test('the dropdown is visible when the input is focused', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputTime}/API?items$=1`, {
                    date: MOCK_DATE,
                });

                await inputTime.textfield.click();
                await expect(inputTime.dropdown).toHaveScreenshot(
                    'dropdown_is_visible.png',
                );
            });

            test('disabledItemHandler disables the specified items in the dropdown', async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    'components/input-time/API?disabledItemHandler$=1&items$=1',
                    {
                        date: MOCK_DATE,
                    },
                );

                await inputTime.textfield.click();
                await inputTime.scrollDropdown(0, 500);

                await expect(inputTime.dropdown).toHaveScreenshot(
                    '06_00_is_disabled.png',
                );
            });

            ['s', 'm', 'l'].forEach(size => {
                test(`the dropdown is configured for ${size} size`, async ({page}) => {
                    await tuiGoto(
                        page,
                        `components/input-time/API?items$=1&itemSize=${size}`,
                        {
                            date: MOCK_DATE,
                        },
                    );

                    await inputTime.textfield.click();

                    await expect(inputTime.dropdown).toHaveScreenshot(
                        `dropdown_size_${size}.png`,
                    );
                });
            });

            test('strict forces to select the closest value from items', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputTime}/API?strict=true&items$=1`, {
                    date: MOCK_DATE,
                });

                await inputTime.textfield.click();
                await inputTime.textfield.clear();
                await inputTime.textfield.fill('07:55');

                await expect(inputTime.textfield).toHaveValue('08:00');
            });
        });

        test.describe('Basic typing from keyboard', () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM`);
                await inputTime.textfield.clear();

                await expect(inputTime.textfield).toHaveValue('');
            });

            test('3 => 03', async () => {
                await inputTime.textfield.type('3');

                await expect(inputTime.textfield).toHaveValue('03');
                await expect(inputTime.textfield).toHaveJSProperty('selectionStart', 2);
                await expect(inputTime.textfield).toHaveJSProperty('selectionEnd', 2);
            });

            test('1111 => 11:11', async () => {
                await inputTime.textfield.type('1111');

                await expect(inputTime.textfield).toHaveValue('11:11');
                await expect(inputTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '11:11'.length,
                );
                await expect(inputTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '11:11'.length,
                );
            });

            test('0130 => 01:30', async () => {
                await inputTime.textfield.type('0130');

                await expect(inputTime.textfield).toHaveValue('01:30');
                await expect(inputTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '01:30'.length,
                );
                await expect(inputTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '01:30'.length,
                );
            });

            test('99 => 09:09', async () => {
                await inputTime.textfield.type('99');

                await expect(inputTime.textfield).toHaveValue('09:09');
                await expect(inputTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '09:09'.length,
                );
                await expect(inputTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '09:09'.length,
                );
            });
        });
    });
});
