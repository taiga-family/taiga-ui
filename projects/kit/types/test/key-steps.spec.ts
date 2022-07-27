import {TuiKeySteps} from '@taiga-ui/kit';

describe('TuiKeySteps type', () => {
    /**
     * Let's check that type {@link TuiKeySteps} works as expected using @ts-expect-error
     * @link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
     */

    describe('Valid cases', () => {
        it('Min + Max + values between', () => {
            const keySteps: TuiKeySteps = [
                [0, 10],
                [25, 10_000],
                [50, 100_000],
                [75, 500_000],
                [100, 1_000_000],
            ];

            expect(keySteps).toBeDefined();
        });

        it('Min + Max (NO values between)', () => {
            const keySteps: TuiKeySteps = [
                [0, 10],
                [100, 1_000_000],
            ];

            expect(keySteps).toBeDefined();
        });
    });

    describe('Invalid cases', () => {
        it('no minimum', () => {
            const keySteps: TuiKeySteps = [
                // @ts-expect-error
                [25, 10_000],
                [50, 100_000],
                [75, 500_000],
                [100, 1_000_000],
            ];

            expect(keySteps).toBeDefined();
        });

        it('no maximum', () => {
            // @ts-expect-error
            const keySteps: TuiKeySteps = [
                [0, 0],
                [25, 10_000],
                [50, 100_000],
                [75, 500_000],
            ];

            expect(keySteps).toBeDefined();
        });

        it('no max and no min', () => {
            const keySteps: TuiKeySteps = [
                // @ts-expect-error
                [25, 10_000],
                [50, 100_000],
                [75, 500_000],
            ];

            expect(keySteps).toBeDefined();
        });
    });
});
