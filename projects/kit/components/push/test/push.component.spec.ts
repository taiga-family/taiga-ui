import {ChangeDetectionStrategy, Component, type DebugElement} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

import {tuiPushOptionsProvider} from '../push.options';
import {TuiPushService} from '../push.service';

describe('Push with TUI_PUSH_OPTIONS', () => {
    @Component({
        standalone: true,
        imports: [TuiRoot],
        template: `
            <tui-root />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    const heading = 'Test';

    let fixture: ComponentFixture<Test>;
    let tuiPushService: TuiPushService;
    let pageObject: TuiPageObject<Test>;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId('tui-push__heading')!;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [tuiPushOptionsProvider({heading}), provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        tuiPushService = TestBed.inject(TuiPushService);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    describe('heading', () => {
        it('correctly shows heading option data', () => {
            tuiPushService.open('Test').subscribe();
            fixture.detectChanges();

            const labelElement = getLabelElement();

            expect(labelElement.nativeElement.textContent.trim()).toBe(heading);
        });
    });
});
