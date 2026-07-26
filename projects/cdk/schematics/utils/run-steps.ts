import {performance} from 'node:perf_hooks';

import {type MigrationStepTiming} from './format-migration-stats';

export interface MigrationStep {
    readonly name: string;
    step(): void;
}

export function runSteps(
    steps: readonly MigrationStep[],
    timings: MigrationStepTiming[],
): void {
    for (const {name, step} of steps) {
        const startedAt = performance.now();

        step();

        timings.push({name, durationMs: performance.now() - startedAt});
    }
}
