/** @deprecated */
export function colorFallback(color: string | null): string {
    switch (color) {
        case 'secondary':
            return 'var(--tui-info-fill)';
        case 'error':
            return 'var(--tui-error-fill)';
        case 'success':
            return 'var(--tui-success-fill)';
        default:
            return `var(--tui-${color || 'base-05'})`;
    }
}
