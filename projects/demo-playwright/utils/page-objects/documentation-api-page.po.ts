import {expect, Locator, Page} from '@playwright/test';

import {tuiHideElement} from '../hide-element';

export class TuiDocumentationApiPagePO {
    readonly apiPageExample: Locator = this.page.locator('#demo-content');

    constructor(protected readonly page: Page) {}

    /**
     * await page.waitForLoadState('networkidle');
     * Doesn't work as expected
     */
    async waitCompleteLoadingImages(): Promise<void> {
        await this.page.waitForTimeout(50);

        const images = await this.apiPageExample.locator('img,tui-icon:after').all();

        if (images.length) {
            await expect(async () =>
                Promise.all(
                    images.map(async locator =>
                        locator.evaluate(
                            async (image: HTMLImageElement) =>
                                new Promise(resolve => {
                                    image.onload = resolve;
                                    image.onerror = resolve;
                                    setTimeout(resolve, 1000);
                                }),
                        ),
                    ),
                ),
            ).toPass();
        }

        const svgElements = await this.apiPageExample.locator('svg:visible').all();

        if (svgElements.length) {
            await expect(async () =>
                Promise.all(
                    svgElements.map(async locator =>
                        locator.evaluate(
                            async (svg: SVGElement) =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        if (
                                            svg.isConnected &&
                                            svg.clientWidth > 0 &&
                                            svg.clientHeight > 0
                                        ) {
                                            resolve(true);
                                        }
                                    }, 200);
                                }),
                        ),
                    ),
                ),
            ).toPass();
        }
    }

    async hideNotifications(): Promise<void> {
        const notifications = await this.page.locator('tui-alert-host tui-alert').all();

        for (const notification of notifications) {
            await tuiHideElement(notification);
        }
    }

    async hideContent(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-page'));
    }

    async hideDocumentation(): Promise<void> {
        const documentations = await this.page.locator('tui-doc-documentation').all();

        for (const documentation of documentations) {
            await tuiHideElement(documentation);
        }
    }

    async hideNavigation(): Promise<void> {
        return tuiHideElement(this.page.locator('tui-doc-navigation'));
    }

    async hideScrollControls(): Promise<void> {
        for (const element of await this.page.locator('tui-scroll-controls').all()) {
            await tuiHideElement(element);
        }
    }

    async prepareApiPageBeforeScreenshot(): Promise<void> {
        await this.hideDocumentation();
        await this.hideScrollControls();
        await this.hideNavigation();
        await this.hideNotifications();

        const wrapper = this.page.locator('tui-doc-page');
        const hideElements = [
            wrapper.locator('header'),
            ...(await wrapper.locator('> .t-content > *:not(tui-doc-demo)').all()),
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
