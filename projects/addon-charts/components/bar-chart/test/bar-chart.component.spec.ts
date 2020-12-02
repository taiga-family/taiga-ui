import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiBarChartComponent} from '../bar-chart.component';
import {TuiBarChartModule} from '../bar-chart.module';

describe('BarChart', () => {
    @Component({
        template: ` <tui-bar-chart [max]="max" [value]="value"></tui-bar-chart> `,
    })
    class TestComponent {
        @ViewChild(TuiBarChartComponent)
        readonly component: TuiBarChartComponent;
        readonly value = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        max = NaN;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiBarChartModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Finds max correctly', () => {
        expect(testComponent.component.computedMax).toBe(6);
    });

    it('Uses manual max', () => {
        testComponent.max = 10;
        fixture.detectChanges();

        expect(testComponent.component.computedMax).toBe(10);
    });

    it('Transposes correctly', () => {
        expect(testComponent.component.transposed).toEqual([
            [1, 4],
            [2, 5],
            [3, 6],
        ]);
    });

    it('Computes percent correctly', () => {
        expect(testComponent.component.getPercent([1, 3])).toBe(50);
    });
});
