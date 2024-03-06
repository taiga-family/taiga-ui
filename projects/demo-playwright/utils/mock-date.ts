import type {Page} from '@playwright/test';

export async function tuiMockDate(page: Page, date: Date): Promise<void> {
    await page.addInitScript(fakeNow => {
        // @ts-ignore
        globalThis.Date = class extends Date {
            constructor(...args: any[]) {
                if (args.length === 0) {
                    super(fakeNow);
                } else {
                    // @ts-ignore
                    super(...args);
                }
            }
        };

        Date.now = () => fakeNow;
    }, date.valueOf());
}
