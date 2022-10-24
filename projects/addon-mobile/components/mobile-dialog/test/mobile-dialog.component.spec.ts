import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiIdService} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiMobileDialogModule} from '../mobile-dialog.module';
import {TuiMobileDialogService} from '../mobile-dialog.service';
import {tuiMobileDialogOptionsProvider} from '../mobile-dialog.tokens';

describe(`Mobile Dialog with TUI_MOBILE_DIALOG_OPTIONS`, () => {
    @Component({
        template: `
            <tui-root></tui-root>
        `,
    })
    class TestComponent {}

    const label = `Test`;

    let fixture: ComponentFixture<TestComponent>;
    let tuiMobileDialogService: TuiMobileDialogService;
    let pageObject: TuiPageObject<TestComponent>;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId(`tui-mobile-dialog__label`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootModule, TuiMobileDialogModule],
            declarations: [TestComponent],
            providers: [
                tuiMobileDialogOptionsProvider({label}),
                {
                    provide: TuiMobileDialogService,
                    useFactory: () =>
                        new TuiMobileDialogService(TestBed.inject(TuiIdService)),
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        tuiMobileDialogService = TestBed.inject(TuiMobileDialogService);
        pageObject = new TuiPageObject(fixture);
    });

    describe(`label`, () => {
        it(`correctly shows label option data`, () => {
            tuiMobileDialogService.open(`Test`).subscribe();
            fixture.detectChanges();

            const labelElement = getLabelElement();

            expect(labelElement).toBeTruthy();
            expect(labelElement.nativeElement.textContent.trim()).toBe(label);
        });
    });
});
