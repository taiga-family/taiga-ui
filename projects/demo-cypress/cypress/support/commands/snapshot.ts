import {tuiAddMatchImageSnapshotCommand} from '@taiga-ui/testing/cypress';

tuiAddMatchImageSnapshotCommand({
    allowSizeMismatch: false,
    comparisonMethod: `ssim`,
    customDiffConfig: {
        ssim: `fast`,
        windowSize: 24,
    } as any,
    diffDirection: `horizontal`,
    failureThreshold: 0.0004,
    failureThresholdType: `percent`,
    runInProcess: false,
});
