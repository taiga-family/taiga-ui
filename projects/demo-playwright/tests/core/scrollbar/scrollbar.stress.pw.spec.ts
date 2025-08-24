/* eslint-disable */
import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test, type Locator, type Page} from '@playwright/test';

type Action = (page: Page, scrollbar: Locator) => Promise<void>;

function buildActions(count: number, builder: (i: number) => Action[]): Action[] {
    const all: Action[] = [];
    for (let i = 0; i < count; i++) {
        all.push(...builder(i));
    }
    return all;
}

function scrollMutationActions(factor: number): Action[] {
    const total = Math.round(90 * factor);
    return buildActions(total, (i) => {
        const ops: Action[] = [];
        ops.push(async (_p, sc) => {
            await sc.evaluate(
                (el: Element, top: number) => {
                    if (el instanceof HTMLElement) {
                        el.scrollTop = top;
                        void el.scrollHeight;
                        void el.clientHeight;
                    }
                },
                Math.round((Math.sin(i * 0.15) + 1) * 250),
            );
        });
        if (i % 10 === 0) {
            ops.push(async (page) => {
                await page.evaluate(() => {
                    const sc = document.querySelector('tui-scrollbar');
                    if (!sc) return;
                    const d = document.createElement('div');
                    d.textContent = 'm';
                    d.style.height = '12px';
                    sc.appendChild(d);
                });
            });
        }
        if (i % 14 === 0) {
            ops.push(async (_p, sc) => {
                await sc.evaluate((el: Element) => {
                    if (el instanceof HTMLElement) {
                        el.style.transform = 'translateZ(0)';
                        void el.offsetHeight;
                        el.style.transform = '';
                    }
                });
            });
        }
        return ops;
    });
}

function memoryActions(factor: number): Action[] {
    const total = Math.round(60 * factor);
    return buildActions(total, (i) => [
        async (page) => {
            await page.evaluate((iteration) => {
                const arr: unknown[] = [];
                for (let j = 0; j < 30; j++) {
                    const v = ((iteration * 73 + j * 11) % 1000) / 1000;
                    arr.push(new Array(600).fill(v));
                }
            }, i);
        },
        async (_p, sc) => {
            await sc.evaluate(
                (el: Element, amt: number) => {
                    if (el instanceof HTMLElement) {
                        el.scrollTop += amt;
                        void el.scrollHeight;
                    }
                },
                (i * 12) % 320,
            );
        },
    ]);
}

function themeActions(factor: number): Action[] {
    const total = Math.round(45 * factor);
    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate(
                (el: Element, amt: number) => {
                    if (el instanceof HTMLElement) {
                        el.scrollTop += amt;
                        void el.scrollHeight;
                    }
                },
                (i * 18) % 260,
            );
        },
        ...(i % 6 === 0
            ? [
                  async (_p: Page, sc: Locator) => {
                      await sc.evaluate((el: Element) => {
                          if (el instanceof HTMLElement) {
                              el.classList.add('stress-t');
                              void el.offsetHeight;
                              el.classList.remove('stress-t');
                          }
                      });
                  },
              ]
            : []),
    ]);
}

function resizeActions(factor: number): Action[] {
    const total = Math.round(40 * factor);
    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate(
                (el: Element, amt: number) => {
                    if (el instanceof HTMLElement) {
                        el.scrollTop += amt;
                        void el.scrollHeight;
                    }
                },
                (i * 22) % 340,
            );
        },
        ...(i % 7 === 0
            ? [
                  async (_p: Page, sc: Locator) => {
                      await sc.evaluate((el: Element, iter: number) => {
                          const c = el.closest('.box') || el;
                          if (c instanceof HTMLElement) {
                              c.style.width = `${300 + Math.sin(iter / 5) * 30}px`;
                              c.style.height = `${220 + Math.cos(iter / 6) * 20}px`;
                              void c.offsetHeight;
                          }
                      }, i);
                  },
              ]
            : []),
    ]);
}

test.describe('TuiScrollbar Stress Tests', () => {
    let docPage: TuiDocumentationPagePO;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Scrollbar);
        docPage = new TuiDocumentationPagePO(page);
    });

    test('scroll + mutation deterministic stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const actions = scrollMutationActions(
            Number(process.env.PERF_STRESS_FACTOR || '1'),
        );
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-scroll-mutation-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(50);
        await PerformanceCollector.stopTestCollection(
            page,
            'scrollbar-scroll-mutation-stress',
        );
        const top = await sc.evaluate((el) => (el as HTMLElement).scrollTop);
        expect(top).toBeGreaterThan(0);
    });

    test('memory pressure during scrolling stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const actions = memoryActions(Number(process.env.PERF_STRESS_FACTOR || '1'));
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-memory-pressure-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(70);
        await PerformanceCollector.stopTestCollection(
            page,
            'scrollbar-memory-pressure-stress',
        );
        const ok = await sc.evaluate(
            (el) => (el as HTMLElement).scrollHeight > (el as HTMLElement).clientHeight,
        );
        expect(ok).toBe(true);
    });

    test('theme switching during scroll stress test', async ({page}) => {
        const ex = docPage.getExample('#light-scrollbar');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const actions = themeActions(Number(process.env.PERF_STRESS_FACTOR || '2'));
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-theme-switching-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(70);
        await PerformanceCollector.stopTestCollection(
            page,
            'scrollbar-theme-switching-stress',
        );
        const display = await sc.evaluate(
            (el) => getComputedStyle(el as HTMLElement).display,
        );
        expect(display).not.toBe('none');
    });

    test('rapid resize during scroll stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const actions = resizeActions(Number(process.env.PERF_STRESS_FACTOR || '1'));
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-resize-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(70);
        await PerformanceCollector.stopTestCollection(page, 'scrollbar-resize-stress');
        const hasScroll = await sc.evaluate(
            (el) => (el as HTMLElement).scrollHeight > (el as HTMLElement).clientHeight,
        );
        expect(hasScroll).toBe(true);
    });
});
