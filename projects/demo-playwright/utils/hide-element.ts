import {type Locator} from '@playwright/test';

export async function tuiHideElement(element: Locator): Promise<void> {
    return element.evaluate((el) => {
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
        el.style.height = '0';
    });
}

export async function tuiRemoveElement(element: Locator): Promise<void> {
    return element.evaluate((el) => el.remove());
}
