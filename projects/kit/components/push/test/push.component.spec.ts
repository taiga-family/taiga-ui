import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiIdService} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiPushModule} from '../push.module';
import {TuiPushService} from '../push.service';
import {tuiPushOptionsProvider} from '../push.tokens';

describe(`Push with TUI_PUSH_OPTIONS`, () => {
    @Component({
        template: `
            <tui-root></tui-root>
        `,
    })
    class TestComponent {}

    const heading = `Test`;

    let fixture: ComponentFixture<TestComponent>;
    let tuiPushService: TuiPushService;
    let pageObject: TuiPageObject<TestComponent>;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId(`tui-push__heading`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootModule, TuiPushModule],
            declarations: [TestComponent],
            providers: [
                tuiPushOptionsProvider({heading}),
                {
                    provide: TuiPushService,
                    useFactory: () => new TuiPushService(TestBed.inject(TuiIdService)),
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        tuiPushService = TestBed.inject(TuiPushService);
        pageObject = new TuiPageObject(fixture);
    });

    describe(`heading`, () => {
        it(`correctly shows heading option data`, () => {
            tuiPushService.open(`Test`).subscribe();
            fixture.detectChanges();

            const labelElement = getLabelElement();

            expect(labelElement.nativeElement.textContent.trim()).toBe(heading);
        });
    });
});
