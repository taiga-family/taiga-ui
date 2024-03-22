/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

export function tuiEaseInOutQuad(t: number): number {
    ngDevMode &&
        console.assert(
            t >= 0 && t <= 1,
            'Input must be between 0 and 1 inclusive but received ',
            t,
        );

    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
