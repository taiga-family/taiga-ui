import {Page} from '@playwright/test';

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

        const dateNowOffset = fakeNow - Date.now();
        const dateNow = Date.now;

        Date.now = () => dateNow() + dateNowOffset;
    }, date.valueOf());
}
