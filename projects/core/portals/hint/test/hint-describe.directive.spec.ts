import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    type ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {provideTaiga, TuiHint, TuiRoot} from '@taiga-ui/core';

describe('HintDescribe', () => {
    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <button
                    id="hint-describe-host"
                    tuiHint="Tooltip text"
                    tuiHintDescribe
                    type="button"
                    (tuiHintVisible)="visible = $event"
                >
                    Tooltip host
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public visible = false;
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('conceals hint before change detection to prevent visual flash', fakeAsync(() => {
        focusWithKeyboard();

        expect(getTooltip()).not.toBeNull();
        expect(getTooltip()?.classList.contains('_concealed')).toBe(true);
        discardPeriodicTasks();
    }));

    it('mounts hint on keyboard focus before the visual delay', fakeAsync(() => {
        focusWithKeyboard();
        fixture.detectChanges();

        expect(getTooltip()).not.toBeNull();
        expect(getTooltip()?.classList.contains('_concealed')).toBe(true);
        expect(component.visible).toBe(false);

        tick(999);
        fixture.detectChanges();

        expect(getTooltip()?.classList.contains('_concealed')).toBe(true);
        expect(component.visible).toBe(false);

        tick(1);
        fixture.detectChanges();

        expect(getTooltip()?.classList.contains('_concealed')).toBe(false);
        expect(component.visible).toBe(true);
        discardPeriodicTasks();
    }));

    it('removes mounted hint if focus is lost before the visual delay', fakeAsync(() => {
        focusWithKeyboard();
        fixture.detectChanges();

        getHost().blur();
        fixture.detectChanges();

        expect(getTooltip()).toBeNull();
        expect(component.visible).toBe(false);

        tick(1000);
        fixture.detectChanges();

        expect(getTooltip()).toBeNull();
        expect(component.visible).toBe(false);
        discardPeriodicTasks();
    }));

    function focusWithKeyboard(): void {
        document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Tab'}));
        getHost().focus();
    }

    function getHost(): HTMLButtonElement {
        return document.querySelector('#hint-describe-host')!;
    }

    function getTooltip(): Element | null {
        return document.querySelector('tui-hint');
    }
});
