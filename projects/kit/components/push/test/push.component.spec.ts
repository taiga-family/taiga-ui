import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiRootComponent} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiPageObject} from '@taiga-ui/testing';

import {tuiPushOptionsProvider} from '../push.options';
import {TuiPushService} from '../push.service';

describe('Push with TUI_PUSH_OPTIONS', () => {
    @Component({
        standalone: true,
        imports: [TuiRootComponent],
        template: `
            <tui-root></tui-root>
        `,
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
            providers: [tuiPushOptionsProvider({heading}), NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
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
