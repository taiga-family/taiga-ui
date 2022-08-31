export function tuiPointToClientRect(x: number = 0, y: number = 0): DOMRect {
    const rect = {
        x,
        y,
        left: x,
        right: x,
        top: y,
        bottom: y,
        width: 0,
        height: 0,
    } as const;

    return {
        ...rect,
        toJSON() {
            return rect;
        },
    };
}
