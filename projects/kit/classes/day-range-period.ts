import {type TuiContext, type TuiDayRange} from '@taiga-ui/cdk';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
