import type {Type} from '@angular/core';

/**
 * A subclass of `Type` which has a static `ɵcmp`:`ComponentDef` field making it
 * consumable for rendering.
 */
interface ComponentType<T> extends Type<T> {
    ɵcmp: unknown;
}

function recursiveGetClosureSafeProperty<T>(objWithPropertyToExtract: T): string {
    for (const key in objWithPropertyToExtract) {
        if (
            objWithPropertyToExtract[key] === (recursiveGetClosureSafeProperty as unknown)
        ) {
            return key;
        }
    }

    return ``;
}

const NG_COMP_DEF = recursiveGetClosureSafeProperty({
    ɵcmp: recursiveGetClosureSafeProperty,
});

export function tuiGetAngularComponentDef<T>(type: any): Type<T> | null {
    return type[NG_COMP_DEF] || null;
}

export function tuiIsAngularComponent<T>(value: any): value is ComponentType<T> {
    return !!tuiGetAngularComponentDef(value);
}
