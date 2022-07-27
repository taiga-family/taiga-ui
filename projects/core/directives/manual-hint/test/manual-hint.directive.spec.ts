import {CommonModule} from '@angular/common';
import {Component, TemplateRef} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiRootModule} from '../../../components/root/root.module';
import {TuiManualHintModule} from '../manual-hint.module';

type Hint = string | TemplateRef<Record<string, unknown>> | undefined | null;

describe(`ManualHint`, () => {
    @Component({
        template: `
            <tui-root>
                <div
                    *ngIf="host"
                    id="hint-host"
                    tuiHintDirection="top"
                    class="host"
                    [tuiManualHintShow]="show"
                    [tuiManualHint]="hint"
                >
                    Tooltip host
                </div>
            </tui-root>
        `,
        styles: [
            `
                .host {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            `,
        ],
    })
    class TestComponent {
        hint: Hint = `Tooltip text`;
        show = false;
        host = true;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                TuiManualHintModule,
                TuiRootModule,
                NoopAnimationsModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        document.body.style.margin = `0`;
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Tooltip is showed with flag`, fakeAsync(() => {
        component.show = true;

        fixture.detectChanges();
        tick();

        expect(getTooltip()).not.toBeNull();
    }));

    it(`Tooltip disappears if host disappears with flag`, async () => {
        component.show = true;

        fixture.detectChanges();

        component.host = false;

        fixture.detectChanges();

        await fixture.whenStable();

        fixture.detectChanges();
        expect(getTooltip()).toBeNull();
    });

    it(`Tooltip is not showed with no flag`, async () => {
        component.show = false;

        fixture.detectChanges();

        await fixture.whenStable();

        expect(getTooltip()).toBeNull();
    });

    function getTooltip(): Element | null {
        return document.querySelector(`[automation-id=tui-hint-box__tooltip]`);
    }
});
