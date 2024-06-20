import type {TuiDay} from '@taiga-ui/cdk/date-time';

export class TuiNamedDay {
    constructor(
        public readonly day: TuiDay,
        private readonly name: string,
        public readonly displayDay: TuiDay = day,
    ) {}

    protected toString(): string {
        return this.name;
    }
}
