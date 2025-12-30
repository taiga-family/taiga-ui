import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

/**
 * Performance stress tests intentionally use conditional branches inside test bodies
 * to emulate realistic, bursty interaction patterns and layout thrashing scenarios.
 * All randomness is deterministic (seeded PRNG) and branching is purely data-driven
 * from iteration counters. We disable the Playwright rule that forbids conditionals
 * in tests because enforcing a strictly linear sequence would drastically reduce
 * the coverage realism of these scenarios.
 */
// TODO: fix lint
/* eslint-disable playwright/no-conditional-in-test */

test.describe('TuiScrollbar Stress Tests', () => {
    let documentationPage: TuiDocumentationPagePO;

    const STRESS_FACTOR = 3;

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

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-rapid-scrolling-stress',
                __filename,
            );

            const iterationsRapid = 100 * STRESS_FACTOR;

            for (let i = 0; i < iterationsRapid; i++) {
                await scrollbar.evaluate(
                    (el, amount) => {
                        el.scrollTop += amount;
                        void el.scrollHeight;
                        void el.clientHeight;
                    },
                    Math.sin(i * 0.2) * 20,
                );

                if (i % 8 === 0) {
                    await page.evaluate((iteration) => {
                        const s = document.querySelector('tui-scrollbar');

                        if (s) {
                            const div = document.createElement('div');

                            div.innerHTML = `Stress content ${iteration}`;
                            div.style.height = '15px';
                            div.style.padding = '2px';
                            s.appendChild(div);
                        }
                    }, i);
                }

                if (i % 12 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            el.style.transform = 'translateZ(0)';
                            void el.offsetHeight;
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

            const iterationsContent = 30 * STRESS_FACTOR;
            const warmupIterations = Math.min(
                5,
                Math.max(3, Math.round(iterationsContent * 0.15)),
            );

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

            for (let i = 0; i < iterationsContent; i++) {
                await addButton.click();
                await viewport.evaluate((el, scrollTop) => {
                    el.scrollTo({top: scrollTop, behavior: 'auto'});
                }, i * 20);

                if (i % 5 === 0) {
                    await page.waitForTimeout(10);
                }
            }

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

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-programmatic-barrage-stress',
                __filename,
            );

            const programmaticOperations: Array<Promise<unknown>> = [];
            const iterationsProg = 40 * STRESS_FACTOR;
            const rand = createPRNG(321);

            for (let i = 0; i < iterationsProg; i++) {
                programmaticOperations.push(scrollButton.click());

                if (i % 3 === 0) {
                    const target = rand() * 500;

                    programmaticOperations.push(
                        scrollbar.evaluate((el, top) => {
                            el.scrollTo({top, behavior: 'auto'});
                        }, target),
                    );
                }

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

            await expect(scrollbar).toBeVisible();
        });

        test('multi-directional scrolling stress test', async ({page}) => {
            const horizontalExample = documentationPage.getExample('#horizontal');
            const scrollbar = horizontalExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            const iterationsMulti = 60 * STRESS_FACTOR;
            const warmupIterations = Math.min(
                10,
                Math.max(5, Math.round(iterationsMulti * 0.15)),
            );
            const rand = createPRNG(123);

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

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-memory-pressure-stress',
                __filename,
            );

            const iterationsMemory = 80 * STRESS_FACTOR;

            for (let i = 0; i < iterationsMemory; i++) {
                await page.evaluate((iteration) => {
                    const tempArrays: unknown[] = [];

                    for (let j = 0; j < 50; j++) {
                        const val = ((iteration * 131 + j * 17) % 1000) / 1000;

                        tempArrays.push(Array.from({length: 2000}, () => val));
                    }

                    tempArrays.length = 0;
                }, i);

                await scrollbar.evaluate(
                    (el, scrollAmount) => {
                        el.scrollTop += scrollAmount;
                        void el.scrollHeight;
                        void el.clientHeight;
                        void el.scrollWidth;
                    },
                    (i * 15) % 400,
                );

                if (i % 6 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            const height = el.scrollHeight;

                            el.style.transform = `translateZ(${height}px)`;
                            void el.offsetHeight;
                            el.style.transform = '';
                        }
                    });
                }

                if (i % 10 === 0) {
                    await page.evaluate((iteration) => {
                        const s = document.querySelector('tui-scrollbar');

                        if (s) {
                            const div = document.createElement('div');

                            div.innerHTML = `Memory pressure content ${iteration}`;
                            div.style.height = '12px';
                            div.style.borderTop = '1px solid #ccc';
                            s.appendChild(div);
                        }
                    }, i);
                }
            }

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-memory-pressure-stress',
            );

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

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-theme-switching-stress',
                __filename,
            );

            const iterationsTheme = 60 * STRESS_FACTOR;

            for (let i = 0; i < iterationsTheme; i++) {
                await scrollbar.evaluate(
                    (el, scrollAmount) => {
                        el.scrollTop += scrollAmount;
                        void el.scrollHeight;
                        void el.clientHeight;
                    },
                    (i * 20) % 300,
                );

                if (i % 3 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            el.classList.add('stress-theme-test');
                            el.classList.toggle('dark-theme-sim');
                            void el.offsetHeight;
                            el.classList.remove('stress-theme-test');
                        }
                    });
                }

                if (i % 5 === 0) {
                    await scrollbar.evaluate((el) => {
                        if (el instanceof HTMLElement) {
                            const originalOpacity = el.style.opacity;

                            el.style.opacity = '0.9';
                            void el.offsetHeight;
                            el.style.opacity = originalOpacity || '';
                        }
                    });
                }

                if (i % 8 === 0) {
                    await page.evaluate((iteration) => {
                        const s = document.querySelector('tui-scrollbar');

                        if (s) {
                            const div = document.createElement('div');

                            div.innerHTML = `Theme test ${iteration}`;
                            div.style.height = '10px';
                            div.style.backgroundColor =
                                iteration % 2 ? '#f0f0f0' : '#e0e0e0';
                            s.appendChild(div);
                        }
                    }, i);
                }
            }

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-theme-switching-stress',
            );

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

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-resize-stress',
                __filename,
            );

            const iterationsResize = 50 * STRESS_FACTOR;

            for (let i = 0; i < iterationsResize; i++) {
                await scrollbar.evaluate(
                    (el, scrollAmount) => {
                        el.scrollTop += scrollAmount;
                        void el.scrollHeight;
                        void el.clientHeight;
                    },
                    (i * 25) % 400,
                );

                if (i % 4 === 0) {
                    await scrollbar.evaluate((el, iter) => {
                        const container = el.closest('.box') || el;

                        if (container instanceof HTMLElement) {
                            const baseWidth = 300;
                            const baseHeight = 200;
                            const widthOffset = Math.sin(iter / 5) * 50;
                            const heightOffset = Math.cos(iter / 7) * 30;

                            container.style.width = `${baseWidth + widthOffset}px`;
                            container.style.height = `${baseHeight + heightOffset}px`;
                            void container.offsetHeight;
                        }
                    }, i);
                }

                if (i % 6 === 0) {
                    await page.evaluate(() => {
                        window.dispatchEvent(new Event('resize'));
                    });
                }

                if (i % 8 === 0) {
                    await page.evaluate((iteration) => {
                        const s = document.querySelector('tui-scrollbar');

                        if (s) {
                            const div = document.createElement('div');

                            div.innerHTML = `Resize content ${iteration}`;
                            div.style.height = `${15 + (iteration % 10)}px`;
                            div.style.width = '100%';
                            div.style.border = '1px solid #ddd';
                            s.appendChild(div);
                        }
                    }, i);
                }
            }

            await page.waitForTimeout(100);

            await PerformanceCollector.stopTestCollection(
                page,
                'scrollbar-resize-stress',
            );

            const hasScroll = await scrollbar.evaluate((el) => {
                return el.scrollHeight > el.clientHeight;
            });

            await expect(scrollbar).toBeVisible();
            expect(hasScroll).toBe(true);
        });

        test('concurrent scroll operations stress test', async ({page}) => {
            const verticalExample = documentationPage.getExample('#vertical');
            const scrollbar = verticalExample.locator('tui-scrollbar');

            await scrollbar.scrollIntoViewIfNeeded();
            await expect(scrollbar).toBeVisible();

            await PerformanceCollector.startTestCollection(
                page,
                'scrollbar-concurrent-operations-stress',
                __filename,
            );

            const concurrentBatches: Array<Promise<unknown>> = [];
            const batches = 8 * STRESS_FACTOR;
            const rand = createPRNG(987);

            for (let batch = 0; batch < batches; batch++) {
                const batchOperations: Array<Promise<unknown>> = [];
                const innerOps = 15 * STRESS_FACTOR;

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

            const finalScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            expect(finalScrollTop).toBeGreaterThanOrEqual(0);
            expect(finalScrollTop).toBeLessThanOrEqual(500);
        });
    });
});
