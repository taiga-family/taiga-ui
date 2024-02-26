import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiPrimitiveCalendarHarness} from './primitive-calender.harness';
import {TuiPrimitiveYearMonthPaginationHarness} from './primitive-year-month-pagination.harness';
import {TuiPrimitiveYearPickerHarness} from './primitive-year-picker.harness';

export class TuiCalendarHarness extends TuiComponentHarness {
    protected static hostSelector = 'tui-calendar';

    private readonly getPrimitiveYearPickerHarness = this.locatorForOptional(
        TuiPrimitiveYearPickerHarness,
    );

    private readonly getPrimitiveYearMonthPaginationHarness = this.locatorForOptional(
        TuiPrimitiveYearMonthPaginationHarness,
    );

    private readonly getPrimitiveCalendarHarness = this.locatorForOptional(
        TuiPrimitiveCalendarHarness,
    );

    protected async yearPickerShown(): Promise<boolean> {
        return !!(await this.getPrimitiveYearPickerHarness());
    }

    protected async yearMonthPaginationShown(): Promise<boolean> {
        return !!(await this.getPrimitiveYearMonthPaginationHarness());
    }

    protected async primitiveCalendarShown(): Promise<boolean> {
        return !!(await this.getPrimitiveCalendarHarness());
    }

    protected async isPaginationLeftDisabled(): Promise<boolean> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.isLeftDisabled() ??
            false
        );
    }

    protected async isPaginationRightDisabled(): Promise<boolean> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.isRightDisabled() ??
            false
        );
    }

    protected async clickMonthLeft(): Promise<void> {
        return (await this.getPrimitiveYearMonthPaginationHarness())?.clickLeft();
    }

    protected async getContentText(): Promise<string> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.getContentText() ?? ''
        );
    }

    protected async clickMonthRight(): Promise<void> {
        return (await this.getPrimitiveYearMonthPaginationHarness())?.clickRight();
    }

    protected async clickPaginationYear(): Promise<void> {
        return (await this.getPrimitiveYearMonthPaginationHarness())?.clickYear();
    }

    protected async clickPickerYear(year: string): Promise<void> {
        return (await this.getPrimitiveYearPickerHarness())?.clickYear(year);
    }

    protected async clickDay(day: number): Promise<void> {
        return (await this.getPrimitiveCalendarHarness())?.clickDay(day);
    }

    protected async hoverDay(day: number): Promise<void> {
        return (await this.getPrimitiveCalendarHarness())?.hoverDay(day);
    }
}
