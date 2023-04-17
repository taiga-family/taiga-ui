import {TuiDeepPartial} from '@taiga-ui/cdk/types';

import {tuiIsString} from './is-string';

export function tuiCleanObject<T>(object: T): TuiDeepPartial<T> {
    return JSON.parse(
        JSON.stringify(object, (_key: string, value: unknown) =>
            checkValueIsEmpty(value) ? undefined : value,
        ),
    );
}

type EmptyValue = '' | null | undefined;

function checkValueIsEmpty<T>(value: EmptyValue | T): value is EmptyValue {
    const nextValue: any = tuiIsString(value) ? value.trim() : value;

    return [undefined, null, NaN, ``].includes(nextValue);
}
