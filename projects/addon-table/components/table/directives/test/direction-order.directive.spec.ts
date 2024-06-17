import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

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

        expect(testComponent.table.direction).toBe(1);
    });

    it('sets the sort direction of table to descending', () => {
        testComponent.directionOrder = 'desc';
        fixture.detectChanges();

        expect(testComponent.table.direction).toBe(-1);
    });

    describe('when table emits direction change', () => {
        it('emits ascending directionOrder', () => {
            testComponent.table.directionChange.emit(1);

            expect(testComponent.directionOrderChange).toHaveBeenCalledWith('asc');
        });

        it('emits descending directionOrder', () => {
            testComponent.table.directionChange.emit(-1);

            expect(testComponent.directionOrderChange).toHaveBeenCalledWith('desc');
        });

        it('should not emit directionChange when updating sorter programmatically', () => {
            testComponent.table.updateSorter(() => -1);

            expect(testComponent.directionOrderChange).not.toHaveBeenCalled();
        });
    });
});
