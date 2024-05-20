import type {BaseHarnessFilters} from '@angular/cdk/testing';
import {ComponentHarness, HarnessPredicate} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

interface TuiDayCellHarnessFilters extends BaseHarnessFilters {
    day: number;
}

class TuiDayCellHarness extends ComponentHarness {
    public static hostSelector = '.t-cell:not(.t-cell_unavailable)';

    public static with(
        options: TuiDayCellHarnessFilters,
    ): HarnessPredicate<TuiDayCellHarness> {
        return new HarnessPredicate(TuiDayCellHarness, options).addOption(
            'day',
            options.day,
            async (harness, text) =>
                HarnessPredicate.stringMatches(harness.getText(), `${text}`),
        );
    }

    public async getText(): Promise<string> {
        return (await this.locatorFor('.t-item')()).text();
    }

    public async click(): Promise<void> {
        return (await this.host()).click();
    }

    public async hover(): Promise<void> {
        return (await this.host()).hover();
    }
}

export class TuiCalendarSheetHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-calendar-sheet';

    public async clickDay(day: number): Promise<void> {
        const dayCell = await this.locatorFor(
            TuiDayCellHarness.with({day, ancestor: '.t-row:not(.t-row_weekday)'}),
        )();

        return dayCell.click();
    }

    public async hoverDay(day: number): Promise<void> {
        const dayCell = await this.locatorFor(
            TuiDayCellHarness.with({day, ancestor: '.t-row:not(.t-row_weekday)'}),
        )();

        return dayCell.hover();
    }
}
