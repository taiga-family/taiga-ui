import {existsSync} from 'node:fs';

import {expect, type Page} from '@playwright/test';

import {tuiRemoveElement} from './hide-element';
import {tuiMockDate} from './mock-date';
import {tuiWaitForFonts} from './wait-for-fonts';
import {waitIcons} from './wait-icons';
import {waitStableState} from './wait-stable-state';

interface TuiGotoOptions extends NonNullable<Parameters<Page['goto']>[1]> {
    date?: Date | null;
    language?: string;
    hideHeader?: boolean;
    enableNightMode?: boolean;
    hideVersionManager?: boolean;
    hideText?: boolean;
}

export async function tuiGoto(
    page: Page,
    url: string,
    {
        date = new Date(2020, 8, 25, 19, 19),
        hideHeader = true,
        enableNightMode = false,
        hideVersionManager = false,
        hideText = !!process.env.PW_HIDE_TEXT,
        language,
        ...playwrightGotoOptions
    }: TuiGotoOptions = {},
): ReturnType<Page['goto']> {
    await page.addInitScript(() => {
        globalThis.Math.random = () => 0.42;
    });
    await page.addInitScript(() =>
        globalThis.sessionStorage.setItem('playwright', 'true'),
    );

    if (enableNightMode) {
        await page.addInitScript(() =>
            globalThis.localStorage.setItem('tuiDark', 'true'),
        );
    }

    if (language) {
        await page.addInitScript(
            (lang) => globalThis.localStorage.setItem('tuiLanguage', lang),
            language,
        );
    }

    if (date) {
        await tuiMockDate(page, date);
    }

    await page.route(
        /fonts\.googleapis\.com|cdn\..*\/design-tokens\/.*\/fonts\.css/,
        async (route) =>
            route.fulfill({
                path: `${__dirname}/../stubs/fonts.css`,
                contentType: 'text/css',
            }),
    );

    await page.route(/\.(woff2?|ttf)$/, async (route) => {
        const filename = new URL(route.request().url()).pathname.split('/').pop() ?? '';
        const filePath = `${__dirname}/../stubs/${filename}`;

        return existsSync(filePath) ? route.fulfill({path: filePath}) : route.continue();
    });

    await page.route('blank.ttf', async (route) =>
        route.fulfill({path: `${__dirname}/../stubs/blank.ttf`}),
    );

    await page.route('https://www.youtube.com/**', async (route) =>
        route.fulfill({path: `${__dirname}/../stubs/web-api.svg`}),
    );

    const response = await page.goto(url, playwrightGotoOptions);
    const app = page.locator('app');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    await expect(app).toBeAttached();

    await waitIcons({
        page,
        timeout: 200,
        icons: await page.locator('tui-icon').all(),
    });

    await tuiWaitForFonts(page);
    await waitStableState(app);

    if (hideHeader) {
        await tuiRemoveElement(page.locator('[tuiDocHeader]'));
    }

    if (hideVersionManager) {
        await tuiRemoveElement(page.locator('version-manager'));
    }

    expect(
        await page.evaluate("matchMedia('(prefers-reduced-motion)').matches"),
    ).toBeTruthy();

    if (hideText) {
        await page.addStyleTag({
            content: `
            @font-face {
              font-family: 'IgnoreTextFont';
              src: url('blank.ttf') format('truetype');
            }

            * {
              font-family: 'IgnoreTextFont', sans-serif !important;
            }
        `,
        });
    }

    return response;
}
