import {TuiDocumentationPropertyType} from '@taiga-ui/addon-doc/interfaces';

export class TuiGetAttrValueUndefinedValueError extends Error {
    override readonly name = `UndefinedValueError`;

    constructor(mode: TuiDocumentationPropertyType) {
        super(`Invalid attribute config: ${mode} must have a value`);
    }
}

export function tuiGetAttrValue(
    mode: TuiDocumentationPropertyType,
    value: string | undefined,
): string {
    switch (mode) {
        case `input-output`:
        case `input`:
        case `output`:
            if (!value) {
                throw new TuiGetAttrValueUndefinedValueError(mode);
            }

            return value;
        default:
            return value ?? ``;
    }
}
