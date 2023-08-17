import {expect, Page} from '@playwright/test';

export async function tuiWaitForFonts(page: Page): Promise<void> {
    await expect(async () => {
        expect(await page.evaluate(() => (document as any).fonts.ready)).toBeTruthy();
        expect(await page.evaluate(() => (document as any).fonts.status)).toBe(`loaded`);
        expect(await page.evaluate(() => (document as any).fonts.size)).toBeGreaterThan(
            0,
        );
    }).toPass();
}
