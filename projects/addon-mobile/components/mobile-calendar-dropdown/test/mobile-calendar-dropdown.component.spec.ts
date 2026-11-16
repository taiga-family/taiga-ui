import {
    ChangeDetectionStrategy,
    Component,
    type TemplateRef,
    ViewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {
    TuiMobileCalendarDropdownNew,
    tuiProvideMobileCalendar,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE, TuiDay} from '@taiga-ui/cdk';
import {TuiDropdownDirective, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {provideEventPlugins} from '@taiga-ui/event-plugins';
import {tuiDialogOptionsProvider, TuiDialogService} from '@taiga-ui/experimental';
import {TuiInputDate} from '@taiga-ui/kit';

describe('TuiMobileCalendarDropdown as a dropdown inside a dialog', () => {
    @Component({
        standalone: true,
        imports: [
            FormsModule,
            TuiInputDate,
            TuiMobileCalendarDropdownNew,
            TuiRoot,
            TuiTextfield,
        ],
        template: `
            <tui-root>
                <ng-template #content>
                    <tui-textfield tuiMobileCalendar>
                        <input
                            tuiInputDate
                            [(ngModel)]="value"
                        />
                        <tui-calendar *tuiTextfieldDropdown />
                    </tui-textfield>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild('content', {static: true})
        public readonly content!: TemplateRef<unknown>;

        public open = false;
        public value: TuiDay | null = null;
    }

    let fixture: ComponentFixture<Test>;
    let tuiDialogService: TuiDialogService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                {provide: TUI_IS_MOBILE, useValue: true},
                tuiProvideMobileCalendar(),
                tuiDialogOptionsProvider({appearance: 'fullscreen'}),
                provideEventPlugins(),
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        tuiDialogService = TestBed.inject(TuiDialogService);
    });

    function openCalendar(): TuiDropdownDirective {
        tuiDialogService.open(fixture.componentInstance.content).subscribe({
            complete: () => {
                fixture.componentInstance.open = false;
            },
        });
        fixture.detectChanges();
        fixture.componentInstance.open = true;
        fixture.detectChanges();

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
        expect(fixture.componentInstance.open).toBe(true);
    });

    it('leaves the enclosing dialog open when the calendar is closed', () => {
        const dropdown = openCalendar();

        // Simulates pressing "Cancel": the calendar closes itself.
        // Regression (#14561): it must not complete the dialog's observer too.
        (dropdown.ref()?.instance as {close(): void}).close();
        fixture.detectChanges();

        expect(fixture.componentInstance.open).toBe(true);
    });

    it('leaves the enclosing dialog open when the calendar confirms a date', () => {
        const dropdown = openCalendar();

        // Simulates pressing "Done": confirming a value must not close the dialog.
        // Regression: `observer.next()` was resolved from the enclosing dialog context.
        (dropdown.ref()?.instance as {confirm(value: TuiDay): void}).confirm(
            new TuiDay(2000, 0, 1),
        );
        fixture.detectChanges();

        expect(fixture.componentInstance.open).toBe(true);
    });
});
