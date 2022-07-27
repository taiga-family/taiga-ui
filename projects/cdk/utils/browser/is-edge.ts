/**
 * @deprecated: use {@link tuiIsEdge} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isEdge(userAgent: string): boolean {
    return userAgent.toLowerCase().includes(`edge`);
}

export const tuiIsEdge = isEdge;
