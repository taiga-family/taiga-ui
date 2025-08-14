import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

/**
 * Minimal CDP trace example to log Layout/RecalculateStyles metrics.
 * Run:
 *   npx nx e2e demo-playwright -- --project=chromium --reporter=list projects/demo-playwright/tests/perfomance/cdp.pw.spec.ts
 */

interface TraceEvent {
    name: string;
    dur?: number; // microseconds
    cat?: string;
}

function aggregateTimelineMetrics(events: readonly TraceEvent[]): {
    layoutCount: number;
    recalcCount: number;
    layoutMs: number;
    recalcMs: number;
} {
    let layoutCount = 0;
    let recalcCount = 0;
    let layoutMs = 0;
    let recalcMs = 0;

    for (const e of events) {
        if (!e.cat?.includes('devtools.timeline')) {
            continue;
        }

        const durMs = e.dur ? e.dur / 1000 : 0;

        switch (e.name) {
            case 'Layout':
                layoutCount++;
                layoutMs += durMs;
                break;
            case 'RecalculateStyles':
            case 'UpdateLayoutTree':
                recalcCount++;
                recalcMs += durMs;
                break;
        }
    }

    return {layoutCount, recalcCount, layoutMs, recalcMs};
}

test.describe('CDP metrics example @cdp', () => {
    test.beforeEach(({browserName}) => {
        // eslint-disable-next-line playwright/no-skipped-test
        test.skip(browserName !== 'chromium', 'CDP trace example runs on Chromium only');
    });

    test('logs Layout/RecalculateStyles counts and durations', async ({page}) => {
        await tuiGoto(page, DemoRoute.Scrollbar);
        await page.waitForLoadState('networkidle');

        const client = await page.context().newCDPSession(page);
        const events: TraceEvent[] = [];

        client.on('Tracing.dataCollected', (data: any) => {
            if (data?.value && Array.isArray(data.value)) {
                events.push(...(data.value as TraceEvent[]));
            }
        });

        await client.send('Tracing.start', {
            traceConfig: {
                includedCategories: ['devtools.timeline', 'blink', 'blink_style'],
                excludedCategories: ['disabled-by-default*'],
            },
        });

        // Also enable Performance domain to get aggregated metrics
        await client.send('Performance.enable');

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#vertical');

        // Simple interaction to generate Layout/RecalculateStyles
        // Scroll dedicated example's scrollbar to generate activity deterministically
        await expect(example).toBeAttached();

        const scrollbar = example.locator('tui-scrollbar').first();

        await example.scrollIntoViewIfNeeded();
        await scrollbar.waitFor({state: 'visible'});

        for (let i = 0; i < 10; i++) {
            await scrollbar.evaluate((el, dy) => {
                el.scrollTop += dy;
            }, 80);
            await page.waitForTimeout(10);
        }

        await new Promise<void>((resolve) => {
            client.once('Tracing.tracingComplete', () => resolve());
            client.send('Tracing.end');
        });

        // Retrieve and print all available Performance.getMetrics values
        const perf = (await client.send('Performance.getMetrics')) as {
            metrics: Array<{name: string; value: number}>;
        };
        const allMetricsObject = Object.fromEntries(
            perf.metrics.map((m) => [m.name, m.value]),
        );

        console.info('[CDP] Performance.getMetrics:', allMetricsObject);

        await client.detach();

        const {layoutCount, recalcCount, layoutMs, recalcMs} =
            aggregateTimelineMetrics(events);

        console.info('[CDP] Layout: %d ops, %.2f ms', layoutCount, layoutMs);
        console.info('[CDP] RecalculateStyles: %d ops, %.2f ms', recalcCount, recalcMs);

        expect(layoutCount).toBeGreaterThanOrEqual(0);
        expect(recalcCount).toBeGreaterThanOrEqual(0);
    });
});
