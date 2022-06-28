const EDGE = 'edge/';

/**
 * @deprecated: use {@link tuiIsEdgeOlderThan} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isEdgeOlderThan(version: number, userAgent: string): boolean {
    const currentVersion = parseInt(
        userAgent.slice(userAgent.toLowerCase().indexOf(EDGE) + EDGE.length),
        10,
    );

    return currentVersion < version;
}

export const tuiIsEdgeOlderThan = isEdgeOlderThan;
