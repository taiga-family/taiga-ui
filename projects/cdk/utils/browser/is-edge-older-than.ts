export function isEdgeOlderThan(version: number, userAgent: string): boolean {
    const EDGE = 'edge/';
    const currentVersion = parseInt(
        userAgent.slice(userAgent.toLowerCase().indexOf(EDGE) + EDGE.length),
        10,
    );

    return currentVersion < version;
}
