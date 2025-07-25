import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiSortDirection, TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

describe('TuiTableDirective double emit sorting events issue', () => {
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

    it('should demonstrate the potential double emit issue', async () => {
        const sorter1 = (a: any, b: any) => a.name?.localeCompare(b.name) || 0;
        const sorter2 = (a: any, b: any) => a.age - b.age;

        // Sort by name first
        component.table.updateSorterAndDirection(sorter1);
        
        // Clear call counts
        component.onDirectionChange.mockClear();
        component.onSorterChange.mockClear();
        component.onSortChange.mockClear();

        // Sort by different key (age) and track all events
        const allEvents: string[] = [];
        
        component.onDirectionChange.mockImplementation(() => allEvents.push('directionChange'));
        component.onSorterChange.mockImplementation(() => allEvents.push('sorterChange'));
        component.onSortChange.mockImplementation(() => allEvents.push('sortChange'));

        component.table.updateSorterAndDirection(sorter2);

        // Wait for async emissions
        await new Promise(resolve => setTimeout(resolve, 10));

        console.log('Event sequence:', allEvents);
        console.log('directionChange calls:', component.onDirectionChange.mock.calls.length);
        console.log('sorterChange calls:', component.onSorterChange.mock.calls.length);
        console.log('sortChange calls:', component.onSortChange.mock.calls.length);
        
        // The issue might be that we call both updateDirection and updateSorter
        // causing multiple change detections or emissions
        expect(allEvents.length).toBeGreaterThan(0);
    });

    it('should show the timing of deprecated events vs new sortChange', async () => {
        const sorter1 = (a: any, b: any) => a.name?.localeCompare(b.name) || 0;
        const sorter2 = (a: any, b: any) => a.age - b.age;

        // Sort by name first
        component.table.updateSorterAndDirection(sorter1);
        
        // Clear call counts
        component.onDirectionChange.mockClear();
        component.onSorterChange.mockClear();
        component.onSortChange.mockClear();

        let directionChangeCount = 0;
        let sorterChangeCount = 0;
        let sortChangeCount = 0;

        component.onDirectionChange.mockImplementation(() => {
            directionChangeCount++;
            console.log(`directionChange #${directionChangeCount}`);
        });
        
        component.onSorterChange.mockImplementation(() => {
            sorterChangeCount++;
            console.log(`sorterChange #${sorterChangeCount}`);
        });
        
        component.onSortChange.mockImplementation(() => {
            sortChangeCount++;
            console.log(`sortChange #${sortChangeCount}`);
        });

        // Sort by different key (age)
        component.table.updateSorterAndDirection(sorter2);

        // Wait for async emissions
        await new Promise(resolve => setTimeout(resolve, 10));

        console.log(`Final counts - direction: ${directionChangeCount}, sorter: ${sorterChangeCount}, sortChange: ${sortChangeCount}`);
        
        // The issue is probably that deprecated events emit immediately
        // while sortChange is debounced, leading to perceived "double emit"
        expect(directionChangeCount).toBe(1);
        expect(sorterChangeCount).toBe(1);
        expect(sortChangeCount).toBe(1);
    });

    it('should check if sortChange emits twice due to combineLatest', async () => {
        const sorter1 = (a: any, b: any) => a.name?.localeCompare(b.name) || 0;
        const sorter2 = (a: any, b: any) => a.age - b.age;

        // Sort by name first
        component.table.updateSorterAndDirection(sorter1);
        
        // Clear call counts and track sortChange specifically
        component.onSortChange.mockClear();
        
        let sortChangeEmissions = 0;
        
        // Subscribe to sortChange and count emissions
        const subscription = component.table.sortChange.subscribe(() => {
            sortChangeEmissions++;
            console.log(`sortChange emission #${sortChangeEmissions}`);
        });

        // Sort by different key (age)
        component.table.updateSorterAndDirection(sorter2);

        // Wait for any async emissions
        await new Promise(resolve => setTimeout(resolve, 50));

        console.log(`Total sortChange emissions: ${sortChangeEmissions}`);
        
        subscription.unsubscribe();
        
        // This should be 1, not 2
        expect(sortChangeEmissions).toBe(1);
    });

    it('should track the exact timing of combineLatest emissions', async () => {
        const sorter1 = (a: any, b: any) => a.name?.localeCompare(b.name) || 0;
        const sorter2 = (a: any, b: any) => a.age - b.age;

        // Sort by name first  
        component.table.updateSorterAndDirection(sorter1);
        
        const events: Array<{type: string, timestamp: number}> = [];
        
        // Track when each event fires
        component.table.directionChange.subscribe(() => {
            events.push({type: 'directionChange', timestamp: Date.now()});
        });
        
        component.table.sorterChange.subscribe(() => {
            events.push({type: 'sorterChange', timestamp: Date.now()});
        });
        
        component.table.sortChange.subscribe(() => {
            events.push({type: 'sortChange', timestamp: Date.now()});
        });

        // Clear previous events
        events.length = 0;

        // Sort by different key
        component.table.updateSorterAndDirection(sorter2);

        // Wait for async emissions
        await new Promise(resolve => setTimeout(resolve, 10));

        console.log('Event timing:', events);
        
        // We should see directionChange and sorterChange, then sortChange (after debounce)
        const sortChangeEvents = events.filter(e => e.type === 'sortChange');
        expect(sortChangeEvents.length).toBe(1);
    });
});