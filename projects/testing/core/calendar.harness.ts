import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiPrimitiveCalendarHarness} from './primitive-calender.harness';
import {TuiPrimitiveYearMonthPaginationHarness} from './primitive-year-month-pagination.harness';
import {TuiPrimitiveYearPickerHarness} from './primitive-year-picker.harness';

export class TuiCalendarHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-calendar';

    private readonly getPrimitiveYearPickerHarness = this.locatorForOptional(
        TuiPrimitiveYearPickerHarness,
    );

    private readonly getPrimitiveYearMonthPaginationHarness = this.locatorForOptional(
        TuiPrimitiveYearMonthPaginationHarness,
    );

    private readonly getPrimitiveCalendarHarness = this.locatorForOptional(
        TuiPrimitiveCalendarHarness,
    );

    public async yearPickerShown(): Promise<boolean> {
        return !!(await this.getPrimitiveYearPickerHarness());
    }

    public async yearMonthPaginationShown(): Promise<boolean> {
        return !!(await this.getPrimitiveYearMonthPaginationHarness());
    }

    public async primitiveCalendarShown(): Promise<boolean> {
        return !!(await this.getPrimitiveCalendarHarness());
    }

    public async isPaginationLeftDisabled(): Promise<boolean> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.isLeftDisabled() ??
            false
        );
    }

    public async isPaginationRightDisabled(): Promise<boolean> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.isRightDisabled() ??
            false
        );
    }

    public async clickMonthLeft(): Promise<void> {
        return (await this.getPrimitiveYearMonthPaginationHarness())?.clickLeft();
    }

    public async getContentText(): Promise<string> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.getContentText() ?? ''
        );
    }

    public async clickMonthRight(): Promise<void> {
        return (await this.getPrimitiveYearMonthPaginationHarness())?.clickRight();
    }

    public async clickPaginationYear(): Promise<void> {
        return (await this.getPrimitiveYearMonthPaginationHarness())?.clickYear();
    }

    public async clickPickerYear(year: string): Promise<void> {
        return (await this.getPrimitiveYearPickerHarness())?.clickYear(year);
    }

    public async clickDay(day: number): Promise<void> {
        return (await this.getPrimitiveCalendarHarness())?.clickDay(day);
    }

    public async hoverDay(day: number): Promise<void> {
        return (await this.getPrimitiveCalendarHarness())?.hoverDay(day);
    }
}
