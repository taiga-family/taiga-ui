import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {TuiCheckbox} from '@taiga-ui/core';

describe('TuiCheckboxRowDirective', () => {
    @Component({
        imports: [FormsModule, TuiCheckbox, TuiTable, TuiTableControl],
        template: `
            <table
                tuiTable
                [(ngModel)]="selected"
            >
                @for (item of items; track item) {
                    <input
                        tuiCheckbox
                        type="checkbox"
                        [tuiCheckboxRow]="item"
                    />
                }
            </table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public selected: readonly string[] = [];

        protected readonly items = ['a', 'b'];
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;

    const checkboxes = (): HTMLInputElement[] =>
        Array.from(fixture.nativeElement.querySelectorAll('input[tuiCheckbox]'));

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
    });

    const beforePaint = async (): Promise<void> => Promise.resolve();

    it('checkboxes are not indeterminate before first paint', async () => {
        fixture.detectChanges();
        await beforePaint();

        expect(checkboxes().length).toBe(2);
        checkboxes().forEach((checkbox) => {
            expect(checkbox.indeterminate).toBe(false);
        });
    });

    it('preselected rows are checked and not indeterminate before first paint', async () => {
        component.selected = ['a'];
        fixture.detectChanges();
        await beforePaint();

        const [first, second] = checkboxes();

        expect(first?.checked).toBe(true);
        expect(first?.indeterminate).toBe(false);
        expect(second?.checked).toBe(false);
        expect(second?.indeterminate).toBe(false);
    });
});
