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

    // Deterministic pseudo-random number generator for stable scroll patterns
    const createPRNG = (seed = 42): (() => number) => {
        let state = seed % 2147483647;

        if (state <= 0) {
            state += 2147483646;
        }

        return () => {
            state = (state * 16807) % 2147483647;

            return (state - 1) / 2147483646;
        };
    };

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
            const factor = Number(process.env.PERF_STRESS_FACTOR || '1');
            const iterationsRapid = Math.round(100 * factor);

            for (let i = 0; i < iterationsRapid; i++) {
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

            const factor = Number(process.env.PERF_STRESS_FACTOR || '1');
            const iterationsContent = Math.round(30 * factor);
            const warmupIterations = Math.min(
                5,
                Math.max(3, Math.round(iterationsContent * 0.15)),
            );

            // Warm-up phase (excluded from measurement) to stabilize initial layout/style state
            for (let i = 0; i < warmupIterations; i++) {
                await addButton.click();
                await viewport.evaluate((el, scrollTop) => {
                    el.scrollTo({top: scrollTop, behavior: 'auto'});
                }, i * 15);

                if (i % 2 === 0) {
                    await page.waitForTimeout(5);
                }
            }

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-content-manipulation-stress',
                __filename,
            );

            // Measured phase: sequential deterministic operations for stability
            for (let i = 0; i < iterationsContent; i++) {
                await addButton.click();
                await viewport.evaluate((el, scrollTop) => {
                    el.scrollTo({top: scrollTop, behavior: 'auto'});
                }, i * 20);

                if (i % 5 === 0) {
                    await page.waitForTimeout(10);
                }
            }

            // Additional scrolling after content is added
            for (let i = 0; i < 20; i++) {
                await viewport.evaluate((el, scrollTop) => {
                    el.scrollTo({top: scrollTop, behavior: 'auto'});
                }, i * 50);
            }

            // Optional forced layout/style burst to guarantee measurable activity if prior loop produced no trace events
            if (process.env.PERF_FORCE_LAYOUT_BURST !== '0') {
                await viewport.evaluate((el) => {
                    if (!(el instanceof HTMLElement)) {
                        return;
                    }

                    const host = el;

                    for (let i = 0; i < 10; i++) {
                        const probe = document.createElement('div');

                        probe.textContent = `probe-${i}`;
                        probe.style.cssText =
                            'position:relative;display:block;width:100%;height:6px;padding:1px;';
                        host.appendChild(probe);
                        // Force layout & style
                        void probe.offsetHeight;
                        probe.style.transform = 'translateZ(0) scale(1.01)';
                        void probe.clientTop;
                        probe.style.transform = '';
                        probe.remove();
                    }
                });
                // Allow frame to process the burst
                await page.evaluate(async () => {
                    await new Promise<void>((resolve) =>
                        requestAnimationFrame(() => resolve()),
                    );
                });
                await page.waitForTimeout(30);
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
            const factor = Number(process.env.PERF_STRESS_FACTOR || '1');
            const iterationsProg = Math.round(40 * factor);
            const rand = createPRNG(321);

            for (let i = 0; i < iterationsProg; i++) {
                programmaticOperations.push(scrollButton.click());

                // Add some manual scroll operations between programmatic ones
                if (i % 3 === 0) {
                    const target = rand() * 500;

                    programmaticOperations.push(
                        scrollbar.evaluate((el, top) => {
                            el.scrollTo({top, behavior: 'auto'});
                        }, target),
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

            const factor = Number(process.env.PERF_STRESS_FACTOR || '1');
            const iterationsMulti = Math.round(60 * factor);
            const warmupIterations = Math.min(
                10,
                Math.max(5, Math.round(iterationsMulti * 0.15)),
            );
            const rand = createPRNG(123);

            // Warm-up phase (excluded from measurement)
            for (let i = 0; i < warmupIterations; i++) {
                const angle = (i * Math.PI) / 10;
                const scrollLeft = Math.abs(Math.cos(angle)) * 150;
                const scrollTop = Math.abs(Math.sin(angle)) * 150;

                await scrollbar.evaluate(
                    (el, {left, top}) => {
                        el.scrollTo({left, top, behavior: 'auto'});
                    },
                    {left: scrollLeft, top: scrollTop},
                );

                if (i % 4 === 0) {
                    await page.waitForTimeout(4);
                }
            }

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-multi-directional-stress',
                __filename,
            );

            for (let i = 0; i < iterationsMulti; i++) {
                const angle = (i * Math.PI) / 10;
                const scrollLeft = Math.abs(Math.cos(angle)) * 200;
                const scrollTop = Math.abs(Math.sin(angle)) * 200;

                await scrollbar.evaluate(
                    (el, {left, top}) => {
                        el.scrollTo({left, top, behavior: 'auto'});
                    },
                    {left: scrollLeft, top: scrollTop},
                );

                if (i % 4 === 0) {
                    const diagLeft = rand() * 300;
                    const diagTop = rand() * 300;

                    await scrollbar.evaluate(
                        (el, {left, top}) => {
                            el.scrollTo({left, top, behavior: 'auto'});
                        },
                        {left: diagLeft, top: diagTop},
                    );
                }

                if (i % 12 === 0) {
                    await page.waitForTimeout(8);
                }
            }

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
            const factor = Number(process.env.PERF_STRESS_FACTOR || '1');
            const iterationsMemory = Math.round(80 * factor);

            for (let i = 0; i < iterationsMemory; i++) {
                // Create memory pressure deterministically (no randomness)
                await page.evaluate((iteration) => {
                    const tempArrays: unknown[] = [];

                    for (let j = 0; j < 50; j++) {
                        // Deterministic pseudo values derived from iteration and j
                        const val = ((iteration * 131 + j * 17) % 1000) / 1000;

                        tempArrays.push(new Array(2000).fill(val));
                    }

                    tempArrays.length = 0;
                }, i);

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
            const factor = Number(process.env.PERF_STRESS_FACTOR || '2');
            const iterationsTheme = Math.round(60 * factor);

            for (let i = 0; i < iterationsTheme; i++) {
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
            const factor = Number(process.env.PERF_STRESS_FACTOR || '1');
            const iterationsResize = Math.round(50 * factor);

            for (let i = 0; i < iterationsResize; i++) {
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
                    await scrollbar.evaluate((el, iter) => {
                        const container = el.closest('.box') || el;

                        if (container instanceof HTMLElement) {
                            const baseWidth = 300;
                            const baseHeight = 200;
                            const widthOffset = Math.sin(iter / 5) * 50; // deterministic
                            const heightOffset = Math.cos(iter / 7) * 30; // deterministic

                            container.style.width = `${baseWidth + widthOffset}px`;
                            container.style.height = `${baseHeight + heightOffset}px`;
                            void container.offsetHeight;
                        }
                    }, i);
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
            const factor = Number(process.env.PERF_STRESS_FACTOR || '5');
            const batches = Math.round(8 * factor);
            const rand = createPRNG(987);

            for (let batch = 0; batch < batches; batch++) {
                const batchOperations = [];

                // Multiple simultaneous scroll operations within each batch
                const innerOps = Math.round(15 * factor);

                for (let j = 0; j < innerOps; j++) {
                    const scrollTop = (batch * 50 + j * 10) % 500;

                    const delay = Math.floor(rand() * 10);

                    batchOperations.push(
                        scrollbar.evaluate(
                            async (
                                el: HTMLElement,
                                args: {top: number; delay: number},
                            ) => {
                                return new Promise<void>((resolve) => {
                                    el.scrollTo({top: args.top, behavior: 'auto'});
                                    setTimeout(resolve, args.delay);
                                });
                            },
                            {top: scrollTop, delay},
                        ),
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
