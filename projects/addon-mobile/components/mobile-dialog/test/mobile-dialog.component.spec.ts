import {ChangeDetectionStrategy, Component, type DebugElement} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    tuiMobileDialogOptionsProvider,
    TuiMobileDialogService,
} from '@taiga-ui/addon-mobile';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

describe('Mobile Dialog with TUI_MOBILE_DIALOG_OPTIONS', () => {
    @Component({
        imports: [TuiRoot],
        template: `
            <tui-root />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    const label = 'Test';

    let fixture: ComponentFixture<Test>;
    let tuiMobileDialogService: TuiMobileDialogService;
    let pageObject: TuiPageObject<Test>;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId('tui-mobile-dialog__label')!;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [tuiMobileDialogOptionsProvider({label}), provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
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
