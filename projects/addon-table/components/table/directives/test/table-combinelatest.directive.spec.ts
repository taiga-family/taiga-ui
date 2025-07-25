import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiSortDirection, TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

describe('TuiTableDirective potential double emit scenarios', () => {
    @Component({
        standalone: true,
        imports: [TuiTable],
        template: `
            <table
                tuiTable
                (directionChange)="onDirectionChange($event)"
                (sorterChange)="onSorterChange($event)"
                (sortChange)="onSortChange($event)"
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

    it('should demonstrate the issue if combineLatest emits twice', () => {
        const sorter1 = (a: any, b: any) => a.name?.localeCompare(b.name) || 0;
        const sorter2 = (a: any, b: any) => a.age - b.age;

        // First sort by name
        component.table.updateSorterAndDirection(sorter1);
        
        let sortChangeCount = 0;
        let allSortChangeEvents: any[] = [];
        
        // Subscribe directly to the sortChange observable to track emissions
        const subscription = component.table.sortChange.subscribe((event) => {
            sortChangeCount++;
            allSortChangeEvents.push(event);
            console.log(`sortChange #${sortChangeCount}:`, event);
        });

        // Clear component event trackers
        component.onDirectionChange.mockClear();
        component.onSorterChange.mockClear();
        component.onSortChange.mockClear();

        // Sort by different key - this might trigger the double emission
        component.table.updateSorterAndDirection(sorter2);

        // Force any pending emissions
        fixture.detectChanges();

        console.log('Total sortChange emissions:', sortChangeCount);
        console.log('All events:', allSortChangeEvents);
        
        subscription.unsubscribe();
        
        // Check if we got more than one emission
        expect(sortChangeCount).toBe(1);
    });

    it('should test the raw combineLatest behavior', async () => {
        const sorter1 = (a: any, b: any) => a.name?.localeCompare(b.name) || 0;
        const sorter2 = (a: any, b: any) => a.age - b.age;

        // First sort by name
        component.table.updateSorterAndDirection(sorter1);
        
        let combineLatestEmissions = 0;
        
        // Subscribe to the raw combineLatest observable (without debounce)
        const { combineLatest } = await import('rxjs');
        const rawCombine = combineLatest([
            component.table.sorterChange,
            component.table.directionChange,
        ]);
        
        const subscription = rawCombine.subscribe(() => {
            combineLatestEmissions++;
            console.log(`Raw combineLatest emission #${combineLatestEmissions}`);
        });

        // Clear previous subscriptions
        combineLatestEmissions = 0;

        // Sort by different key
        component.table.updateSorterAndDirection(sorter2);

        console.log('Raw combineLatest total emissions:', combineLatestEmissions);
        
        subscription.unsubscribe();
        
        // This might show 2 emissions if that's the issue
        // expect(combineLatestEmissions).toBe(1);
    });
});