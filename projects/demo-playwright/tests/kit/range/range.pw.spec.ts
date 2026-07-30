import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiRangePO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {TuiRangeEO} from '@taiga-ui/testing/playwright';
import {TUI_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

const {describe, beforeEach} = test;

describe('TuiRange', () => {
    let example: Locator;
    let range: TuiRangeEO;

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
                example = new TuiDocumentationPagePO(page).getExample('#size');
                range = new TuiRangeEO(page, TUI_RANGE_LOCATORS.HOST);
            });

            test('click on the beginning of the track changes only nearest (left) slider', async () => {
                await range.host.click({position: {x: 0, y: 0}});

                await expect(range.getStartValue()).resolves.toBe(0);
                await expect(range.getEndValue()).resolves.toBe(60);
                await expect
                    .soft(example)
                    .toHaveScreenshot('01-range-click-checks-0-6.png');
            });

            test('click on the end of the track changes only nearest (right) slider', async () => {
                await range.host.click({position: {x: 290, y: 0}});

                await expect(range.getStartValue()).resolves.toBe(40);
                await expect(range.getEndValue()).resolves.toBe(95);
                await expect
                    .soft(example)
                    .toHaveScreenshot('02-range-click-checks-4-10.png');
            });

            test('click between two thumbs triggers only nearest thumb', async () => {
                await range.host.click({position: {x: 157, y: 0}});
                await range.host.click({position: {x: 290, y: 0}});

                await expect(range.getStartValue()).resolves.toBe(40);
                await expect(range.getEndValue()).resolves.toBe(95);
                await expect
                    .soft(example)
                    .toHaveScreenshot('03-range-click-checks-4-10.png');

                await range.host.click({position: {x: 163, y: 0}});
                await range.host.click({position: {x: 290, y: 0}});

                await expect(range.getStartValue()).resolves.toBe(54);
                await expect(range.getEndValue()).resolves.toBe(95);
                await expect
                    .soft(example)
                    .toHaveScreenshot('03-range-click-checks-5-10.png');
            });
        });

        describe('keyboard interactions', () => {
            describe('basic range (from 0 to 100 with 25 steps). Initial value [0, 25]', () => {
                beforeEach(({page}) => {
                    example = new TuiDocumentationPagePO(page).getExample('#segments');
                    range = new TuiRangeEO(page, `#segments ${TUI_RANGE_LOCATORS.HOST}`);
                });

                test('pressing of Arrow Right increases by one step (after focus on right slider)', async () => {
                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(25);
                    await expect.soft(example).toHaveScreenshot('04-range-0-25.png');

                    await range.focusEnd();
                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(50);
                    await expect.soft(example).toHaveScreenshot('04-range-0-50.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(75);
                    await expect.soft(example).toHaveScreenshot('04-range-0-75.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('04-range-0-100.png');
                });

                test('pressing of Arrow Right increases by one step (after focus on left slider)', async () => {
                    await range.host.click({position: {x: 290, y: 0}});

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('05-range-0-100.png');

                    await range.focusStart();
                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(25);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('05-range-25-100.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(50);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('05-range-50-100.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(75);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('05-range-75-100.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(100);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('05-range-100-100.png');
                });

                test('pressing of Arrow Left decreases by one step (after setting right thumb active via click)', async () => {
                    await range.host.click({position: {x: 290, y: 0}});

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('06-range-0-100.png');

                    await range.stepLeft();

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(75);
                    await expect.soft(example).toHaveScreenshot('06-range-0-75.png');

                    await range.stepLeft();

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(50);
                    await expect.soft(example).toHaveScreenshot('06-range-0-50.png');

                    await range.stepLeft();

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(25);
                    await expect.soft(example).toHaveScreenshot('06-range-0-25.png');

                    await range.stepLeft();

                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(0);
                    await expect.soft(example).toHaveScreenshot('06-range-0-0.png');
                });

                test('cannot set left thumb more than right thumb (by Arrow Right)', async () => {
                    await expect(range.getStartValue()).resolves.toBe(0);
                    await expect(range.getEndValue()).resolves.toBe(25);
                    await expect.soft(example).toHaveScreenshot('07-range-0-25.png');

                    await range.focusStart();
                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(25);
                    await expect(range.getEndValue()).resolves.toBe(25);
                    await expect.soft(example).toHaveScreenshot('07-1-range-25-25.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(25);
                    await expect(range.getEndValue()).resolves.toBe(25);
                    await expect.soft(example).toHaveScreenshot('07-2-range-25-25.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(25);
                    await expect(range.getEndValue()).resolves.toBe(25);
                    await expect.soft(example).toHaveScreenshot('07-3-range-25-25.png');

                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(25);
                    await expect(range.getEndValue()).resolves.toBe(25);
                    await expect.soft(example).toHaveScreenshot('07-4-range-25-25.png');
                });

                test('cannot set right thumb less than left thumb (by ArrowLeft)', async () => {
                    await range.host.click({position: {x: 290, y: 0}});
                    await range.focusStart();
                    await range.stepRight();
                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(50);
                    await expect(range.getEndValue()).resolves.toBe(100);
                    await expect.soft(example).toHaveScreenshot('08-range-50-100.png');

                    await range.focusEnd();
                    await range.stepLeft();
                    await range.stepLeft();
                    await range.stepLeft();
                    await range.stepLeft();
                    await range.stepLeft();

                    await expect(range.getStartValue()).resolves.toBe(50);
                    await expect(range.getEndValue()).resolves.toBe(50);
                    await expect.soft(example).toHaveScreenshot('08-1-range-50-50.png');

                    await range.focusStart();
                    await range.stepRight();
                    await range.stepRight();
                    await range.stepRight();
                    await range.stepRight();
                    await range.stepRight();

                    await expect(range.getStartValue()).resolves.toBe(50);
                    await expect(range.getEndValue()).resolves.toBe(50);
                    await expect.soft(example).toHaveScreenshot('08-2-range-50-50.png');
                });
            });

            describe('range with keySteps (from 0 to 1M) with 8 steps. Initial value [0, 100_000]', () => {
                let output: Locator;

                beforeEach(({page}) => {
                    example = new TuiDocumentationPagePO(page).getExample('#key-steps');
                    range = new TuiRangeEO(page, `#key-steps ${TUI_RANGE_LOCATORS.HOST}`);
                    output = example.locator('output code');
                });

                test('ArrowUp increases value of the focused slider', async () => {
                    await range.focusEnd();

                    await expect(output).toContainText('[ 0, 100000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 4]);
                    await expect.soft(example).toHaveScreenshot('09-range-0-100000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 0, 300000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 5]);
                    await expect.soft(example).toHaveScreenshot('09-range-0-300000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 0, 500000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 6]);
                    await expect.soft(example).toHaveScreenshot('09-range-0-500000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 0, 750000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 7]);
                    await expect.soft(example).toHaveScreenshot('09-range-0-750000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 0, 1000000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 8]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('09-range-0-1_000000.png');

                    await range.focusStart();
                    await range.stepUp();

                    await expect(output).toContainText('[ 5000, 1000000 ]');
                    await expect(range.getValue()).resolves.toEqual([1, 8]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('09-range-5-000-1-000000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 10000, 1000000 ]');
                    await expect(range.getValue()).resolves.toEqual([2, 8]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('09-range-10000-1000000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 55000, 1000000 ]');
                    await expect(range.getValue()).resolves.toEqual([3, 8]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('09-range-55000-1000000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 100000, 1000000 ]');
                    await expect(range.getValue()).resolves.toEqual([4, 8]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('09-range-100000-1000000.png');
                });

                test('ArrowDown decreases value of the focused slider', async () => {
                    await range.focusEnd();
                    await range.stepDown();

                    await expect(output).toContainText('[ 0, 55000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 3]);
                    await expect.soft(example).toHaveScreenshot('10-range-0-55000.png');

                    await range.stepDown();

                    await expect(output).toContainText('[ 0, 10000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 2]);
                    await expect.soft(example).toHaveScreenshot('10-range-0-10000.png');

                    await range.stepDown();

                    await expect(output).toContainText('[ 0, 5000 ]');
                    await expect(range.getValue()).resolves.toEqual([0, 1]);
                    await expect.soft(example).toHaveScreenshot('10-range-0-5000.png');
                });

                test('cannot set position of the LEFT slider MORE THAN position of the RIGHT slider (by ArrowUp)', async () => {
                    await range.focusStart();
                    await range.stepUp();
                    await range.stepUp();
                    await range.stepUp();
                    await range.stepUp();

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(range.getValue()).resolves.toEqual([4, 4]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('11-range-100_000-100_000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(range.getValue()).resolves.toEqual([4, 4]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('11-1-range-100_000-100_000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(range.getValue()).resolves.toEqual([4, 4]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('11-2-range-100_000-100_000.png');

                    await range.stepUp();

                    await expect(output).toContainText('[ 100000, 100000 ]');
                    await expect(range.getValue()).resolves.toEqual([4, 4]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('11-3-range-100_000-100_000.png');
                });

                test('cannot set position of the RIGHT slider LESS THAN position of the LEFT slider (by ArrowDown)', async () => {
                    await range.focusStart();
                    await range.stepUp();
                    await range.focusEnd();
                    await range.stepDown();
                    await range.stepDown();
                    await range.stepDown();

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect(range.getValue()).resolves.toEqual([1, 1]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('12-1-range-5000-5000.png');

                    await range.stepDown();

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect(range.getValue()).resolves.toEqual([1, 1]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('12-2-range-5000-5000.png');

                    await range.stepDown();

                    await expect(output).toContainText('[ 5000, 5000 ]');
                    await expect(range.getValue()).resolves.toEqual([1, 1]);
                    await expect
                        .soft(example)
                        .toHaveScreenshot('12-3-range-5000-5000.png');
                });
            });
        });
    });

    describe('API page', () => {
        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).demo;
            range = new TuiRangeEO(page, TUI_RANGE_LOCATORS.HOST);
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

            await expect(range.getStartValue()).resolves.toBe(0);
            await expect(range.getEndValue()).resolves.toBe(0.5);
            await expect(example).toHaveScreenshot(
                '13-range--min-0--max-1--step-0.05--click-middle.png',
            );
        });
    });
});
