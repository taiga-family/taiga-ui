import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Textarea', () => {
    test.use({viewport: {width: 400, height: 500}});

    test('does not show a horizontal scrollbar for wrapped text outside a dialog', async ({
        page,
    }) => {
        await tuiGoto(page, `${DemoRoute.Textarea}/API`);

        test.skip(
            !(await page.evaluate(() => CSS.supports('animation-timeline', '--name'))),
            'Requires CSS scroll timelines',
        );

        const {demo} = new TuiDocumentationPagePO(page);
        const textarea = demo.locator('textarea[tuiTextarea]');
        const horizontal = demo.locator('.t-bar_horizontal .t-thumb');

        await expect(horizontal).toHaveCSS('opacity', '0');
        await textarea.fill('A line of wrapped text\n'.repeat(20));
        await expect
            .poll(async () =>
                textarea.evaluate(
                    (element) => element.scrollHeight > element.clientHeight,
                ),
            )
            .toBe(true);
        await expect(horizontal).toHaveCSS('opacity', '0');
    });

    test('only shows a scrollbar in a dialog when the textarea overflows', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.Textarea);
        await new TuiDocumentationPagePO(page)
            .getExample('#dialog')
            .getByRole('button', {name: 'Show dialog'})
            .click();

        const dialog = page.locator('tui-dialog');
        const textarea = dialog.locator('textarea[tuiTextarea]');
        const controls = dialog.locator('tui-textarea-content tui-scroll-controls');
        const vertical = controls.locator('.t-bar_vertical .t-thumb');
        const horizontal = controls.locator('.t-bar_horizontal .t-thumb');
        const opacity = async (locator: typeof vertical): Promise<number> =>
            locator.evaluateAll((elements) =>
                Math.max(
                    0,
                    ...elements.map((element) =>
                        Number(getComputedStyle(element).opacity),
                    ),
                ),
            );

        await expect(textarea).toBeVisible();

        expect(
            await controls.evaluate((element) => element.classList.contains('_timeline')),
        ).toBe(await page.evaluate(() => CSS.supports('animation-timeline', '--name')));

        await expect.poll(async () => opacity(vertical)).toBe(0);
        await expect.poll(async () => opacity(horizontal)).toBe(0);

        await textarea.fill('A line of text');

        await expect.poll(async () => opacity(vertical)).toBe(0);
        await expect.poll(async () => opacity(horizontal)).toBe(0);

        await textarea.fill('A line of text\n'.repeat(20));

        await expect.poll(async () => opacity(vertical)).toBeGreaterThan(0);
        await expect.poll(async () => opacity(horizontal)).toBe(0);
        await textarea.evaluate((element) => element.scrollTo({top: 0}));
        await expect
            .poll(async () =>
                vertical.evaluate((element) => (element as HTMLElement).offsetTop),
            )
            .toBe(0);

        await textarea.evaluate((element) =>
            element.scrollTo({top: element.scrollHeight}),
        );
        await expect
            .poll(async () => textarea.evaluate((element) => element.scrollTop))
            .toBeGreaterThan(0);

        await expect
            .poll(async () =>
                vertical.evaluate((element) => (element as HTMLElement).offsetTop),
            )
            .toBeGreaterThan(0);

        await textarea.evaluate((element) => element.scrollTo({top: 0}));
        await expect
            .poll(async () =>
                vertical.evaluate((element) => (element as HTMLElement).offsetTop),
            )
            .toBe(0);
        await dialog.evaluate((element) => {
            const filler = document.createElement('div');

            filler.style.blockSize = '1000px';
            element.append(filler);
        });

        const dialogScroll = dialog.locator('..');

        await dialogScroll.evaluate((element) =>
            element.scrollTo({top: element.scrollHeight, behavior: 'instant'}),
        );
        await expect
            .poll(async () => dialogScroll.evaluate((element) => element.scrollTop))
            .toBeGreaterThan(0);
        await expect
            .poll(async () =>
                vertical.evaluate((element) => (element as HTMLElement).offsetTop),
            )
            .toBe(0);

        await textarea.clear();

        await expect.poll(async () => opacity(vertical)).toBe(0);
        await expect.poll(async () => opacity(horizontal)).toBe(0);
    });

    test('line break text', async ({page, browserName}) => {
        test.skip(browserName !== 'chromium', 'Font flaky');

        await tuiGoto(page, `${DemoRoute.Textarea}/API`);
        const {demo} = new TuiDocumentationPagePO(page);
        const textarea = demo.locator('textarea[tuiTextarea]');

        await textarea.fill('1\n2\n3\n4');

        await expect.soft(textarea).toHaveScreenshot('textarea-line-break.png');

        await page.getByRole('row', {name: 'disabled'}).locator('input').click();

        await expect.soft(textarea).toHaveScreenshot('textarea-line-break-disabled.png');
    });

    test('does not have excessive end padding without content', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Textarea}/API`);
        const {demo} = new TuiDocumentationPagePO(page);
        const textarea = demo.locator('textarea[tuiTextarea]');
        const label = demo.locator('label[tuiLabel]');
        const padding = await textarea.evaluate((element) => {
            const {paddingInlineEnd, paddingInlineStart} = getComputedStyle(element);

            return {
                end: Number.parseFloat(paddingInlineEnd),
                start: Number.parseFloat(paddingInlineStart),
            };
        });

        await expect(label).toBeVisible();
        expect(Math.abs(padding.end - padding.start)).toBeLessThanOrEqual(2);
    });

    test('required textarea is not invalid before touched', async ({page}) => {
        await tuiGoto(page, DemoRoute.Textarea);
        const example = new TuiDocumentationPagePO(page).getExample('#icons');
        const textarea = example.locator('[tuiTextarea]');

        await expect.soft(example).toHaveScreenshot('required-textarea-untouched.png');
        await textarea.click({button: 'middle'});
        await textarea.fill('123');
        await textarea.clear();
        await textarea.blur();
        await expect.soft(example).toHaveScreenshot('required-textarea-touched.png');
    });

    ['m', 'l'].forEach((size) => {
        test(`size of ${size}`, async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Textarea}/API?tuiTextfieldSize=${size}`);
            const {demo} = new TuiDocumentationPagePO(page);

            await expect
                .soft(demo)
                .toHaveScreenshot(`textarea-tuiTextfieldSize-${size}.png`);
        });
    });

    ['m', 'l'].forEach((size) => {
        test(`stays intact with a global border-box reset (size ${size})`, async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.Textarea}/API?tuiTextfieldSize=${size}`);

            await page.addStyleTag({content: '* { box-sizing: border-box; }'});

            const {demo} = new TuiDocumentationPagePO(page);
            const textarea = demo.locator('textarea[tuiTextarea]');

            await textarea.fill('1\n2\n3\n4');

            await expect.soft(demo).toHaveScreenshot(`textarea-border-box-${size}.png`);
        });
    });

    test('overscroll-behavior', async ({page}) => {
        await tuiGoto(page, DemoRoute.Textarea);

        const basicTextarea = new TuiDocumentationPagePO(page)
            .getExample('#basic')
            .locator('textarea[tuiTextarea]')
            .first();

        const limitTextarea = new TuiDocumentationPagePO(page)
            .getExample('#limit')
            .locator('textarea[tuiTextarea]');

        await expect(basicTextarea).not.toHaveCSS('overscroll-behavior', 'none');
        await expect(limitTextarea).toHaveCSS('overscroll-behavior', 'none');
    });

    test('minRows and maxRows set the textarea height limits', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Textarea}/API?minRows=2&maxRows=4`);
        const {demo} = new TuiDocumentationPagePO(page);
        const content = demo.locator('tui-textarea-content');

        expect(
            await content.evaluate((element) => [
                element.style.minHeight,
                element.style.maxHeight,
            ]),
        ).toEqual(['2.5em', '5em']);
        await expect.soft(demo).toHaveScreenshot('textarea-min-max-rows.png');
    });

    test('legacy min and max still set the textarea height limits', async ({page}) => {
        await tuiGoto(page, DemoRoute.Textarea);
        const example = new TuiDocumentationPagePO(page).getExample('#icons');
        const content = example.locator('tui-textarea-content');

        expect(
            await content.evaluate((element) => [
                element.style.minHeight,
                element.style.maxHeight,
            ]),
        ).toEqual(['5em', '5em']);
        await expect.soft(example).toHaveScreenshot('textarea-legacy-min-max-rows.png');
    });
});
