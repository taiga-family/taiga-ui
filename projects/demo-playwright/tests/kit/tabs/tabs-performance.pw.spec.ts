/**
 * Performance tests for the Tabs component
 *
 * This test suite measures the performance of various tabs operations:
 * - Initial rendering time for tabs component
 * - Tab switching response time
 * - Tabs with more dropdown performance
 * - Multiple tabs handling and rapid switching
 *
 * All performance thresholds are set to reasonable values based on expected user experience.
 */
import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiTabsPO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('Tabs Performance', () => {
    describe('Performance measurements', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.Tabs);
        });

        test('initial tabs rendering performance', async ({page}) => {
            // Navigate to tabs page and measure initial render time
            const startTime = Date.now();

            await tuiGoto(page, DemoRoute.Tabs);

            // Wait for the tabs component to be fully loaded
            const tabsElement = page.locator('tui-tabs').first();

            await tabsElement.waitFor({state: 'attached'});

            // Wait for all tabs to be visible
            const tabs = page.locator('tui-tabs button[tuiTab]');

            await tabs.first().waitFor({state: 'visible'});

            const endTime = Date.now();
            const renderTime = endTime - startTime;

            // Assert that rendering time is reasonable (under 2 seconds)
            expect(renderTime).toBeLessThan(2000);

            // Verify tabs are rendered correctly
            const tabCount = await tabs.count();

            expect(tabCount).toBeGreaterThan(0);
        });

        test('tab switching performance', async ({page}) => {
            const docPage = new TuiDocumentationPagePO(page);
            const example = docPage.getExample('#basic');

            await example.scrollIntoViewIfNeeded();

            const tabs = example.locator('tui-tabs button[tuiTab]');

            await tabs.first().waitFor({state: 'visible'});

            const tabCount = await tabs.count();
            const switchTimes: number[] = [];

            // Test switching between tabs and measure performance
            for (let i = 0; i < Math.min(tabCount, 4); i++) {
                const startTime = Date.now();

                await tabs.nth(i).click();

                // Wait for tab to be selected (active state)
                await tabs.nth(i).waitFor({state: 'visible'});

                const endTime = Date.now();
                const switchTime = endTime - startTime;

                switchTimes.push(switchTime);
            }

            const averageSwitchTime =
                switchTimes.reduce((a, b) => a + b, 0) / switchTimes.length;

            // Assert that average switch time is reasonable (under 500ms)
            expect(averageSwitchTime).toBeLessThan(500);

            // Assert that no individual switch takes too long (under 1 second)
            for (const time of switchTimes) {
                expect(time).toBeLessThan(1000);
            }
        });

        test('tabs with more component performance', async ({page, browserName}) => {
            if (browserName !== 'chromium') {
                return;
            }

            const docPage = new TuiDocumentationPagePO(page);
            const example = docPage.getExample('#complex');

            await example.scrollIntoViewIfNeeded();

            const tabsWithMore = example.locator('tui-tabs-with-more');

            await tabsWithMore.waitFor({state: 'visible'});

            const tabsPO = new TuiTabsPO(tabsWithMore);

            // Set small viewport to trigger "more" dropdown
            await page.setViewportSize({width: 550, height: 700});

            // Wait for more button to appear
            await expect(tabsPO.more).toBeVisible();

            // Measure more dropdown performance
            const startTime = Date.now();

            await tabsPO.more.click();

            // Wait for dropdown to be visible
            await tabsPO.moreDropdown.waitFor({state: 'visible'});

            const endTime = Date.now();
            const dropdownTime = endTime - startTime;

            // Assert dropdown opens quickly (under 500ms)
            expect(dropdownTime).toBeLessThan(500);

            // Test selecting an option from the dropdown
            const moreOptions = tabsPO.moreDropdown.locator('button[tuiTab]');
            const optionCount = await moreOptions.count();

            if (optionCount > 0) {
                const selectStartTime = Date.now();

                await moreOptions.first().click();

                // Wait for dropdown to close
                await tabsPO.moreDropdown.waitFor({state: 'hidden'});

                const selectEndTime = Date.now();
                const selectTime = selectEndTime - selectStartTime;

                // Assert option selection is quick (under 500ms)
                expect(selectTime).toBeLessThan(500);
            }
        });

        test('multiple tabs handling performance', async ({page}) => {
            // Navigate to API page to test with configurable number of tabs
            await tuiGoto(page, `${DemoRoute.Tabs}/API?buttons=20`);

            const docPage = new TuiDocumentationPagePO(page);
            const example = docPage.apiPageExample;

            // Wait for tabs to render
            const tabs = example.locator('tui-tabs button[tuiTab]');

            await tabs.first().waitFor({state: 'visible'});

            const startTime = Date.now();

            // Wait for all tabs to be visible
            const tabCount = await tabs.count();

            // Verify all tabs are rendered
            for (let i = 0; i < tabCount; i++) {
                await tabs.nth(i).waitFor({state: 'visible'});
            }

            const endTime = Date.now();
            const renderTime = endTime - startTime;

            // Assert rendering time scales reasonably with tab count
            const expectedMaxTime = tabCount * 50; // 50ms per tab as baseline

            expect(renderTime).toBeLessThan(Math.max(expectedMaxTime, 2000));

            // Test rapid switching through multiple tabs
            const rapidSwitchStart = Date.now();

            // Switch through first 5 tabs rapidly
            for (let i = 0; i < Math.min(5, tabCount); i++) {
                await tabs.nth(i).click();
                // Small delay to ensure click is processed
                await page.waitForTimeout(10);
            }

            const rapidSwitchEnd = Date.now();
            const rapidSwitchTime = rapidSwitchEnd - rapidSwitchStart;

            // Assert rapid switching is performant (under 1 second)
            expect(rapidSwitchTime).toBeLessThan(1000);
        });
    });
});
