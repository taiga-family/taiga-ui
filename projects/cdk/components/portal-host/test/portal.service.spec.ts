import {TuiPortalService} from '../portal.service';

describe('PortalService', () => {
    let service: TuiPortalService;

    beforeEach(() => {
        service = new TuiPortalService();
    });

    it('Template removing', () => {
        let called = 0;
        const viewRefStub: any = {destroy: () => called++};

        service.removeTemplate(viewRefStub);
    });

    it('HostView removing', () => {
        let called = 0;
        const componentRefStub: any = {hostView: {destroy: () => called++}};

        service.remove(componentRefStub);
    });

    it('throws an error with no host', () => {
        const a: any = null;
        const b: any = null;

        try {
            service.add(a, b);
            fail();
        } catch (e) {
            expect(e).toBeTruthy();
        }
    });

    it('addTemplateChild with host attached', () => {
        const a: any = null;
        const result = {};
        const componentPortalStub: any = {
            addTemplateChild: () => result,
        };

        service.attach(componentPortalStub);

        expect(service.addTemplate(a)).toBe(result as any);
    });
});
