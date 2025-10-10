import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiRound} from '@taiga-ui/cdk/utils/math';

/**
 * Used as a limit for eliminating JS issues with floating point math
 */
export const TUI_FLOATING_PRECISION = 7;

/**
 * Steps for splitting sliders into different linear dependencies.
 * Each element of the array has the form [percent, value]
 *
 * Thus, to set a field from 50,000 to 30,000,000 in steps:
 * 1) From 50 000 to 200 000 by 5000 per step (30 steps)
 * 2) From 200 000 to 1 000 000 by 50 000 per step (16 steps)
 * 3) From 1 000 000 to 30 000 000 by 500 000 per step (58 steps)
 *
 * You need to pass the following keyStep (where 104 = 30 + 16 + 58 is the total number of steps):
 *  [
 *      [0, 50_000],
 *      [100 / 104 * 30, 200_000],
 *      [100 / 104 * (30 + 16), 1_000_000],
 *      [100, 30_000_000],
 *  ];
 *
 */
export type TuiKeySteps = [[0, number], ...Array<[number, number]>, [100, number]];

function tuiFindKeyStepsBoundariesByFn(
    keySteps: TuiKeySteps,
    fn: ([keyStepPercent, keyStepValue]: [number, number]) => boolean,
): [[number, number], [number, number]] {
    const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));

    const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
    const upperStep = keySteps[keyStepUpperIndex] ||
        keySteps[keySteps.length - 1] || [0, 0];

    return [lowerStep, upperStep];
}

export function tuiPercentageToKeyStepValue(
    valuePercentage: number,
    keySteps: TuiKeySteps,
): number {
    const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] =
        tuiFindKeyStepsBoundariesByFn(
            keySteps,
            ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage,
        );
    const ratio =
        (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
    const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;

    return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}

export function tuiKeyStepValueToPercentage(
    value: number,
    keySteps: TuiKeySteps,
): number {
    const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] =
        tuiFindKeyStepsBoundariesByFn(
            keySteps,
            ([_, keyStepValue]) => value <= keyStepValue,
        );
    const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;

    return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}

export function tuiCreateKeyStepsTransformer(
    keySteps: TuiKeySteps,
): TuiValueTransformer<number, number> {
    return new (class implements TuiValueTransformer<number, number> {
        public fromControlValue(controlValue: number): number {
            return tuiKeyStepValueToPercentage(controlValue, keySteps) / 100;
        }

        public toControlValue(ratio: number): number {
            return tuiPercentageToKeyStepValue(ratio * 100, keySteps);
        }
    })();
}
