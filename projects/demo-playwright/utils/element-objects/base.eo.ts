import {type Locator, type Page} from '@playwright/test';

/**
 * Base class for all Element Objects.
 *
 * Provides a single root-locator getter `host` and the constructor options
 * shared by every Element Object: page, optional parent locator, custom
 * selector suffix and index.
 */
export class TuiBaseEO {
    protected readonly hostSelector: string = '';

    /**
     * @param page Playwright page instance.
     * @param parent Optional parent locator to scope the host within.
     * @param customSelector Optional selector suffix appended to `hostSelector`.
     * @param index Optional zero-based index to pick a specific matching element.
     */
    constructor(
        protected readonly page: Page,
        protected readonly parent?: Locator,
        protected readonly customSelector = '',
        protected readonly index = 0,
    ) {}

    /**
     * Root locator of the component.
     *
     * Resolves to `(parent ?? page).locator(hostSelector + customSelector).nth(index)`.
     * Use it as the single entry point for Playwright `expect` assertions.
     */
    public get host(): Locator {
        return (this.parent ?? this.page)
            .locator(`${this.hostSelector}${this.customSelector}`)
            .nth(this.index);
    }
}
