import {tuiTypeReferenceParser} from '@taiga-ui/addon-doc';

describe(`tuiTypeReferenceParser`, () => {
    it(`parse`, () => {
        expect(
            tuiTypeReferenceParser(`
                    PolymorpheusContent<TuiValueContentContext<T | G, K | V>>
                        | Map<T, boolean>
                        | ReadonlyArray<string | null>
                        | readonly string[]
                        | T
                        | ReadonlyArray<readonly number[]>
                        | [TuiDay, number][]
                        | TuiStringHandler<number>
                        | null
                        | readonly [number, number]
                        | 'positive'
                        | 'negative'
                        | -1
                        | 2
                        | 0
                        | void
                        | CustomEvent<TuiIconError>
                        | TuiComparator<T>
                        | readonly T[]
                        | TuiDay
                        | [TuiTime, TuiTime]
                        | T[][]
            `),
        ).toEqual([
            {
                type: `PolymorpheusContent<TuiValueContentContext<T | G, K | V>>`,
                extracted: `PolymorpheusContent`,
            },
            {type: `Map<T, boolean>`, extracted: `Map`},
            {type: `ReadonlyArray<string | null>`, extracted: `string`},
            {type: `readonly string[]`, extracted: `string`},
            {type: `T`, extracted: `unknown`},
            {type: `ReadonlyArray<readonly number[]>`, extracted: `number`},
            {type: `[TuiDay, number][]`, extracted: `TuiDay`},
            {type: `TuiStringHandler<number>`, extracted: `TuiStringHandler`},
            {type: `null`, extracted: `null`},
            {type: `readonly [number, number]`, extracted: `number`},
            {type: `'positive'`, extracted: `string`},
            {type: `'negative'`, extracted: `string`},
            {type: `-1`, extracted: `number`},
            {type: `2`, extracted: `number`},
            {type: `0`, extracted: `number`},
            {type: `void`, extracted: `void`},
            {type: `CustomEvent<TuiIconError>`, extracted: `CustomEvent`},
            {type: `TuiComparator<T>`, extracted: `TuiComparator`},
            {type: `readonly T[]`, extracted: `unknown`},
            {type: `TuiDay`, extracted: `TuiDay`},
            {type: `[TuiTime, TuiTime]`, extracted: `TuiTime`},
            {type: `T[][]`, extracted: `unknown`},
        ]);
    });
});
