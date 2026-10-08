import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiDataList, TuiRoot} from '@taiga-ui/core';
import {TuiComboBox} from '@taiga-ui/kit';

describe('TuiComboBoxDirective', () => {
    /**
     * A trivial wrapper around <tui-data-list> that re-exposes the selected item
     * as an output() -- a very common shape for a shared "generic option list".
     */
    @Component({
        selector: 'app-data-list',
        imports: [TuiDataList],
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
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class DataListComponent {
        public readonly items = input<readonly string[]>([]);
        public readonly picked = output<string>();
    }

    @Component({
        imports: [DataListComponent, FormsModule, TuiComboBox, TuiRoot],
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
        public value = '';
        public brands = ['Audi', 'BMW', 'Volkswagen'];
        public onPicked = jest.fn();
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);

        fixture.detectChanges();
    });

    it('nested click listeners work', () => {
        fixture.debugElement.query(By.css('[tuiOption]')).nativeElement.click();
        fixture.detectChanges();

        expect(fixture.componentInstance.value).toBe('Audi');
        expect(fixture.componentInstance.onPicked).toHaveBeenCalledWith('Audi');
    });
});
