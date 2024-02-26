import {expect, Locator} from '@playwright/test';

export class TuiSliderPO {
    constructor(private readonly host: Locator) {}

    protected get value(): Promise<number> {
        return this.host.inputValue().then(Number);
    }

    protected get fillPercentage(): Promise<number> {
        return this.host.evaluate(el =>
            Math.round(
                parseFloat(
                    globalThis
                        .getComputedStyle(el)
                        .getPropertyValue('--tui-slider-fill-percentage'),
                ),
            ),
        );
    }

    protected async setValue(value: number): Promise<void> {
        await this.host.evaluate((el: HTMLInputElement, newValue: number) => {
            el.value = `${newValue}`;
            el.dispatchEvent(new Event('input'));
        }, value);
        await expect(this.host).toHaveValue(`${value}`);
    }
}
