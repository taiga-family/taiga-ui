import {TemplateRef} from '@angular/core';
import {TuiBaseDialogContext, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiPushOptions, TuiPushService} from '@taiga-ui/kit';
import {
    PolymorpheusComponent,
    PolymorpheusContent,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {Observer, Subject} from 'rxjs';

interface TuiPushContext extends TuiBaseDialogContext<string>, TuiPushOptions {}

describe(`Push type inference tests`, () => {
    class Test {}
    const any: any = null;
    const service: TuiPushService = new Subject() as any;

    const output: string = any;
    const context: TuiPushContext = any;
    const callback: (v: typeof output) => void = any;
    const options = {timestamp: 1234} as const;

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
        it(`automatic type works`, () => {
            expect(service.open(str, options).subscribe(callback)).toBeDefined();
        });

        it(`typed handler works`, () => {
            expect(service.open(handler, options).subscribe(callback)).toBeDefined();
        });

        it(`typed template works`, () => {
            expect(service.open(template, options).subscribe(callback)).toBeDefined();
        });

        it(`template can use less context`, () => {
            const limited: TemplateRef<TuiContextWithImplicit<Observer<number>>> = any;

            expect(service.open(limited, options).subscribe(callback)).toBeDefined();
        });

        it(`typed directive works`, () => {
            expect(service.open(directive, options).subscribe(callback)).toBeDefined();
        });

        it(`directive can use less context`, () => {
            const limited: PolymorpheusTemplate<
                TuiContextWithImplicit<Observer<number>>
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

        it(`return type is ignored if service provides it`, () => {
            const limited: TemplateRef<TuiContextWithImplicit<Observer<string>>> = any;

            expect(service.open(limited, options).subscribe(callback)).toBeDefined();
        });
    });

    describe(`errors`, () => {
        it(`wrong option key`, () => {
            // @ts-expect-error Argument of type '{ test: number; }' is not assignable to parameter
            expect(service.open(template, {test: 42}).subscribe(callback)).toBeDefined();
        });

        it(`wrong option value`, () => {
            // @ts-expect-error Type 'number' is not assignable to type 'string'
            expect(service.open(template, {type: 42}).subscribe(callback)).toBeDefined();
        });

        it(`wrong output type`, () => {
            expect(
                // @ts-expect-error Property 'at' does not exist on type 'number'
                service.open(content, options).subscribe(a => a.toFixed(2)),
            ).toBeDefined();
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
