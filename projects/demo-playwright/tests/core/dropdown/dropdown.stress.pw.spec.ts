import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';

interface DropdownCtx {
    example: ReturnType<TuiDocumentationPagePO['getExample']>;
    dropdownTrigger: Locator | null;
    filterInput: Locator | null;
    exampleHost: Locator | null;
}

interface StressScenario {
    label: string;
    repeats: number;
    run: (page: Page, ctx: DropdownCtx) => Promise<void>;
}

const INTENSITY = Math.max(1, Number(process.env.STRESS_INTENSITY || '2'));

const LOOPS = 3;
// Reduced per-scenario repeats to cut runtime while still generating ample trace events
const OPEN_CLOSE_R = 2 * INTENSITY;
const FILTER_R = INTENSITY;
const REPOSITION_R = 2 * INTENSITY;
const NESTED_R = INTENSITY;
const OPTION_R = INTENSITY;
const STYLE_R = INTENSITY;
const SCROLL_R = 2 * INTENSITY;

function createDropdownCtx(
    example: ReturnType<TuiDocumentationPagePO['getExample']>,
): DropdownCtx {
    const dropdownTrigger = example.locator('[tuiDropdown]').first();
    const filterInput = example
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
    const exampleHost = example.first();

    return {example, dropdownTrigger, filterInput, exampleHost};
}

async function sOpenClose(page: Page, {dropdownTrigger}: DropdownCtx): Promise<void> {
    if (!dropdownTrigger) {
        return;
    }

    try {
        if (!(await dropdownTrigger.isVisible())) {
            return;
        }
    } catch {
        return;
    }

    await dropdownTrigger.click().catch(() => {});
    await page.keyboard.press('Escape').catch(() => {});
}

async function sOption(page: Page, ctx: DropdownCtx): Promise<void> {
    if (!ctx.dropdownTrigger) {
        return;
    }

    try {
        if (!(await ctx.dropdownTrigger.isVisible())) {
            return;
        }
    } catch {
        return;
    }

    await ctx.dropdownTrigger.click().catch(() => {});

    for (let i = 0; i < 4; i++) {
        await page.keyboard.press('ArrowDown').catch(() => {});
    }

    await page.keyboard.press('Enter').catch(() => {});
    await page.keyboard.press('Escape').catch(() => {});
}

async function sFilter(page: Page, ctx: DropdownCtx): Promise<void> {
    if (!ctx.filterInput) {
        return;
    }

    try {
        if (!(await ctx.filterInput.isVisible())) {
            return;
        }
    } catch {
        return;
    }

    await ctx.filterInput.click().catch(() => {});
    await ctx.filterInput.press('Control+A').catch(() => {});
    await ctx.filterInput.press('Backspace').catch(() => {});
    const sequence = 'abcdefghi';

    for (let i = 0; i < 3; i++) {
        await ctx.filterInput.type(sequence.charAt(i), {delay: 1}).catch(() => {});
    }

    await page.keyboard.press('Escape').catch(() => {});
}

async function sReposition(_page: Page, ctx: DropdownCtx): Promise<void> {
    if (!ctx.exampleHost) {
        return;
    }

    try {
        if (!(await ctx.exampleHost.isVisible())) {
            return;
        }
    } catch {
        return;
    }

    await ctx.exampleHost
        .evaluate((el: Element) => {
            const host = el as HTMLElement;
            const width = host.style.width === '640px' ? '520px' : '640px';

            host.style.width = width;
            host.style.height = width === '640px' ? '420px' : '360px';
        })
        .catch(() => {});
}

async function sNested(page: Page, ctx: DropdownCtx): Promise<void> {
    if (!ctx.dropdownTrigger) {
        return;
    }

    try {
        if (!(await ctx.dropdownTrigger.isVisible())) {
            return;
        }
    } catch {
        return;
    }

    await ctx.dropdownTrigger.click().catch(() => {});
    await page.keyboard.press('ArrowDown').catch(() => {});
    await page.keyboard.press('ArrowRight').catch(() => {});
    await page.keyboard.press('ArrowDown').catch(() => {});
    await page.keyboard.press('Escape').catch(() => {});
}

async function sStyle(_page: Page, ctx: DropdownCtx): Promise<void> {
    if (!ctx.exampleHost) {
        return;
    }

    try {
        if (!(await ctx.exampleHost.isVisible())) {
            return;
        }
    } catch {
        return;
    }

    await ctx.exampleHost
        .evaluate((el: Element) => {
            const host = el as HTMLElement;

            for (let i = 0; i < 3; i++) {
                host.style.padding = `${i % 4}px`;
                host.style.borderWidth = `${i % 2}px`;
                host.style.marginLeft = `${i % 6}px`;
            }

            void host.offsetWidth;
        })
        .catch(() => {});
}

async function sScroll(_page: Page, ctx: DropdownCtx): Promise<void> {
    if (!ctx.exampleHost) {
        return;
    }

    try {
        if (!(await ctx.exampleHost.isVisible())) {
            return;
        }
    } catch {
        return;
    }

    await ctx.exampleHost
        .evaluate((el: Element) => {
            const host = el as HTMLElement;

            host.scrollTop = (host.scrollTop + 160) % 480;
            void host.offsetHeight;
        })
        .catch(() => {});
}

function scenariosOpenClose(): StressScenario[] {
    return [
        {label: 'openClose', repeats: OPEN_CLOSE_R, run: sOpenClose},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

function scenariosFilter(): StressScenario[] {
    return [
        {label: 'filter', repeats: FILTER_R, run: sFilter},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

function scenariosReposition(): StressScenario[] {
    return [
        {label: 'reposition', repeats: REPOSITION_R * 2, run: sReposition},
        {label: 'openClose', repeats: OPEN_CLOSE_R, run: sOpenClose},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

function scenariosNested(): StressScenario[] {
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
    list: StressScenario[],
    ctx: DropdownCtx,
): Promise<void> {
    await PerformanceCollector.startTestCollection(page, name, __filename);

    for (let loop = 0; loop < LOOPS; loop++) {
        for (const scenario of list) {
            for (let r = 0; r < scenario.repeats; r++) {
                await scenario.run(page, ctx);
            }
        }

        await page
            .evaluate(() => {
                const host = document.querySelector('[tuiDropdown]');

                if (host) {
                    void (host as HTMLElement).offsetWidth;
                    void (host as HTMLElement).offsetHeight;
                }
            })
            .catch(() => {});
    }

    await PerformanceCollector.stopTestCollection(page, name);
}

test.describe('Dropdown Stress Tests', () => {
    let po: TuiDocumentationPagePO;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        po = new TuiDocumentationPagePO(page);
    });

    test('dropdown-open-close-stress', async ({page}) => {
        const example = po.getExample('#basic');

        await example.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = createDropdownCtx(example);

        await runScenarioLoop(
            page,
            'dropdown-open-close-stress',
            scenariosOpenClose(),
            ctx,
        );
        await expect(example.first()).toBeVisible();
    });

    test('dropdown-filter-stress', async ({page}) => {
        const example = po.getExample('#interesting');

        await example.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = createDropdownCtx(example);

        await runScenarioLoop(page, 'dropdown-filter-stress', scenariosFilter(), ctx);
        await expect(example.first()).toBeVisible();
    });

    test('dropdown-reposition-stress', async ({page}) => {
        const example = po.getExample('#appearance');

        await example.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = createDropdownCtx(example);

        await runScenarioLoop(
            page,
            'dropdown-reposition-stress',
            scenariosReposition(),
            ctx,
        );
        await expect(example.first()).toBeVisible();
    });

    test('dropdown-nested-stress', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        const example = new TuiDocumentationPagePO(page).getExample('#complex');

        await example.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = createDropdownCtx(example);

        await runScenarioLoop(page, 'dropdown-nested-stress', scenariosNested(), ctx);
        await expect(example.first()).toBeVisible();
    });
});
