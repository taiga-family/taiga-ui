import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import type {TuiTablePaginationEvent} from '@taiga-ui/addon-table';
import {TuiTablePagination} from '@taiga-ui/addon-table';

describe('TablePagination', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    @Component({
        standalone: true,
        imports: [TuiTablePagination],
        template: `
            <tui-table-pagination
                [page]="page"
                [size]="size"
                [total]="237"
                (paginationChange)="update($event)"
            ></tui-table-pagination>
        `,
    })
    class Test {
        @ViewChild(TuiTablePagination, {static: true})
        public component!: TuiTablePagination;

        public page = 3;
        public size = 10;

        protected update({page, size}: TuiTablePaginationEvent): void {
            this.page = page;
            this.size = size;
        }
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Keeps current top item on the page when switching page size', () => {
        it('31 switching to 20', () => {
            testComponent.component.onItem(20);
            fixture.detectChanges();

            expect(testComponent.page).toBe(1);
        });

        it('31 switching to 50', () => {
            testComponent.component.onItem(50);
            fixture.detectChanges();

            expect(testComponent.page).toBe(0);
        });

        it('31 switching to 100', () => {
            testComponent.component.onItem(100);
            fixture.detectChanges();

            expect(testComponent.page).toBe(0);
        });
    });
});
