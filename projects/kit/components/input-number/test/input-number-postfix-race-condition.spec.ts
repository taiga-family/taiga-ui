import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    type DebugElement,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, TuiInputNumber, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiInputNumber
                    [postfix]="value | i18nPlural: pluralize"
                    [(ngModel)]="value"
                    (keydown.arrowDown)="updateValue(1)"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestComponent {
    protected readonly pluralize = {
        '=1': ' day ago',
        other: ' days ago',
    };

    protected value = 2;

    constructor(private readonly cdr: ChangeDetectorRef) {}

    public setValue(newValue: number): void {
        this.value = newValue;
        this.cdr.markForCheck(); // Trigger change detection for OnPush
    }

    protected updateValue(newValue: number): void {
        this.value = newValue;
        this.cdr.markForCheck(); // Trigger change detection for OnPush
    }
}

describe('InputNumber postfix race condition', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let input: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        input = fixture.debugElement.query(By.css('input[tuiInputNumber]'));
        fixture.detectChanges();
    });

    it('should update postfix correctly when value changes programmatically', async () => {
        // Initial state: value is 2, should show "2 days ago"
        expect(input.nativeElement.value).toBe('2 days ago');
        expect(component.value).toBe(2);

        // Focus the input to trigger the race condition scenario
        input.nativeElement.focus();
        fixture.detectChanges();

        // Simulate pressing ArrowDown which changes value to 1
        const keydownEvent = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            code: 'ArrowDown',
        });

        input.nativeElement.dispatchEvent(keydownEvent);

        // Wait for async updates
        fixture.detectChanges();
        await fixture.whenStable();

        // The value should be 1 and the display should be "1 day ago" (not "2 day ago")
        expect(component.value).toBe(1);
        expect(input.nativeElement.value).toBe('1 day ago');
    });

    it('should handle multiple rapid value changes correctly', async () => {
        input.nativeElement.focus();
        fixture.detectChanges();

        // Change value multiple times rapidly using the public method
        component.setValue(1);
        fixture.detectChanges();

        component.setValue(3);
        fixture.detectChanges();

        component.setValue(1);
        fixture.detectChanges();

        await fixture.whenStable();

        expect(component.value).toBe(1);
        expect(input.nativeElement.value).toBe('1 day ago');
    });
});
