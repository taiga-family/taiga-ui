import {expect, type Page, type Response} from '@playwright/test';

import {tuiHideElement} from './hide-element';
import {tuiMockDate} from './mock-date';
import {tuiWaitForFonts} from './wait-for-fonts';
import {waitIcons} from './wait-icons';
import {waitStableState} from './wait-stable-state';

export const TUI_PLAYWRIGHT_DEMO_URL = '/';

interface TuiGotoOptions extends NonNullable<Parameters<Page['goto']>[1]> {
    date?: Date | null;
    language?: string;
    hideHeader?: boolean;
    enableNightMode?: boolean;
    hideVersionManager?: boolean;
    hideNavigation?: boolean;
    hideScroll?: boolean;
    hideLanguageSwitcher?: boolean;
    hideNightMode?: boolean;
    hidePages?: boolean;
    hideDemo?: boolean;
    waitStableStateOptions?: Parameters<typeof waitStableState>[1];
}

export async function tuiGoto(
    page: Page,
    url: string,
    {
        date = new Date(2020, 8, 25, 19, 19),
        hideHeader = true,
        hideNavigation = true,
        hideScroll = true,
        hideVersionManager = true,
        hideLanguageSwitcher = true,
        hideNightMode = true,
        enableNightMode = false,
        hidePages = true,
        hideDemo = true,
        waitStableStateOptions,
        language,
        ...playwrightGotoOptions
    }: TuiGotoOptions = {},
): Promise<Response | null> {
    const baseURL = `http://localhost:${process.env.NG_SERVER_PORT || 3333}`;
    const fullUrl = new URL(url, baseURL).toString();

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

    await page.route('https://fonts.gstatic.com/**', async (route) =>
        route.fulfill({path: `${__dirname}/../stubs/manrope-fonts.ttf`}),
    );
    await page.route('https://*.youtube.com/**', async (route) =>
        route.fulfill({path: `${__dirname}/../stubs/web-api.svg`}),
    );
    const response = await page.goto(fullUrl, playwrightGotoOptions);
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
    await waitStableState(app, waitStableStateOptions);

    if (hideHeader) {
        await tuiHideElement(page.locator('tui-doc-header'));
    }

    if (hideNavigation) {
        await tuiHideElement(page.locator('tui-doc-navigation'));
    }

    if (hideScroll) {
        await page.addStyleTag({content: 'body {overflow: hidden}'});
    }

    if (hideVersionManager) {
        await tuiHideElement(page.locator('version-manager'));
    }

    if (hideLanguageSwitcher) {
        await tuiHideElement(page.locator('tui-language-switcher'));
    }

    if (hideNightMode) {
        await tuiHideElement(page.locator('tui-night-mode'));
    }

    if (hidePages) {
        await tuiHideElement(page.locator('tui-doc-pages'));
    }

    if (hideDemo) {
        await tuiHideElement(page.locator('tui-doc-demo'));
    }

    expect(
        await page.evaluate("matchMedia('(prefers-reduced-motion)').matches"),
    ).toBeTruthy();

    return response;
}
