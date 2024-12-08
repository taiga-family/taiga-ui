import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiTabsPO} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('Tabs', () => {
    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.Tabs);
        });

        describe('complex', () => {
            let example!: Locator;
            let tabsPO!: TuiTabsPO;

            beforeEach(async ({page}) => {
                example = new TuiDocumentationPagePO(page).getExample('#complex');
                tabsPO = new TuiTabsPO(example.locator('tui-tabs-with-more'));

                await example.scrollIntoViewIfNeeded();
            });

            test('no extra margin after the last tab', async ({page, browserName}) => {
                // TODO: why does this test keep failing in safari
                test.skip(
                    browserName !== 'chromium',
                    'This feature is only relevant in Chrome',
                );

                await page.setViewportSize({width: 1500, height: 500});

                await expect(example).toHaveScreenshot('01-tabs-1.png');

                await page.locator('button:has-text("Collaborators")').click();

                await expect(example).toHaveScreenshot('01-tabs-2.png');

                await page.locator('button:has-text("Neil Innes")').click();

                await expect(example).toHaveScreenshot('01-tabs-3.png');

                await page.setViewportSize({width: 560, height: 500});

                await expect(example).toHaveScreenshot('01-tabs-4.png');

                await example.locator('tui-tabs-with-more .t-more').click();

                await expect(example).toHaveScreenshot('01-tabs-5.png');

                await page.locator('button:has-text("John Cleese")').nth(1).focus();
                await page.keyboard.down('Enter');

                await expect(example).toHaveScreenshot('01-tabs-6.png');

                await example.locator('tui-tabs-with-more .t-more').click();
                await page.locator('button:has-text("Collaborators")').nth(1).focus();
                await page.keyboard.down('Enter');

                await expect(example).toHaveScreenshot('01-tabs-7.png');

                await page.locator('button:has-text("Neil Innes")').nth(0).focus();
                await page.keyboard.down('Enter');

                await expect(example).toHaveScreenshot('01-tabs-8.png');
            });

            test('shows only a single dropdown for the nested item (with [tuiDropdown]) inside more section', async ({
                page,
                browserName,
            }) => {
                test.skip(
                    browserName !== 'chromium',
                    // TODO: bug https://github.com/taiga-family/taiga-ui/issues/9836
                    'This feature is only relevant in Chrome',
                );

                await page.setViewportSize({width: 550, height: 700});

                await expect(tabsPO.more).toBeVisible();

                await tabsPO.more.click();
                await tabsPO.getMoreOption('Eric Idle').click();
                await tabsPO.more.click();
                await tabsPO.getMoreOption('Collaborators').click();

                await expect(page.locator('tui-dropdown')).toHaveCount(2);
                await expect(page).toHaveScreenshot(
                    'tabs-dropdown-inside-more-dropdown.png',
                );

                await page
                    .locator('tui-dropdown [tuiOption]', {
                        hasText: 'Carol Cleveland',
                    })
                    .hover();

                await expect(page).toHaveScreenshot(
                    'tabs-dropdown-inside-more-dropdown-hover-item.png',
                );
            });
        });
    });

    describe('API', () => {
        let example!: Locator;

        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
        });

        [-2, -1, 0, 1, 2, 3, 4, 5, 100, 1000].forEach((index) => {
            test(`clamp active activeItemIndex=${index}`, async ({page}) => {
                await tuiGoto(page, `/navigation/tabs/API?activeItemIndex=${index}`);

                await expect(example).toHaveScreenshot(
                    `02-tabs-activeItemIndex-${index}.png`,
                );
            });
        });

        test('Single button', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.Tabs}/API?activeItemIndex=2&sandboxWidth=133`,
            );

            await expect(example).toHaveScreenshot('03-tabs-single-item-01.png');
        });
    });
});
