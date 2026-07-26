import {getExecutionTime} from './get-execution-time';

export interface MigrationStepTiming {
    readonly name: string;
    readonly durationMs: number;
}

export function formatMigrationStats(
    steps: readonly MigrationStepTiming[],
    totalMs: number,
): string {
    const fallbackTotal = steps.reduce((sum, step) => sum + step.durationMs, 0);
    const total = totalMs > 0 ? totalMs : fallbackTotal;

    return [
        'Migration timing breakdown:',
        ...[...steps]
            .sort((first, second) => second.durationMs - first.durationMs)
            .map((step) => {
                const percent = total > 0 ? (step.durationMs / total) * 100 : 0;

                return `- ${step.name}: ${getExecutionTime(0, step.durationMs)} (${Math.round(percent)}%)`;
            }),
    ].join('\n');
}
