import type {TuiDay} from '@taiga-ui/cdk/date-time';

/**
 * @deprecated: drop in v5.0
 */
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
