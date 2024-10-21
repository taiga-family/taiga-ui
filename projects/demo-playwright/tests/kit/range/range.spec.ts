import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiRangePO} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('TuiRange', () => {
    test.beforeEach(async ({page, browserName}) => {
        await tuiGoto(page, DemoRoute.Range);

        // TODO: why does this test keep failing in safari
        test.skip(browserName !== 'chromium', 'This feature is only relevant in Chrome');
    });

    test.describe('examples page', () => {
        let example: Locator;
        let range: TuiRangePO;

        test.describe('change selected range on click', () => {
            test.beforeEach(({page}) => {
                example = new TuiDocumentationPagePO(page).getExample('#base');
                range = new TuiRangePO(example.locator('tui-range'));
            });

            test('click on the beginning of the track changes only nearest (left) slider', async () => {
                await range.host.click({position: {x: 0, y: 0}});

                await expect(range.left).toHaveValue('0');
                await expect(range.right).toHaveValue('6');
                await expect(example).toHaveScreenshot('01-range-click-checks-0-6.png');
            });

            test('click on the end of the track changes only nearest (right) slider', async () => {
                await range.host.click({position: {x: 276, y: 0}});

                await expect(range.left).toHaveValue('4');
                await expect(range.right).toHaveValue('10');
                await expect(example).toHaveScreenshot('02-range-click-checks-4-10.png');
            });

            test('click between two thumbs triggers only nearest thumb', async () => {
                await range.host.click({position: {x: 150, y: 0}});
                await range.host.click({position: {x: 276, y: 0}});

                await expect(range.left).toHaveValue('4');
                await expect(range.right).toHaveValue('10');
                await expect(example).toHaveScreenshot('03-range-click-checks-4-10.png');

                await range.host.click({position: {x: 155, y: 0}});
                await range.host.click({position: {x: 276, y: 0}});

                await expect(range.left).toHaveValue('5');
                await expect(range.right).toHaveValue('10');
                await expect(example).toHaveScreenshot('03-range-click-checks-5-10.png');
            });
        });

        test.describe('keyboard interactions', () => {
            test.describe('basic range (from 0 to 1000 with 250 steps). Initial value [0, 250]', () => {
                test.beforeEach(({page}) => {
                    example = new TuiDocumentationPagePO(page).getExample('#segments');
                    range = new TuiRangePO(example.locator('tui-range'));
                });

                test('pressing of Arrow Right increases by one step (after focus on right slider)', async ({
                    page,
                }) => {
                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('250');
                    await expect(example).toHaveScreenshot('04-range-0-250.png');

                    await range.right.focus();
                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('500');
                    await expect(example).toHaveScreenshot('04-range-0-500.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('750');
                    await expect(example).toHaveScreenshot('04-range-0-750.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('04-range-0-100.png');
                });

                test('pressing of Arrow Right increases by one step (after focus on left slider)', async ({
                    page,
                }) => {
                    await range.host.click({position: {x: 276, y: 0}});

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('05-range-0-1000.png');

                    await range.left.focus();
                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('250');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('05-range-250-1000.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('500');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('05-range-500-1000.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('750');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('05-range-750-1000.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('1000');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('05-range-1000-1000.png');
                });

                test('pressing of Arrow Left decreases by one step (after setting right thumb active via click)', async ({
                    page,
                }) => {
                    await range.host.click({position: {x: 276, y: 0}});

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('06-range-0-1000.png');

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('750');
                    await expect(example).toHaveScreenshot('06-range-0-750.png');

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('500');
                    await expect(example).toHaveScreenshot('06-range-0-500.png');

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('250');
                    await expect(example).toHaveScreenshot('06-range-0-250.png');

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('0');
                    await expect(example).toHaveScreenshot('06-range-0-0.png');
                });

                test('cannot set left thumb more than right thumb (by Arrow Right)', async ({
                    page,
                }) => {
                    await expect(range.left).toHaveValue('0');
                    await expect(range.right).toHaveValue('250');
                    await expect(example).toHaveScreenshot('07-range-0-250.png');

                    await range.left.focus();
                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('250');
                    await expect(range.right).toHaveValue('250');
                    await expect(example).toHaveScreenshot('07-1-range-250-250.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('250');
                    await expect(range.right).toHaveValue('250');
                    await expect(example).toHaveScreenshot('07-2-range-250-250.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('250');
                    await expect(range.right).toHaveValue('250');
                    await expect(example).toHaveScreenshot('07-3-range-250-250.png');

                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('250');
                    await expect(range.right).toHaveValue('250');
                    await expect(example).toHaveScreenshot('07-4-range-250-250.png');
                });

                test('cannot set right thumb less than left thumb (by ArrowLeft)', async ({
                    page,
                }) => {
                    await range.host.click({position: {x: 276, y: 0}});
                    await range.left.focus();
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('500');
                    await expect(range.right).toHaveValue('1000');
                    await expect(example).toHaveScreenshot('08-range-500-1000.png');

                    await range.right.focus();
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');

                    await expect(range.left).toHaveValue('500');
                    await expect(range.right).toHaveValue('500');
                    await expect(example).toHaveScreenshot('08-1-range-500-500.png');

                    await range.left.focus();
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');

                    await expect(range.left).toHaveValue('500');
                    await expect(range.right).toHaveValue('500');
                    await expect(example).toHaveScreenshot('08-2-range-500-500.png');
                });
            });

            test.describe('range with keySteps (from 0 to 1M) with 8 steps. Initial value [0, 100_000]', () => {
                let output: Locator;

                test.beforeEach(({page}) => {
                    example = new TuiDocumentationPagePO(page).getExample('#key-steps');
                    range = new TuiRangePO(example.locator('tui-range'));
                    output = example.locator('output code');
                });

                test('ArrowUp increases value of the focused slider', async ({page}) => {
                    await range.right.focus();

                    await expect(output).toContainText('[ 0, 100000 ]');
                    await expect(example).toHaveScreenshot('09-range-0-100_000.png');

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 300000 ]');
                    await expect(example).toHaveScreenshot('09-range-0-300_000.png');

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 500000 ]');
                    await expect(example).toHaveScreenshot('09-range-0-500_000.png');

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 750000 ]');
                    await expect(example).toHaveScreenshot('09-range-0-750_000.png');

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 1000000 ]');
                    await expect(example).toHaveScreenshot('09-range-0-1_000_000.png');

                    await range.left.focus();
                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 5000, 1000000 ]');
                    await expect(example).toHaveScreenshot(
                        '09-range-5_000-1_000_000.png',
                    );

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 10000, 1000000 ]');
                    await expect(example).toHaveScreenshot(
                        '09-range-10_000-1_000_000.png',
                    );

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 55000, 1000000 ]');
                    await expect(example).toHaveScreenshot(
                        '09-range-55_000-1_000_000.png',
                    );

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 1000000 ]');
                    await expect(example).toHaveScreenshot(
                        '09-range-100_000-1_000_000.png',
                    );
                });

                test('ArrowDown decreases value of the focused slider', async ({
                    page,
                }) => {
                    await range.right.focus();
                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 0, 55000 ]');
                    await expect(example).toHaveScreenshot('10-range-0-55_000.png');

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 0, 10000 ]');
                    await expect(example).toHaveScreenshot('10-range-0-10_000.png');

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 0, 5000 ]');
                    await expect(example).toHaveScreenshot('10-range-0-5_000.png');
                });

                test('cannot set position of the LEFT slider MORE THAN position of the RIGHT slider (by ArrowUp)', async ({
                    page,
                }) => {
                    await range.left.focus();
                    await page.keyboard.down('ArrowUp');
                    await page.keyboard.down('ArrowUp');
                    await page.keyboard.down('ArrowUp');
                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(example).toHaveScreenshot(
                        '11-range-100_000-100_000.png',
                    );

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(example).toHaveScreenshot(
                        '11-1-range-100_000-100_000.png',
                    );

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(example).toHaveScreenshot(
                        '11-2-range-100_000-100_000.png',
                    );

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(example).toHaveScreenshot(
                        '11-3-range-100_000-100_000.png',
                    );
                });

                test('cannot set position of the RIGHT slider LESS THAN position of the LEFT slider (by ArrowDown)', async ({
                    page,
                }) => {
                    await range.left.focus();
                    await page.keyboard.down('ArrowUp');
                    await range.right.focus();
                    await page.keyboard.down('ArrowDown');
                    await page.keyboard.down('ArrowDown');
                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect(example).toHaveScreenshot('12-1-range-5000-5000.png');

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect(example).toHaveScreenshot('12-2-range-5000-5000.png');

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect(example).toHaveScreenshot('12-3-range-5000-5000.png');
                });
            });
        });
    });
});
