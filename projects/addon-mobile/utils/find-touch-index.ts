export function tuiFindTouchIndex(touches: TouchList, id: number): number {
    // eslint-disable-next-line functional/no-loop-statements
    for (let i = 0; i < touches.length; i++) {
        const {identifier} = touches[i];

        if (identifier === id) {
            return i;
        }
    }

    return -1;
}
