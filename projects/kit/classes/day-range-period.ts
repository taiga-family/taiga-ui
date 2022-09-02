import type {TuiDayRange} from '@taiga-ui/cdk';

export class TuiDayRangePeriod {
    constructor(readonly range: TuiDayRange, private readonly name: string) {}

    toString(): string {
        return this.name;
    }
}
