import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

/**
 * TuiScrollbar Stress Test Suite
 *
 * This suite contains high-load scenarios designed to stress-test the scrollbar component
 * and detect performance regressions under intensive usage patterns.
 *
 * Each test focuses on a specific interaction pattern that could reveal performance issues:
 * - Rapid continuous scrolling
 * - Bulk content manipulation during scroll
 * - Complex nested scrolling scenarios
 * - High-frequency programmatic scroll operations
 * - Virtual scrolling with dynamic content changes
 */

test.describe('TuiScrollbar Stress Tests', () => {
    let documentationPage: TuiDocumentationPagePO;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Scrollbar);
        documentationPage = new TuiDocumentationPagePO(page);
    });

    test.describe('High-Load Scrolling Scenarios', () => {
        test('rapid continuous scrolling stress test', async ({page}) => {
            const verticalExample = documentationPage.getExample('#vertical');
            const scrollbar = verticalExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            // Start performance collection right before intensive scrolling
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-rapid-scrolling-stress',
                __filename,
            );

            // Stress test: rapid scrolling with forced layout recalculations
            for (let i = 0; i < 100; i++) {
                // Use scrollTop changes instead of scrollTo to force layout
                await scrollbar.evaluate(
                    (el, amount) => {
                        el.scrollTop += amount;
                        // Force layout recalculation by reading layout properties
                        void el.scrollHeight;
                        void el.clientHeight;
                    },
                    Math.sin(i * 0.2) * 20,
                );

                // Every few iterations, add content to force dimension recalculation
                if (i % 8 === 0) {
                    await page.evaluate((iteration) => {
                        const scrollbar = document.querySelector('tui-scrollbar');

                        if (scrollbar) {
                            const div = document.createElement('div');

                            div.innerHTML = `Stress content ${iteration}`;
                            div.style.height = '15px';
                            div.style.padding = '2px';
                            scrollbar.appendChild(div);
                        }
                    }, i);
                }

                // Force style recalculation periodically
                if (i % 12 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            el.style.transform = 'translateZ(0)';
                            void el.offsetHeight; // Force layout
                            el.style.transform = '';
                        }
                    });
                }
            }

            await page.waitForTimeout(50);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-rapid-scrolling-stress',
            );

            // Verify component remains functional after stress
            const finalScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            expect(finalScrollTop).toBeGreaterThan(0);
        });

        test('bulk content manipulation during scroll stress test', async ({page}) => {
            const dynamicExample = documentationPage.getExample('#virtual-scroll');

            await dynamicExample.scrollIntoViewIfNeeded();

            const addButton = dynamicExample.locator('button:has-text("Add")');
            const scrollbar = dynamicExample.locator('tui-scrollbar');
            const viewport = dynamicExample.locator('cdk-virtual-scroll-viewport');

            await expect(addButton).toBeVisible();
            await expect(scrollbar).toBeVisible();

            // Start performance collection for content manipulation + scrolling
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-content-manipulation-stress',
                __filename,
            );

            // Stress test: simultaneously add content and perform scrolling
            const operations = [];

            // Add many items rapidly while scrolling
            for (let i = 0; i < 30; i++) {
                // Add new content
                operations.push(addButton.click());

                // Scroll during content addition to stress layout recalculation
                operations.push(
                    viewport.evaluate((el, scrollTop) => {
                        el.scrollTo({top: scrollTop, behavior: 'auto'});
                    }, i * 20),
                );

                // Periodic short delays to create realistic stress pattern
                if (i % 5 === 0) {
                    operations.push(page.waitForTimeout(10));
                }
            }

            await Promise.all(operations);

            // Additional scrolling after content is added
            for (let i = 0; i < 20; i++) {
                await viewport.evaluate((el, scrollTop) => {
                    el.scrollTo({top: scrollTop, behavior: 'auto'});
                }, i * 50);
            }

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-content-manipulation-stress',
            );

            // Verify the component handles the stress correctly
            const itemCount = await dynamicExample.locator('.example-item').count();

            expect(itemCount).toBeGreaterThan(25);
        });

        test('programmatic scroll barrage stress test', async ({page}) => {
            const allExample = documentationPage.getExample('#all');
            const scrollbar = allExample.locator('tui-scrollbar');
            const scrollButton = allExample.locator('button');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();
            await expect(scrollButton).toBeVisible();

            // Start performance collection for programmatic operations
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-programmatic-barrage-stress',
                __filename,
            );

            // Stress test: rapid-fire programmatic scroll commands
            // This tests the component's ability to handle many scroll API calls
            const programmaticOperations = [];

            // Rapidly trigger programmatic scrolling
            for (let i = 0; i < 40; i++) {
                programmaticOperations.push(scrollButton.click());

                // Add some manual scroll operations between programmatic ones
                if (i % 3 === 0) {
                    programmaticOperations.push(
                        scrollbar.evaluate((el) => {
                            el.scrollTo({
                                top: Math.random() * 500,
                                behavior: 'auto',
                            });
                        }),
                    );
                }

                // Minimal delays to prevent overwhelming the browser
                if (i % 8 === 0) {
                    programmaticOperations.push(page.waitForTimeout(5));
                }
            }

            await Promise.all(programmaticOperations);

            await page.waitForTimeout(50);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-programmatic-barrage-stress',
            );

            // Verify component remains responsive after stress
            const isVisible = scrollbar;

            await expect(isVisible).toBeVisible();
        });

        test('multi-directional scrolling stress test', async ({page}) => {
            const horizontalExample = documentationPage.getExample('#horizontal');
            const scrollbar = horizontalExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            // Start performance collection for multi-directional stress
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-multi-directional-stress',
                __filename,
            );

            // Stress test: complex multi-directional scrolling patterns
            // This tests both horizontal and vertical scroll handling under load
            const scrollPatterns = [];

            for (let i = 0; i < 60; i++) {
                const angle = (i * Math.PI) / 10;
                const scrollLeft = Math.abs(Math.cos(angle)) * 200;
                const scrollTop = Math.abs(Math.sin(angle)) * 200;

                scrollPatterns.push(
                    scrollbar.evaluate(
                        (el, {left, top}) => {
                            el.scrollTo({left, top, behavior: 'auto'});
                        },
                        {left: scrollLeft, top: scrollTop},
                    ),
                );

                // Add diagonal scroll movements for additional complexity
                if (i % 4 === 0) {
                    scrollPatterns.push(
                        scrollbar.evaluate((el) => {
                            el.scrollTo({
                                left: Math.random() * 300,
                                top: Math.random() * 300,
                                behavior: 'auto',
                            });
                        }),
                    );
                }

                // Brief pauses to create realistic usage pattern
                if (i % 12 === 0) {
                    scrollPatterns.push(page.waitForTimeout(8));
                }
            }

            await Promise.all(scrollPatterns);

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-multi-directional-stress',
            );

            // Verify scrollbar maintains proper state after complex movements
            const finalScrollLeft = await scrollbar.evaluate((el) => el.scrollLeft);
            const finalScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            expect(finalScrollLeft).toBeGreaterThanOrEqual(0);
            expect(finalScrollTop).toBeGreaterThanOrEqual(0);
        });

        test('memory pressure during scrolling stress test', async ({page}) => {
            const verticalExample = documentationPage.getExample('#vertical');
            const scrollbar = verticalExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            // Start performance collection for memory pressure scenario
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-memory-pressure-stress',
                __filename,
            );

            // Stress test: create memory pressure while forcing layout recalculations
            for (let i = 0; i < 80; i++) {
                // Create memory pressure by allocating large objects
                await page.evaluate(() => {
                    // Create temporary large objects to pressure memory
                    const tempArrays = [];

                    for (let j = 0; j < 50; j++) {
                        tempArrays.push(new Array(2000).fill(Math.random()));
                    }

                    // Clean up immediately to simulate GC pressure
                    tempArrays.length = 0;
                });

                // Perform scrolling with forced layout reads under memory pressure
                await scrollbar.evaluate(
                    (el, scrollAmount) => {
                        el.scrollTop += scrollAmount;
                        // Force layout recalculation during memory pressure
                        void el.scrollHeight;
                        void el.clientHeight;
                        void el.scrollWidth;
                    },
                    (i * 15) % 400,
                );

                // Force style recalculation under memory pressure
                if (i % 6 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            // Force layout recalculation
                            const height = el.scrollHeight;

                            // Force style recalculation
                            el.style.transform = `translateZ(${height}px)`;
                            void el.offsetHeight;
                            el.style.transform = '';
                        }
                    });
                }

                // Add DOM elements under memory pressure
                if (i % 10 === 0) {
                    await page.evaluate((iteration) => {
                        const scrollbar = document.querySelector('tui-scrollbar');

                        if (scrollbar) {
                            const div = document.createElement('div');

                            div.innerHTML = `Memory pressure content ${iteration}`;
                            div.style.height = '12px';
                            div.style.borderTop = '1px solid #ccc';
                            scrollbar.appendChild(div);
                        }
                    }, i);
                }
            }

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-memory-pressure-stress',
            );

            // Verify component survived memory pressure stress
            const isScrollable = await scrollbar.evaluate((el) => {
                return el.scrollHeight > el.clientHeight;
            });

            expect(isScrollable).toBe(true);
        });

        test('theme switching during scroll stress test', async ({page}) => {
            const lightScrollbarExample =
                documentationPage.getExample('#light-scrollbar');
            const scrollbar = lightScrollbarExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            // Start performance collection for theme switching stress
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-theme-switching-stress',
                __filename,
            );

            // Stress test: rapid theme changes during scrolling with forced recalculations
            for (let i = 0; i < 60; i++) {
                // Scroll operation with forced layout reads
                await scrollbar.evaluate(
                    (el, scrollAmount) => {
                        el.scrollTop += scrollAmount;
                        // Force layout recalculation
                        void el.scrollHeight;
                        void el.clientHeight;
                    },
                    (i * 20) % 300,
                );

                // Simulate theme switching by toggling classes
                if (i % 3 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            // Simulate theme class changes that trigger style recalculation
                            el.classList.add('stress-theme-test');
                            el.classList.toggle('dark-theme-sim');

                            // Force style recalculation
                            void el.offsetHeight;

                            // Clean up
                            el.classList.remove('stress-theme-test');
                        }
                    });
                }

                // CSS property changes to stress style system
                if (i % 5 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            // Temporarily change CSS properties to stress the style system
                            const originalOpacity = el.style.opacity;

                            el.style.opacity = '0.9';
                            void el.offsetHeight; // Force layout
                            el.style.opacity = originalOpacity || '';
                        }
                    });
                }

                // Add/remove DOM elements to trigger style invalidation
                if (i % 8 === 0) {
                    await page.evaluate((iteration) => {
                        const scrollbar = document.querySelector('tui-scrollbar');

                        if (scrollbar) {
                            const div = document.createElement('div');

                            div.innerHTML = `Theme test ${iteration}`;
                            div.style.height = '10px';
                            div.style.backgroundColor =
                                iteration % 2 ? '#f0f0f0' : '#e0e0e0';
                            scrollbar.appendChild(div);
                        }
                    }, i);
                }
            }

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-theme-switching-stress',
            );

            // Verify component maintains proper styling after stress
            const computedStyle = await scrollbar.evaluate((el) => {
                return getComputedStyle(el).display;
            });

            expect(computedStyle).not.toBe('none');
        });
    });

    test.describe('Edge Case Stress Scenarios', () => {
        test('rapid resize during scroll stress test', async ({page}) => {
            const verticalExample = documentationPage.getExample('#vertical');
            const scrollbar = verticalExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            // Start performance collection for resize stress
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-resize-stress',
                __filename,
            );

            // Stress test: container resize during active scrolling with forced layout
            for (let i = 0; i < 50; i++) {
                // Scroll operation with forced layout reads
                await scrollbar.evaluate(
                    (el, scrollAmount) => {
                        el.scrollTop += scrollAmount;
                        // Force layout recalculation
                        void el.scrollHeight;
                        void el.clientHeight;
                    },
                    (i * 25) % 400,
                );

                // Resize container dimensions to trigger layout recalculation
                if (i % 4 === 0) {
                    await scrollbar.evaluate((el) => {
                        const container = el.closest('.box') || el;

                        if (container instanceof HTMLElement) {
                            const baseWidth = 300;
                            const baseHeight = 200;

                            // Vary container size to stress layout system
                            container.style.width = `${baseWidth + Math.sin(Date.now() / 1000) * 50}px`;
                            container.style.height = `${baseHeight + Math.cos(Date.now() / 1000) * 30}px`;

                            // Force layout recalculation
                            void container.offsetHeight;
                        }
                    });
                }

                // Window resize simulation
                if (i % 6 === 0) {
                    await page.evaluate(() => {
                        // Trigger resize event to simulate viewport changes
                        window.dispatchEvent(new Event('resize'));
                    });
                }

                // Add content that affects container dimensions
                if (i % 8 === 0) {
                    await page.evaluate((iteration) => {
                        const scrollbar = document.querySelector('tui-scrollbar');

                        if (scrollbar) {
                            const div = document.createElement('div');

                            div.innerHTML = `Resize content ${iteration}`;
                            div.style.height = `${15 + (iteration % 10)}px`;
                            div.style.width = '100%';
                            div.style.border = '1px solid #ddd';
                            scrollbar.appendChild(div);
                        }
                    }, i);
                }
            }

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-resize-stress',
            );

            // Verify component handles resize stress properly
            const isVisible = scrollbar;
            const hasScroll = await scrollbar.evaluate((el) => {
                return el.scrollHeight > el.clientHeight;
            });

            await expect(isVisible).toBeVisible();
            expect(hasScroll).toBe(true);
        });

        test('concurrent scroll operations stress test', async ({page}) => {
            // Use an example with multiple scrollable areas if available
            const verticalExample = documentationPage.getExample('#vertical');
            const scrollbar = verticalExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            // Start performance collection for concurrent operations
            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-concurrent-operations-stress',
                __filename,
            );

            // Stress test: multiple concurrent scroll operations
            // This tests the component's ability to handle overlapping scroll commands
            const concurrentBatches = [];

            // Create multiple batches of concurrent operations
            for (let batch = 0; batch < 8; batch++) {
                const batchOperations = [];

                // Multiple simultaneous scroll operations within each batch
                for (let j = 0; j < 15; j++) {
                    const scrollTop = (batch * 50 + j * 10) % 500;

                    batchOperations.push(
                        scrollbar.evaluate(async (el, top) => {
                            return new Promise<void>((resolve) => {
                                el.scrollTo({top, behavior: 'auto'});

                                // Simulate processing time
                                setTimeout(resolve, Math.random() * 10);
                            });
                        }, scrollTop),
                    );
                }

                // Execute batch concurrently and then wait before next batch
                concurrentBatches.push(
                    Promise.all(batchOperations).then(async () =>
                        page.waitForTimeout(20),
                    ),
                );
            }

            await Promise.all(concurrentBatches);

            await page.waitForTimeout(150);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-concurrent-operations-stress',
            );

            // Verify final state is consistent after concurrent operations
            const finalScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            expect(finalScrollTop).toBeGreaterThanOrEqual(0);
            expect(finalScrollTop).toBeLessThanOrEqual(500);
        });
    });
});
