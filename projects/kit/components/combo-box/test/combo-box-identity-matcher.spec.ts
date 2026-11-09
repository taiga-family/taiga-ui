import {Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiDataList, TuiRoot} from '@taiga-ui/core';
import {TuiComboBox} from '@taiga-ui/kit';

describe('TuiComboBoxDirective with identityMatcher', () => {
    interface Item {
        readonly id: number;
        readonly label: string;
    }

    @Component({
        imports: [ReactiveFormsModule, TuiComboBox, TuiDataList, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield
                    [identityMatcher]="identityMatcher"
                    [open]="true"
                    [stringify]="stringify"
                >
                    <input
                        tuiComboBox
                        [formControl]="control"
                    />
                    <tui-data-list *tuiDropdown>
                        @for (item of items(); track item.id) {
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
        public readonly control = new FormControl<Item | null>({id: 1, label: 'Audi'});
        public readonly identityMatcher = (a: Item, b: Item): boolean => a.id === b.id;
        public readonly stringify = (item: Item): string => item.label;
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('keeps the form value when an identical option arrives as another object', () => {
        const value = fixture.componentInstance.control.value;

        fixture.componentInstance.items.set([{id: 1, label: 'Audi'}]);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe(value);
        expect(fixture.componentInstance.control.pristine).toBe(true);
    });
});
