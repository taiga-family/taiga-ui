import {tuiDebounce} from '@taiga-ui/cdk';

describe(`tuiDebounce`, () => {
    it(`should debounce method calls`, done => {
        class MyClass {
            count = 0;

            @tuiDebounce(100)
            method(): void {
                this.count++;
            }
        }

        const instance = new MyClass();

        expect(instance.count).toBe(0);

        instance.method();
        instance.method();
        instance.method();

        expect(instance.count).toBe(0);

        setTimeout(() => instance.method(), 50);

        expect(instance.count).toBe(0);

        setTimeout(() => {
            expect(instance.count).toBe(1);

            done();
        }, 200);
    });
});
