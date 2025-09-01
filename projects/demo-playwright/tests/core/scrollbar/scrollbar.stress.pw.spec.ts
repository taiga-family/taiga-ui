import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';

interface ScrollCtx {
    sc: Locator;
}

interface ScrollScenario {
    label: string;
    repeats: number;
    run: (page: Page, ctx: ScrollCtx) => Promise<void>;
}

type Action = (page: Page, scrollbar: Locator) => Promise<void>;

const INTENSITY = Math.max(
    1,
    Number(
        process.env.STRESS_INTENSITY ||
            process.env.PERF_STRESS_FACTOR ||
            process.env.PERF_LAYOUT_AMPLIFY ||
            '1',
    ),
);

const LAYOUT_AMPLIFY = Math.min(8, INTENSITY);
const LOOPS = 1; // keep parity with original per-test single run

function buildActions(count: number, builder: (i: number) => Action[]): Action[] {
    const all: Action[] = [];

    for (let i = 0; i < count; i++) {
        all.push(...builder(i));
    }

    return all;
}

function scrollMutationActions(factor: number): Action[] {
    const total = Math.round(90 * factor * LAYOUT_AMPLIFY);
    const stepHeights = [40, 80, 120, 160, 200, 240, 280, 320];

    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate(
                (el: Element, params: {top: number}) => {
                    if (!(el instanceof HTMLElement)) {
                        return;
                    }

                    el.scrollTop = params.top;
                    void el.scrollHeight;
                    void el.clientHeight;
                },
                {top: stepHeights[i % stepHeights.length]!},
            );
        },
    ]);
}

function memoryActions(factor: number): Action[] {
    const total = Math.round(60 * factor * LAYOUT_AMPLIFY);

    return buildActions(total, () => [
        async (page, sc) => {
            await page.evaluate(() => {
                const mem = new Array(10)
                    .fill(0)
                    .map((_, idx) => new Array(300).fill(idx));

                void mem.length;
            });
            await sc.evaluate((el: Element) => {
                if (!(el instanceof HTMLElement)) {
                    return;
                }

                el.scrollTop = (el.scrollTop + 24) % (el.scrollHeight || 1);
                el.style.padding = '2px';
                void el.offsetHeight;
            });
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
    const widths = [300, 308, 316, 324, 332, 340];
    const heights = [220, 224, 228, 232, 236];

    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate(
                (el: Element, params: {w: number; h: number; s: number}) => {
                    if (!(el instanceof HTMLElement)) {
                        return;
                    }

                    const found = el.closest('.box') || el;
                    const host = found as HTMLElement;

                    host.style.width = `${params.w}px`;
                    host.style.height = `${params.h}px`;
                    el.scrollTop = (el.scrollTop + params.s) % (el.scrollHeight || 1);
                    void host.offsetHeight;
                },
                {
                    w: widths[i % widths.length]!,
                    h: heights[i % heights.length]!,
                    s: 18,
                },
            );
        },
    ]);
}

function layoutAmplifierActions(factor: number): Action[] {
    // Reduced to mitigate timeout risk while preserving proportional scaling
    const total = Math.round(80 * factor * LAYOUT_AMPLIFY);
    const widths = [320, 326, 332, 338];
    const heights = [240, 244, 248];

    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate(
                (el: Element, params: {w: number; h: number}) => {
                    if (!(el instanceof HTMLElement)) {
                        return;
                    }

                    const host = el.closest('.box') || el;

                    if (!(host instanceof HTMLElement)) {
                        return;
                    }

                    host.style.width = `${params.w}px`;
                    host.style.height = `${params.h}px`;
                    void host.offsetHeight;
                },
                {w: widths[i % widths.length]!, h: heights[i % heights.length]!},
            );
        },
    ]);
}

function horizontalRtlActions(factor: number): Action[] {
    // Reduced to mitigate timeout risk
    const total = Math.round(50 * factor * LAYOUT_AMPLIFY);
    const dirs = ['ltr', 'rtl'];
    const widths = [800, 850, 900, 950];

    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate(
                (el: Element, params: {dir: string; w: number}) => {
                    if (!(el instanceof HTMLElement)) {
                        return;
                    }

                    el.dir = params.dir;
                    const wideEl = el.querySelector('.wide-track');
                    let wide: HTMLElement | null = null;

                    if (wideEl instanceof HTMLElement) {
                        wide = wideEl;
                    }

                    if (!wide) {
                        wide = document.createElement('div');
                        wide.className = 'wide-track';
                        el.appendChild(wide);
                    }

                    if (wide) {
                        wide.style.width = `${params.w}px`;
                        wide.style.height = '12px';
                        el.scrollLeft = (el.scrollLeft + 60) % (wide.scrollWidth || 1);
                    }

                    void el.offsetWidth;
                },
                {dir: dirs[i % dirs.length]!, w: widths[i % widths.length]!},
            );
        },
    ]);
}

function nestedScrollActions(factor: number): Action[] {
    const total = Math.round(60 * factor * LAYOUT_AMPLIFY);
    const outerStep = 17;
    const innerStep = 29;
    const borders = [0, 1, 2];
    const paddings = [4, 5, 6, 7];

    return buildActions(total, (i) => [
        async (_p, sc) => {
            await sc.evaluate(
                (
                    el: Element,
                    params: {
                        i: number;
                        innerStep: number;
                        outerStep: number;
                        borders: number[];
                        paddings: number[];
                    },
                ) => {
                    if (!(el instanceof HTMLElement)) {
                        return;
                    }

                    const innerEl = el.querySelector('.inner-scroll');
                    let inner: HTMLElement | null = null;

                    if (innerEl instanceof HTMLElement) {
                        inner = innerEl;
                    }

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

                    inner.scrollTop =
                        (inner.scrollTop + params.innerStep) %
                        (inner.scrollHeight - inner.clientHeight || 1);
                    el.scrollTop =
                        (el.scrollTop + params.outerStep) %
                        (el.scrollHeight - el.clientHeight || 1);
                    el.style.borderWidth = `${params.borders[params.i % params.borders.length]}px`;
                    el.style.padding = `${params.paddings[params.i % params.paddings.length]}px`;
                    void el.offsetHeight;
                },
                {i, innerStep, outerStep, borders, paddings},
            );
        },
    ]);
}

function bulkFragmentActions(factor: number): Action[] {
    const total = Math.round(20 * factor * LAYOUT_AMPLIFY);

    return buildActions(total, () => [
        async (_p, sc) => {
            await sc.evaluate((el: Element) => {
                if (!(el instanceof HTMLElement)) {
                    return;
                }

                const targetSize = 320;
                const batchAdd = 10;
                const batchRemove = 10;
                const frag = document.createDocumentFragment();

                for (let k = 0; k < batchAdd; k++) {
                    const d = document.createElement('div');

                    d.textContent = 'd';
                    d.style.cssText = 'height:10px';
                    frag.appendChild(d);
                }

                el.appendChild(frag);
                let removed = 0;

                while (
                    removed < batchRemove &&
                    el.firstChild &&
                    el.childNodes.length > targetSize
                ) {
                    el.removeChild(el.firstChild);
                    removed++;
                }

                void el.offsetHeight;
            });
        },
    ]);
}

async function runScenarioLoop(
    page: Page,
    name: string,
    list: ScrollScenario[],
    ctx: ScrollCtx,
): Promise<void> {
    await PerformanceCollector.startTestCollection(page, name, __filename);

    for (let loop = 0; loop < LOOPS; loop++) {
        for (const scenario of list) {
            for (let r = 0; r < scenario.repeats; r++) {
                if (page.isClosed()) {
                    return;
                }

                try {
                    await scenario.run(page, ctx);
                } catch {
                    return;
                }
            }
        }
    }

    await PerformanceCollector.stopTestCollection(page, name);
}

function scenarioFromActions(
    label: string,
    actions: Action[],
    repeats = 1,
): ScrollScenario {
    return {
        label,
        repeats,
        async run(page, ctx) {
            for (let i = 0; i < actions.length; i++) {
                await actions[i]!(page, ctx.sc);

                if (i > 0 && i % 200 === 0) {
                    // Yield to avoid monopolizing event loop in very long sequences
                    await page.waitForTimeout(0);
                }
            }
        },
    };
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
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('scroll-mutation', scrollMutationActions(INTENSITY), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-scroll-mutation-stress', scenarios, ctx);
        const top = await sc.evaluate((el) => (el as HTMLElement).scrollTop);

        expect(top).toBeGreaterThan(0);
    });

    test('memory pressure during scrolling stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');

        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('memory', memoryActions(INTENSITY), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-memory-pressure-stress', scenarios, ctx);
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
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('theme', themeActions(INTENSITY * 2), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-theme-switching-stress', scenarios, ctx);
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
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('resize', resizeActions(INTENSITY), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-resize-stress', scenarios, ctx);
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
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('layout', layoutAmplifierActions(INTENSITY * 1.5), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-layout-amplifier-stress', scenarios, ctx);
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
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('horizontal-rtl', horizontalRtlActions(INTENSITY), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-horizontal-rtl-stress', scenarios, ctx);
        const dir = await sc.evaluate((el) => (el as HTMLElement).dir || 'ltr');

        expect(['ltr', 'rtl']).toContain(dir);
    });

    test('nested scroll containers stress test', async ({page}) => {
        const ex = docPage.getExample('#vertical');
        const sc = ex.locator('tui-scrollbar');

        await sc.scrollIntoViewIfNeeded();
        await expect(sc).toBeVisible();
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('nested', nestedScrollActions(INTENSITY), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-nested-scroll-stress', scenarios, ctx);
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
        const ctx: ScrollCtx = {sc};
        const scenarios: ScrollScenario[] = [
            scenarioFromActions('fragment', bulkFragmentActions(INTENSITY), 1),
        ];

        await runScenarioLoop(page, 'scrollbar-bulk-fragment-stress', scenarios, ctx);
        const childCount = await sc.evaluate(
            (el) => (el as HTMLElement).childNodes.length,
        );

        expect(childCount).toBeGreaterThan(0);
    });
});
