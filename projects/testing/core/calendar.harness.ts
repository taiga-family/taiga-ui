import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiPrimitiveCalendarHarness} from './primitive-calender.harness';
import {TuiPrimitiveYearMonthPaginationHarness} from './primitive-year-month-pagination.harness';
import {TuiPrimitiveYearPickerHarness} from './primitive-year-picker.harness';

export class TuiCalendarHarness extends TuiComponentHarness {
    static hostSelector = `tui-calendar`;
    private readonly getPrimitiveYearPickerHarness = this.locatorForOptional(
        TuiPrimitiveYearPickerHarness,
    );

    private readonly getPrimitiveYearMonthPaginationHarness = this.locatorForOptional(
        TuiPrimitiveYearMonthPaginationHarness,
    );

    private readonly getPrimitiveCalendarHarness = this.locatorForOptional(
        TuiPrimitiveCalendarHarness,
    );

    async yearPickerShown(): Promise<boolean> {
        return !!(await this.getPrimitiveYearPickerHarness());
    }

    async yearMonthPaginationShown(): Promise<boolean> {
        return !!(await this.getPrimitiveYearMonthPaginationHarness());
    }

    async primitiveCalendarShown(): Promise<boolean> {
        return !!(await this.getPrimitiveCalendarHarness());
    }

    async isPaginationLeftDisabled(): Promise<boolean> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.isLeftDisabled() ??
            false
        );
    }

    async isPaginationRightDisabled(): Promise<boolean> {
        return (
            (await this.getPrimitiveYearMonthPaginationHarness())?.isRightDisabled() ??
            false
        );
    }

    async clickPaginationYear(): Promise<void> {
        return (await this.getPrimitiveYearMonthPaginationHarness())?.clickYear();
    }

    async clickPickerYear(year: string): Promise<void> {
        return (await this.getPrimitiveYearPickerHarness())?.clickYear(year);
    }

    async clickDay(day: number): Promise<void> {
        return (await this.getPrimitiveCalendarHarness())?.clickDay(day);
    }

    async hoverDay(day: number): Promise<void> {
        return (await this.getPrimitiveCalendarHarness())?.hoverDay(day);
    }
}
