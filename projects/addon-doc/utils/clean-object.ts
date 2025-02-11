export type TuiDeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? TuiDeepPartial<T[K]> : T[K];
};

type EmptyValue = '' | null | undefined;

function checkValueIsEmpty<T>(value: EmptyValue | T): value is EmptyValue {
    const nextValue: any = typeof value === 'string' ? value.trim() : value;

    return ['', NaN, null, undefined].includes(nextValue);
}

export function tuiCleanObject<T>(object: T): TuiDeepPartial<T> {
    return JSON.parse(
        JSON.stringify(object, (_key: string, value: unknown) =>
            checkValueIsEmpty(value) ? undefined : value,
        ),
    );
}
