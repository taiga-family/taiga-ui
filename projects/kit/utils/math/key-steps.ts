import {tuiRound} from '@taiga-ui/cdk';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import type {TuiKeySteps} from '@taiga-ui/kit/types';

function tuiFindKeyStepsBoundariesByFn(
    keySteps: TuiKeySteps,
    fn: ([keyStepPercent, keyStepValue]: [number, number]) => boolean,
): [[number, number], [number, number]] {
    const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
    const lowerStep = keySteps[keyStepUpperIndex - 1];
    const upperStep = keySteps[keyStepUpperIndex];

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
