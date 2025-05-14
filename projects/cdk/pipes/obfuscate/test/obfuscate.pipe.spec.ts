import {TestBed} from '@angular/core/testing';
import type {TuiObfuscateOption} from '@taiga-ui/cdk';
import {TUI_OBFUSCATE_OPTION, TuiObfuscatePipe} from '@taiga-ui/cdk';

describe('tuiObfuscate', () => {
    describe('default', () => {
        let pipe: TuiObfuscatePipe;

        beforeEach(() => {
            TestBed.runInInjectionContext(() => {
                pipe = new TuiObfuscatePipe();
            });
        });

        it('obfuscate string by default recipe', () => {
            expect(pipe.transform('abc')).toContain('***');
        });

        it('obfuscate value with symbol', () => {
            expect(pipe.transform('abc', '#')).toContain('###');
        });

        it('keep empty string', () => {
            expect(pipe.transform('')).toContain('');
        });

        it('throws an error if the recipe is not found', () => {
            expect(() => pipe.transform('abc', 'notExist')).toThrow(
                'Obfuscate recipe "notExist" not found. Available recipes: []',
            );
        });
    });

    describe('option', () => {
        describe('custom default recipe', () => {
            let pipe: TuiObfuscatePipe;
            const obfuscateOption: Partial<TuiObfuscateOption> = {
                default: (value) => 'x'.repeat(value.length),
            };

            beforeEach(() => {
                TestBed.overrideProvider(TUI_OBFUSCATE_OPTION, {
                    useValue: obfuscateOption,
                }).runInInjectionContext(() => {
                    pipe = new TuiObfuscatePipe();
                });
            });

            it('obfuscate value with custom default function', () => {
                expect(pipe.transform('abc')).toContain('xxx');
            });

            it('obfuscate value by one symbol #', () => {
                expect(pipe.transform('abc', '#')).toContain('xxx');
            });
        });

        describe('custom default recipe with symbol', () => {
            let pipe: TuiObfuscatePipe;
            const obfuscateOption: Partial<TuiObfuscateOption> = {
                default: (value, symbol?) => (symbol ?? 'x').repeat(value.length),
            };

            beforeEach(() => {
                TestBed.overrideProvider(TUI_OBFUSCATE_OPTION, {
                    useValue: obfuscateOption,
                }).runInInjectionContext(() => {
                    pipe = new TuiObfuscatePipe();
                });
            });

            it('obfuscate value with custom default function', () => {
                expect(pipe.transform('abc')).toContain('xxx');
            });

            it('obfuscate value by one symbol #', () => {
                expect(pipe.transform('abc', '#')).toContain('###');
            });
        });

        describe('custom recipes', () => {
            let pipe: TuiObfuscatePipe;
            const recipeA = (value: string): string => 'x'.repeat(value.length);
            const recipeB = (value: string): string => '#'.repeat(value.length);
            const obfuscateOption: Partial<TuiObfuscateOption> = {
                recipes: {
                    recipeA,
                    b: recipeB,
                },
            };

            beforeEach(() => {
                TestBed.overrideProvider(TUI_OBFUSCATE_OPTION, {
                    useValue: obfuscateOption,
                }).runInInjectionContext(() => {
                    pipe = new TuiObfuscatePipe();
                });
            });

            it('obfuscate value by recipe: recipeA', () => {
                expect(pipe.transform('abc', 'recipeA')).toContain('xxx');
            });

            it('obfuscate value by recipe: b', () => {
                expect(pipe.transform('abc', 'b')).toContain('###');
            });

            it('throws an error if the recipe is not found and sort list of available recipes', () => {
                expect(() => pipe.transform('abc', 'notExist')).toThrow(
                    'Obfuscate recipe "notExist" not found. Available recipes: [b,recipeA]',
                );
            });
        });

        describe('empty option', () => {
            let pipe: TuiObfuscatePipe;

            beforeEach(() => {
                TestBed.overrideProvider(TUI_OBFUSCATE_OPTION, {
                    useValue: {},
                }).runInInjectionContext(() => {
                    pipe = new TuiObfuscatePipe();
                });
            });

            it('do not obfuscate by default', () => {
                expect(pipe.transform('abc')).toContain('abc');
            });
        });
    });
});
