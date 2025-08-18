import {type Page} from '@playwright/test';

interface Result {
    clickX: number;
    clickY: number;
}

export async function tuiGetPseudoElement(page: Page, selector: string): Promise<Result> {
    return page.evaluate((selector) => {
        const element = document.querySelector(selector);

        if (!element) {
            return {clickX: 0, clickY: 0};
        }

        const rect = element.getBoundingClientRect();
        const styles = window.getComputedStyle(element, '::after');
        const pseudoWidth = styles.width !== 'auto' ? parseInt(styles.width) : 16;

        return {
            clickX: rect.right - pseudoWidth / 2,
            clickY: rect.top + rect.height / 2,
        };
    }, selector);
}
