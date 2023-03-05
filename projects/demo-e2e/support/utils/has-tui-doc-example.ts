import {Page} from '@playwright/test';
import {Locator} from 'playwright';

export async function tuiPlaywrightGetTuiDocExample(page: Page): Promise<Locator[]> {
    try {
        await page.waitForSelector(`tui-doc-example`, {timeout: 5_000});

        const elements = await page.locator(`tui-doc-example`).all();

        return elements;
    } catch {
        return [];
    }
}
