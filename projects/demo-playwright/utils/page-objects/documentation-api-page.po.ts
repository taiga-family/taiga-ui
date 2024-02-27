import {expect, Locator, Page, Request} from '@playwright/test';

import {tuiHideElement} from '../hide-element';

export class TuiDocumentationApiPagePO {
    private readonly pending = new Set<Request>();

    protected readonly apiPageExample: Locator = this.page.locator('#demo-content');

    constructor(protected readonly page: Page) {
        page.on('request', request => this.pending.add(request));
        page.on('requestfailed', request =>
            setTimeout(() => this.pending.delete(request)),
        );
        page.on('requestfinished', request =>
            setTimeout(() => this.pending.delete(request)),
        );
    }

    /**
     * await page.waitForLoadState('networkidle');
     * Doesn't work as expected
     */
    protected async networkidle(): Promise<void> {
        await this.page.waitForTimeout(100);

        await Promise.all(
            [...this.pending].map(
                async req =>
                    new Promise(resolve => {
                        req.response()
                            .then(response => resolve(response?.finished()))
                            .catch(() => resolve(undefined));
                    }),
            ),
        );

        await this.page.waitForTimeout(200);
    }

    protected async hideNotifications(): Promise<void> {
        const notifications = await this.page.locator('tui-alerts tui-alert').all();

        for (const notification of notifications) {
            await tuiHideElement(notification);
        }
    }

    protected async hideContent(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-page'));
    }

    protected async hideDocumentation(): Promise<void> {
        const documentations = await this.page.locator('tui-doc-documentation').all();

        for (const documentation of documentations) {
            await tuiHideElement(documentation);
        }
    }

    protected async hideNavigation(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-navigation'));
    }

    protected async hideScrollControls(): Promise<void> {
        for (const element of await this.page.locator('tui-scroll-controls').all()) {
            await tuiHideElement(element);
        }
    }

    protected async prepareBeforeScreenshot(hasNot = ''): Promise<void> {
        await this.hideDocumentation();
        await this.hideScrollControls();
        await this.hideNavigation();
        await this.hideNotifications();

        const wrapper = this.page.locator('tui-doc-page');
        const hideElements = [
            ...(await wrapper
                .locator(`header:not(.t-content > *:not(tui-doc-demo)${hasNot} header)`)
                .all()),
            ...(await wrapper
                .locator(`> .t-content > *:not(tui-doc-demo)${hasNot}`)
                .all()),
            ...(await wrapper.locator('.t-bg-toggle').all()),
        ];

        for (const element of hideElements) {
            await tuiHideElement(element);
        }

        if ((await this.apiPageExample.all()).length) {
            await this.apiPageExample.evaluate(el => el.scrollIntoView());
            await expect(async () => {
                expect(
                    await this.apiPageExample.boundingBox().then(box => box?.y),
                ).toBeGreaterThanOrEqual(64);
            }).toPass();
        }
    }

    protected async getRows(): Promise<Locator[]> {
        return this.page.locator('.t-table .t-row:not(.t-row_header)').all();
    }

    protected async getSelect(row: Locator): Promise<Locator | null> {
        return ((await row.locator('.t-cell_value tui-select').all()) ?? [])?.[0] ?? null;
    }

    protected async getNameProperty(row: Locator): Promise<string> {
        return (await row.locator('.t-property code').textContent())?.trim() ?? '';
    }

    protected async getOptions(): Promise<Locator[]> {
        return this.page.locator('[automation-id="tui-data-list-wrapper__option"]').all();
    }

    protected async focusOnBody(): Promise<void> {
        await this.page.locator('body').click({position: {x: 0, y: 0}});
        await this.page.waitForTimeout(300);
    }

    protected async getCleaner(select: Locator): Promise<Locator | null> {
        return (
            ((await select
                .locator('[automation-id="tui-primitive-textfield__cleaner"]')
                .all()) ?? [])?.[0] ?? null
        );
    }

    protected async getToggle(row: Locator): Promise<Locator | null> {
        return ((await row.locator('.t-cell_value tui-toggle').all()) ?? [])?.[0] ?? null;
    }
}
