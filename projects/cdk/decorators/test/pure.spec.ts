import {tuiPure} from '../pure';

describe('tuiPure', () => {
    it('calls getter only once and then sets result as a value property on the object', () => {
        let count = 0;

        class TestClass {
            @tuiPure
            get someGetter(): string {
                count++;

                return 'test';
            }
        }

        const testObject = new TestClass();

        expect(count).toBe(0);
        expect(testObject.someGetter).toBe('test');
        expect(count).toBe(1);
        expect(testObject.someGetter).toBe('test');
        expect(testObject.someGetter).toBe('test');
        expect(count).toBe(1);
    });

    it('memoizes function result', () => {
        const name = 'Alex';
        const age = 30;

        class TestClass {
            @tuiPure
            combine(name: string, age: number): [string, number] {
                return [name, age];
            }
        }

        const testObject = new TestClass();
        const result = testObject.combine(name, age);

        expect(testObject.combine(name, age)).toBe(result);
    });

    it('has access to this', () => {
        const name = 'Alex';
        const age = 30;

        class TestClass {
            constructor(readonly prefix: string) {}

            @tuiPure
            combine(name: string, age: number): [string, string, number] {
                return [this.prefix, name, age];
            }
        }

        const testObject = new TestClass('awesome');
        const result = testObject.combine(name, age);

        expect(testObject.combine(name, age)).toBe(result);
    });
});
