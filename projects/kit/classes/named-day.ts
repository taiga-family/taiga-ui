import type {TuiDay} from '@taiga-ui/cdk';

export class TuiNamedDay {
    constructor(
        readonly day: TuiDay,
        private readonly name: string,
        readonly displayDay: TuiDay = day,
    ) {}

    toString(): string {
        return this.name;
    }
}
