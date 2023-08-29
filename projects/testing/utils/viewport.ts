export function tuiTestingViewport(width: number, height: number): void {
    Object.defineProperty(global, `innerWidth`, {
        configurable: true,
        value: width,
        writable: true,
    });

    Object.defineProperty(global.document.documentElement, `clientWidth`, {
        configurable: true,
        value: width - 15,
        writable: true,
    });

    Object.defineProperty(global, `innerHeight`, {
        configurable: true,
        value: height,
        writable: true,
    });

    Object.defineProperty(global.document.documentElement, `clientHeight`, {
        configurable: true,
        value: height,
        writable: true,
    });
}
