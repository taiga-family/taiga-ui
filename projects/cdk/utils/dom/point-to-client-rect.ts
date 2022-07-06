export function tuiPointToClientRect(x: number = 0, y: number = 0): ClientRect {
    return {
        left: x,
        right: x,
        top: y,
        bottom: y,
        width: 0,
        height: 0,
    };
}
