/**
 * @deprecated: use {@link tuiFindTouchIndex} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function findTouchIndex(touches: TouchList, id: number): number {
    for (let i = 0; i < touches.length; i++) {
        const {identifier} = touches[i];

        if (identifier === id) {
            return i;
        }
    }

    return -1;
}

export const tuiFindTouchIndex = findTouchIndex;
