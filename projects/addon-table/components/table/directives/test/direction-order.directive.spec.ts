import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiSortDirection, TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

describe('TuiDirectionOrder directive', () => {
    @Component({
        standalone: true,
        imports: [TuiTable],
        template: `
            <table
                tuiDirectionOrder
                tuiTable
                class="table"
                [directionOrder]="directionOrder"
                (directionOrderChange)="directionOrderChange($event)"
            ></table>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        @ViewChild(TuiTableDirective)
        public readonly table!: TuiTableDirective<any>;

        public directionOrder: 'asc' | 'desc' = 'asc';
        public directionOrderChange = jest.fn();
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('sets the sort direction of table to ascending', () => {
        fixture.detectChanges();

        expect(testComponent.table.direction).toBe(TuiSortDirection.Asc);
    });

    it('sets the sort direction of table to descending', () => {
        testComponent.directionOrder = 'desc';
        fixture.detectChanges();

        expect(testComponent.table.direction).toBe(TuiSortDirection.Desc);
    });

    describe('when table emits direction change', () => {
        it('emits ascending directionOrder', () => {
            testComponent.table.directionChange.emit(TuiSortDirection.Asc);

            expect(testComponent.directionOrderChange).toHaveBeenCalledWith('asc');
        });

        it('emits descending directionOrder', () => {
            testComponent.table.directionChange.emit(TuiSortDirection.Desc);

            expect(testComponent.directionOrderChange).toHaveBeenCalledWith('desc');
        });

        it('should not emit directionChange when updating sorter programmatically', () => {
            testComponent.table.updateSorter(() => TuiSortDirection.Desc);

            expect(testComponent.directionOrderChange).not.toHaveBeenCalled();
        });
    });

    describe('double emit issue when sorting by different key', () => {
        it('should not emit sorting events twice when sorting by different key', () => {
            const sorter1 = (a: any, b: any) => a.name?.localeCompare(b.name);
            const sorter2 = (a: any, b: any) => a.age - b.age;

            // First sort by name
            testComponent.table.updateSorterAndDirection(sorter1);
            
            // Clear call counts
            testComponent.directionOrderChange.mockClear();

            // Sort by different key (age) - this should only emit once
            testComponent.table.updateSorterAndDirection(sorter2);

            // Direction should change to ascending when sorting by different key
            // and should only be emitted once
            expect(testComponent.directionOrderChange).toHaveBeenCalledTimes(1);
            expect(testComponent.directionOrderChange).toHaveBeenCalledWith('asc');
        });
    });
});
