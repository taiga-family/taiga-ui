import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSortDirection, TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

interface TestData {
    readonly name: string;
    readonly age: number;
}

describe('TuiTable sort reset issue', () => {
    @Component({
        standalone: true,
        imports: [TuiTable],
        template: `
            <table
                tuiTable
                [tuiSortBy]="sortBy"
                (tuiSortChange)="onSortChange($event)"
            >
                <thead>
                    <tr tuiThGroup>
                        <th
                            *tuiHead="'name'"
                            tuiSortable
                            tuiTh
                        >
                            Name
                        </th>
                        <th
                            *tuiHead="'age'"
                            tuiSortable
                            tuiTh
                        >
                            Age
                        </th>
                    </tr>
                </thead>
            </table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        @ViewChild(TuiTableDirective)
        public readonly table!: TuiTableDirective<TestData>;

        public sortBy: keyof TestData | null = null;
        public sortChangeEvents: any[] = [];

        public onSortChange(event: any): void {
            this.sortChangeEvents.push(event);
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should allow resetting initially sorted column to null', () => {
        const table = testComponent.table;
        
        // Create a mock sorter to simulate TH behavior
        const mockSorter = jest.fn();
        
        // Simulate TH calling updateSorterAndDirection - First click (not current)
        table.updateSorterAndDirection(mockSorter);
        expect(table.direction).toBe(TuiSortDirection.Asc);
        expect(table.currentSorter).toBe(mockSorter);

        // Simulate TH calling updateSorterAndDirection - Second click (current, Asc)
        table.updateSorterAndDirection(mockSorter);
        expect(table.direction).toBe(TuiSortDirection.Desc);
        expect(table.currentSorter).toBe(mockSorter);
        
        // Simulate TH calling updateSorterAndDirection - Third click (current, Desc, requiredSort=false)
        // TH would pass null because requiredSort is false
        table.updateSorterAndDirection(null);
        expect(table.currentSorter).toBe(null);
    });

    it('should cycle through all three sort states for initially sorted column', () => {
        const table = testComponent.table;
        
        const mockNameSorter = jest.fn();
        
        // Simulate clicking on a column - First click
        table.updateSorterAndDirection(mockNameSorter);
        expect(table.direction).toBe(TuiSortDirection.Asc);
        expect(table.currentSorter).toBe(mockNameSorter);
        
        // Second click: Should go to Desc
        table.updateSorterAndDirection(mockNameSorter);
        expect(table.direction).toBe(TuiSortDirection.Desc);
        expect(table.currentSorter).toBe(mockNameSorter);
        
        // Third click: Should go to null (requiredSort = false case)
        // TH would pass null when requiredSort is false
        table.updateSorterAndDirection(null);
        expect(table.currentSorter).toBe(null);
    });

    it('should allow non-initially-sorted columns to be reset properly', () => {
        const table = testComponent.table;
        
        // Create a mock sorter for a different column
        const mockSorter = jest.fn();
        
        // Click on a different column should work normally - First click
        table.updateSorterAndDirection(mockSorter);
        expect(table.currentSorter).toBe(mockSorter);
        expect(table.direction).toBe(TuiSortDirection.Asc);
        
        // Second click: Toggle to desc
        table.updateSorterAndDirection(mockSorter);
        expect(table.direction).toBe(TuiSortDirection.Desc);
        expect(table.currentSorter).toBe(mockSorter);
        
        // Third click: Should reset to null when TH passes null (requiredSort=false)
        table.updateSorterAndDirection(null);
        expect(table.currentSorter).toBe(null);
    });

    it('should respect requiredSort flag and not reset to null when true', () => {
        const table = testComponent.table;
        
        // Create a mock th component with requiredSort = true
        const mockTh = {
            requiredSort: true,
            sorter: jest.fn(),
            table: table,
            get isCurrent() { return this.sorter === this.table.currentSorter; },
            get isCurrentAndDescDirection() { 
                return this.sorter === this.table.currentSorter && this.table.direction === TuiSortDirection.Desc;
            },
            updateSorterAndDirection() {
                const sorter = this.requiredSort ? this.sorter : null;
                this.table.updateSorterAndDirection(
                    this.isCurrentAndDescDirection ? sorter : this.sorter,
                );
            }
        };
        
        // Set initial sorter
        table.updateSorter(mockTh.sorter);
        expect(table.currentSorter).toBe(mockTh.sorter);
        expect(table.direction).toBe(TuiSortDirection.Asc);
        
        // Click 1: Should go to Desc
        mockTh.updateSorterAndDirection();
        expect(table.direction).toBe(TuiSortDirection.Desc);
        expect(table.currentSorter).toBe(mockTh.sorter);
        
        // Click 2: Should stay as sorter (not null) because requiredSort is true
        mockTh.updateSorterAndDirection();
        expect(table.currentSorter).toBe(mockTh.sorter); // Should NOT be null
        expect(table.direction).toBe(TuiSortDirection.Asc); // Should toggle back to Asc
    });
});