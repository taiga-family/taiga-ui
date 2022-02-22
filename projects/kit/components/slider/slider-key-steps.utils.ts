import {TuiKeySteps} from '@taiga-ui/kit/types';

export function checkHasMinMaxPercents(steps: TuiKeySteps): boolean {
    return !steps.length || (steps[0][0] === 0 && steps[steps.length - 1][0] === 100);
}

export function findKeyStepsBoundariesByFn(
    keySteps: TuiKeySteps,
    fn: ([keyStepPercent, keyStepValue]: [number, number]) => boolean,
): [[number, number], [number, number]] {
    const keyStepUpperIndex = keySteps.findIndex((ketStep, i) => i && fn(ketStep));
    const lowerStep = keySteps[keyStepUpperIndex - 1];
    const upperStep = keySteps[keyStepUpperIndex];

    return [lowerStep, upperStep];
}

export function transformToControlValue(
    valuePercentage: number,
    [upperStepPercent, upperStepValue]: [number, number],
    [lowerStepPercent, lowerStepValue]: [number, number],
): number {
    const ratio =
        (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);

    return (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
}
