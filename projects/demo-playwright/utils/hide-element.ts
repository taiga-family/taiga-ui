import {type Locator} from '@playwright/test';

export async function tuiHideElement(element: Locator): Promise<void> {
    // Do nothing if element is not present to avoid timeouts
    const handle = await element.elementHandle({timeout: 0}).catch(() => null);

    if (!handle) {
        return;
    }

    await element.evaluate((el) => {
        (el as HTMLElement).style.opacity = '0';
    });
}

export async function tuiRemoveElement(element: Locator): Promise<void> {
    // Do nothing if element is not present to avoid timeouts
    const handle = await element.elementHandle({timeout: 0}).catch(() => null);

    if (!handle) {
        return;
    }

    await element.evaluate((el) => el.remove());
}
