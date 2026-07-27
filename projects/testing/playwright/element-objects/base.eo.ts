import {Page, Locator} from '@playwright/test';

/**
 * Base class for all Element Objects (EO).
 *
 * Provides a unified interface for interacting with UI components:
 * - `host` — the root locator of the component
 * - `page` — access to the Playwright page instance (useful for complex scenarios, e.g. portals)
 * - `selector` — the original CSS/data-testid selector used to locate the component
 *
 * Designed to be extended via mixins to compose reusable behavior (e.g., withClickable, withFocusable).
 *
 * @example
 * class ButtonEO extends withClickable(BaseElementObject) {}
 */
export class BaseElementObject {
    constructor(
        /**
         * Playwright Page instance
         */
        protected readonly page: Page,
        /**
         * Component selector (e.g. '[tuiSelect]', 'input[type="radio"][tuiRadio]')
         */
        protected readonly selector: string,
        /**
         * Zero-based index of the element if the selector matches multiple elements
         * (useful for components like tuiRadio that are often used in groups)
         */
        protected readonly orderNumber: number = 0,
    ) {}

    /**
     * The main locator for the component — the single entry point for all interactions.
     *
     * All actions and assertions should be performed via `host`.
     *
     * @example
     * await this.host.click();
     * await expect(this.host).toBeVisible();
     */
    get host(): Locator {
        return this.page.locator(this.selector).nth(this.orderNumber);
    }
}
