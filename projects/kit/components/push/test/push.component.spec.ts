import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootComponent} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

import {TuiPushModule} from '../push.module';
import {tuiPushOptionsProvider} from '../push.options';
import {TuiPushService} from '../push.service';

describe('Push with TUI_PUSH_OPTIONS', () => {
    @Component({
        template: `
            <tui-root></tui-root>
        `,
    })
    class TestComponent {}

    const heading = 'Test';

    let fixture: ComponentFixture<TestComponent>;
    let tuiPushService: TuiPushService;
    let pageObject: TuiPageObject<TestComponent>;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId('tui-push__heading')!;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootComponent, TuiPushModule],
            declarations: [TestComponent],
            providers: [tuiPushOptionsProvider({heading}), NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        tuiPushService = TestBed.inject(TuiPushService);
        pageObject = new TuiPageObject(fixture);
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
