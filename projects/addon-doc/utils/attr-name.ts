import {TuiDocumentationPropertyType} from '@taiga-ui/addon-doc/interfaces';

export function tuiGetAttrName(mode: TuiDocumentationPropertyType, name: string): string {
    switch (mode) {
        case `input`:
            return `[${name}]`;
        case `output`:
            return `(${name})`;
        case `input-output`:
            return `[(${name})]`;
        default:
            return name;
    }
}
