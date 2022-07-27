export function bumpTuiVersionInPackageJson(
    packageJson: Record<string, unknown>,
    version: string,
): void {
    if (`version` in packageJson && typeof packageJson[`version`] === `string`) {
        packageJson[`version`] = version;
    }
}
