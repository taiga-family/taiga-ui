export function tuiIsCurrentTarget({target, currentTarget}: Event): boolean {
    return target === currentTarget;
}
