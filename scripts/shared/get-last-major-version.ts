export function getLastMajorVersion(versions: string[], currentMajor: number): number {
    return Math.max(...versions.map((x) => Number.parseInt(x, 10)), currentMajor);
}
