import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {beforeEach, describe} = test;

describe('Textfield[readonly=true/false] + dropdown', () => {
    test.describe('click on textfield', () => {
        let documentation: TuiDocumentationPagePO;
        let example!: Locator;
        let input!: Locator;
        let dropdown!: Locator;

        beforeEach(({page}) => {
            documentation = new TuiDocumentationPagePO(page);
            example = documentation.demo;
            input = example.locator('tui-textfield input');
            dropdown = page.locator('tui-dropdown');
        });

        [
            DemoRoute.ComboBox,
            DemoRoute.Select,
            DemoRoute.InputDate,
            DemoRoute.InputDateRange,
            DemoRoute.InputDateTime,
            DemoRoute.InputMonth,
        ].forEach((path) => {
            describe('opens dropdown for readonly=false', () => {
                test(path, async ({page}) => {
                    await tuiGoto(page, `${path}/API?readonly=false&readOnly=false`); // TODO: delete `readOnly` param in next PR
                    await expect(documentation.getRow('[readOnly]')).toBeAttached();
                    await input.click();

                    await expect(dropdown).toBeAttached();
                });
            });

            describe('does not open dropdown for readonly=true', () => {
                test(path, async ({page}) => {
                    await tuiGoto(page, `${path}/API?readonly=true&readOnly=true`); // TODO: delete `readOnly` param in next PR
                    await expect(documentation.getRow('[readOnly]')).toBeAttached();
                    await input.click();

                    await expect(dropdown).not.toBeAttached();
                });
            });
        });
    });
});
