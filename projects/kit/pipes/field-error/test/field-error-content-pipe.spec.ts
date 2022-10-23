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

describe(`TuiFieldErrorContentPipe`, () => {
    const testError = `testError`;
    const max = 15;

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
        providers: [
            {
                provide: TUI_VALIDATION_ERRORS,
                useValue: {
                    min: testError,
                    max: ({max}: {max: number}) => `error ${max}`,
                },
            },
        ],
    })
    class TestComponent {
        control = new FormControl(6, [Validators.min(10), Validators.max(max)]);
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
        document.body.style.margin = `0`;
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`Hint`, () => {
        it(`shows validation error`, fakeAsync(() => {
            showHint();
            fixture.detectChanges();
            expect(getTooltip()?.textContent?.trim()).toBe(testError);
        }));

        it(`shows validation error (function error)`, fakeAsync(() => {
            component.control.setValue(22);
            showHint();
            fixture.detectChanges();
            expect(getTooltip()?.textContent?.trim()).toBe(`error ${max}`);
        }));
    });

    function showHint(): void {
        component.control.markAsTouched();
        fixture.detectChanges();
        getHost().dispatchEvent(new Event(`mouseenter`));
        fixture.detectChanges();
        tick(500);
        fixture.detectChanges();
        discardPeriodicTasks();
    }

    function getHost(): Element {
        return document.querySelector(`#hint-host`)!;
    }

    function getTooltip(): Element | null {
        return document.querySelector(`tui-hint`);
    }
});
