import type {Locator} from '@playwright/test';

export async function waitStableState(locator: Locator): Promise<void> {
    try {
        const handle = await locator.elementHandle();

        // https://playwright.dev/docs/actionability#stable
        // element is Stable, as in not animating or completed animation
        // Element is considered stable when it has maintained
        // the same bounding box for at least two consecutive animation frames.
        await handle?.waitForElementState('stable');

        // https://playwright.dev/docs/actionability#visible
        // Element is considered visible when it has non-empty bounding box
        await handle?.waitForElementState('visible');
    } catch {}
}
