import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiMobileCalendarDropdown} from '@taiga-ui/addon-mobile';
import {type TuiDay} from '@taiga-ui/cdk';
import {provideTaiga, TuiDialog, TuiDropdownDirective, TuiRoot} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

describe('TuiMobileCalendarDropdown as a dropdown inside a dialog', () => {
    @Component({
        imports: [
            FormsModule,
            TuiDialog,
            TuiInputDate,
            TuiMobileCalendarDropdown,
            TuiRoot,
        ],
        template: `
            <tui-root>
                <ng-template
                    [tuiDialogOptions]="{appearance: 'fullscreen'}"
                    [(tuiDialog)]="open"
                >
                    <tui-textfield tuiMobileCalendar>
                        <input
                            tuiInputDate
                            [(ngModel)]="value"
                        />
                        <tui-calendar *tuiDropdown />
                    </tui-textfield>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly open = signal(false);
        public value: TuiDay | null = null;
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga(), {provide: WA_IS_MOBILE, useValue: true}],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
        fixture.componentInstance.open.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
    });

    function openCalendar(): TuiDropdownDirective {
        const dropdown = fixture.debugElement
            .query(By.css('tui-textfield'))
            .injector.get(TuiDropdownDirective);

        dropdown.toggle(true);
        fixture.detectChanges();

        return dropdown;
    }

    it('opens the mobile calendar as its dropdown, not the enclosing dialog', () => {
        const dropdown = openCalendar();

        expect(dropdown.ref()).not.toBeNull();
        expect(fixture.componentInstance.open()).toBe(true);
    });

    it('leaves the enclosing dialog open when the calendar is closed', () => {
        const dropdown = openCalendar();

        // Simulates pressing "Done"/"Cancel": the calendar closes itself.
        // Regression (#14561): it must not complete the dialog's observer too.
        (dropdown.ref()?.instance as {close: () => void}).close();
        fixture.detectChanges();

        expect(fixture.componentInstance.open()).toBe(true);
    });
});
