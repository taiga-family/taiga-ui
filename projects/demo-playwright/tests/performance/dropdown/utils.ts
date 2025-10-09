import {PerformanceCollector, type TuiDocumentationPagePO} from '@demo-playwright/utils';
import {type Locator, type Page} from '@playwright/test';

export interface DropdownCtx {
    example: ReturnType<TuiDocumentationPagePO['getExample']>;
    dropdownTrigger: Locator | null;
    filterInput: Locator | null;
    exampleHost: Locator | null;
}

export interface StressScenario {
    label: string;
    repeats: number;
    run: (page: Page, ctx: DropdownCtx) => Promise<void>;
}

const INTENSITY = Math.max(1, Number(process.env.STRESS_INTENSITY || '2'));
export const LOOPS = 3;
export const OPEN_CLOSE_R = 2 * INTENSITY;
export const FILTER_R = INTENSITY;
export const REPOSITION_R = 2 * INTENSITY;
export const NESTED_R = INTENSITY;
export const OPTION_R = INTENSITY;
export const STYLE_R = INTENSITY;
export const SCROLL_R = 2 * INTENSITY;

export function falseHandler(): false {
    return false;
}

export function createDropdownCtx(
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

export async function sOpenClose(
    page: Page,
    {dropdownTrigger}: DropdownCtx,
): Promise<void> {
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

export async function sOption(page: Page, ctx: DropdownCtx): Promise<void> {
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

export async function sFilter(page: Page, ctx: DropdownCtx): Promise<void> {
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

export async function sReposition(_page: Page, ctx: DropdownCtx): Promise<void> {
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

export async function sNested(page: Page, ctx: DropdownCtx): Promise<void> {
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

export async function sStyle(_page: Page, ctx: DropdownCtx): Promise<void> {
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

export async function sScroll(_page: Page, ctx: DropdownCtx): Promise<void> {
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

export function scenariosOpenClose(): StressScenario[] {
    return [
        {label: 'openClose', repeats: OPEN_CLOSE_R, run: sOpenClose},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

export function scenariosFilter(): StressScenario[] {
    return [
        {label: 'filter', repeats: FILTER_R, run: sFilter},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

export function scenariosReposition(): StressScenario[] {
    return [
        {label: 'reposition', repeats: REPOSITION_R * 2, run: sReposition},
        {label: 'openClose', repeats: OPEN_CLOSE_R, run: sOpenClose},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

export function scenariosNested(): StressScenario[] {
    return [
        {label: 'nested', repeats: NESTED_R, run: sNested},
        {label: 'option', repeats: OPTION_R, run: sOption},
        {label: 'reposition', repeats: REPOSITION_R, run: sReposition},
        {label: 'scroll', repeats: SCROLL_R, run: sScroll},
        {label: 'style', repeats: STYLE_R, run: sStyle},
    ];
}

export function formatLatencyTable(data: {
    runs: number;
    firstOptionSamples: number[];
    avgFirstOption: number;
}): string {
    const rows: Array<[string, ...number[]]> = [
        ['Run', ...data.firstOptionSamples.map((_, i) => i + 1)],
        ['FirstOption', ...data.firstOptionSamples],
    ];
    const footer: Array<[string, number]> = [['Avg First', data.avgFirstOption]];
    const colCount = Math.max(...rows.map((r) => r.length));
    const widths: number[] = [];

    for (let c = 0; c < colCount; c++) {
        let max = 0;

        for (const r of rows) {
            if (c < r.length) {
                const cell = String(r[c]);

                max = Math.max(max, cell.length);
            }
        }

        widths[c] = max;
    }

    const pad = (val: unknown, i: number): string =>
        String(val).padStart(widths[i] ?? 0, ' ');
    const body = rows.map((r) => r.map(pad).join('  ')).join('\n');
    const footerStr = footer
        .map(([k, v]) => `${k.padEnd(13, ' ')}: ${v.toFixed(2)}`)
        .join('\n');

    return `\nLatency Metrics (ms)\n${body}\n\n${footerStr}\n`;
}

export async function measureMobileCountryOpen(
    page: Page,
    example: ReturnType<TuiDocumentationPagePO['getExample']>,
): Promise<{firstOption: number}> {
    await page.evaluate(() => {
        (window as any).__tuiPerfStart = performance.now();
    });
    const trigger = example.locator(':scope > *').first();

    if (!(await trigger.isVisible().catch(falseHandler))) {
        return {firstOption: NaN};
    }

    await trigger.click({timeout: 2000}).catch(() => {});
    const optionLocator = page.locator('tui-root tui-dropdowns button[tuiOption]');

    await optionLocator
        .first()
        .waitFor({timeout: 3000})
        .catch(() => {});

    return page.evaluate(() => {
        const start = (window as any).__tuiPerfStart as number | undefined;
        const now = performance.now();

        return {firstOption: start != null ? now - start : NaN};
    });
}

export async function collectMobileOpenLatency(
    page: Page,
    example: ReturnType<TuiDocumentationPagePO['getExample']>,
    runs: number,
): Promise<{firstOptionTimes: number[]}> {
    const collectedFirst: number[] = [];
    const totalAttempts = runs * 3;
    const attemptIndexes = Array.from({length: totalAttempts}, (__, index) => index);

    for (const attempt of attemptIndexes) {
        void attempt;
        const {firstOption} = await measureMobileCountryOpen(page, example);

        if (!Number.isNaN(firstOption)) {
            collectedFirst.push(firstOption);
        }

        await page.keyboard.press('Escape').catch(falseHandler);
    }

    return {firstOptionTimes: collectedFirst.slice(0, runs)};
}

export async function runScenarioLoop(
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
