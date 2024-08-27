interface ParsedVersion {
    major: number;
    minor: number;
    patch: number;
    rc: number;
}

export function parseVersion(version: string): ParsedVersion {
    const [major = 0, minor = 0, patch = 0, , rc = -1] = version
        .split(/[.-]/)
        .map((value) => Number(value));

    return {major, minor, patch, rc};
}
