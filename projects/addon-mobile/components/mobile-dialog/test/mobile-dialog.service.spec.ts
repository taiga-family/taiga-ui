import {TemplateRef} from '@angular/core';
import {TuiMobileDialogContext, TuiMobileDialogService} from '@taiga-ui/addon-mobile';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {
    PolymorpheusComponent,
    PolymorpheusContent,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {Observer, Subject} from 'rxjs';

describe(`MobileDialog type inference tests`, () => {
    class Test {}
    const any: any = null;
    const service: TuiMobileDialogService = new Subject() as any;

    const input: boolean = any;
    const output: number = any;
    const context: TuiMobileDialogContext<typeof input> = any;
    const callback: (v: typeof output) => void = any;

    const str: string = any;
    const handler: (c: typeof context) => string = any;
    const template: TemplateRef<typeof context> = any;
    const directive: PolymorpheusTemplate<typeof context> = any;
    const untyped = new PolymorpheusComponent(Test);
    const typed = new PolymorpheusComponent<Test, typeof context>(Test);
    const content: PolymorpheusContent<typeof context> = any;

    afterAll(() => {
        (service as any).complete();
    });

    describe(`proper use`, () => {
        it(`automatic type works`, () => {
            expect(service.open(str, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`typed handler properly sets types`, () => {
            expect(service.open(handler, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`typed template properly sets types`, () => {
            expect(
                service.open(template, {label: `s`}).subscribe(callback),
            ).toBeDefined();
        });

        it(`template can use less context`, () => {
            const limited: TemplateRef<TuiContextWithImplicit<Observer<number>>> = any;

            expect(service.open(limited, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`typed directive properly sets types`, () => {
            expect(
                service.open(directive, {label: `s`}).subscribe(callback),
            ).toBeDefined();
        });

        it(`directive can use less context`, () => {
            const limited: PolymorpheusTemplate<
                TuiContextWithImplicit<Observer<number>>
            > = any;

            expect(service.open(limited, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`untyped component does not cause an error`, () => {
            expect(service.open(untyped, {label: `s`}).subscribe()).toBeDefined();
        });

        it(`inline component does not cause an error`, () => {
            expect(
                service.open(new PolymorpheusComponent(Test), {label: `s`}).subscribe(),
            ).toBeDefined();
        });

        it(`typed component works`, () => {
            expect(service.open(typed, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`blanket type works`, () => {
            expect(service.open(content, {label: `s`}).subscribe(callback)).toBeDefined();
        });
    });

    describe(`errors`, () => {
        it(`wrong data type`, () => {
            // @ts-expect-error Type 'number' is not assignable to type 'boolean'
            expect(service.open(handler, {data: 42}).subscribe(callback)).toBeDefined();
        });

        it(`wrong option key`, () => {
            // @ts-expect-error Argument of type '{ test: number; }' is not assignable to parameter
            expect(service.open(template, {test: 42}).subscribe(callback)).toBeDefined();
        });

        it(`wrong option value`, () => {
            expect(
                // @ts-expect-error Type '"huge"' is not assignable to type 'TuiDialogSize'
                service.open(typed, {label: 42}).subscribe(callback),
            ).toBeDefined();
        });

        it(`untyped component retains default options interface`, () => {
            // @ts-expect-error Type '{ label: number; }' has no properties in common with type
            expect(service.open(untyped, {label: 42}).subscribe()).toBeDefined();
        });

        it(`wrong output type`, () => {
            expect(
                // @ts-expect-error Property 'at' does not exist on type 'number'
                service.open(content, {label: `s`}).subscribe(a => a.at(2)),
            ).toBeDefined();
        });

        it(`template with less context of wrong type`, () => {
            const limited: TemplateRef<TuiContextWithImplicit<Observer<string>>> = any;

            // @ts-expect-error Type 'string' is not assignable to type 'number'
            expect(service.open(limited, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`directive with less context of wrong type`, () => {
            const limited: PolymorpheusTemplate<
                TuiContextWithImplicit<Observer<string>>
            > = any;

            // @ts-expect-error Type 'string' is not assignable to type 'number'
            expect(service.open(limited, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`template with wrong context`, () => {
            const wrong: TemplateRef<{test: string}> = any;

            // @ts-expect-error Type '{ test: string; }' has no properties in common with type
            expect(service.open(wrong, {label: `s`}).subscribe(callback)).toBeDefined();
        });

        it(`directive with wrong context`, () => {
            const wrong: PolymorpheusTemplate<{test: string}> = any;

            // @ts-expect-error Type '{ test: string; }' has no properties in common with type
            expect(service.open(wrong, {label: `s`}).subscribe(callback)).toBeDefined();
        });
    });
});
