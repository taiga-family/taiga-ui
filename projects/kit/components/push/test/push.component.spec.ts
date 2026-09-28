import {ChangeDetectionStrategy, Component, type DebugElement} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

import {tuiPushOptionsProvider} from '../push.options';
import {TuiPushService} from '../push.service';

describe('Push with TUI_PUSH_OPTIONS', () => {
    @Component({
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

    describe('top row', () => {
        it('does not render without type, timestamp or icon', () => {
            tuiPushService.open('Test').subscribe();
            fixture.detectChanges();

            expect(getLabelElement()).not.toBeNull();
            expect(fixture.debugElement.query(By.css('.t-top'))).toBeNull();
        });

        it.each([{type: 'News'}, {timestamp: '12:00'}, {icon: '@tui.star'}])(
            'renders with %j',
            (options) => {
                tuiPushService.open('Test', options).subscribe();
                fixture.detectChanges();

                expect(fixture.debugElement.query(By.css('.t-top'))).not.toBeNull();
            },
        );

        it('renders a numeric timestamp', () => {
            tuiPushService.open('Test', {timestamp: 1_700_000_000_000}).subscribe();
            fixture.detectChanges();

            expect(fixture.debugElement.query(By.css('.t-top .t-time'))).not.toBeNull();
        });
    });
});
