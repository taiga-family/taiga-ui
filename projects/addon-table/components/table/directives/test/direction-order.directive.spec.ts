import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';

describe('TuiDirectionOrder directive', () => {
    @Component({
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
    class TestComponent {
        @ViewChild(TuiTableDirective)
        public readonly table!: TuiTableDirective<any>;

        public directionOrder = 'asc';
        public directionOrderChange = jest.fn();
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiTable],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
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
