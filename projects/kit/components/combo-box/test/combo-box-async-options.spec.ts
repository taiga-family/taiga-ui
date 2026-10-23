import {Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiDataList, TuiRoot} from '@taiga-ui/core';
import {TuiComboBox} from '@taiga-ui/kit';

describe('TuiComboBoxDirective with changing options', () => {
    interface Item {
        readonly label: string;
    }

    @Component({
        imports: [ReactiveFormsModule, TuiComboBox, TuiDataList, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield
                    [open]="true"
                    [stringify]="stringify"
                >
                    <input
                        tuiComboBox
                        [formControl]="control"
                        [strict]="false"
                    />
                    <tui-data-list *tuiDropdown>
                        @for (item of items(); track item) {
                            <button
                                tuiOption
                                [value]="item"
                            >
                                {{ item.label }}
                            </button>
                        }
                    </tui-data-list>
                </tui-textfield>
            </tui-root>
        `,
    })
    class Test {
        public readonly items = signal<readonly Item[]>([]);
        public readonly control = new FormControl<Item | string | null>('Saved');
        public readonly stringify = (value: unknown): string =>
            typeof value === 'object' && value !== null && 'label' in value
                ? String(value.label)
                : String(value);
    }

    let fixture: ComponentFixture<Test>;
    let input: HTMLInputElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
        input = fixture.debugElement.query(By.css('input[tuiComboBox]'))
            .nativeElement as HTMLInputElement;
    });

    it('preserves a form value when options arrive later', () => {
        fixture.componentInstance.items.set([{label: 'Other'}]);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe('Saved');
        expect(input.value).toBe('Saved');
    });

    it('selects a matching option loaded after the user types', () => {
        input.value = 'Audi';
        input.dispatchEvent(new Event('input', {bubbles: true}));
        fixture.detectChanges();

        const option = {label: 'Audi'};

        fixture.componentInstance.items.set([option]);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe(option);
        expect(input.value).toBe('Audi');
    });
});
