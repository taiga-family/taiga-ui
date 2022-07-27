import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiTablePaginationComponent} from '../table-pagination.component';
import {TuiTablePaginationModule} from '../table-pagination.module';

describe(`TablePagination`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-table-pagination
                [total]="237"
                [(page)]="page"
                [(size)]="size"
            ></tui-table-pagination>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTablePaginationComponent, {static: true})
        component!: TuiTablePaginationComponent;

        page = 3;
        size = 10;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiTablePaginationModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`Keeps current top item on the page when switching page size`, () => {
        it(`31 switching to 20`, () => {
            testComponent.component.onItem(20);
            fixture.detectChanges();

            expect(testComponent.page).toBe(1);
        });

        it(`31 switching to 50`, () => {
            testComponent.component.onItem(50);
            fixture.detectChanges();

            expect(testComponent.page).toBe(0);
        });

        it(`31 switching to 100`, () => {
            testComponent.component.onItem(100);
            fixture.detectChanges();

            expect(testComponent.page).toBe(0);
        });
    });
});
