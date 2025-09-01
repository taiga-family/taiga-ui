/* eslint-disable */
import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';

type Ctx = {
    example: ReturnType<TuiDocumentationPagePO['getExample']>;
    trigger: Locator | null;
    input: Locator | null;
    host: Locator | null;
};
type Scenario = {
    label: string;
    repeats: number;
    run: (page: Page, ctx: Ctx) => Promise<void>;
};

const INTENSITY = Math.max(
    1,
    Number(process.env.STRESS_INTENSITY || process.env.PERF_STRESS_FACTOR || '3'),
);
const LOOPS = 6;
const OPEN_CLOSE_R = 4 * INTENSITY;
const FILTER_R = 2 * INTENSITY;
const REPOSITION_R = 3 * INTENSITY;
const NESTED_R = 2 * INTENSITY;
const OPTION_R = 2 * INTENSITY;
const STYLE_R = 2 * INTENSITY;
const SCROLL_R = 3 * INTENSITY;

async function buildCtx(
    example: ReturnType<TuiDocumentationPagePO['getExample']>,
): Promise<Ctx> {
    const trigger = example.locator('[tuiDropdown]').first();
    const input = example
        .locator(
            [
                'tui-textfield input',
                'tui-combo-box input',
                'tui-multi-select input',
                'tui-input input',
                'input[tuiSelect]',
                'input[tuiTextfield]',
            ].join(', '),
        )
        .first();
    return {example, trigger, input, host: example.first()};
}

async function sOpenClose(page: Page, {trigger}: Ctx): Promise<void> {
    if (!(await trigger?.isVisible().catch(() => false))) return;
    await trigger!.click().catch(() => {});
    await page.keyboard.press('Escape').catch(() => {});
}

async function sOption(page: Page, ctx: Ctx): Promise<void> {
    if (!(await ctx.trigger?.isVisible().catch(() => false))) return;
    await ctx.trigger!.click().catch(() => {});
    for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowDown').catch(() => {});
    await page.keyboard.press('Enter').catch(() => {});
    await page.keyboard.press('Escape').catch(() => {});
}

async function sFilter(page: Page, ctx: Ctx): Promise<void> {
    if (!(await ctx.input?.isVisible().catch(() => false))) return;
    await ctx.input!.click().catch(() => {});
    await ctx.input!.press('Control+A').catch(() => {});
    await ctx.input!.press('Backspace').catch(() => {});
    const seq = 'abcdefghi';
    for (let i = 0; i < 3; i++)
        await ctx.input!.type(seq[i]!, {delay: 1}).catch(() => {});
    await page.keyboard.press('Escape').catch(() => {});
}

async function sReposition(_page: Page, ctx: Ctx): Promise<void> {
    if (!(await ctx.host?.isVisible().catch(() => false))) return;
    await ctx
        .host!.evaluate((el: Element) => {
            const h = el as HTMLElement;
            const w = h.style.width === '640px' ? '520px' : '640px';
            h.style.width = w;
            h.style.height = w === '640px' ? '420px' : '360px';
        })
        .catch(() => {});
}

async function sNested(page: Page, ctx: Ctx): Promise<void> {
    if (!(await ctx.trigger?.isVisible().catch(() => false))) return;
    await ctx.trigger!.click().catch(() => {});
    await page.keyboard.press('ArrowDown').catch(() => {});
    await page.keyboard.press('ArrowRight').catch(() => {});
    await page.keyboard.press('ArrowDown').catch(() => {});
    await page.keyboard.press('Escape').catch(() => {});
}

async function sStyle(_page: Page, ctx: Ctx): Promise<void> {
    if (!(await ctx.host?.isVisible().catch(() => false))) return;
    await ctx
        .host!.evaluate((el: Element) => {
            const h = el as HTMLElement;
            for (let i = 0; i < 3; i++) {
                h.style.padding = (i % 4) + 'px';
                h.style.borderWidth = (i % 2) + 'px';
                h.style.marginLeft = (i % 6) + 'px';
            }
            void h.offsetWidth;
        })
        .catch(() => {});
}

async function sScroll(_page: Page, ctx: Ctx): Promise<void> {
    if (!(await ctx.host?.isVisible().catch(() => false))) return;
    await ctx
        .host!.evaluate((el: Element) => {
            const h = el as HTMLElement;
            h.scrollTop = (h.scrollTop + 160) % 480;
            void h.offsetHeight;
        })
        .catch(() => {});
}

function scenariosOpenClose(): Scenario[] {
    return [
        {label: 'openClose', repeats: OPEN_CLOSE_R, run: sOpenClose},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

function scenariosFilter(): Scenario[] {
    return [
        {label: 'filter', repeats: FILTER_R, run: sFilter},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

function scenariosReposition(): Scenario[] {
    return [
        {label: 'reposition', repeats: REPOSITION_R * 2, run: sReposition},
        {label: 'openClose', repeats: OPEN_CLOSE_R, run: sOpenClose},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

function scenariosNested(): Scenario[] {
    return [
        {label: 'nested', repeats: NESTED_R, run: sNested},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

async function runScenarioLoop(
    page: Page,
    name: string,
    list: Scenario[],
    ctx: Ctx,
): Promise<void> {
    const skip = process.env.PERF_SKIP_COLLECTOR === '1';
    if (!skip) await PerformanceCollector.startTestCollection(page, name, __filename);
    for (let i = 0; i < LOOPS; i++) {
        for (const s of list) {
            for (let r = 0; r < s.repeats; r++) await s.run(page, ctx);
        }
        await page
            .evaluate(() => {
                const host = document.querySelector(
                    '[tuiDropdown]',
                ) as HTMLElement | null;
                if (host) {
                    void host.offsetWidth;
                    void host.offsetHeight;
                }
            })
            .catch(() => {});
    }
    if (!skip) await PerformanceCollector.stopTestCollection(page, name);
}

test.describe('Dropdown Stress Tests', () => {
    let po: TuiDocumentationPagePO;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        po = new TuiDocumentationPagePO(page);
    });

    test('dropdown-open-close-stress', async ({page}) => {
        const ex = po.getExample('#basic');
        await ex.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = await buildCtx(ex);
        await runScenarioLoop(
            page,
            'dropdown-open-close-stress',
            scenariosOpenClose(),
            ctx,
        );
        await expect(ex.first()).toBeVisible();
    });

    test('dropdown-filter-stress', async ({page}) => {
        const ex = po.getExample('#interesting');
        await ex.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = await buildCtx(ex);
        await runScenarioLoop(page, 'dropdown-filter-stress', scenariosFilter(), ctx);
        await expect(ex.first()).toBeVisible();
    });

    test('dropdown-reposition-stress', async ({page}) => {
        const ex = po.getExample('#appearance');
        await ex.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = await buildCtx(ex);
        await runScenarioLoop(
            page,
            'dropdown-reposition-stress',
            scenariosReposition(),
            ctx,
        );
        await expect(ex.first()).toBeVisible();
    });

    test('dropdown-nested-stress', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        const ex = new TuiDocumentationPagePO(page).getExample('#complex');
        await ex.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = await buildCtx(ex);
        await runScenarioLoop(page, 'dropdown-nested-stress', scenariosNested(), ctx);
        await expect(ex.first()).toBeVisible();
    });
});
