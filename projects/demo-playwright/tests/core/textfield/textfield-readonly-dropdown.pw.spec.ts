import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {TUI_DROPDOWN_LOCATORS, TUI_INPUT_LOCATORS} from '@taiga-ui/testing/locators';

const {beforeEach, describe} = test;

describe('Textfield[readonly=true/false] + dropdown', () => {
    test.describe('click on textfield', () => {
        let documentation: TuiDocumentationPagePO;
        let example!: Locator;
        let input!: Locator;
        let dropdown!: Locator;

        beforeEach(({page}) => {
            documentation = new TuiDocumentationPagePO(page);
            example = documentation.apiPageExample;
            input = example.locator(
                `${TUI_INPUT_LOCATORS.HOST} input, tui-primitive-textfield input`,
            );
            dropdown = page.locator(TUI_DROPDOWN_LOCATORS.HOST);
        });

        [
            DemoRoute.ComboBox,
            DemoRoute.ComboBoxLegacy,
            DemoRoute.Select,
            DemoRoute.SelectLegacy,
            DemoRoute.InputDate,
            DemoRoute.InputDateLegacy,
            DemoRoute.InputDateRange,
            DemoRoute.InputDateRangeLegacy,
            DemoRoute.InputDateTime,
            DemoRoute.InputDateTimeLegacy,
            DemoRoute.InputMonth,
            DemoRoute.InputMonthLegacy,
        ].forEach((path) => {
            describe('opens dropdown for readOnly=false', () => {
                test(`${path}`, async ({page}) => {
                    await tuiGoto(page, `${path}/API?readOnly=false`);
                    await expect(documentation.getRow('[readOnly]')).toBeAttached();
                    await input.click();

                    await expect(dropdown).toBeAttached();
                });
            });

            describe('does not open dropdown for readOnly=true', () => {
                test(`${path}`, async ({page}) => {
                    await tuiGoto(page, `${path}/API?readOnly=true`);
                    await expect(documentation.getRow('[readOnly]')).toBeAttached();
                    await input.click();

                    await expect(dropdown).not.toBeAttached();
                });
            });
        });
    });
});
