export function isCurrentTarget({target, currentTarget}: Event): boolean {
    return target === currentTarget;
}
