import {TuiDocumentationProperty} from '@taiga-ui/addon-doc/interfaces';

import {tuiGetAttrName} from './attr-name';
import {tuiGetAttrValue, TuiGetAttrValueUndefinedValueError} from './attr-value';

export function tuiRenderProperty(
    name: string,
    property: TuiDocumentationProperty,
): string | undefined {
    try {
        const propertyName = tuiGetAttrName(property.type, name);

        const value = tuiGetAttrValue(property.type, property.value);

        if (value) {
            return `${propertyName}="${value}"`;
        }

        return propertyName;
    } catch (error) {
        if (error instanceof TuiGetAttrValueUndefinedValueError) {
            console.error(name, property);

            return undefined;
        }

        throw error;
    }
}
