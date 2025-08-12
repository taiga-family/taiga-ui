import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiRoot} from '@taiga-ui/core';
import {provideEventPlugins} from '@taiga-ui/event-plugins';
import {tuiDialogOptionsProvider, TuiDialogService} from '@taiga-ui/experimental';
import {TuiDialogHarness} from '@taiga-ui/testing';

describe('Dialog with TUI_DIALOG_OPTIONS', () => {
    @Component({
        standalone: true,
        imports: [TuiRoot],
        template: '<tui-root />',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    const closable = false;

    let fixture: ComponentFixture<Test>;
    let tuiDialogService: TuiDialogService;
    let loader: HarnessLoader;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [tuiDialogOptionsProvider({closable}), provideEventPlugins()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);
        tuiDialogService = TestBed.inject(TuiDialogService);
    });

    describe('close button', () => {
        it('when closeable = false is absent', async () => {
            tuiDialogService.open('Test').subscribe();
            fixture.detectChanges();

            const dialog = await loader.getHarness(TuiDialogHarness);

            expect(await dialog.getCloseButton()).toBeNull();
        });
    });
});
