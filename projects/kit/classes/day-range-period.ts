import {TuiContextWithImplicit, TuiDayRange} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export class TuiDayRangePeriod {
    constructor(
        readonly range: TuiDayRange,
        private readonly name: string,
        readonly content?: PolymorpheusContent<TuiContextWithImplicit<TuiDayRange>>,
    ) {}

    toString(): string {
        return this.name;
    }
}
