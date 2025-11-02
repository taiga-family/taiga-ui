import {type HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {
    provideTaiga,
    tuiDialogOptionsProvider,
    TuiDialogService,
    TuiRoot,
} from '@taiga-ui/core';
import {TuiDialogHarness} from '@taiga-ui/testing';

describe('Dialogs', () => {
    @Component({
        imports: [TuiActiveZone, TuiRoot],
        template: `
            <tui-root>
                <div (tuiActiveZoneChange)="onActive($event)">
                    <button
                        type="button"
                        (click)="dialogs.open('Dialog').subscribe()"
                    >
                        Open dialog
                    </button>
                </div>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public dialogs = inject(TuiDialogService);
        public onActive = jest.fn();
    }

    const closable = false;

    let fixture: ComponentFixture<Test>;
    let service: TuiDialogService;
    let loader: HarnessLoader;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [tuiDialogOptionsProvider({closable}), provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);
        service = TestBed.inject(TuiDialogService);
        fixture.detectChanges();
    });

    describe('close button', () => {
        it('when closable = false is absent', async () => {
            service.open('Test').subscribe();
            fixture.detectChanges();

            const dialog = await loader.getHarness(TuiDialogHarness);

            expect(await dialog.getCloseButton()).toBeNull();
        });
    });

    describe('active zone', () => {
        it('stays true when dialog is activated', () => {
            const button = fixture.debugElement.query(By.css('button'));

            button.nativeElement.focus();
            button.nativeElement.click();
            fixture.detectChanges();
            fixture.debugElement.query(By.css('tui-dialog button')).nativeElement.focus();

            expect(fixture.componentInstance.onActive).toHaveBeenCalledTimes(1);
            expect(fixture.componentInstance.onActive).toHaveBeenCalledWith(true);
        });
    });
});
