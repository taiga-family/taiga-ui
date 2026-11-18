import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiTablePagination, type TuiTablePaginationEvent} from '@taiga-ui/addon-table';

describe('TablePagination', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    @Component({
        imports: [TuiTablePagination],
        template: `
            <tui-table-pagination
                [page]="page()"
                [size]="size"
                [total]="total()"
                (paginationChange)="update($event)"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly component = viewChild.required(TuiTablePagination);
        public readonly page = signal(3);
        public readonly total = signal(237);
        public size = 10;

        protected update({page, size}: TuiTablePaginationEvent): void {
            this.page.set(page);
            this.size = size;
        }
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('shows a valid last-page range when the total shrinks to a page boundary', () => {
        testComponent.page.set(2);
        testComponent.total.set(30);
        fixture.detectChanges();

        const host: HTMLElement = fixture.nativeElement;

        expect(host.textContent).toContain('21–30');

        testComponent.total.set(20);
        fixture.detectChanges();

        expect(host.textContent).toContain('11–20');

        host.querySelector<HTMLButtonElement>('.t-button_back')?.click();
        fixture.detectChanges();

        expect(testComponent.page()).toBe(0);
        expect(host.textContent).toContain('1–10');
    });

    it('emits a valid page when changing size after the total shrinks', () => {
        testComponent.page.set(2);
        testComponent.total.set(30);
        fixture.detectChanges();

        testComponent.total.set(20);
        fixture.detectChanges();

        testComponent.component().onItem(5);

        expect(testComponent.page()).toBe(2);
    });

    describe('Keeps current top item on the page when switching page size', () => {
        it('31 switching to 20', () => {
            testComponent.component().onItem(20);
            fixture.detectChanges();

            expect(testComponent.page()).toBe(1);
        });

        it('31 switching to 50', () => {
            testComponent.component().onItem(50);
            fixture.detectChanges();

            expect(testComponent.page()).toBe(0);
        });

        it('31 switching to 100', () => {
            testComponent.component().onItem(100);
            fixture.detectChanges();

            expect(testComponent.page()).toBe(0);
        });
    });
});
