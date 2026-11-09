import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiDataListWrapper, TuiRoot, TuiSelect],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiSelect
                    [formControl]="control"
                />
                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="items"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Test {
    protected readonly items = ['Apple', 'Orange'];

    public readonly control = new FormControl('Apple');
}

describe('TuiSelect disabled while open', () => {
    it('preserves the form value when an option is clicked after disabling', async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        const fixture = TestBed.createComponent(Test);
        const {control} = fixture.componentInstance;
        const changes = jest.fn();
        const subscription = control.valueChanges.subscribe(changes);
        const root = fixture.nativeElement as HTMLElement;

        fixture.detectChanges();
        const input = root.querySelector('input');

        input?.click();
        await fixture.whenStable();
        fixture.detectChanges();

        const orange = Array.from(
            root.querySelectorAll<HTMLElement>('[role="option"]'),
        ).find((option) => option.textContent.trim() === 'Orange');

        expect(orange).toBeDefined();
        control.disable({emitEvent: false});
        fixture.detectChanges();

        expect(input?.disabled).toBe(true);
        orange?.click();
        fixture.detectChanges();

        expect(control.value).toBe('Apple');
        expect(changes).not.toHaveBeenCalled();
        subscription.unsubscribe();
    });
});
