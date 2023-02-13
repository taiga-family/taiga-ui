import {tuiAddMatchImageSnapshotCommand} from '@taiga-ui/testing/cypress';

tuiAddMatchImageSnapshotCommand({
    allowSizeMismatch: false,
    runInProcess: false,
    failureThreshold: 0.0004,
    failureThresholdType: `percent`,
    comparisonMethod: `ssim`,
    diffDirection: `horizontal`,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    customDiffConfig: {
        ssim: `fast`,
        windowSize: 24,
    } as any,
});
