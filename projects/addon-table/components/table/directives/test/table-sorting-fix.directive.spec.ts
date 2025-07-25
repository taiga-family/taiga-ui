import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiSortDirection, TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

describe('TuiTableDirective sorting events fix', () => {
    @Component({
        standalone: true,
        imports: [TuiTable],
        template: `
            <table
                tuiTable
                (directionChange)="onDirectionChange($event)"
                (sortChange)="onSortChange($event)"
                (sorterChange)="onSorterChange($event)"
            ></table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        @ViewChild(TuiTableDirective)
        public readonly table!: TuiTableDirective<any>;

        public onDirectionChange = jest.fn();
        public onSorterChange = jest.fn();
        public onSortChange = jest.fn();
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

    it('should emit events atomically when sorting by different key', async () => {
        const sorter1 = (a: any, b: any): number => a.name?.localeCompare(b.name) || 0;
        const sorter2 = (a: any, b: any): number => a.age - b.age;

        // First sort by name
        component.table.updateSorterAndDirection(sorter1);

        // Clear call counts
        component.onDirectionChange.mockClear();
        component.onSorterChange.mockClear();
        component.onSortChange.mockClear();

        const events: Array<{type: string; timestamp: number}> = [];

        // Track when each event fires with high precision
        component.onDirectionChange.mockImplementation(() => {
            events.push({type: 'directionChange', timestamp: performance.now()});
        });

        component.onSorterChange.mockImplementation(() => {
            events.push({type: 'sorterChange', timestamp: performance.now()});
        });

        component.onSortChange.mockImplementation(() => {
            events.push({type: 'sortChange', timestamp: performance.now()});
        });

        // Sort by different key (age)
        component.table.updateSorterAndDirection(sorter2);

        // Wait for async emissions
        await new Promise((resolve) => setTimeout(resolve, 10));

        // Verify all events were emitted
        expect(component.onDirectionChange).toHaveBeenCalledTimes(1);
        expect(component.onSorterChange).toHaveBeenCalledTimes(1);
        expect(component.onSortChange).toHaveBeenCalledTimes(1);

        // Verify correct values
        expect(component.onDirectionChange).toHaveBeenCalledWith(TuiSortDirection.Asc);
        expect(component.onSorterChange).toHaveBeenCalledWith(sorter2);

        // Verify that sorterChange and directionChange are emitted very close in time
        // (atomically in the same execution context)
        const directionTime = events.find((e) => e.type === 'directionChange')?.timestamp;
        const sorterTime = events.find((e) => e.type === 'sorterChange')?.timestamp;
        const sortTime = events.find((e) => e.type === 'sortChange')?.timestamp;

        expect(directionTime).toBeDefined();
        expect(sorterTime).toBeDefined();
        expect(sortTime).toBeDefined();

        // The deprecated events should be very close in time (< 1ms apart)
        const timeDiff = Math.abs(directionTime! - sorterTime!);

        expect(timeDiff).toBeLessThan(1);

        // sortChange should come after (due to debounceTime)
        expect(sortTime!).toBeGreaterThan(Math.max(directionTime!, sorterTime!));
    });

    it('should only emit directionChange when toggling same sorter', () => {
        const sorter = (a: any, b: any): number => a.name?.localeCompare(b.name) || 0;

        // First sort by name
        component.table.updateSorterAndDirection(sorter);

        // Clear call counts
        component.onDirectionChange.mockClear();
        component.onSorterChange.mockClear();
        component.onSortChange.mockClear();

        // Sort by same key (should toggle direction)
        component.table.updateSorterAndDirection(sorter);

        // Only direction should change when toggling same sorter
        expect(component.onDirectionChange).toHaveBeenCalledTimes(1);
        expect(component.onSorterChange).toHaveBeenCalledTimes(0);

        expect(component.onDirectionChange).toHaveBeenCalledWith(TuiSortDirection.Desc);
    });
});
