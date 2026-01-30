import {formatMigrationStats} from '../format-migration-stats';

describe('formatMigrationStats', () => {
    it('formats step timings with percentages', () => {
        const summary = formatMigrationStats(
            [
                {name: 'tuiLetMigration', durationMs: 500},
                {name: 'migrateTokens', durationMs: 1500},
                {name: 'updateTsConfig', durationMs: 7},
            ],
            2007,
        );

        expect(summary).toBe(
            [
                'Migration timing breakdown:',
                '- migrateTokens: 1.50 sec (75%)',
                '- tuiLetMigration: 500.00 ms (25%)',
                '- updateTsConfig: 7.00 ms (0%)',
            ].join('\n'),
        );
    });
});
