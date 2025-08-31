/* eslint-disable */
import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test, type Locator, type Page} from '@playwright/test';

type Action = (page: Page, scrollbar: Locator) => Promise<void>;

// Deterministic amplification factor (caps to avoid runaway CI time)
const LAYOUT_AMPLIFY = Math.min(
    8,
    Math.max(1, Number(process.env.PERF_LAYOUT_AMPLIFY || '1')),
);
const DETERMINISTIC = process.env.PERF_DETERMINISTIC_MODE === '1';

function buildActions(count: number, builder: (i: number) => Action[]): Action[] {
    const all: Action[] = [];
    for (let i = 0; i < count; i++) {
        all.push(...builder(i));
    }
    return all;
}

function scrollMutationActions(factor: number): Action[] {
    const total = Math.round(90 * factor * LAYOUT_AMPLIFY);
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
    const total = Math.round(60 * factor * LAYOUT_AMPLIFY);
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
                (el: Element, params: {amt: number; iter: number}) => {
                    if (el instanceof HTMLElement) {
                        el.scrollTop += params.amt;
                        const mod = (params.iter % 4) + 1;
                        el.style.padding = mod + 'px';
                        void el.offsetHeight;
                    }
                },
                {amt: (i * 12) % 320, iter: i},
            );
        },
    ]);
}

function themeActions(factor: number): Action[] {
    const total = Math.round(30 * factor * LAYOUT_AMPLIFY); // reduced to cut variance
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
        ...(i % 8 === 0 // less frequent style class toggles
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
    const total = Math.round(40 * factor * LAYOUT_AMPLIFY);
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

function layoutAmplifierActions(factor: number): Action[] {
    // Intentionally higher base to create dense layout/style ops
    const total = Math.round(120 * factor * LAYOUT_AMPLIFY);
    return buildActions(total, (i) => {
        const ops: Action[] = [];
        // Width/height oscillation + forced layout read
        ops.push(async (_p, sc) => {
            await sc.evaluate((el: Element, iter: number) => {
                if (!(el instanceof HTMLElement)) return;
                const host = el.closest('.box') || el;
                if (host instanceof HTMLElement) {
                    const w = 320 + (iter % 8) * 3; // 320..341
                    const h = 240 + (iter % 6) * 2; // 240..250
                    host.style.width = w + 'px';
                    host.style.height = h + 'px';
                    void host.offsetHeight; // layout flush
                }
            }, i);
        });
        // Batch structural add/remove every 5 iterations to trigger tree + style work
        if (i % 5 === 0) {
            ops.push(async (_p, sc) => {
                await sc.evaluate((el: Element, iter: number) => {
                    if (!(el instanceof HTMLElement)) return;
                    const target = el.querySelector('.amplifier-batch') || el;
                    const frag = document.createDocumentFragment();
                    for (let k = 0; k < 6; k++) {
                        const d = document.createElement('div');
                        d.textContent = 'x' + (iter % 100) + '-' + k;
                        d.style.cssText =
                            'display:block;width:100%;height:' + (8 + (k % 3)) + 'px';
                        frag.appendChild(d);
                    }
                    target.appendChild(frag);
                    void (target as HTMLElement).offsetHeight;
                    // Prune oldest children to keep DOM size stable
                    let removed = 0;
                    while (
                        removed < 6 &&
                        target.firstChild &&
                        target.childNodes.length > 200
                    ) {
                        target.removeChild(target.firstChild);
                        removed++;
                    }
                }, i);
            });
        }
        // Class toggle to force style recalculation every 7 iterations
        if (i % 7 === 0) {
            ops.push(async (_p, sc) => {
                await sc.evaluate((el: Element) => {
                    if (!(el instanceof HTMLElement)) return;
                    el.classList.add('layout-amplifier-flag');
                    void el.clientTop;
                    el.classList.remove('layout-amplifier-flag');
                });
            });
        }
        return ops;
    });
}

function horizontalRtlActions(factor: number): Action[] {
    const total = Math.round(70 * factor * LAYOUT_AMPLIFY);
    return buildActions(total, (i) => {
        const ops: Action[] = [];
        ops.push(async (page, sc) => {
            await sc.evaluate((el: Element, iter: number) => {
                if (!(el instanceof HTMLElement)) return;
                const host = el;
                host.dir = iter % 8 === 0 ? 'rtl' : 'ltr';
                // widen content to force horizontal scroll
                let wide = host.querySelector('.wide-track') as HTMLElement | null;
                if (!wide) {
                    wide = document.createElement('div');
                    wide.className = 'wide-track';
                    host.appendChild(wide);
                }
                wide.style.width = 800 + (iter % 10) * 25 + 'px';
                wide.style.height = '12px';
                wide.textContent = 'w';
                host.scrollLeft = (iter * 37) % (wide.scrollWidth || 1);
                void host.offsetWidth;
            }, i);
        });
        if (i % 9 === 0) {
            ops.push(async (_p, sc) => {
                await sc.evaluate((el: Element) => {
                    if (!(el instanceof HTMLElement)) return;
                    el.classList.toggle('rtl-variant');
                    void el.clientWidth;
                });
            });
        }
        return ops;
    });
}

function nestedScrollActions(factor: number): Action[] {
    const total = Math.round(60 * factor * LAYOUT_AMPLIFY);
    return buildActions(total, (i) => {
        const ops: Action[] = [];
        ops.push(async (_p, sc) => {
            await sc.evaluate((el: Element, iter: number) => {
                if (!(el instanceof HTMLElement)) return;
                let inner = el.querySelector('.inner-scroll') as HTMLElement | null;
                if (!inner) {
                    inner = document.createElement('div');
                    inner.className = 'inner-scroll';
                    inner.style.cssText = 'height:160px;overflow:auto;';
                    const filler = document.createElement('div');
                    filler.style.height = '900px';
                    filler.textContent = 'inner';
                    inner.appendChild(filler);
                    el.appendChild(inner);
                }
                inner.scrollTop = (iter * 29) % (inner.scrollHeight - inner.clientHeight);
                el.scrollTop = (iter * 17) % (el.scrollHeight - el.clientHeight);
                el.style.borderWidth = (iter % 3) + 'px';
                void el.offsetHeight; // flush
            }, i);
        });
        if (i % 8 === 0) {
            ops.push(async (_p, sc) => {
                await sc.evaluate((el: Element) => {
                    if (!(el instanceof HTMLElement)) return;
                    el.style.padding = 4 + (el.scrollTop % 4) + 'px';
                    void el.offsetHeight;
                });
            });
        }
        return ops;
    });
}

function bulkFragmentActions(factor: number): Action[] {
    const total = Math.round(20 * factor * LAYOUT_AMPLIFY); // base iterations
    if (DETERMINISTIC) {
        return buildActions(total, () => [
            async (_p, sc) => {
                await sc.evaluate((el: Element) => {
                    if (!(el instanceof HTMLElement)) return;
                    const targetSize = 320; // keep near stable
                    const batchAdd = 10;
                    const batchRemove = 10;
                    // add fixed batch
                    const frag = document.createDocumentFragment();
                    for (let k = 0; k < batchAdd; k++) {
                        const d = document.createElement('div');
                        d.textContent = 'd';
                        d.style.cssText = 'height:10px';
                        frag.appendChild(d);
                    }
                    el.appendChild(frag);
                    // remove fixed batch from start to bound size
                    let removed = 0;
                    while (
                        removed < batchRemove &&
                        el.firstChild &&
                        el.childNodes.length > targetSize
                    ) {
                        el.removeChild(el.firstChild);
                        removed++;
                    }
                    void (el as HTMLElement).offsetHeight;
                });
            },
        ]);
    }
    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate((el: Element, iter: number) => {
                if (!(el instanceof HTMLElement)) return;
                const frag = document.createDocumentFragment();
                for (let k = 0; k < 30; k++) {
                    const d = document.createElement('div');
                    d.textContent = 'b' + iter + '-' + k;
                    d.style.cssText = 'height:' + (8 + (k % 5)) + 'px';
                    frag.appendChild(d);
                }
                el.appendChild(frag);
                void el.clientHeight;
                while (el.childNodes.length > 400) {
                    el.removeChild(el.firstChild!);
                }
            }, i);
        },
        async (_p, sc) => {
            if (i % 4 === 0) {
                await sc.evaluate((el: Element) => {
                    if (!(el instanceof HTMLElement)) return;
                    for (let r = 0; r < 15 && el.lastChild; r++) {
                        el.removeChild(el.lastChild);
                    }
                    void el.offsetHeight;
                });
            }
        },
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

    test('layout amplifier stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const factor = Number(process.env.PERF_STRESS_FACTOR || '1') * 1.5;
        const actions = layoutAmplifierActions(factor);
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-layout-amplifier-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(60);
        await PerformanceCollector.stopTestCollection(
            page,
            'scrollbar-layout-amplifier-stress',
        );
        const width = await sc.evaluate(
            (el) => (el as HTMLElement).getBoundingClientRect().width,
        );
        expect(width).toBeGreaterThan(0);
    });

    test('horizontal + rtl scrolling stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const actions = horizontalRtlActions(
            Number(process.env.PERF_STRESS_FACTOR || '1'),
        );
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-horizontal-rtl-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(50);
        await PerformanceCollector.stopTestCollection(
            page,
            'scrollbar-horizontal-rtl-stress',
        );
        const dir = await sc.evaluate((el) => (el as HTMLElement).dir || 'ltr');
        expect(['ltr', 'rtl']).toContain(dir);
    });

    test('nested scroll containers stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const actions = nestedScrollActions(
            Number(process.env.PERF_STRESS_FACTOR || '1'),
        );
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-nested-scroll-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(60);
        await PerformanceCollector.stopTestCollection(
            page,
            'scrollbar-nested-scroll-stress',
        );
        const innerCount = await sc.evaluate(
            (el) => (el as HTMLElement).querySelectorAll('.inner-scroll').length,
        );
        expect(innerCount).toBeGreaterThanOrEqual(1);
    });

    test('bulk fragment insert/remove stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');
        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const actions = bulkFragmentActions(
            Number(process.env.PERF_STRESS_FACTOR || '1'),
        );
        await PerformanceCollector.startTestCollection(
            page,
            'scrollbar-bulk-fragment-stress',
            __filename,
        );
        for (const a of actions) await a(page, sc);
        await page.waitForTimeout(70);
        await PerformanceCollector.stopTestCollection(
            page,
            'scrollbar-bulk-fragment-stress',
        );
        const childCount = await sc.evaluate(
            (el) => (el as HTMLElement).childNodes.length,
        );
        expect(childCount).toBeGreaterThan(0);
    });
});
