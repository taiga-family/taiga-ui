import {
    BaseHarnessFilters,
    ComponentHarness,
    HarnessPredicate,
} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiPrimitiveCalendarHarness extends TuiComponentHarness {
    static hostSelector = `tui-primitive-calendar`;

    async clickDay(day: number): Promise<void> {
        const dayCell = await this.locatorFor(
            TuiDayCellHarness.with({day, ancestor: `#date-rows`}),
        )();

        return dayCell.click();
    }

    async hoverDay(day: number): Promise<void> {
        const dayCell = await this.locatorFor(
            TuiDayCellHarness.with({day, ancestor: `#date-rows`}),
        )();

        return dayCell.hover();
    }
}

class TuiDayCellHarness extends ComponentHarness {
    static hostSelector = `.t-cell`;

    static with(options: TuiDayCellHarnessFilters): HarnessPredicate<TuiDayCellHarness> {
        return new HarnessPredicate(TuiDayCellHarness, options).addOption(
            `day`,
            options.day,
            async (harness, text) =>
                HarnessPredicate.stringMatches(harness.getText(), `${text}`),
        );
    }

    async getText(): Promise<string> {
        return (await this.locatorFor(`.t-item`)()).text();
    }

    async click(): Promise<void> {
        return (await this.host()).click();
    }

    async hover(): Promise<void> {
        return (await this.host()).hover();
    }
}

interface TuiDayCellHarnessFilters extends BaseHarnessFilters {
    day: number;
}
