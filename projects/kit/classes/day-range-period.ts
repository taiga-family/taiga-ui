import {TuiContext, TuiDayRange} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export class TuiDayRangePeriod {
    constructor(
        public readonly range: TuiDayRange,
        private readonly name: string,
        public readonly content?: PolymorpheusContent<TuiContext<TuiDayRange>>,
    ) {}

    public toString(): string {
        return this.name;
    }
}
