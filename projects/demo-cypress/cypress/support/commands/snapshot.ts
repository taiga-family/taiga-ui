import {tuiAddMatchImageSnapshotCommand} from '@taiga-ui/testing/cypress';

tuiAddMatchImageSnapshotCommand({
    disableTimersAndAnimations: false,
    allowSizeMismatch: false,
    runInProcess: false,
    failureThreshold: 0.0004,
    failureThresholdType: `percent`,
    comparisonMethod: `ssim`,
    diffDirection: `horizontal`,
    customDiffConfig: {
        ssim: `fast`,
        windowSize: 24,
    } as any,
});
