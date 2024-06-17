import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiHintDirective, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiFieldErrorContentPipe} from '@taiga-ui/kit/pipes';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';

describe('TuiFieldErrorContentPipe', () => {
    const testError = 'testError';
    const max = 15;

    @Component({
        standalone: true,
        imports: [
            TuiRoot,
            TuiHintDirective,
            ReactiveFormsModule,
            TuiFieldErrorContentPipe,
        ],
        template: `
            <tui-root>
                <input
                    id="hint-host"
                    tuiHintDirection="top"
                    class="host"
                    [formControl]="control"
                    [tuiHint]="[] | tuiFieldErrorContent"
                />
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
    class Test {
        public control = new FormControl(6, [Validators.min(10), Validators.max(max)]);
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        document.body.style.margin = '0';
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Hint', () => {
        it('shows validation error', fakeAsync(() => {
            showHint();
            fixture.detectChanges();
            expect(getTooltip()?.textContent?.trim()).toBe(testError);
        }));

        it('shows validation error (function error)', fakeAsync(() => {
            component.control.setValue(22);
            showHint();
            fixture.detectChanges();
            expect(getTooltip()?.textContent?.trim()).toBe(`error ${max}`);
        }));
    });

    function showHint(): void {
        component.control.markAsTouched();
        fixture.detectChanges();
        getHost().dispatchEvent(new Event('mouseenter'));
        fixture.detectChanges();
        tick(500);
        fixture.detectChanges();
        discardPeriodicTasks();
    }

    function getHost(): Element {
        return document.querySelector('#hint-host')!;
    }

    function getTooltip(): Element | null {
        return document.querySelector('tui-hint');
    }
});
