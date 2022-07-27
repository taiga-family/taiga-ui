import {ComponentFactoryResolver, Injector, Renderer2} from '@angular/core';

import {TuiDirectiveStylesService} from '../directive-styles.service';

describe(`TuiDirectiveStylesService service`, () => {
    it(`does nothing with renderer if there is no head.querySelector`, () => {
        let called = 0;
        const stub: unknown = {
            head: {
                querySelector: () => ++called,
            },
        };

        const service = new TuiDirectiveStylesService(
            null as unknown as ComponentFactoryResolver,
            null as unknown as Injector,
            stub as unknown as Document,
            null as unknown as Renderer2,
        );

        service.addStyle(`test`, `test`);

        expect(called).toBe(1);
    });

    it(`add styles to renderer`, () => {
        let called = 0;

        const rendererStub: unknown = {
            createElement: () => document.createElement(`div`),
            setProperty: () => ++called,
            setAttribute: () => ++called,
        };

        const service = new TuiDirectiveStylesService(
            null as unknown as ComponentFactoryResolver,
            null as unknown as Injector,
            document,
            rendererStub as Renderer2,
        );

        service.addStyle(`p { color: black; }`, `test`);

        expect(called).toBe(2);
    });
});
