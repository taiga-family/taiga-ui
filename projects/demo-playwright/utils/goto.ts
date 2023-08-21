import {expect, Page} from '@playwright/test';

import {tuiMockDate} from './mock-date';
import {tuiWaitForFonts} from './wait-for-fonts';

interface TuiGotoOptions extends NonNullable<Parameters<Page['goto']>[1]> {
    date?: Date;
}

export async function tuiGoto(
    page: Page,
    url: string,
    {date = new Date(2020, 8, 25, 19, 19), ...playwrightGotoOptions}: TuiGotoOptions = {},
): ReturnType<Page['goto']> {
    await page.addInitScript(() => {
        globalThis.Math.random = () => 0.42;
    });
    await page.addInitScript(() =>
        globalThis.sessionStorage.setItem(`playwright`, `true`),
    );
    await tuiMockDate(page, date);

    const response = await page.goto(url, playwrightGotoOptions);

    await expect(page.locator(`app`)).toHaveClass(/_loaded/);
    await tuiWaitForFonts(page);

    return response;
}
