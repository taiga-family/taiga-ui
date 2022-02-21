import {Component} from '@angular/core';
import {
    ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiHintModule, TuiRootModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit/components';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit/pipes';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import {configureTestSuite} from '@taiga-ui/testing';

describe('TuiFieldErrorContentPipe', () => {
    const testError = 'testError';

    @Component({
        template: `
            <tui-root>
                <tui-input
                    id="hint-host"
                    tuiHintDirection="top"
                    class="host"
                    [tuiHint]="[] | tuiFieldErrorContent"
                    [formControl]="control"
                >
                    Tooltip host
                </tui-input>
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
        providers: [{provide: TUI_VALIDATION_ERRORS, useValue: {min: testError}}],
    })
    class TestComponent {
        control = new FormControl(6, [Validators.min(10)]);
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiHintModule,
                TuiRootModule,
                ReactiveFormsModule,
                TuiInputModule,
                TuiFieldErrorPipeModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        document.body.style.margin = '0';
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Hint', () => {
        beforeEach(fakeAsync(() => {
            component.control.markAsTouched();
            fixture.detectChanges();
            getHost().dispatchEvent(new Event('mouseenter'));
            fixture.detectChanges();
            tick(500);
            fixture.detectChanges();
            discardPeriodicTasks();
        }));

        it('shows validation error', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getTooltip()!.textContent!.trim()).toBe(testError);
                done();
            });
        });
    });

    function getHost(): HTMLElement {
        return document.querySelector('#hint-host') as HTMLElement;
    }

    function getTooltip(): Element | null {
        return document.querySelector('[automation-id=tui-hint-box__tooltip]');
    }
});
