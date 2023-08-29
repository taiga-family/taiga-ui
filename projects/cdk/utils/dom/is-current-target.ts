export function tuiIsCurrentTarget({currentTarget, target}: Event): boolean {
    return target === currentTarget;
}
