import {tuiPlaywrightIsUnknownError} from './is-unknown-error';

export async function tuiPlaywrightNoFailOnSnapshotDiff(
    expect: () => unknown,
): Promise<void> {
    try {
        await expect();
    } catch (err: unknown) {
        if (tuiPlaywrightIsUnknownError(err)) {
            throw err;
        }
    }
}
