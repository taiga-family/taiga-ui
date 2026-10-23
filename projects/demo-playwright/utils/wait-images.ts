import {type Locator, type Page} from '@playwright/test';

interface Options {
    page: Page;
    images?: Locator[];
    timeout?: number;
}

/**
 * Waits until plain `<img>` elements are decoded and ready to paint:
 * `waitIcons` only covers CSS-mask icons and never sees them.
 */
export async function waitImages({
    page,
    images = [page.locator('img')],
    timeout = 5_000,
}: Options): Promise<void> {
    await Promise.all(images.map(async (image) => image.evaluateAll(decode, timeout)));
}

/**
 * Decodes the elements on the page rather than a detached `new Image()`: before it loads, an
 * `<img>` inside `<picture>` has no `currentSrc`, so its `src` fallback was decoded instead of
 * the `<source>` it shows. An image that is already painted is skipped, so no URL cache is kept,
 * and an off-screen lazy one never loads, so waiting for it would only run out the clock.
 * A broken or stalled image gives up after `timeout` instead of failing the screenshot.
 */
async function decode(elements: Element[], timeout: number): Promise<void> {
    const pending = elements.filter((element): element is HTMLImageElement => {
        if (
            !(element instanceof HTMLImageElement) ||
            (element.complete && element.naturalWidth > 0)
        ) {
            return false;
        }

        const {top, right, bottom, left} = element.getBoundingClientRect();

        return (
            element.loading !== 'lazy' ||
            (bottom >= 0 && right >= 0 && top <= innerHeight && left <= innerWidth)
        );
    });

    if (!pending.length) {
        return;
    }

    await Promise.race([
        Promise.all(pending.map(async (image) => image.decode().catch(() => {}))),
        new Promise((resolve) => setTimeout(resolve, timeout)),
    ]);
}
