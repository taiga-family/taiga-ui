import {ChangeDetectionStrategy, Component} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {TuiPortals, TuiPortalService, tuiProvide, TuiVCR} from '@taiga-ui/cdk';
import {provideTaiga, TuiDropdown, TuiPopupService, TuiRoot} from '@taiga-ui/core';

describe('TuiDropdownSheet inside a custom portal host', () => {
    @Component({
        selector: 'tui-test-portal-host',
        imports: [TuiVCR],
        template: '<ng-content /><ng-container tuiVCR />',
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [TuiPopupService, tuiProvide(TuiPortalService, TuiPopupService)],
    })
    class PortalHost extends TuiPortals {}

    @Component({
        imports: [PortalHost, TuiDropdown, TuiDropdownSheet, TuiRoot],
        template: `
            <tui-root>
                <tui-test-portal-host>
                    <button
                        tuiDropdown="Content"
                        tuiDropdownAuto
                        tuiDropdownSheet
                        type="button"
                    >
                        Open
                    </button>
                </tui-test-portal-host>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    it('renders the sheet outside of the inert page content', fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga(), {provide: WA_IS_MOBILE, useValue: true}],
        });

        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        tick();
        fixture.detectChanges();
        tick();

        const sheet: Element | null =
            fixture.nativeElement.querySelector('tui-sheet-dialog');

        expect(sheet).not.toBeNull();
        expect(sheet?.closest('[inert]')).toBeNull();

        fixture.destroy();
    }));
});
