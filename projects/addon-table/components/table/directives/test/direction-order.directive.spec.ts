import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiTableDirective, TuiTableModule} from '@taiga-ui/addon-table';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TuiDirectionOrder directive`, () => {
    @Component({
        template: `
            <table
                tuiTable
                tuiDirectionOrder
                class="table"
                [directionOrder]="directionOrder"
                (directionOrderChange)="directionOrderChange($event)"
            ></table>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTableDirective)
        readonly table!: TuiTableDirective<any>;

        directionOrder = `asc`;
        directionOrderChange = jest.fn();
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiTableModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        fixture.detectChanges();
    });

    it(`sets the sort direction of table to ascending`, () => {
        fixture.detectChanges();

        expect(testComponent.table.direction).toEqual(1);
    });

    it(`sets the sort direction of table to descending`, () => {
        testComponent.directionOrder = `desc`;
        fixture.detectChanges();

        expect(testComponent.table.direction).toEqual(-1);
    });

    describe(`when table emits direction change`, () => {
        it(`emits ascending directionOrder`, () => {
            testComponent.table.directionChange.emit(1);

            expect(testComponent.directionOrderChange).toHaveBeenCalledWith(`asc`);
        });

        it(`emits descending directionOrder`, () => {
            testComponent.table.directionChange.emit(-1);

            expect(testComponent.directionOrderChange).toHaveBeenCalledWith(`desc`);
        });
    });
});
