import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputTimePO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputTime', () => {
    test.describe('API', () => {
        let example: Locator;
        let inputTime: TuiInputTimePO;

        test.beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            inputTime = new TuiInputTimePO(
                example.locator('tui-textfield:has([tuiInputTime])'),
            );
        });

        test.describe('zero padding on blur', () => {
            const check = (typedCharacters: string, expectedFinalValue: string): void => {
                test(`Type ${typedCharacters} => Blur => ${expectedFinalValue}`, async () => {
                    await expect(inputTime.textfield).toHaveValue('');

                    await inputTime.textfield.pressSequentially(typedCharacters);
                    await inputTime.textfield.blur();

                    await expect(inputTime.textfield).toHaveValue(expectedFinalValue);
                });
            };

            test.describe('HH:MM', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM`);
                });

                check('1', '01:00');
                check('12', '12:00');
                check('12:', '12:00');
                check('123', '12:03');
                check('12:3', '12:03');
                check('12:34', '12:34');
            });

            test.describe('HH:MM AA', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM%20AA`);
                });

                check('0', '12:00 AM');
                check('01', '01:00 AM');
                check('012', '01:02 AM');
                check('0123', '01:23 AM');
            });

            test.describe('HH:MM:SS', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM:SS`);
                });

                check('1', '01:00:00');
                check('12', '12:00:00');
                check('12:', '12:00:00');
                check('123', '12:03:00');
                check('12:3', '12:03:00');
                check('12:34', '12:34:00');
                check('12:34:', '12:34:00');
                check('12:34:5', '12:34:05');
                check('12:34:56', '12:34:56');
            });

            test.describe('HH:MM:SS.MSS', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM:SS.MSS`);
                });

                check('1', '01:00:00.000');
                check('12', '12:00:00.000');
                check('12:', '12:00:00.000');
                check('123', '12:03:00.000');
                check('12:3', '12:03:00.000');
                check('12:34', '12:34:00.000');
                check('12:34:', '12:34:00.000');
                check('12:34:5', '12:34:05.000');
                check('12:34:56', '12:34:56.000');
                check('12:34:56.', '12:34:56.000');
                check('12:34:56.7', '12:34:56.007');
                check('12:34:56.78', '12:34:56.078');
                check('12:34:56.789', '12:34:56.789');
            });
        });
    });
});
