import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {collectMobileOpenLatency, formatLatencyTable, median} from './utils';

test.describe('Dropdown Performance', () => {
    let po: TuiDocumentationPagePO;

    // test('dropdown-open-close-stress', async ({page}) => {
    //     await tuiGoto(page, DemoRoute.Dropdown);
    //     po = new TuiDocumentationPagePO(page);
    //     const example = po.getExample('#basic');

    //     await example.scrollIntoViewIfNeeded().catch(() => {});
    //     const ctx = createDropdownCtx(example);

    //     await runScenarioLoop(
    //         page,
    //         'dropdown-open-close-stress',
    //         scenariosOpenClose(),
    //         ctx,
    //     );
    //     await expect(example.first()).toBeVisible();
    // });

    // test('dropdown-filter-stress', async ({page}) => {
    //     await tuiGoto(page, DemoRoute.Dropdown);
    //     po = new TuiDocumentationPagePO(page);
    //     const example = po.getExample('#interesting');

    //     await example.scrollIntoViewIfNeeded().catch(() => {});
    //     const ctx = createDropdownCtx(example);

    //     await runScenarioLoop(page, 'dropdown-filter-stress', scenariosFilter(), ctx);
    //     await expect(example.first()).toBeVisible();
    // });

    // test('dropdown-reposition-stress', async ({page}) => {
    //     await tuiGoto(page, DemoRoute.Dropdown);
    //     po = new TuiDocumentationPagePO(page);
    //     const example = po.getExample('#appearance');

    //     await example.scrollIntoViewIfNeeded().catch(() => {});
    //     const ctx = createDropdownCtx(example);

    //     await runScenarioLoop(
    //         page,
    //         'dropdown-reposition-stress',
    //         scenariosReposition(),
    //         ctx,
    //     );
    //     await expect(example.first()).toBeVisible();
    // });

    test('dropdown-mobile-datalist-open', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dropdown);
        po = new TuiDocumentationPagePO(page);
        const example = po.getExample('#mobile');

        await example.scrollIntoViewIfNeeded().catch(() => {});
        const RUNS = Number(process.env.DROPDOWN_PERF_RUNS || '5');

        await PerformanceCollector.startTestCollection(
            page,
            'dropdown-mobile-datalist-open',
            __filename,
        );
        const {firstOptionTimes} = await collectMobileOpenLatency(page, example, RUNS);
        const medianFirst = median(firstOptionTimes);

        await PerformanceCollector.stopTestCollection(
            page,
            'dropdown-mobile-datalist-open',
            {
                mobileOpen: {
                    runs: RUNS,
                    medianFirstOption: medianFirst,
                    samples: firstOptionTimes,
                },
            },
        );
        expect(firstOptionTimes.length).toBeGreaterThan(0);

        const payload = {
            runs: RUNS,
            medianFirstOption: medianFirst,
            firstOptionSamples: firstOptionTimes,
        };

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(payload));
        // eslint-disable-next-line no-console
        console.log(formatLatencyTable(payload));
    });

    // test('dropdown-nested-stress', async ({page}) => {
    //     await tuiGoto(page, DemoRoute.DropdownOpen);
    //     po = new TuiDocumentationPagePO(page);
    //     const example = po.getExample('#complex');

    //     await example.scrollIntoViewIfNeeded().catch(() => {});
    //     const ctx = createDropdownCtx(example);

    //     await runScenarioLoop(page, 'dropdown-nested-stress', scenariosNested(), ctx);
    //     await expect(example.first()).toBeVisible();
    // });
});
