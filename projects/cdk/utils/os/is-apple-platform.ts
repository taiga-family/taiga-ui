/**
 * @deprecated: use {@link tuiIsApplePlatform} instead
 * @description:
 * All Chrome / Chromium-based browsers will return MacIntel on macOS,
 * no matter what the hardware architecture is. See the source code here:
 * https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/frame/navigator_id.cc;l=64;drc=703d3c472cf27470dad21a3f2c8972aca3732cd6
 * But maybe in future years, it will be changed to MacM1
 *
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isApplePlatform(navigator: Navigator): boolean {
    return navigator.platform.indexOf('Mac') === 0 || navigator.platform === 'iPhone';
}

export const tuiIsApplePlatform = isApplePlatform;
