interface ParsedVersion {
    major: number;
    minor: number;
    patch: number;
    rc: number;
}

export function parseVersion(version: string): ParsedVersion {
    const [major, minor, patch, , rc = -1] = version
        .split(/[.-]/)
        .map((value) => Number(value));

    return {major, minor, patch, rc};
}
