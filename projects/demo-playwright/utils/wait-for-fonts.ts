import type {Page} from '@playwright/test';
import {expect} from '@playwright/test';

export async function tuiWaitForFonts(page: Page): Promise<void> {
    await expect(async () => {
        expect(await page.evaluate(() => (document as any).fonts.size)).toBeGreaterThan(
            0,
        );
        expect(await page.evaluate(() => (document as any).fonts.ready)).toBeTruthy();
        expect(await page.evaluate(() => (document as any).fonts.status)).toBe('loaded');
    }).toPass({timeout: 30_000});
}
