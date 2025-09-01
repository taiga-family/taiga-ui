import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';

export type TuiDeepPartial<T> = {
    [K in keyof T]?: T[K] extends Record<string, unknown> ? TuiDeepPartial<T[K]> : T[K];
};

type EmptyValue = '' | null | undefined;

function checkValueIsEmpty<T>(value: EmptyValue | T): value is EmptyValue {
    return tuiIsString(value)
        ? value.trim() === ''
        : value == null || Number.isNaN(value);
}

export function tuiCleanObject<T>(object: T): TuiDeepPartial<T> {
    return JSON.parse(
        JSON.stringify(object, (_key: string, value: unknown) =>
            checkValueIsEmpty(value) ? undefined : value,
        ),
    );
}
