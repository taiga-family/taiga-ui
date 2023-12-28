import {Locator, Page, test} from '@playwright/test';

export class TuiDocumentationApiPagePO {
    readonly apiPageExample: Locator = this.page.locator('#demo-content');

    constructor(private readonly page: Page) {}

    setTimeout(n: number): void {
        test.setTimeout(30_000 * n);
    }

    async hideNotifications(): Promise<void> {
        const notifications = await this.page
            .locator('tui-alert-host tui-notification')
            .all();

        for (const notification of notifications) {
            await notification.evaluate(el => el.remove());
        }
    }

    async getDefaultSelectedOptionIndex(options: Locator[]): Promise<number> {
        for (const [index, option] of options.entries()) {
            const hasMark = await option
                .locator('[automation-id=tui-select-option__checkmark]')
                .all();

            if (hasMark.length) {
                return index;
            }
        }

        return 0;
    }

    async getRows(): Promise<Locator[]> {
        return this.page.locator('.t-table .t-row:not(.t-row_header)').all();
    }

    async getSelect(row: Locator): Promise<Locator | null> {
        return ((await row.locator('.t-cell_value tui-select').all()) ?? [])?.[0] ?? null;
    }

    async getNameProperty(row: Locator): Promise<string> {
        return (await row.locator('.t-property code').textContent())?.trim() ?? '';
    }

    async getOptions(): Promise<Locator[]> {
        return this.page.locator('[automation-id="tui-data-list-wrapper__option"]').all();
    }

    async focusOnBody(): Promise<void> {
        await this.page.locator('body').click({position: {x: 0, y: 0}});
    }

    async getCleaner(select: Locator): Promise<Locator | null> {
        return (
            ((await select
                .locator('[automation-id="tui-primitive-textfield__cleaner"]')
                .all()) ?? [])?.[0] ?? null
        );
    }

    async getToggle(row: Locator): Promise<Locator | null> {
        return ((await row.locator('.t-cell_value tui-toggle').all()) ?? [])?.[0] ?? null;
    }
}
