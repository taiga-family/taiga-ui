import {Locator, Page} from '@playwright/test';

export class TuiInputCardGroupedPO {
    readonly cardGroupInput = this.page.locator(
        `[automation-id="tui-input-card-grouped__card"]`,
    );

    readonly cleanerIcon = this.page.locator(
        `[automation-id="tui-input-card-grouped__cleaner"]`,
    );

    readonly disableFormControlToggle = this.page
        .locator(`tr`)
        .filter({
            has: this.page.locator(`[automation-id="tui-documentation__property-name"]`, {
                hasText: `disabled`,
            }),
        })
        .locator(`[automation-id="tui-toggle__checkbox"]`);

    constructor(private readonly page: Page) {}

    getExampleCardGroupInput(example: Locator): Locator {
        return example.locator(this.cardGroupInput);
    }

    getExampleCleanerIcon(example: Locator): Locator {
        return example.locator(this.cleanerIcon);
    }

    getExampleCardExpiryInput(example: Locator): Locator {
        return example.locator(
            this.page.locator(`[automation-id="tui-input-card-grouped__expire"]`),
        );
    }

    getExampleCardCvcInput(example: Locator): Locator {
        return example.locator(
            this.page.locator(`[automation-id="tui-input-card-grouped__cvc"]`),
        );
    }
}
