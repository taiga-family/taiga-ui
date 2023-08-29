export function tuiPointToClientRect(x: number = 0, y: number = 0): DOMRect {
    const rect = {
        bottom: y,
        height: 0,
        left: x,
        right: x,
        top: y,
        width: 0,
        x,
        y,
    } as const;

    return {
        ...rect,
        toJSON() {
            return rect;
        },
    };
}
