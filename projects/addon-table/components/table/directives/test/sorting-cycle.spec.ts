import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiSortDirection, TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

describe('TuiTable sorting cycle bug', () => {
    @Component({
        standalone: true,
        imports: [TuiTable],
        template: `
            <table
                tuiTable
                class="table"
            ></table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        @ViewChild(TuiTableDirective)
        public readonly table!: TuiTableDirective<any>;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should handle updateSorter with null correctly (the bug case)', (): void => {
        const table = component.table;
        const mockSorter = (): number => 0;

        // Set initial sorter
        table.updateSorter(mockSorter, TuiSortDirection.Desc);
        expect(table.sorter).toBe(mockSorter);
        expect(table.direction).toBe(TuiSortDirection.Desc);

        // Clear sorter with null - this should work but currently fails
        table.updateSorter(null);
        expect(table.sorter).toBe(null);
        expect(table.direction).toBe(TuiSortDirection.Asc); // default direction
    });

    it('should cycle through sort states when using updateSorterAndDirection', (): void => {
        const table = component.table;
        const mockSorter = (): number => 0;

        expect(table.direction).toBe(TuiSortDirection.Asc);

        // First click: set to ASC with mockSorter
        table.updateSorterAndDirection(mockSorter);
        expect(table.sorter).toBe(mockSorter);
        expect(table.direction).toBe(TuiSortDirection.Asc);

        // Second click: same sorter should toggle to DESC
        table.updateSorterAndDirection(mockSorter);
        expect(table.sorter).toBe(mockSorter);
        expect(table.direction).toBe(TuiSortDirection.Desc);

        // Third click: null should clear sort (this is the bug)
        table.updateSorterAndDirection(null);
        expect(table.sorter).toBe(null);
    });
});
