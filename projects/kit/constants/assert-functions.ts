import {TuiDay} from '@taiga-ui/cdk';

/**
 * @internal (whole file)
 */
export function quantumAssertion(quantum: number): boolean {
    return quantum > 0;
}

export function maxAssertion(max: number, context: {min: number}): boolean {
    return max >= context.min;
}

export function maxDayAssertion(max: TuiDay, context: {min: TuiDay}): boolean {
    return max.dayAfter(context.min);
}
