import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {
    collectMobileOpenLatency,
    createDropdownCtx,
    formatLatencyTable,
    measureColdOpen,
    median,
    runScenarioLoop,
    scenariosFilter,
    scenariosNested,
    scenariosOpenClose,
    scenariosReposition,
} from './utils';

test.describe('Dropdown Performance', () => {
    let po: TuiDocumentationPagePO;

    test('dropdown-open-close-stress', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        po = new TuiDocumentationPagePO(page);
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
        await tuiGoto(page, DemoRoute.Dropdown);
        po = new TuiDocumentationPagePO(page);
        const example = po.getExample('#interesting');

        await example.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = createDropdownCtx(example);

        await runScenarioLoop(page, 'dropdown-filter-stress', scenariosFilter(), ctx);
        await expect(example.first()).toBeVisible();
    });

    test('dropdown-reposition-stress', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        po = new TuiDocumentationPagePO(page);
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

    test('dropdown-mobile-datalist-open', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        po = new TuiDocumentationPagePO(page);
        const example = po.getExample('#mobile');

        await example.scrollIntoViewIfNeeded().catch(() => {});

        const WARM_RUNS = 4;
        const MAX_COLD_RETRIES = 3;

        await PerformanceCollector.startTestCollection(
            page,
            'dropdown-mobile-datalist-open',
            __filename,
        );

        const coldFirst = await measureColdOpen(page, example, MAX_COLD_RETRIES);

        await page.keyboard.press('Escape').catch(() => {});

        const {firstOptionTimes: warmSamples} = await collectMobileOpenLatency(
            page,
            example,
            WARM_RUNS,
        );
        const warmMedian = median(warmSamples);

        await PerformanceCollector.stopTestCollection(
            page,
            'dropdown-mobile-datalist-open',
            {
                mobileOpen: {
                    coldFirst,
                    warmSamples,
                    warmMedian,
                    runs: warmSamples.length,
                    medianFirstOption: warmMedian,
                    samples: warmSamples,
                },
            },
        );

        expect(warmSamples.length).toBeGreaterThan(0);

        const payload = {
            coldFirst,
            runs: warmSamples.length,
            medianFirstOption: warmMedian,
            warmMedian,
            firstOptionSamples: warmSamples,
        };

        console.info(JSON.stringify(payload));
        console.info(
            formatLatencyTable({
                runs: warmSamples.length,
                medianFirstOption: warmMedian,
                firstOptionSamples: warmSamples,
            }),
        );
    });

    test('dropdown-nested-stress', async ({page}) => {
        await tuiGoto(page, DemoRoute.DropdownOpen);
        po = new TuiDocumentationPagePO(page);
        const example = po.getExample('#complex');

        await example.scrollIntoViewIfNeeded().catch(() => {});
        const ctx = createDropdownCtx(example);

        await runScenarioLoop(page, 'dropdown-nested-stress', scenariosNested(), ctx);
        await expect(example.first()).toBeVisible();
    });
});
