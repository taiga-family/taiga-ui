import {tuiIsString} from '../../projects/cdk/utils/miscellaneous/is-string';

export function bumpTuiVersionInPackageJson(
    packageJson: Record<string, unknown>,
    version: string,
): void {
    if (`version` in packageJson && tuiIsString(packageJson[`version`])) {
        packageJson[`version`] = version;
    }
}
