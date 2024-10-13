import {tuiMemo} from '@taiga-ui/cdk';

describe('tuiMemo', () => {
    it('calls getter only once and then sets result as a value property on the object', () => {
        class TestClass {
            private readonly memoized = tuiMemo(() => {
                this.count++;

                return 'test';
            });

            public count = 0;

            public get someGetter(): string {
                return this.memoized();
            }
        }

        const testObject = new TestClass();

        expect(testObject.count).toBe(0);
        expect(testObject.someGetter).toBe('test');
        expect(testObject.count).toBe(1);
        expect(testObject.someGetter).toBe('test');
        expect(testObject.someGetter).toBe('test');
        expect(testObject.count).toBe(1);
    });

    it('memorizes method result', () => {
        const name = 'Alex';
        const age = 30;

        class TestClass {
            public readonly combine = tuiMemo(this.memoized);
            private memoized(name: string, age: number): [string, number] {
                return [name, age];
            }
        }

        const testObject = new TestClass();
        const result = testObject.combine(name, age);

        expect(testObject.combine(name, age)).toEqual(['Alex', 30]);
        expect(testObject.combine(name, age)).toBe(result);
        expect(testObject.combine(name, age)).toBe(result);
    });

    it('has access to this', () => {
        const name = 'Alex';
        const age = 30;

        class TestClass {
            public readonly combine = tuiMemo(this.memoized.bind(this));

            constructor(public readonly prefix: string) {}

            public memoized(name: string, age: number): [string, string, number] {
                return [this.prefix, name, age];
            }
        }

        const testObject = new TestClass('awesome');
        const result = testObject.combine(name, age);

        expect(testObject.combine(name, age)).toEqual(['awesome', 'Alex', 30]);
        expect(testObject.combine(name, age)).toBe(result);
    });

    it('memoize function without arguments', () => {
        class TestClass {
            public sideEffect = 0;
            public readonly getRange = tuiMemo(this.memoized.bind(this));

            public get range(): number[] {
                return this.getRange();
            }

            public memoized(): number[] {
                this.sideEffect++;

                return Array.from({length: 5}, (_item, index: number) => index + 1);
            }
        }

        const testObject = new TestClass();

        expect(testObject.range).toEqual([1, 2, 3, 4, 5]);
        expect(testObject.range).toEqual([1, 2, 3, 4, 5]);
        expect(testObject.range).toEqual([1, 2, 3, 4, 5]);
        expect(testObject.sideEffect).toBe(1);
    });

    it('memoize function without arguments and return undefined by default', () => {
        class TestClass {
            public sideEffect = 0;
            public readonly voidFn = tuiMemo(this.memoized.bind(this));

            public memoized(): void {
                this.sideEffect++;

                // necessary for the test
                return undefined;
            }
        }

        const testObject = new TestClass();

        expect(testObject.voidFn()).toBeUndefined();
        expect(testObject.voidFn()).toBeUndefined();
        expect(testObject.voidFn()).toBeUndefined();
        expect(testObject.sideEffect).toBe(1);
    });
});
