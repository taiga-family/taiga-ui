const rect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
} as const;

export const EMPTY_FUNCTION: (...args: any[]) => void = () => {};
export const EMPTY_CLIENT_RECT: DOMRect = {
    ...rect,
    toJSON: () => rect,
};
