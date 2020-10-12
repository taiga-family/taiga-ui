import {TuiDirectiveStylesService} from '../directive-styles.service';

describe('TuiDirectiveStylesService service', () => {
    it('does nothing with renderer if there is no head.querySelector', () => {
        let called = 0;
        const stub: any = {
            head: {
                querySelector: () => ++called,
            },
        };

        const service = new TuiDirectiveStylesService(stub, null as any);

        service.addStyle('test', 'test');

        expect(called).toBe(1);
    });

    it('add styles to renderer', () => {
        let called = 0;

        const rendererStub: any = {
            createElement: () => document.createElement('div'),
            setProperty: () => ++called,
            setAttribute: () => ++called,
        };

        const service = new TuiDirectiveStylesService(document, rendererStub);

        service.addStyle('p { color: black; }', 'test');

        expect(called).toBe(2);
    });
});
