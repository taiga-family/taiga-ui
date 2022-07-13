const EDGE = 'edge/';

export function tuiIsEdgeOlderThan(version: number, userAgent: string): boolean {
    const currentVersion = parseInt(
        userAgent.slice(userAgent.toLowerCase().indexOf(EDGE) + EDGE.length),
        10,
    );

    return currentVersion < version;
}
