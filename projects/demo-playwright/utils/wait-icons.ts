import type {Locator, Page} from '@playwright/test';

interface Options {
    page: Page;
    icons: Locator[];
    cache?: Set<string>;
}

export async function waitIcons(options: Options): Promise<void> {
    const {page, icons, cache = new Set()} = options;

    // eslint-disable-next-line @taiga-ui/experience/no-simple-for-of
    for (const icon of icons) {
        const url = await icon.evaluate((element: HTMLElement) => {
            const location = window.location;
            const baseUrl = `${location.protocol}//${location.host}/`;

            return window
                .decodeURI(
                    baseUrl +
                        (window
                            .getComputedStyle(element)
                            .getPropertyValue('--t-icon')
                            ?.replace(/url\(|\)/g, '') ?? ''),
                )
                .replaceAll('\\', '');
        });

        if (url.endsWith('.svg') && !cache.has(url)) {
            try {
                const response = await page.waitForResponse(url, {timeout: 500});

                await response.finished();
            } catch {
                // can be loaded before
            } finally {
                cache.add(url);
            }
        }
    }
}
