const KEYS: readonly string[] = [
    'Spacebar',
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Left',
    'Right',
    'End',
    'Home',
];

/**
 * Check if pressed key is interactive in terms of input field
 */
export function tuiIsEditingKey(key = ''): boolean {
    return key.length === 1 || KEYS.includes(key);
}
