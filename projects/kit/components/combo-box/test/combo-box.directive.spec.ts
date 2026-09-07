import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga, TuiDataList, TuiRoot} from '@taiga-ui/core';
import {TuiComboBox} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('TuiComboBoxDirective', () => {
    /**
     * A trivial wrapper around <tui-data-list> that re-exposes the selected item
     * as an output() -- a very common shape for a shared "generic option list".
     */
    @Component({
        selector: 'app-data-list',
        imports: [TuiDataList],
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
            <tui-data-list>
                @for (item of items(); track item) {
                    <button
                        tuiOption
                        [value]="item"
                        (click)="picked.emit(item)"
                    >
                        {{ item }}
                    </button>
                }
            </tui-data-list>
        `,
    })
    class DataListComponent {
        public readonly items = input<readonly string[]>([]);
        public readonly picked = output<string>();
    }

    @Component({
        imports: [TuiRoot, DataListComponent, TuiComboBox, FormsModule],
        template: `
            <tui-root>
                <tui-textfield [open]="true">
                    <input
                        tuiComboBox
                        [(ngModel)]="value"
                    />
                    <app-data-list
                        *tuiDropdown
                        [items]="brands"
                        (picked)="onPicked($event)"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        value = '';
        brands = ['Audi', 'BMW', 'Volkswagen'];
        onPicked = jest.fn();
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);

        fixture.detectChanges();
    });

    it('Nested click listeners work', () => {
        fixture.debugElement.query(By.css('[tuiOption]')).nativeElement.click();
        fixture.detectChanges();

        expect(fixture.componentInstance.value).toBe('Audi');
        expect(fixture.componentInstance.onPicked).toHaveBeenCalledWith('Audi');
    });
});
