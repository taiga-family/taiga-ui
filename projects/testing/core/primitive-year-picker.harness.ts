import {
    BaseHarnessFilters,
    ComponentHarness,
    HarnessPredicate,
} from '@angular/cdk/testing';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiPrimitiveYearPickerHarness extends TuiComponentHarness {
    static hostSelector = `tui-primitive-year-picker`;

    async clickYear(year: string): Promise<void> {
        const yearCell = await this.locatorFor(TuiYearCellHarness.with({year}))();

        return yearCell.click();
    }
}

class TuiYearCellHarness extends ComponentHarness {
    static hostSelector = `.t-cell`;

    static with(
        options: TuiYearCellHarnessFilters,
    ): HarnessPredicate<TuiYearCellHarness> {
        return new HarnessPredicate(TuiYearCellHarness, options).addOption(
            `year`,
            options.year,
            async (harness, text) =>
                HarnessPredicate.stringMatches(harness.getText(), text),
        );
    }

    async getText(): Promise<string> {
        return (await this.locatorFor(`.t-item`)()).text();
    }

    async click(): Promise<void> {
        return (await this.host()).click();
    }
}

interface TuiYearCellHarnessFilters extends BaseHarnessFilters {
    year: string;
}
