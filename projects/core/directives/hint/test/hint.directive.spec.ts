import {ChangeDetectionStrategy, Component, type TemplateRef} from '@angular/core';
import {
    type ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {provideTaiga, TuiHint, TuiRoot} from '@taiga-ui/core';

type Hint = TemplateRef<Record<string, unknown>> | string | null | undefined;

describe('Hint', () => {
    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <div
                    id="hint-host"
                    tuiHintDirection="top"
                    class="host"
                    [tuiHint]="hint"
                    (tuiHintVisible)="hoverStateChanged($event)"
                >
                    Tooltip host
                </div>
            </tui-root>
        `,
        styles: `
            .host {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
            }
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public hint: Hint = 'Tooltip text';
        public hoverState = false;

        public hoverStateChanged(hoverState: boolean): void {
            this.hoverState = hoverState;
        }
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        document.body.style.margin = '0';
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('hint is not shown immediately', () => {
        getHost().dispatchEvent(new Event('mouseenter'));
        fixture.detectChanges();

        expect(getTooltip()).toBeNull();
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

            expect(getTooltip()?.textContent?.trim()).toBe('Tooltip text');
        });

        it('should emit tuiHintVisible on mouseenter/mouseout', fakeAsync(async () => {
            await fixture.whenStable();
            fixture.detectChanges();

            expect(component.hoverState).toBeTruthy();

            getHost().dispatchEvent(new Event('mouseout'));
            fixture.detectChanges();
            tick(200);
            fixture.detectChanges();
            discardPeriodicTasks();

            expect(component.hoverState).toBeFalsy();
        }));

        it('is hidden immediately if null is passed as content', async () => {
            setHint(null);

            await fixture.whenStable();

            expect(getTooltip()).toBeNull();
        });

        // TODO: Figure out why this stopped working
        it.skip('is hidden after pointer left host with 200ms delay', fakeAsync(async () => {
            getHost().dispatchEvent(new Event('mouseout'));
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

    function getHost(): Element {
        return document.querySelector('#hint-host')!;
    }

    function getTooltip(): Element | null {
        return document.querySelector('tui-hint');
    }

    function setHint(hint: Hint): void {
        component.hint = hint;
        fixture.detectChanges();
    }
});
