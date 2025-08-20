/// <reference types="jest" />
import {TestBed} from '@angular/core/testing';
import {
    TUI_DATA_LIST_HOST,
    TUI_ITEMS_HANDLERS,
    type TuiDataListHost,
} from '@taiga-ui/core';
import {TUI_ONLY_MATCHING_ITEMS} from '@taiga-ui/kit';
import {TuiFilterByInputPipe} from './filter-by-input.pipe';

interface TestDataListHost<T> extends TuiDataListHost<T> {
    nativeFocusableElement: {value: string};
}

describe('TuiFilterByInputPipe', () => {
    describe('without only matching items', () => {
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

        describe('flat arrays', () => {
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
    });

    describe('with only matching items', () => {
        let pipe: TuiFilterByInputPipe;
        let host: TestDataListHost<unknown>;

        beforeEach(async () => {
            host = {
                stringify: (v: unknown) => String(v),
                nativeFocusableElement: {value: ''},
            };

            await TestBed.configureTestingModule({
                providers: [
                    TuiFilterByInputPipe,
                    {provide: TUI_DATA_LIST_HOST, useValue: host},
                    {
                        provide: TUI_ITEMS_HANDLERS,
                        useValue: {stringify: () => (v: unknown) => String(v)},
                    },
                    {provide: TUI_ONLY_MATCHING_ITEMS, useValue: true},
                ],
            }).compileComponents();

            pipe = TestBed.inject(TuiFilterByInputPipe);
        });

        it('should return only exact match when TUI_ONLY_MATCHING_ITEMS is provided', () => {
            host.nativeFocusableElement.value = 'b';

            const matcher = (
                item: unknown,
                q: string,
                stringify: (v: unknown) => string,
            ): boolean => stringify(item).toLowerCase() === q.toLowerCase();

            const items = ['b', 'abc'];
            const result = pipe.transform(items, matcher);

            expect(result).toEqual(['b']);
        });
    });
});
