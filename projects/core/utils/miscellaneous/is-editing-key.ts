import {tuiEditingKeys} from '@taiga-ui/core/constants';

/**
 * Check if pressed key is interactive in terms of input field
 */
export function tuiIsEditingKey(key: string): boolean {
    return key.length === 1 || tuiEditingKeys.includes(key);
}
