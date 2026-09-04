import {withMigrationContext} from '../with-migration-context';

describe('withMigrationContext', () => {
    it('returns the task result when nothing throws', () => {
        expect(withMigrationContext('ctx', () => 42)).toBe(42);
    });

    it('prefixes the context and keeps the original error instance and stack', () => {
        const original = new TypeError(
            "Cannot read properties of undefined (reading 'startOffset')",
        );
        const {stack} = original;

        try {
            withMigrationContext('Failed to migrate "src/app.html"', () => {
                throw original;
            });
            throw new Error('should have rethrown');
        } catch (error) {
            expect(error).toBe(original);
            expect((error as Error).message).toBe(
                'Failed to migrate "src/app.html"\nCannot read properties of undefined (reading \'startOffset\')',
            );
            expect((error as Error).stack).toBe(stack);
        }
    });

    it('wraps a non-Error throwable into an Error carrying the context', () => {
        expect(() =>
            withMigrationContext('step "x" failed', () => {
                throw 'boom';
            }),
        ).toThrow('step "x" failed\nboom');
    });
});
