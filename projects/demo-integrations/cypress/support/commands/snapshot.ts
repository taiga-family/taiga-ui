import {tuiAddMatchImageSnapshotCommand} from '@taiga-ui/testing/cypress';

tuiAddMatchImageSnapshotCommand({
    allowSizeMismatch: true, // Windows CI fix
    runInProcess: true, // macOS CI fix
    failureThreshold: 0.0004,
    failureThresholdType: `percent`,
    comparisonMethod: `ssim`,
    diffDirection: `vertical`,
    customDiffConfig: {
        ssim: `fast`,
        windowSize: 24,
    } as any,
});
