import {resolve} from 'path';
import {Page} from 'playwright-core';

interface TuiPlaywrightVisitOptions {
    rootSelector?: string;
    hideCursor?: boolean;
    hideScrollbar?: boolean;
    stopAnimation?: boolean;
    noSmoothScroll?: boolean;
    clock?: string | null;
}

export async function tuiPlaywrightVisit(
    page: Page,
    url: string,
    options: TuiPlaywrightVisitOptions = {
        hideCursor: true,
        hideScrollbar: true,
        noSmoothScroll: true,
        stopAnimation: true,
        clock: `2018/10/01`,
        rootSelector: `app`,
    },
): Promise<void> {
    await mockWindowObject(page);
    await mockDateClass(page, options.clock);
    await mockImages(page);

    await page.goto(url, {
        timeout: 120_000,
        waitUntil: `load`,
    });

    await page.waitForFunction(() => (document as any)?.fonts.ready);
    await page.waitForFunction(() => (document as any).fonts.size > 0);
    await page.waitForFunction(() => (document as any).fonts.check(`1em Manrope`));

    await page.waitForFunction((options: TuiPlaywrightVisitOptions) => {
        const app = document.querySelector(options.rootSelector ?? `app`);

        return (
            app?.classList.contains(`_loaded`) &&
            app?.classList.contains(`_is-cypress-mode`)
        );
    }, options);

    await page.waitForFunction(() =>
        document.querySelector(`.t-root-content`)?.hasChildNodes(),
    );

    await page.evaluate((options: TuiPlaywrightVisitOptions) => {
        document
            .querySelector(`${options.rootSelector}._loaded`)
            ?.classList.add(
                options.hideScrollbar ? `_hide-scrollbar` : ``,
                options.hideCursor ? `_hide-cursor` : ``,
                options.noSmoothScroll ? `_no-smooth-scroll` : ``,
                options.stopAnimation ? `_stop-animation` : ``,
            );
    }, options);

    await waitAllIframes(page);
}

async function mockWindowObject(page: Page): Promise<void> {
    await page.addInitScript(() => {
        // @note: need for `TUI_IS_CYPRESS` token
        (window as any).Cypress = {};
    });
}

/**
 *
 * Solution:
 * https://github.com/microsoft/playwright/issues/6347#issuecomment-1085850728
 */
async function mockDateClass(page: Page, value?: string | null): Promise<void> {
    if (!value) {
        return;
    }

    const date = new Date(value).valueOf();

    await page.addInitScript(`{
      // Extend Date constructor to default to fakeNow
      Date = class extends Date {
        constructor(...args) {
          if (args.length === 0) {
            super(${date.valueOf()});
          } else {
            super(...args);
          }
        }
      }
      // Override Date.now() to start from fakeNow
      const __DateNowOffset =${date.valueOf()} - Date.now();
      const __DateNow = Date.now;
      Date.now = () => __DateNow() + __DateNowOffset;
    }`);
}

async function waitAllIframes(page: Page): Promise<void> {
    const allFrames = page.frames();

    for (const frame of allFrames) {
        if (frame.url() === page.url()) {
            continue;
        }

        try {
            await frame.waitForURL(frame.url(), {waitUntil: `load`});
            await frame.content();
            await page.waitForTimeout(10_000);
        } catch (error) {
            console.error(error);
        }
    }
}

async function mockImages(page: Page): Promise<void> {
    const icons = [
        `web-api.svg`,
        `avatars.githubusercontent.com`,
        `raw.githubusercontent.com`,
        `.*ng-polymorpheus.*logo.svg`,
        `bf2e94ae58ee713717faf397958a8e3d.jpg`, // filename - MD5 hash value of file content (waterplea avatar)
        `avatar.jpg`,
    ];

    for (const name of icons) {
        await page.route(new RegExp(`.*${name}`), async route =>
            route.fulfill({
                path: resolve(`./projects/demo-e2e/support`, `stubs/web-api.svg`),
            }),
        );
    }
}
