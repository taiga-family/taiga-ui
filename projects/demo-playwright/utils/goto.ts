import {existsSync, readFileSync} from 'node:fs';

import {expect, type Page} from '@playwright/test';

import {tuiRemoveElement} from './hide-element';
import {tuiMockDate} from './mock-date';
import {tuiWaitForFonts} from './wait-for-fonts';
import {waitIcons} from './wait-icons';
import {waitStableState} from './wait-stable-state';

interface FontStub {
    filename: string;
    contentType: string;
}

const FONT_MANIFEST = `${__dirname}/../stubs/fonts.json`;
let fontStubs: Record<string, FontStub> | null = null;

function getFontStub(url: string): FontStub | undefined {
    fontStubs ??= existsSync(FONT_MANIFEST)
        ? (JSON.parse(readFileSync(FONT_MANIFEST, 'utf8')) as Record<string, FontStub>)
        : {};

    return fontStubs[url];
}

interface TuiGotoOptions extends NonNullable<Parameters<Page['goto']>[1]> {
    date?: Date | null;
    language?: string;
    hideHeader?: boolean;
    enableNightMode?: boolean;
    hideVersionManager?: boolean;
    hideText?: boolean;
    /**
     * Pass `false` to emulate browsers without CSS anchor positioning
     * and cover the legacy JS positioning path
     */
    anchorPositioning?: boolean;
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
        anchorPositioning = true,
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

    if (!anchorPositioning) {
        await page.addInitScript(() => {
            const supports = globalThis.CSS.supports.bind(globalThis.CSS);

            globalThis.CSS.supports = (property: string, value?: string): boolean => {
                if (property.includes('anchor')) {
                    return false;
                }

                return value === undefined
                    ? supports(property)
                    : supports(property, value);
            };
        });
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

    await page.route(/fonts\.gstatic\.com|\.(woff2?|ttf)$/, async (route) => {
        const url = route.request().url();
        const stub = getFontStub(url);

        if (stub) {
            return route.fulfill({
                path: `${__dirname}/../stubs/${stub.filename}`,
                contentType: stub.contentType,
            });
        }

        const filename = new URL(url).pathname.split('/').pop() ?? '';
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

    if (!anchorPositioning) {
        /**
         * The CSS.supports override above only affects JavaScript calls.
         * CSS @supports rules are evaluated by the browser's CSS engine at parse time.
         * This stylesheet neutralizes anchor-positioning CSS properties with !important
         * to ensure the legacy JS positioning path is genuinely tested.
         */
        await page.addStyleTag({
            content: `
            *, *::before, *::after {
              anchor-name: none !important;
              position-anchor: none !important;
              position-visibility: always !important;
              position-try-fallbacks: none !important;
            }

            /* Reset @supports (anchor-name: ...) block overrides for scrollbar */
            .t-scrollbar, tui-scroll-controls {
              position: sticky !important;
              inset: 0 !important;
            }
        `,
        });
    }

    return response;
}
