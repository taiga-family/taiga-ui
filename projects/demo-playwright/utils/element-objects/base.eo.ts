import {Locator} from '@playwright/test';

export abstract class TuiBaseEO {
    constructor(protected readonly page: Locator) {}

    public abstract get host(): Locator;
}
