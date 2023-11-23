import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiIdService} from '@taiga-ui/cdk';
import {configureTestSuite, TuiDialogHarness} from '@taiga-ui/testing';

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
    let loader: HarnessLoader;

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
        loader = TestbedHarnessEnvironment.loader(fixture);
        tuiDialogService = TestBed.inject(TuiDialogService);
    });

    describe(`close button`, () => {
        it(`when closeable = false is absent`, async () => {
            tuiDialogService.open(`Test`).subscribe();
            fixture.detectChanges();

            const dialog = await loader.getHarness(TuiDialogHarness);

            expect(await dialog.getCloseButton()).toBeNull();
        });
    });
});
