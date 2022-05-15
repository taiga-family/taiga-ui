import {Component, TemplateRef} from '@angular/core';
import {
    ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {tuiAssertIsHTMLElement} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiHintModule} from '../hint.module';

type Hint = string | TemplateRef<Record<string, unknown>> | undefined | null;

describe('Hint', () => {
    @Component({
        template: `
            <tui-root>
                <div
                    id="hint-host"
                    tuiHintDirection="top"
                    class="host"
                    [tuiHint]="hint"
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
        hint: Hint = 'Tooltip text';
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiHintModule,
                TuiRootModule,
                NoopAnimationsModule,
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

    it('Hint is not shown immediately', () => {
        getHost().dispatchEvent(new Event('mouseenter'));
        fixture.detectChanges();
        expect(getTooltip()).toBe(null);
    });

    describe('Hint', () => {
        beforeEach(fakeAsync(() => {
            getHost().dispatchEvent(new Event('mouseenter'));
            fixture.detectChanges();
            tick(500);
            fixture.detectChanges();
            discardPeriodicTasks();
        }));

        it('is shown after 500ms', async () => {
            await fixture.whenStable();
            fixture.detectChanges();
            expect(getTooltip()!.textContent!.trim()).toBe('Tooltip text');
        });

        it('is hidden immediately if null is passed as content', async () => {
            setHint(null);

            await fixture.whenStable();
            expect(getTooltip()).toBeNull();
        });

        it('is hidden after pointer left host with 200ms delay', fakeAsync(async () => {
            getHost().dispatchEvent(new Event('mouseleave'));
            fixture.detectChanges();
            tick(200);
            fixture.detectChanges();

            await fixture.whenStable();

            expect(getTooltip()).toBeNull();
        }));
    });

    describe('Hint is not shown', () => {
        it('when content is empty string', fakeAsync(() => {
            setHintThenEnterMouse('');
            tick(500);
            fixture.detectChanges();
            discardPeriodicTasks();

            expect(getTooltip()).toBeNull();
        }));

        it('when content is null', fakeAsync(() => {
            setHintThenEnterMouse(null);
            tick(500);
            fixture.detectChanges();
            discardPeriodicTasks();

            expect(getTooltip()).toBeNull();
        }));

        function setHintThenEnterMouse(hint: Hint): void {
            setHint(hint);

            getHost().dispatchEvent(new Event('mouseenter'));
            fixture.detectChanges();
        }
    });

    function getHost(): HTMLElement {
        const element = document.querySelector('#hint-host');

        tuiAssertIsHTMLElement(element);

        return element;
    }

    function getTooltip(): Element | null {
        return document.querySelector('[automation-id=tui-hint-box__tooltip]');
    }

    function setHint(hint: Hint): void {
        component.hint = hint;
        fixture.detectChanges();
    }
});
