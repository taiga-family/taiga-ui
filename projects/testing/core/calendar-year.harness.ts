import {
    type BaseHarnessFilters,
    ComponentHarness,
    HarnessPredicate,
} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

interface TuiYearCellHarnessFilters extends BaseHarnessFilters {
    year: string;
}

class TuiYearCellHarness extends ComponentHarness {
    public static hostSelector = '.t-cell';

    public static with(
        options: TuiYearCellHarnessFilters,
    ): HarnessPredicate<TuiYearCellHarness> {
        return new HarnessPredicate(TuiYearCellHarness, options).addOption(
            'year',
            options.year,
            async (harness, text) =>
                HarnessPredicate.stringMatches(harness.getText(), text),
        );
    }

    public async getText(): Promise<string> {
        return (await this.host()).text();
    }

    public async click(): Promise<void> {
        return (await this.host()).click();
    }
}

export class TuiCalendarYearHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-calendar-year';

    public async clickYear(year: string): Promise<void> {
        const yearCell = await this.locatorFor(TuiYearCellHarness.with({year}))();

        return yearCell.click();
    }
}
