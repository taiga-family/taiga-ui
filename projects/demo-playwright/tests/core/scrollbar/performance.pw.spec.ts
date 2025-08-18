import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiScrollbar - Final Per-Test Performance Demo', () => {
    test.beforeEach(async ({page}, testInfo) => {
        await PerformanceCollector.startTestCollection(
            page,
            testInfo.titlePath.join(' › '),
            testInfo.file,
        );

        await tuiGoto(page, DemoRoute.Scrollbar);
    });

    test.afterEach(async ({page}, testInfo) => {
        await PerformanceCollector.stopTestCollection(
            page,
            testInfo.titlePath.join(' › '),
        );
    });

    test.describe('Basic Functionality with Performance Collection', () => {
        test('renders correctly and handles basic scrolling operations', async ({
            page,
        }) => {
            const doc = new TuiDocumentationPagePO(page);
            const firstExample = doc.pageExamples.nth(0);

            await firstExample.scrollIntoViewIfNeeded();

            const scrollbar = firstExample.locator('tui-scrollbar');
            const thumb = firstExample.locator('.t-thumb');

            await expect(scrollbar).toBeVisible();
            await expect(thumb).toBeVisible();

            // These scroll operations will be captured in performance metrics
            const initialScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            // Multiple scroll operations to generate measurable layout/recalc metrics
            await scrollbar.evaluate((el) => el.scrollTo({top: 100}));
            await page.waitForTimeout(100);

            await scrollbar.evaluate((el) => el.scrollTo({top: 200}));
            await page.waitForTimeout(50);

            await scrollbar.evaluate((el) => el.scrollTo({top: 50}));
            await page.waitForTimeout(50);

            const newScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            expect(newScrollTop).toBeGreaterThan(initialScrollTop);
        });

        test('handles horizontal scrolling with performance tracking', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const horizontalExample = doc.pageExamples.nth(1);

            await horizontalExample.scrollIntoViewIfNeeded();

            const scrollContainer = horizontalExample.locator('tui-scrollbar');
            const horizontalThumb = horizontalExample.locator(
                '.t-bar_horizontal .t-thumb',
            );

            await expect(horizontalThumb).toBeVisible();

            // Horizontal scroll operations for performance metrics
            await scrollContainer.evaluate((el) => {
                // Multiple horizontal scrolls to generate layout metrics
                el.scrollTo({left: 100});
                el.scrollTo({left: 200});
                el.scrollTo({left: 150});
                el.scrollTo({left: 0});
            });

            expect(await scrollContainer.evaluate((el) => el.scrollLeft)).toBe(0);
        });

        test('programmatic scroll control with layout operations', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const example = doc.pageExamples.nth(0);

            await example.scrollIntoViewIfNeeded();

            const scrollbar = example.locator('tui-scrollbar');

            // Programmatic scroll operations that trigger layout/recalc
            const scrollPositions = [0, 50, 100, 150, 200, 250, 100, 0];

            for (const position of scrollPositions) {
                await scrollbar.evaluate((el, pos) => {
                    el.scrollTop = pos;
                }, position);
                await page.waitForTimeout(20);
            }

            // Style manipulations to trigger recalc operations for metrics
            await scrollbar.evaluate((el) => {
                el.style.height = '300px';
                el.style.height = '350px';
                el.style.height = '400px';
                el.style.height = '';

                // Force layout by reading computed styles (generates layout metrics)
                const computed = window.getComputedStyle(el);

                return computed.height;
            });

            expect(await scrollbar.evaluate((el) => el.scrollTop)).toBe(0);
        });
    });

    test.describe('Dynamic Content Performance Impact', () => {
        test('measures performance impact of dynamic content changes', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const example = doc.pageExamples.nth(0);

            await example.scrollIntoViewIfNeeded();

            const scrollbar = example.locator('tui-scrollbar');

            // Dynamic content operations that should generate significant layout/recalc metrics
            const elementCount = await scrollbar.evaluate((el) => {
                const content = el.querySelector('.t-content') || el;

                // Add multiple dynamic elements to trigger layout operations
                for (let i = 0; i < 10; i++) {
                    const div = document.createElement('div');

                    div.innerHTML = `Dynamic content ${i} - ${Date.now()}`;
                    div.style.height = `${50 + i * 10}px`;
                    div.style.background = `hsl(${i * 36}, 70%, 85%)`;
                    div.style.margin = '5px';
                    div.style.padding = '10px';
                    content.appendChild(div);
                }

                // Force multiple layout reads (generates layout metrics)
                for (let i = 0; i < 5; i++) {
                    const rect = el.getBoundingClientRect();

                    el.scrollTop = rect.height / (i + 1);
                }

                // Clean up and return count
                const dynamicElements = content.querySelectorAll('div');
                const dynamicCount = Array.from(dynamicElements).filter((elem) =>
                    elem.innerHTML.includes('Dynamic content'),
                ).length;

                // Remove the dynamic elements
                Array.from(dynamicElements).forEach((elem) => {
                    if (elem.innerHTML.includes('Dynamic content')) {
                        elem.remove();
                    }
                });

                return dynamicCount;
            });

            expect(elementCount).toBe(10);
        });

        test('stress test with rapid layout changes for performance metrics', async ({
            page,
        }) => {
            const doc = new TuiDocumentationPagePO(page);
            const example = doc.pageExamples.nth(0);

            await example.scrollIntoViewIfNeeded();

            const scrollbar = example.locator('tui-scrollbar');

            // Rapid changes that should stress the layout/recalc system
            const operationCount = await scrollbar.evaluate((el) => {
                let operations = 0;

                // This should generate many layout and recalc operations
                for (let i = 0; i < 30; i++) {
                    // Rapid style changes that trigger recalc
                    el.style.transform = `scale(${1 + (i % 4) * 0.01})`;
                    el.style.opacity = `${0.8 + (i % 3) * 0.1}`;
                    el.style.filter = `hue-rotate(${i * 12}deg)`;

                    // Rapid scroll changes
                    el.scrollTop = (i * 15) % 300;

                    // Force layout every few iterations (generates layout metrics)
                    if (i % 3 === 0) {
                        const rect = el.getBoundingClientRect();
                        const computed = window.getComputedStyle(el);

                        // Reading these properties forces layout/recalc
                        const dimensions = {
                            width: rect.width,
                            height: rect.height,
                            opacity: computed.opacity,
                            transform: computed.transform,
                        };

                        operations += dimensions.width > 0 ? 1 : 0;
                    }
                }

                // Reset all styles
                el.style.transform = '';
                el.style.opacity = '';
                el.style.filter = '';
                el.scrollTop = 0;

                return operations;
            });

            expect(operationCount).toBeGreaterThan(0);
        });
    });
});
