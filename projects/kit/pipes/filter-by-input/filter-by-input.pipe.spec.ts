/// <reference types="jest" />
import {TestBed} from '@angular/core/testing';
import {
    TUI_DATA_LIST_HOST,
    TUI_ITEMS_HANDLERS,
    type TuiDataListHost,
} from '@taiga-ui/core';

import {TuiFilterByInputPipe} from './filter-by-input.pipe';
import {
    provideTuiFilterHandler,
    type TuiFilterByInputHandler,
} from './filter-option.token';

interface TestDataListHost<T> extends TuiDataListHost<T> {
    nativeFocusableElement: {value: string};
}

describe('TuiFilterByInputPipe', () => {
    describe('default behavior (return all items on exact match)', () => {
        let pipe: TuiFilterByInputPipe;
        let host: TestDataListHost<unknown>;

        beforeEach(async () => {
            host = {
                stringify: (v: unknown) => String(v),
                nativeFocusableElement: {value: ''}, // legacy support
            };

            await TestBed.configureTestingModule({
                providers: [
                    TuiFilterByInputPipe,
                    {provide: TUI_DATA_LIST_HOST, useValue: host},
                    {
                        provide: TUI_ITEMS_HANDLERS,
                        useValue: {stringify: () => (v: unknown) => String(v)},
                    },
                ],
            }).compileComponents();

            pipe = TestBed.inject(TuiFilterByInputPipe);
        });

        it('should exist', () => {
            expect(pipe).toBeDefined();
        });

        it('should return all items when exact match exists', () => {
            host.nativeFocusableElement.value = 'b';

            const matcher = (
                item: unknown,
                q: string,
                stringify: (v: unknown) => string,
            ): boolean => stringify(item).toLowerCase().includes(q.toLowerCase());

            const items = ['a', 'b', 'abc'];
            const result = pipe.transform(items, matcher);

            expect(result).toEqual(['a', 'b', 'abc']);
        });

        it('should filter flat array by query using matcher when no exact match', () => {
            host.nativeFocusableElement.value = 'x';

            const matcher = (
                item: unknown,
                q: string,
                stringify: (v: unknown) => string,
            ): boolean => stringify(item).toLowerCase().includes(q.toLowerCase());

            const items = ['a', 'b', 'abc', 'xyz'];
            const result = pipe.transform(items, matcher);

            expect(result).toEqual(['xyz']);
        });
    });

    describe('custom handler (only matching items)', () => {
        let pipe: TuiFilterByInputPipe;
        let host: TestDataListHost<unknown>;

        beforeEach(async () => {
            host = {
                stringify: (v: unknown) => String(v),
                nativeFocusableElement: {value: ''},
            };

            const onlyMatchingHandler: TuiFilterByInputHandler = <T>(
                items: ReadonlyArray<readonly T[]> | readonly T[] | null,
                matcher: (item: T, q: string, stringify: (v: T) => string) => boolean,
                query: string,
            ) => {
                if (!items) {
                    return null;
                }

                const stringify = (v: T): string => String(v);

                if (Array.isArray(items) && items.every((i) => !Array.isArray(i))) {
                    return (items as readonly T[]).filter((item) =>
                        matcher(item, query, stringify),
                    );
                }

                return (items as ReadonlyArray<readonly T[]>).map((inner) =>
                    inner.filter((item) => matcher(item, query, stringify)),
                );
            };

            await TestBed.configureTestingModule({
                providers: [
                    TuiFilterByInputPipe,
                    {provide: TUI_DATA_LIST_HOST, useValue: host},
                    {
                        provide: TUI_ITEMS_HANDLERS,
                        useValue: {stringify: () => (v: unknown) => String(v)},
                    },
                    provideTuiFilterHandler(onlyMatchingHandler),
                ],
            }).compileComponents();

            pipe = TestBed.inject(TuiFilterByInputPipe);
        });

        it('should filter items even when exact match exists', () => {
            host.nativeFocusableElement.value = 'b';

            const matcher = (
                item: unknown,
                q: string,
                stringify: (v: unknown) => string,
            ): boolean => stringify(item).toLowerCase().includes(q.toLowerCase());

            const items = ['a', 'b', 'abc'];
            const result = pipe.transform(items, matcher);

            expect(result).toEqual(['b', 'abc']);
        });

        it('should continue filtering without exact match', () => {
            host.nativeFocusableElement.value = 'x';

            const matcher = (
                item: unknown,
                q: string,
                stringify: (v: unknown) => string,
            ): boolean => stringify(item).toLowerCase().includes(q.toLowerCase());

            const items = ['a', 'b', 'abc', 'xyz'];
            const result = pipe.transform(items, matcher);

            expect(result).toEqual(['xyz']);
        });
    });
});
