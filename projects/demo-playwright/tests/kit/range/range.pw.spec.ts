import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiRangePO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('TuiRange', () => {
    let example: Locator;
    let range: TuiRangePO;

    describe('examples page', () => {
        beforeEach(async ({page, browserName}) => {
            await tuiGoto(page, DemoRoute.Range);
            // TODO: why does this test keep failing in safari
            test.skip(
                browserName !== 'chromium',
                'This feature is only relevant in Chrome',
            );
        });

        describe('change selected range on click', () => {
            beforeEach(({page}) => {
                example = new TuiDocumentationPagePO(page).getExample('#thumb-radius');
                range = new TuiRangePO(example.locator('tui-range').first());
            });

            test('click on the beginning of the track changes only nearest (left) slider', async () => {
                await range.host.click({position: {x: 0, y: 0}});

                await expect(range.start).toHaveValue('0');
                await expect(range.end).toHaveValue('60');
                await expect.soft(example).toHaveScreenshot();
            });

            test('click on the end of the track changes only nearest (right) slider', async () => {
                await range.host.click({position: {x: 290, y: 0}});

                await expect(range.start).toHaveValue('40');
                await expect(range.end).toHaveValue('95');
                await expect.soft(example).toHaveScreenshot();
            });

            test('click between two thumbs triggers only nearest thumb', async () => {
                await range.host.click({position: {x: 157, y: 0}});
                await range.host.click({position: {x: 290, y: 0}});

                await expect(range.start).toHaveValue('40');
                await expect(range.end).toHaveValue('95');
                await expect.soft(example).toHaveScreenshot();

                await range.host.click({position: {x: 163, y: 0}});
                await range.host.click({position: {x: 290, y: 0}});

                await expect(range.start).toHaveValue('54');
                await expect(range.end).toHaveValue('95');
                await expect.soft(example).toHaveScreenshot();
            });
        });

        describe('keyboard interactions', () => {
            describe('basic range (from 0 to 100 with 25 steps). Initial value [0, 25]', () => {
                beforeEach(({page}) => {
                    example = new TuiDocumentationPagePO(page).getExample('#segments');
                    range = new TuiRangePO(example.locator('tui-range'));
                });

                test('pressing of Arrow Right increases by one step (after focus on right slider)', async ({
                    page,
                }) => {
                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('25');
                    await expect.soft(example).toHaveScreenshot();

                    await range.end.focus();
                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('50');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('75');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();
                });

                test('pressing of Arrow Right increases by one step (after focus on left slider)', async ({
                    page,
                }) => {
                    await range.host.click({position: {x: 290, y: 0}});

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();

                    await range.start.focus();
                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('25');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('50');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('75');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('100');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();
                });

                test('pressing of Arrow Left decreases by one step (after setting right thumb active via click)', async ({
                    page,
                }) => {
                    await range.host.click({position: {x: 290, y: 0}});

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('75');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('50');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('25');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowLeft');

                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('0');
                    await expect.soft(example).toHaveScreenshot();
                });

                test('cannot set left thumb more than right thumb (by Arrow Right)', async ({
                    page,
                }) => {
                    await expect(range.start).toHaveValue('0');
                    await expect(range.end).toHaveValue('25');
                    await expect.soft(example).toHaveScreenshot();

                    await range.start.focus();
                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('25');
                    await expect(range.end).toHaveValue('25');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('25');
                    await expect(range.end).toHaveValue('25');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('25');
                    await expect(range.end).toHaveValue('25');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('25');
                    await expect(range.end).toHaveValue('25');
                    await expect.soft(example).toHaveScreenshot();
                });

                test('cannot set right thumb less than left thumb (by ArrowLeft)', async ({
                    page,
                }) => {
                    await range.host.click({position: {x: 290, y: 0}});
                    await range.start.focus();
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('50');
                    await expect(range.end).toHaveValue('100');
                    await expect.soft(example).toHaveScreenshot();

                    await range.end.focus();
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');
                    await page.keyboard.down('ArrowLeft');

                    await expect(range.start).toHaveValue('50');
                    await expect(range.end).toHaveValue('50');
                    await expect.soft(example).toHaveScreenshot();

                    await range.start.focus();
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');
                    await page.keyboard.down('ArrowRight');

                    await expect(range.start).toHaveValue('50');
                    await expect(range.end).toHaveValue('50');
                    await expect.soft(example).toHaveScreenshot();
                });
            });

            describe('range with keySteps (from 0 to 1M) with 8 steps. Initial value [0, 100_000]', () => {
                let output: Locator;

                beforeEach(({page}) => {
                    example = new TuiDocumentationPagePO(page).getExample('#key-steps');
                    range = new TuiRangePO(example.locator('tui-range'));
                    output = example.locator('output code');
                });

                test('ArrowUp increases value of the focused slider', async ({page}) => {
                    await range.end.focus();

                    await expect(output).toContainText('[ 0, 100000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 300000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 500000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 750000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 0, 1000000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await range.start.focus();
                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 5000, 1000000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 10000, 1000000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 55000, 1000000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 1000000 ]');
                    await expect.soft(example).toHaveScreenshot();
                });

                test('ArrowDown decreases value of the focused slider', async ({
                    page,
                }) => {
                    await range.end.focus();
                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 0, 55000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 0, 10000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 0, 5000 ]');
                    await expect.soft(example).toHaveScreenshot();
                });

                test('cannot set position of the LEFT slider MORE THAN position of the RIGHT slider (by ArrowUp)', async ({
                    page,
                }) => {
                    await range.start.focus();
                    await page.keyboard.down('ArrowUp');
                    await page.keyboard.down('ArrowUp');
                    await page.keyboard.down('ArrowUp');
                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowUp');

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect.soft(example).toHaveScreenshot();
                });

                test('cannot set position of the RIGHT slider LESS THAN position of the LEFT slider (by ArrowDown)', async ({
                    page,
                }) => {
                    await range.start.focus();
                    await page.keyboard.down('ArrowUp');
                    await range.end.focus();
                    await page.keyboard.down('ArrowDown');
                    await page.keyboard.down('ArrowDown');
                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect.soft(example).toHaveScreenshot();

                    await page.keyboard.down('ArrowDown');

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect.soft(example).toHaveScreenshot();
                });
            });
        });
    });

    describe('API page', () => {
        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            range = new TuiRangePO(example.locator('tui-range').first());
        });

        test('click on the middle of the track | [min]="0" & [max]="1" & [step]="0.05"', async ({
            page,
        }) => {
            const width = 300;

            await tuiGoto(
                page,
                `${DemoRoute.Range}/API?sandboxWidth=${width}&min=0&max=1&step=0.05&sandboxExpanded=true`,
            );
            await range.host.click({position: {x: width / 2, y: 0}});

            await expect(range.start).toHaveValue('0');
            await expect(range.end).toHaveValue('0.5');
            await expect(example).toHaveScreenshot();
        });
    });
});
