import {performance} from 'node:perf_hooks';

import {type MigrationStepTiming} from '../format-migration-stats';
import {runSteps} from '../run-steps';

describe('runSteps', () => {
    it('collects timings for each step', () => {
        jest.spyOn(performance, 'now')
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(5)
            .mockReturnValueOnce(5)
            .mockReturnValueOnce(15);

        const firstStep = jest.fn();
        const secondStep = jest.fn();
        const timings: MigrationStepTiming[] = [];

        runSteps(
            [
                {name: 'first', step: firstStep},
                {name: 'second', step: secondStep},
            ],
            timings,
        );

        expect(firstStep).toHaveBeenCalledTimes(1);
        expect(secondStep).toHaveBeenCalledTimes(1);
        expect(timings).toEqual([
            {name: 'first', durationMs: 5},
            {name: 'second', durationMs: 10},
        ]);
    });
});
