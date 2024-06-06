import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiBarChartComponent} from '@taiga-ui/addon-charts';

describe('BarChart', () => {
    @Component({
        standalone: true,
        imports: [TuiBarChartComponent],
        template: `
            <tui-bar-chart
                [max]="max"
                [value]="value"
            ></tui-bar-chart>
        `,
    })
    class TestComponent {
        @ViewChild(TuiBarChartComponent)
        public readonly component!: TuiBarChartComponent;

        public readonly value = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        public max = NaN;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [TestComponent]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Transposes correctly', () => {
        expect(testComponent.component.transposed).toEqual([
            [1, 4],
            [2, 5],
            [3, 6],
        ]);
    });

    it('Computes percent correctly', () => {
        expect(
            testComponent.component.percentMapper(
                [1, 3],
                testComponent.component.collapsed,
                testComponent.component.computedMax,
            ),
        ).toBe(50);
    });

    it('Computes percent correctly in collapsed mode', () => {
        testComponent.component.collapsed = true;
        expect(
            testComponent.component.percentMapper(
                [8, 1],
                testComponent.component.collapsed,
                testComponent.component.computedMax,
            ),
        ).toBe(100);
    });
});
