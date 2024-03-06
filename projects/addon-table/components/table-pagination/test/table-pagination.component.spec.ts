import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {
    TuiTablePaginationComponent,
    TuiTablePaginationModule,
} from '@taiga-ui/addon-table';

describe('TablePagination', () => {
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
        public component!: TuiTablePaginationComponent;

        public page = 3;
        public size = 10;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiTablePaginationModule],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
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
