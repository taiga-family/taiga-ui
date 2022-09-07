export function getLastMajorVersion(versions: string[], currentMajor: number): number {
    return Math.max(...versions.map(x => parseInt(x)), currentMajor);
}
