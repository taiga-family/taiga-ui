export function tuiTestingViewport(width: number, height: number): void {
    Object.defineProperty(global, `innerWidth`, {
        writable: true,
        configurable: true,
        value: width,
    });

    Object.defineProperty(global.document.documentElement, `clientWidth`, {
        writable: true,
        configurable: true,
        value: width - 15,
    });

    Object.defineProperty(global, `innerHeight`, {
        writable: true,
        configurable: true,
        value: height,
    });

    Object.defineProperty(global.document.documentElement, `clientHeight`, {
        writable: true,
        configurable: true,
        value: height,
    });
}
