import {TemplateRef} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {
    PolymorpheusComponent,
    PolymorpheusContent,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {Observer, Subject} from 'rxjs';

describe(`Dialog type inference tests`, () => {
    class Test {}
    const any: any = null;
    const service: TuiDialogService = new Subject() as any;

    const input: boolean = any;
    const output: string = any;
    const context: TuiDialogContext<typeof output, typeof input> = any;
    const callback: (v: typeof output) => void = any;
    const options = {size: `s`} as const;

    const str: string = any;
    const handler: (c: typeof context) => string = any;
    const template: TemplateRef<typeof context> = any;
    const directive: PolymorpheusTemplate<typeof context> = any;
    const component = new PolymorpheusComponent(Test);
    const content: PolymorpheusContent<typeof context> = any;

    afterAll(() => {
        (service as any).complete();
    });

    describe(`proper use`, () => {
        it(`manual type works`, () => {
            expect(service.open<string>(str, options).subscribe(callback)).toBeDefined();
        });

        it(`typed handler properly sets types`, () => {
            expect(service.open(handler, options).subscribe(callback)).toBeDefined();
        });

        it(`typed template properly sets types`, () => {
            expect(service.open(template, options).subscribe(callback)).toBeDefined();
        });

        it(`template can use less context`, () => {
            const limited: TemplateRef<TuiContextWithImplicit<Observer<string>>> = any;

            expect(service.open(limited, options).subscribe(callback)).toBeDefined();
        });

        it(`typed directive properly sets types`, () => {
            expect(service.open(directive, options).subscribe(callback)).toBeDefined();
        });

        it(`directive can use less context`, () => {
            const limited: PolymorpheusTemplate<
                TuiContextWithImplicit<Observer<string>>
            > = any;

            expect(service.open(limited, options).subscribe(callback)).toBeDefined();
        });

        it(`component does not cause an error`, () => {
            expect(service.open(component, options).subscribe()).toBeDefined();
        });

        it(`inline component does not cause an error`, () => {
            expect(
                service.open(new PolymorpheusComponent(Test), options).subscribe(),
            ).toBeDefined();
        });

        it(`blanket type works`, () => {
            expect(service.open(content, options).subscribe(callback)).toBeDefined();
        });
    });

    describe(`errors`, () => {
        it(`string without typed output`, () => {
            // @ts-expect-error Type 'void' is not assignable to type 'string'
            expect(service.open(str).subscribe(callback)).toBeDefined();
        });

        it(`wrong data type`, () => {
            // @ts-expect-error Type 'number' is not assignable to type 'boolean'
            expect(service.open(handler, {data: 42}).subscribe(callback)).toBeDefined();
        });

        it(`wrong option key`, () => {
            // @ts-expect-error Argument of type '{ test: number; }' is not assignable to parameter
            expect(service.open(template, {test: 42}).subscribe(callback)).toBeDefined();
        });

        it(`wrong option value`, () => {
            // @ts-expect-error Type '"huge"' is not assignable to type 'TuiDialogSize'
            expect(service.open(template, {size: `huge`}).subscribe()).toBeDefined();
        });

        it(`untyped component retains default options interface`, () => {
            // @ts-expect-error Type '{ test: string; }' has no properties in common with type
            expect(service.open(component, {size: `huge`}).subscribe()).toBeDefined();
        });

        it(`wrong output type`, () => {
            expect(
                // @ts-expect-error Property 'toFixed' does not exist on type 'string'
                service.open(content, options).subscribe(a => a.toFixed(2)),
            ).toBeDefined();
        });

        it(`template with less context of wrong type`, () => {
            const limited: TemplateRef<TuiContextWithImplicit<Observer<number>>> = any;

            // @ts-expect-error Type 'number' is not assignable to type 'string'
            expect(service.open(limited, options).subscribe(callback)).toBeDefined();
        });

        it(`directive with less context of wrong type`, () => {
            const limited: PolymorpheusTemplate<
                TuiContextWithImplicit<Observer<number>>
            > = any;

            // @ts-expect-error Type 'number' is not assignable to type 'string'
            expect(service.open(limited, options).subscribe(callback)).toBeDefined();
        });

        it(`template with wrong context`, () => {
            const wrong: TemplateRef<{test: string}> = any;

            // @ts-expect-error Type '{ test: string; }' has no properties in common with type
            expect(service.open(wrong, options).subscribe()).toBeDefined();
        });

        it(`directive with wrong context`, () => {
            const wrong: PolymorpheusTemplate<{test: string}> = any;

            // @ts-expect-error Type '{ test: string; }' has no properties in common with type
            expect(service.open(wrong, options).subscribe()).toBeDefined();
        });

        it(`blanket type with wrong context`, () => {
            const wrong: PolymorpheusContent<{test: string}> = any;

            // @ts-expect-error Type '{ test: string; }' has no properties in common with type
            expect(service.open(wrong, options).subscribe()).toBeDefined();
        });
    });
});
