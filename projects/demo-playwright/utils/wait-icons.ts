import {type Locator, type Page} from '@playwright/test';

interface Options {
    page: Page;
    icons?: Locator[];
    cache?: Set<string>;
    timeout?: number;
}

const ICONS = 'tui-icon, [tuiIcons]';

export async function waitIcons({
    page,
    icons = [page.locator(ICONS)],
    cache = new Set(),
    timeout = 5_000,
}: Options): Promise<void> {
    const found = await Promise.all(icons.map(async (icon) => icon.evaluateAll(getUrls)));
    const urls = [...new Set(found.flat())].filter((url) => !cache.has(url));

    if (!urls.length) {
        return;
    }

    await page.evaluate(
        async ({urls, timeout}) =>
            Promise.race([
                Promise.all(
                    urls.map(async (src) => {
                        const image = new Image();

                        image.src = src;

                        return image.decode().catch(() => {});
                    }),
                ),
                new Promise((resolve) => setTimeout(resolve, timeout)),
            ]),
        {urls, timeout},
    );

    urls.forEach((url) => cache.add(url));
}

function getUrls(elements: Element[]): string[] {
    return elements.flatMap((element) => {
        const style = getComputedStyle(element);
        const values = [
            style.getPropertyValue('--t-icon-start'),
            style.getPropertyValue('--t-icon-end'),
            style.getPropertyValue('--t-icon-bg'),
            getComputedStyle(element, '::before').maskImage,
            getComputedStyle(element, '::after').maskImage,
        ];

        return values.flatMap((value) =>
            Array.from(
                value.matchAll(/url\(["']?([^"')]+)["']?\)/g),
                ([, url = '']) => new URL(url, document.baseURI).href,
            ),
        );
    });
}
