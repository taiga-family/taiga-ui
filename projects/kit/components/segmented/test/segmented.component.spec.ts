import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {provideTaiga, TuiHint} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

describe('Segmented', () => {
    @Component({
        imports: [TuiHint, TuiSegmented],
        template: `
            <tui-segmented size="s">
                <button
                    tuiHint="Hint"
                    type="button"
                >
                    First
                </button>
                <button type="button">Second</button>
            </tui-segmented>
        `,
    })
    class Test {}

    it('keeps hint anchor when selection changes', async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();

        const root = fixture.nativeElement as HTMLElement;
        const [first, second] = Array.from(
            root.querySelectorAll<HTMLButtonElement>('tui-segmented > button'),
        );

        const hintAnchor = first?.getAttribute('data-tui-anchor');

        expect(hintAnchor).toMatch(/^--/);
        expect(first?.style.getPropertyValue('--tui-anchor')).toBe(hintAnchor);
        expect(first?.classList.contains('tui-segmented_active')).toBe(true);

        second?.click();
        fixture.detectChanges();

        expect(first?.classList.contains('tui-segmented_active')).toBe(false);
        expect(second?.classList.contains('tui-segmented_active')).toBe(true);

        first?.click();
        fixture.detectChanges();

        expect(first?.classList.contains('tui-segmented_active')).toBe(true);
        expect(first?.style.getPropertyValue('--tui-anchor')).toMatch(/^--/);
    });
});
