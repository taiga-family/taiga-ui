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

        expect(instance.count).toEqual(0);

        instance.method();
        instance.method();
        instance.method();

        expect(instance.count).toEqual(0);

        setTimeout(() => instance.method(), 50);

        expect(instance.count).toEqual(0);

        setTimeout(() => {
            expect(instance.count).toEqual(1);

            done();
        }, 200);
    });
});
