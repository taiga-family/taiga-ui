import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiComboBox} from '@taiga-ui/kit';

interface TestItem {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiComboBox, TuiTextfield],
    template: `
        <tui-textfield [stringify]="stringify()">
            <input
                tuiComboBox
                [formControl]="control"
            />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestComponent {
    protected readonly control = new FormControl<number | null>(777);

    private readonly items = signal<readonly TestItem[]>([]);

    protected readonly stringify = signal<TuiStringHandler<number>>(
        (id: number) => this.items().find((item) => item.id === id)?.name ?? String(id),
    );

    public updateItems(items: readonly TestItem[]): void {
        this.items.set(items);
        // Update stringify signal to use new items
        this.stringify.set(
            (id: number) =>
                this.items().find((item) => item.id === id)?.name ?? String(id),
        );
    }
}

describe('ComboBox stringify update issue', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should update display when stringify function changes', () => {
        // Initially, control has value 777 but no items, so should show "777"
        const input = fixture.nativeElement.querySelector('input');

        expect(input.value).toBe('777');

        // Update items to include the item with id 777
        component.updateItems([
            {id: 777, name: 'Terry Jones'},
            {id: 123, name: 'Terry Gilliam'},
        ]);

        fixture.detectChanges();

        // After updating items and stringify, should show "Terry Jones" instead of "777"
        expect(input.value).toBe('Terry Jones');
    });
});
