import type {Page} from '@playwright/test';

type DateConstructor =
    | [
          year: number,
          monthIndex: number,
          date?: number,
          hours?: number,
          minutes?: number,
          seconds?: number,
          ms?: number,
      ]
    | [];

export async function tuiMockDate(page: Page, date: Date): Promise<void> {
    await page.addInitScript((fakeNow) => {
        Object.defineProperty(globalThis, 'Date', {
            writable: true,
            value: class extends Date {
                constructor(...args: DateConstructor) {
                    if (args.length === 0) {
                        super(fakeNow);
                    } else {
                        super(...args);
                    }
                }
            },
        });

        Date.now = () => fakeNow;
    }, date.valueOf());
}
