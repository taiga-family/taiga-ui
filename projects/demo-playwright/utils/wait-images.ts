import {type Locator, type Page} from '@playwright/test';

interface Options {
    page: Page;
    images?: Locator[];
    cache?: Set<string>;
    timeout?: number;
}

/**
 * Waits until plain `<img>` elements are decoded and ready to paint:
 * `waitIcons` only covers CSS-mask icons and never sees them.
 */
export async function waitImages({
    page,
    images = [page.locator('img')],
    cache = new Set(),
    timeout = 5_000,
}: Options): Promise<void> {
    const found = await Promise.all(
        images.map(async (image) => image.evaluateAll(getUrls)),
    );

    const urls = [...new Set(found.flat())].filter((url) => !cache.has(url));

    if (!urls.length) {
        return;
    }

    const decoded = await page.evaluate(
        async ({urls, timeout}) => {
            const done: string[] = [];

            await Promise.race([
                Promise.all(
                    urls.map(async (src) => {
                        const image = new Image();

                        image.src = src;

                        return image.decode().then(
                            () => done.push(src),
                            () => {},
                        );
                    }),
                ),
                new Promise((resolve) => setTimeout(resolve, timeout)),
            ]);

            return done;
        },
        {urls, timeout},
    );

    decoded.forEach((url) => cache.add(url));
}

function getUrls(elements: Element[]): string[] {
    return elements.flatMap((element) => {
        if (!(element instanceof HTMLImageElement)) {
            return [];
        }

        if (element.complete && element.naturalWidth > 0) {
            return [];
        }

        const src = element.currentSrc || element.src;

        return src ? [src] : [];
    });
}
