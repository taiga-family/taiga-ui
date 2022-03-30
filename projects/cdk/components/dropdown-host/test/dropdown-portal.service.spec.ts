import {TuiDropdownPortalService} from '../dropdown-portal.service';

describe('PortalService', () => {
    let service: TuiDropdownPortalService;

    beforeEach(() => {
        service = new TuiDropdownPortalService();
    });

    it('Template removing', () => {
        let called = 0;
        const viewRefStub: any = {destroy: () => called++};

        service.removeTemplate(viewRefStub);
        expect(called).toEqual(1);
    });

    it('HostView removing', () => {
        let called = 0;
        const componentRefStub: any = {hostView: {destroy: () => called++}};

        service.remove(componentRefStub);
        expect(called).toEqual(1);
    });

    it('throws an error with no host', () => {
        let actual = '';
        const a: any = null;
        const b: any = null;

        try {
            service.add(a, b);
        } catch (err) {
            actual = err.message;
        }

        expect(actual).toEqual('Portals cannot be used without TuiPortalHostComponent');
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
