import type {TuiKeySteps} from '@taiga-ui/kit';
import {tuiKeyStepValueToPercentage, tuiPercentageToKeyStepValue} from '@taiga-ui/kit';

describe(`KeySteps utils`, () => {
    const keySteps: TuiKeySteps = [
        [0, -100],
        [50, 0],
        [100, 10],
    ];

    const testContexts = [
        {percentage: 0, value: -100},
        {percentage: 5, value: -90},
        {percentage: 10, value: -80},
        {percentage: 33, value: -34},
        {percentage: 49, value: -2},
        {percentage: 50, value: 0},
        {percentage: 60, value: 2},
        {percentage: 75, value: 5},
        {percentage: 90, value: 8},
        {percentage: 100, value: 10},
    ] as const;

    describe(`tuiPercentageToKeyStepValue`, () => {
        for (const {percentage, value} of testContexts) {
            it(`${percentage}% => ${value}`, () => {
                expect(tuiPercentageToKeyStepValue(percentage, keySteps)).toBe(value);
            });
        }
    });

    describe(`tuiKeyStepValueToPercentage`, () => {
        for (const {value, percentage} of testContexts) {
            it(`${value} => ${percentage}%`, () => {
                expect(tuiKeyStepValueToPercentage(value, keySteps)).toBe(percentage);
            });
        }
    });
});
