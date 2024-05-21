import {TuiComponentHarness} from '@taiga-ui/testing/utils';

import {TuiCalendarSheetHarness} from './calendar-sheet.harness';
import {TuiCalendarSpinHarness} from './calendar-spin.harness';
import {TuiCalendarYearHarness} from './calendar-year.harness';

export class TuiCalendarHarness extends TuiComponentHarness {
    public static hostSelector = 'tui-calendar';

    private readonly getCalendarYearHarness =
        this.locatorForOptional(TuiCalendarYearHarness);

    private readonly getCalendarSpinHarness =
        this.locatorForOptional(TuiCalendarSpinHarness);

    private readonly getCalendarSheetHarness = this.locatorForOptional(
        TuiCalendarSheetHarness,
    );

    public async yearPickerShown(): Promise<boolean> {
        return !!(await this.getCalendarYearHarness());
    }

    public async yearMonthPaginationShown(): Promise<boolean> {
        return !!(await this.getCalendarSpinHarness());
    }

    public async primitiveCalendarShown(): Promise<boolean> {
        return !!(await this.getCalendarSheetHarness());
    }

    public async isPaginationLeftDisabled(): Promise<boolean> {
        return (await this.getCalendarSpinHarness())?.isLeftDisabled() ?? false;
    }

    public async isPaginationRightDisabled(): Promise<boolean> {
        return (await this.getCalendarSpinHarness())?.isRightDisabled() ?? false;
    }

    public async clickMonthLeft(): Promise<void> {
        return (await this.getCalendarSpinHarness())?.clickLeft();
    }

    public async getContentText(): Promise<string> {
        return (await this.getCalendarSpinHarness())?.getContentText() ?? '';
    }

    public async clickMonthRight(): Promise<void> {
        return (await this.getCalendarSpinHarness())?.clickRight();
    }

    public async clickPaginationYear(): Promise<void> {
        return (await this.getCalendarSpinHarness())?.clickYear();
    }

    public async clickPickerYear(year: string): Promise<void> {
        return (await this.getCalendarYearHarness())?.clickYear(year);
    }

    public async clickDay(day: number): Promise<void> {
        return (await this.getCalendarSheetHarness())?.clickDay(day);
    }

    public async hoverDay(day: number): Promise<void> {
        return (await this.getCalendarSheetHarness())?.hoverDay(day);
    }
}
