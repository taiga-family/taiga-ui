import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {type DocRoutePageGroup, pages} from '../../../demo/src/modules/app/pages';

const inputs =
    (pages as DocRoutePageGroup[]).find((page) => page.title === 'Inputs')?.subPages ??
    [];

test.describe('Inputs - updateOn', () => {
    for (const docPage of inputs) {
        const {title, route} = docPage;
        const placeholder = '01011970';

        let demo: Locator;
        let input: Locator;
        let select: Locator;
        let option: Locator;
        let submit: Locator;

        test.describe(`${title}`, () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(page, `${route}/API`);

                demo = new TuiDocumentationApiPagePO(page).apiPageExample;

                const details = demo.getByTestId('tui-demo-button__toggle-details');

                if ((await details.all()).length === 0) {
                    test.skip();

                    return;
                }

                await details.click();

                select = demo.getByTestId('tui-demo-select__expand-update-on');
                submit = demo.getByTestId('tui-demo-button__submit-state');
                option = page.locator('tui-data-list [tuiOption]');
                input = demo.locator('input:not([readonly]):not(:disabled)').first();
            });

            async function expectScreenshot(name: string): Promise<void> {
                await expect.soft(demo).toHaveScreenshot(`${title}-${name}.png`);
            }

            test('update on change', async () => {
                await input.fill(placeholder);
                await expectScreenshot('change-01');

                await input.blur();
                await expectScreenshot('change-02');
                await expect(input).toBeVisible();
            });

            test('update on blur', async () => {
                await select.click();
                await option.getByText('blur').click();

                await input.fill(placeholder);
                await expectScreenshot('blur-01');

                await input.blur();
                await expectScreenshot('blur-02');
                await expect(input).toBeVisible();
            });

            test('update on submit', async () => {
                await select.click();
                await option.getByText('submit').click();

                await input.fill(placeholder);
                await expectScreenshot('submit-01');

                await input.blur();
                await expectScreenshot('submit-02');

                await submit.click();
                await expectScreenshot('submit-03');
                await expect(submit).toBeEnabled();
            });
        });
    }
});
