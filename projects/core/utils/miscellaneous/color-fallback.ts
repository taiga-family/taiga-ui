/**
 * @deprecated has been deleted in 3.0, please use CSS variables
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
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
