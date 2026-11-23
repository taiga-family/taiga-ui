import {type Locator, type Page} from '@playwright/test';

import {type EOConstructorOptions} from '../types/eo-constructor-options';

const defaultOptions = {
    customSelector: '',
    index: 0,
};

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
     * @param root Playwright page instance.
     * @param customSelector Optional selector suffix appended to `hostSelector`.
     * @param index Optional zero-based index to pick a specific matching element.
     */
    constructor(
        protected readonly root: Locator | Page,
        protected readonly params: EOConstructorOptions = defaultOptions,
    ) {}

    /**
     * Root locator of the component.
     *
     * Resolves to `(parent ?? page).locator(hostSelector + customSelector).nth(index)`.
     * Use it as the single entry point for Playwright `expect` assertions.
     */
    public get host(): Locator {
        return this.root
            .locator(`${this.hostSelector}${this.customSelector}`)
            .nth(this.index);
    }

    protected get index(): number {
        return this.params.index ?? defaultOptions.index;
    }

    protected get customSelector(): string {
        return this.params.customSelector ?? defaultOptions.customSelector;
    }
}
