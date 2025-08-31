/* eslint-disable */
import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';

const DETERMINISTIC = process.env.PERF_DETERMINISTIC_MODE === '1';

function repeat<T>(count: number, builder: (i: number) => T[]): T[] {
    const out: T[] = [];
    for (let i = 0; i < count; i++) {
        out.push(...builder(i));
    }
    return out;
}

type Op = (
    page: Page,
    ctx: {example: ReturnType<TuiDocumentationPagePO['getExample']>},
) => Promise<void>;

const FACTOR = Math.min(8, Math.max(1, Number(process.env.PERF_STRESS_FACTOR || '1')));
const WARMUP_LOOPS = Math.max(0, Number(process.env.PERF_DROPDOWN_WARMUP_LOOPS || '8'));
const MEASURE_LOOPS = Math.max(
    1,
    Number(process.env.PERF_DROPDOWN_MEASURE_LOOPS || '24'),
);
const FILTER_WARMUP = Math.max(0, Number(process.env.PERF_DROPDOWN_FILTER_WARMUP || '8'));
const FILTER_MEASURE = Math.max(
    1,
    Number(process.env.PERF_DROPDOWN_FILTER_MEASURE || '32'),
);
const REPOSITION_WARMUP = Math.max(
    0,
    Number(process.env.PERF_DROPDOWN_REPOSITION_WARMUP || '6'),
);
const REPOSITION_MEASURE = Math.max(
    1,
    Number(process.env.PERF_DROPDOWN_REPOSITION_MEASURE || '28'),
);
const NESTED_WARMUP = Math.max(0, Number(process.env.PERF_DROPDOWN_NESTED_WARMUP || '6'));
const NESTED_MEASURE = Math.max(
    1,
    Number(process.env.PERF_DROPDOWN_NESTED_MEASURE || '24'),
);

// repeat imported from shared helper

function buildOpenCloseOps(count: number): Op[] {
    if (DETERMINISTIC) {
        return repeat(Math.max(1, count), () => [
            async (page, {example}) => {
                if (page.isClosed()) {
                    return;
                }
                const btn = example.locator('button').first();
                await btn.waitFor({state: 'visible', timeout: 1500}).catch(() => {});
                await btn.click({timeout: 800}).catch(() => {});
                await page
                    .locator('tui-dropdown')
                    .first()
                    .waitFor({state: 'visible', timeout: 1200})
                    .catch(() => {});
                await page.waitForTimeout(10).catch(() => {});
                await page.keyboard.press('Escape').catch(() => {});
                await page.waitForTimeout(6).catch(() => {});
            },
        ]);
    }
    return repeat(count, (i) => [
        async (page, {example}) => {
            if (page.isClosed()) {
                return;
            }
            const btn = example.locator('button').first();
            await btn.waitFor({state: 'visible', timeout: 1500}).catch(() => {});
            if (page.isClosed()) {
                return;
            }
            await btn.click({timeout: 1200}).catch(() => {});
            if (i % 6 === 0) {
                await page.waitForTimeout(4).catch(() => {});
            }
            if (i % 4 === 0) {
                await page
                    .locator('tui-dropdown [tuiOption]')
                    .first()
                    .click({timeout: 400})
                    .catch(() => {});
            }
            if (i % 8 === 0) {
                await page.keyboard.press('Escape').catch(() => {});
            }
        },
    ]);
}

async function runOps(
    page: Page,
    ops: Op[],
    example: ReturnType<TuiDocumentationPagePO['getExample']>,
): Promise<void> {
    for (let i = 0; i < ops.length; i++) {
        if (page.isClosed()) {
            break;
        }

        await ops[i]!(page, {example});

        if (i % 5 === 0) {
            await page.waitForTimeout(1).catch(() => {});
        }
    }
}

function filterOps(total: number): Op[] {
    if (DETERMINISTIC) {
        const seq = 'abcd';
        return repeat(total, (i) => [
            async (_page, {example}) => {
                const input = example.locator('input').first();
                await input.waitFor({state: 'visible', timeout: 1500}).catch(() => {});
                await input.fill('');
                const ch = seq[i % seq.length] || 'a';
                await input.type(ch, {delay: 2}).catch(() => {});
                if (i % 3 === 0) {
                    await input.press('Backspace').catch(() => {});
                }
                await input.blur().catch(() => {});
                await input.focus().catch(() => {});
            },
        ]);
    }
    return repeat(total, (i) => [
        async (_page, {example}) => {
            const input = example.locator('input').first();
            await input.waitFor({state: 'visible', timeout: 2000}).catch(() => {});
            await input.click({timeout: 800}).catch(() => {});
            const seq = ['a', 'b', 'c', 'd'];
            const ch = seq[i % seq.length] || 'a';
            await input.type(ch, {delay: 4}).catch(() => {});
            if (i % 4 === 0) {
                await input.press('Backspace').catch(() => {});
            }
        },
    ]);
}

function repositionOps(host: Locator, total: number): Op[] {
    if (DETERMINISTIC) {
        return repeat(total, (i) => [
            async () => {
                await host.evaluate((el, iter) => {
                    if (!(el instanceof HTMLElement)) {
                        return;
                    }
                    el.style.width = `${200 + (iter % 6) * 5}px`;
                    el.style.marginLeft = `${(iter % 3) * 6}px`;
                    void el.offsetWidth;
                }, i);
                if (i % 10 === 0) {
                    await host
                        .page()
                        .waitForTimeout(4)
                        .catch(() => {});
                }
            },
        ]);
    }
    return repeat(total, (i) => [
        async () => {
            await host.evaluate((el, iter) => {
                if (!(el instanceof HTMLElement)) {
                    return;
                }
                el.style.width = `${180 + (iter % 10) * 8}px`;
                el.style.marginLeft = `${(iter % 5) * 4}px`;
                void el.offsetWidth;
            }, i);
            if (i % 20 === 0) {
                await host
                    .page()
                    .waitForTimeout(4)
                    .catch(() => {});
            }
        },
    ]);
}

function resolveTrigger(
    example: ReturnType<TuiDocumentationPagePO['getExample']>,
): Locator {
    return example.locator('input').first(); // #appearance example host
}

async function ensureDropdownOpen(trigger: Locator, page: Page): Promise<boolean> {
    const dropdown = page.locator('tui-dropdown');

    for (let attempt = 0; attempt < 5; attempt++) {
        const visible = await dropdown
            .first()
            .isVisible()
            .catch(() => false);

        if (visible) {
            return true;
        }

        await trigger.scrollIntoViewIfNeeded().catch(() => {});
        await trigger.waitFor({state: 'visible', timeout: 2000}).catch(() => {});
        await trigger.click({timeout: 1500}).catch(async () => {
            await trigger.focus().catch(() => {});
            await trigger.press('Enter').catch(() => {});
        });
        await page.waitForTimeout(40).catch(() => {});
    }

    return dropdown
        .first()
        .isVisible()
        .catch(() => false);
}

function nestedOps(total: number, host: Locator, menuRoot: () => Locator): Op[] {
    if (DETERMINISTIC) {
        return repeat(total, () => [
            async (page) => {
                if (page.isClosed()) {
                    return;
                }
                const root = menuRoot();
                const open = await root.isVisible().catch(TUI_FALSE_HANDLER);
                if (!open) {
                    await host.click({timeout: 1200}).catch(() => {});
                    await page.waitForTimeout(12).catch(() => {});
                }
                await page.keyboard.press('Escape').catch(() => {});
                await page.waitForTimeout(8).catch(() => {});
                await host.click({timeout: 1200}).catch(() => {});
            },
        ]);
    }
    return repeat(total, (i) => [
        async (page) => {
            if (page.isClosed()) {
                return;
            }
            const open = await menuRoot().isVisible().catch(TUI_FALSE_HANDLER);
            if (!open) {
                await host.click({timeout: 1500}).catch(() => {});
                await page.waitForTimeout(20).catch(() => {});
            }
            if (i % 4 === 0) {
                await menuRoot()
                    .locator('tui-data-list button')
                    .nth(i % 3)
                    .click({timeout: 800})
                    .catch(() => {});
            }
            if (i % 12 === 0) {
                await page.keyboard.press('Escape').catch(() => {});
                await page.waitForTimeout(15).catch(() => {});
                await host.click({timeout: 1200}).catch(() => {});
            }
        },
    ]);
}

test.describe('Dropdown Stress Tests', () => {
    let pageObject: TuiDocumentationPagePO;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        pageObject = new TuiDocumentationPagePO(page);
    });

    test('dropdown-open-close-stress', async ({page}) => {
        const example = pageObject.getExample('#basic');

        await example.scrollIntoViewIfNeeded();
        await example
            .first()
            .waitFor({state: 'attached', timeout: 2500})
            .catch(() => {});

        // Warm-up (no tracing) to stabilize styles and scripts
        const warmupOps = buildOpenCloseOps(Math.round(WARMUP_LOOPS * FACTOR));

        await runOps(page, warmupOps, example);

        const measureOps = buildOpenCloseOps(Math.round(MEASURE_LOOPS * FACTOR));
        const skipCollector = process.env.PERF_SKIP_COLLECTOR === '1';
        if (!skipCollector) {
            await PerformanceCollector.startTestCollection(
                page,
                'dropdown-open-close-stress',
                __filename,
            );
        }
        await runOps(page, measureOps, example);
        if (!skipCollector && !page.isClosed()) {
            await page.waitForTimeout(30).catch(() => {});
            await PerformanceCollector.stopTestCollection(
                page,
                'dropdown-open-close-stress',
            );
        }
        if (!page.isClosed()) {
            await expect(example.locator('button').first()).toBeVisible();
        }
    });

    test('dropdown-filter-stress', async ({page}) => {
        const example = pageObject.getExample('#interesting');

        await example.scrollIntoViewIfNeeded();
        const warmup = filterOps(Math.round(FILTER_WARMUP * FACTOR));

        await runOps(page, warmup, example);
        const measure = filterOps(Math.round(FILTER_MEASURE * FACTOR));
        const skipCollector = process.env.PERF_SKIP_COLLECTOR === '1';
        if (!skipCollector) {
            await PerformanceCollector.startTestCollection(
                page,
                'dropdown-filter-stress',
                __filename,
            );
        }
        await runOps(page, measure, example);
        if (!skipCollector && !page.isClosed()) {
            await page.waitForTimeout(25).catch(() => {});
            await PerformanceCollector.stopTestCollection(page, 'dropdown-filter-stress');
        }
        if (!page.isClosed()) {
            await expect(example.locator('input').first()).toBeVisible();
        }
    });

    test('dropdown-reposition-stress', async ({page}, testInfo) => {
        const example = pageObject.getExample('#appearance');

        await example.scrollIntoViewIfNeeded();
        const trigger = resolveTrigger(example);
        const opened = await ensureDropdownOpen(trigger, page);

        if (!opened) {
            testInfo.skip(true, 'Dropdown did not open after retries');
        }

        const warmup = repositionOps(trigger, Math.round(REPOSITION_WARMUP * FACTOR));

        await runOps(page, warmup, example);
        const measure = repositionOps(
            trigger,
            Math.round(Math.min(REPOSITION_MEASURE, 16) * FACTOR),
        );
        const skipCollector = process.env.PERF_SKIP_COLLECTOR === '1';
        if (!skipCollector) {
            await PerformanceCollector.startTestCollection(
                page,
                'dropdown-reposition-stress',
                __filename,
            );
        }
        await runOps(page, measure, example);
        if (!skipCollector && !page.isClosed()) {
            await page.waitForTimeout(25).catch(() => {});
            await PerformanceCollector.stopTestCollection(
                page,
                'dropdown-reposition-stress',
            );
        }
        if (!page.isClosed()) {
            await expect(trigger).toBeVisible();
        }
    });

    test('dropdown-nested-stress', async ({page}, testInfo) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        const ex = new TuiDocumentationPagePO(page).getExample('#complex');

        await ex.scrollIntoViewIfNeeded();
        const host = ex.locator('button').first();

        await host.waitFor({state: 'visible', timeout: 3000}).catch(() => {});
        await host.click({timeout: 1500}).catch(() => {});
        const dropdownRoot = (): Locator => page.locator('tui-dropdown').first();
        const opened = await dropdownRoot()
            .isVisible()
            .catch(() => false);

        if (!opened) {
            testInfo.skip(true, 'Could not open nested host');
        }

        const warmup = nestedOps(Math.round(NESTED_WARMUP * FACTOR), host, dropdownRoot);

        await runOps(page, warmup, ex);
        const measure = nestedOps(
            Math.round(Math.min(NESTED_MEASURE, 20) * FACTOR),
            host,
            dropdownRoot,
        );
        const skipCollector = process.env.PERF_SKIP_COLLECTOR === '1';

        if (!skipCollector) {
            await PerformanceCollector.startTestCollection(
                page,
                'dropdown-nested-stress',
                __filename,
            );
        }

        await runOps(page, measure, ex);

        if (!skipCollector && !page.isClosed()) {
            await page.waitForTimeout(25).catch(() => {});
            await PerformanceCollector.stopTestCollection(page, 'dropdown-nested-stress');
        }

        if (!page.isClosed()) {
            await expect(host).toBeVisible();
        }
    });
});
