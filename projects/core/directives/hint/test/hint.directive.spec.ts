import {Component, TemplateRef} from '@angular/core';
import {
    ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {configureTestSuite} from 'ng-bullet';

import {TuiRootModule} from '../../../components/root/root.module';
import {TuiHintModule} from '../hint.module';

type Hint = string | TemplateRef<{}> | undefined | null;

describe('Hint', () => {
    @Component({
        template: `
            <tui-root>
                <div id="hint-host" tuiHintDirection="top" class="host" [tuiHint]="hint">
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

        it('is shown after 500ms', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getTooltip()!.textContent!.trim()).toBe('Tooltip text');
                done();
            });
        });

        it('is hidden immediately if null is passed as content', done => {
            setHint(null);

            fixture.whenStable().then(() => {
                expect(getTooltip()).toBeNull();
                done();
            });
        });

        it('is hidden after pointer left host with 200ms delay', fakeAsync(() => {
            getHost().dispatchEvent(new Event('mouseleave'));
            fixture.detectChanges();
            tick(200);
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(getTooltip()).toBeNull();
            });
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

        function setHintThenEnterMouse(hint: Hint) {
            setHint(hint);

            getHost().dispatchEvent(new Event('mouseenter'));
            fixture.detectChanges();
        }
    });

    function getHost(): HTMLElement {
        return document.querySelector('#hint-host') as HTMLElement;
    }

    function getTooltip(): Element | null {
        return document.querySelector('[automation-id=tui-hint-box__tooltip]');
    }

    function setHint(hint: Hint) {
        component.hint = hint;
        fixture.detectChanges();
    }
});
