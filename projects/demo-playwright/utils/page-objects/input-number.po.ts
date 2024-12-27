import type {Locator} from '@playwright/test';

export class InputNumberPO {
    public readonly textfield: Locator = this.host.getByRole('textbox');
    public stepUp = this.host.locator('button', {hasText: '+'});
    public stepDown = this.host.locator('button', {hasText: '-'});

    constructor(public readonly host: Locator) {}
}
