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
 * shared by every Element Object: a root locator (or page) and an options
 * object with a custom selector suffix and index.
 */
export class TuiBaseEO {
    protected readonly hostSelector: string = '';

    /**
     * @param root Playwright page or locator the host is scoped to.
     * @param params Optional selector suffix and index.
     */
    constructor(
        protected readonly root: Locator | Page,
        protected readonly params: EOConstructorOptions = defaultOptions,
    ) {}

    /**
     * Root locator of the component.
     *
     * Resolves to `root.locator(hostSelector + customSelector).nth(index)`.
     * Use it as the single entry point for Playwright `expect` assertions.
     */
    public get host(): Locator {
        return this.root
            .locator(`${this.hostSelector}${this.customSelector}`)
            .nth(this.index);
    }

    /**
     * Zero-based index used to pick a specific matching element.
     */
    protected get index(): number {
        return this.params.index ?? defaultOptions.index;
    }

    /**
     * Playwright page instance the root is scoped to.
     *
     * Resolves to the page itself when the root is a page, or to the page
     * owning the root locator otherwise.
     */
    protected get page(): Page {
        return 'page' in this.root ? this.root.page() : this.root;
    }

    /**
     * Selector suffix appended to `hostSelector`.
     */
    protected get customSelector(): string {
        return this.params.customSelector ?? defaultOptions.customSelector;
    }
}
