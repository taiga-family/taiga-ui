import {tuiEditingKeys} from '@taiga-ui/core/constants';

/**
 * @deprecated: use {@link tuiIsEditingKey} instead
 * Check if pressed key is interactive in terms of input field
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isEditingKey(key: string): boolean {
    return key.length === 1 || tuiEditingKeys.includes(key);
}

export const tuiIsEditingKey = isEditingKey;
