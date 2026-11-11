import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {devices, expect, test} from '@playwright/test';

test.describe('MobileCalendar', () => {
    test.use({viewport: {width: 400, height: 812}});

    test('works', async ({page}) => {
        await tuiGoto(page, DemoRoute.MobileCalendar);
        const example = new TuiDocumentationPagePO(page).getExample('#custom-dropdown');

        await example.locator('button:has-text("Choose a date")').click();

        await page.waitForTimeout(100);

        await expect.soft(page).toHaveScreenshot('01-mobile-calendar.png');
    });

    test('check disabled state', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.MobileCalendar}/API?max$=1`);
        const {demo} = new TuiDocumentationPagePO(page);

        await expect.soft(demo).toHaveScreenshot('02-mobile-calendar-disabled.png');
    });

    test('check enabled state', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.MobileCalendar}/API?max$=0`);
        const {demo} = new TuiDocumentationPagePO(page);

        await expect.soft(demo).toHaveScreenshot('03-mobile-calendar-enabled.png');
    });

    test.describe('iOS layout', () => {
        test.use({userAgent: devices['iPhone 15'].userAgent});

        test('snaps to the month heading when the week starts on Sunday', async ({
            page,
        }) => {
            await page.clock.install({time: new Date(2027, 7, 1)});
            await tuiGoto(page, DemoRoute.MobileCalendar, {
                date: null,
                language: 'english',
            });

            const example = new TuiDocumentationPagePO(page).getExample('#localization');
            const calendar = example.locator('tui-mobile-calendar._ios._initialized');
            const viewport = calendar.locator('.t-months');
            const monthOffset = async (month: string): Promise<number> =>
                viewport
                    .getByRole('heading', {name: month, exact: true})
                    .evaluate(
                        (el) =>
                            el.getBoundingClientRect().top -
                            el
                                .closest('cdk-virtual-scroll-viewport')!
                                .getBoundingClientRect().top,
                    );

            await expect(calendar.locator('.t-day').first()).toHaveText('Sun');
            await expect.poll(async () => monthOffset('August')).toBeCloseTo(10, 0);

            await viewport.evaluate((el) => {
                el.dispatchEvent(new Event('touchstart'));
                el.scrollTop += 200;
                el.dispatchEvent(new Event('touchend'));
            });

            await expect.poll(async () => monthOffset('September')).toBeCloseTo(10, 0);
        });
    });

    test('keeps months in sync with their scroll offset in zoneless mode', async ({
        page,
    }) => {
        await tuiGoto(page, `${DemoRoute.MobileCalendar}/API?max$=0`);
        const {demo} = new TuiDocumentationPagePO(page);
        const viewport = demo.locator('tui-mobile-calendar._initialized .t-months');

        await expect(viewport.locator('.t-cell_today')).toBeInViewport();

        const {emptyFrames, offsetChanges, staleMonths} = await viewport.evaluate(
            async (viewport) => {
                const content = viewport.querySelector<HTMLElement>(
                    '.cdk-virtual-scroll-content-wrapper',
                );

                if (!content) {
                    throw new Error('Missing calendar scroll content');
                }

                const getFirstMonth = (): string =>
                    content.querySelector('.t-month')?.textContent?.trim() ?? '';

                const staleMonths: string[] = [];
                let month = getFirstMonth();
                let offset = content.style.transform;
                let offsetChanges = 0;
                let emptyFrames = 0;

                const observer = new MutationObserver(() => {
                    const nextOffset = content.style.transform;
                    const nextMonth = getFirstMonth();

                    if (nextOffset !== offset) {
                        offsetChanges++;

                        if (nextMonth === month) {
                            staleMonths.push(nextMonth);
                        }
                    }

                    offset = nextOffset;
                    month = nextMonth;
                });

                observer.observe(content, {attributeFilter: ['style']});

                for (let frame = 0; frame < 35; frame++) {
                    await new Promise(requestAnimationFrame);

                    const {top, bottom} = viewport.getBoundingClientRect();
                    const hasVisibleMonth = Array.from(content.children).some((month) => {
                        const bounds = month.getBoundingClientRect();

                        return bounds.bottom > top && bounds.top < bottom;
                    });

                    emptyFrames += Number(!hasVisibleMonth);
                    viewport.scrollTop += 73;
                }

                observer.disconnect();

                return {emptyFrames, offsetChanges, staleMonths};
            },
        );

        expect(offsetChanges).toBeGreaterThan(0);
        expect(staleMonths).toEqual([]);
        expect(emptyFrames).toBe(0);
    });
});
