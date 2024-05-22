import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiMobileDialogComponent,
    tuiMobileDialogOptionsProvider,
    TuiMobileDialogService,
} from '@taiga-ui/addon-mobile';
import {TuiRootComponent} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

describe('Mobile Dialog with TUI_MOBILE_DIALOG_OPTIONS', () => {
    @Component({
        template: `
            <tui-root></tui-root>
        `,
    })
    class TestComponent {}

    const label = 'Test';

    let fixture: ComponentFixture<TestComponent>;
    let tuiMobileDialogService: TuiMobileDialogService;
    let pageObject: TuiPageObject<TestComponent>;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId('tui-mobile-dialog__label')!;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootComponent, TuiMobileDialogComponent],
            declarations: [TestComponent],
            providers: [tuiMobileDialogOptionsProvider({label})],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        tuiMobileDialogService = TestBed.inject(TuiMobileDialogService);
        pageObject = new TuiPageObject(fixture);
    });

    describe('label', () => {
        it('correctly shows label option data', () => {
            tuiMobileDialogService.open('Test').subscribe();
            fixture.detectChanges();

            const labelElement = getLabelElement();

            expect(labelElement).toBeTruthy();
            expect(labelElement.nativeElement.textContent.trim()).toBe(label);
        });
    });
});
