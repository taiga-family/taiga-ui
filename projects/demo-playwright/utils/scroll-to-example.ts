import type {Locator, Page} from '@playwright/test';

export async function scrollToExample(page: Page, example: Locator): Promise<void> {
    await page.evaluate(
        (view) => window.scrollTo({top: view?.y, behavior: 'auto'}),
        await example.boundingBox(),
    );

    await page.waitForTimeout(500); // flaky
}
