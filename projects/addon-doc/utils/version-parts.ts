/**
 * Splits a version string into numeric major/minor parts (`NaN` when missing).
 */
export function tuiVersionParts(version = ''): {major: number; minor: number} {
    const [major = Number.NaN, minor = Number.NaN] = version
        ? version.split('.').map(Number)
        : [];

    return {major, minor};
}
