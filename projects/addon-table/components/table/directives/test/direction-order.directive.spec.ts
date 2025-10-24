import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSortDirection, TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

describe('TuiDirectionOrder directive', () => {
    @Component({
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
        public readonly table!: TuiTableDirective<Partial<Record<string, unknown>>>;

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

            expect(testComponent.directionOrderChange).toHaveBeenCalledWith('asc');
        });
    });
});
