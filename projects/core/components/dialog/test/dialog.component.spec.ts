import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiIdService} from '@taiga-ui/cdk';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiRootModule} from '../../root/root.module';
import {TuiDialogModule} from '../dialog.module';
import {TuiDialogService} from '../dialog.service';
import {tuiDialogOptionsProvider} from '../dialog.tokens';

describe(`Dialog with TUI_DIALOG_OPTIONS`, () => {
    @Component({
        template: `
            <tui-root></tui-root>
        `,
    })
    class TestComponent {}

    const closeable = false;

    let fixture: ComponentFixture<TestComponent>;
    let tuiDialogService: TuiDialogService;
    let pageObject: TuiPageObject<TestComponent>;

    function getCloseButton(): DebugElement {
        return pageObject.getByAutomationId(`tui-dialog__close`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootModule, TuiDialogModule],
            declarations: [TestComponent],
            providers: [
                tuiDialogOptionsProvider({closeable}),
                {
                    provide: TuiDialogService,
                    useFactory: () => new TuiDialogService(TestBed.inject(TuiIdService)),
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        tuiDialogService = TestBed.inject(TuiDialogService);
        pageObject = new TuiPageObject(fixture);
    });

    describe(`close button`, () => {
        it(`when closeable = false is absent`, () => {
            tuiDialogService.open(`Test`).subscribe();
            fixture.detectChanges();

            expect(getCloseButton()).toBeNull();
        });
    });
});
