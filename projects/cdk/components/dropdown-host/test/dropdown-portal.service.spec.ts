import type {ComponentRef, EmbeddedViewRef, TemplateRef} from '@angular/core';
import type {AbstractTuiPortalHostComponent} from '@taiga-ui/cdk';
import {TuiDropdownPortalService} from '@taiga-ui/cdk';
import type {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

describe(`PortalService`, () => {
    let service: TuiDropdownPortalService;

    beforeEach(() => {
        service = new TuiDropdownPortalService();
    });

    it(`Template removing`, () => {
        let called = 0;
        const viewRefStub: EmbeddedViewRef<unknown> = {
            destroy: () => called++,
        } as unknown as EmbeddedViewRef<unknown>;

        service.removeTemplate(viewRefStub);
        expect(called).toEqual(1);
    });

    it(`HostView removing`, () => {
        let called = 0;
        const componentRefStub: ComponentRef<unknown> = {
            hostView: {destroy: () => called++},
        } as unknown as ComponentRef<unknown>;

        service.remove(componentRefStub);
        expect(called).toEqual(1);
    });

    it(`throws an error with no host`, () => {
        let actual = ``;
        const a = null as unknown as PolymorpheusComponent<unknown, any>;

        try {
            service.add(a);
        } catch (err) {
            actual = (err as Error)?.message;
        }

        expect(actual).toEqual(`Portals cannot be used without TuiPortalHostComponent`);
    });

    it(`addTemplateChild with host attached`, () => {
        const a: TemplateRef<unknown> = null as unknown as TemplateRef<unknown>;
        const result: EmbeddedViewRef<unknown> = {} as EmbeddedViewRef<unknown>;
        const componentPortalStub: AbstractTuiPortalHostComponent = {
            addTemplateChild: () => result,
        } as unknown as AbstractTuiPortalHostComponent;

        service.attach(componentPortalStub);

        expect(service.addTemplate(a)).toBe(result);
    });
});
