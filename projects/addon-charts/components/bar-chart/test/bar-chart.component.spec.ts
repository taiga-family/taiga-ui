import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiBarChart} from '@taiga-ui/addon-charts';

describe('BarChart', () => {
    @Component({
        standalone: true,
        imports: [TuiBarChart],
        template: `
            <tui-bar-chart
                [max]="max"
                [value]="value"
            ></tui-bar-chart>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiBarChart)
        public readonly component!: TuiBarChart;

        public readonly value = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        public max = NaN;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('transposes correctly', () => {
        expect(testComponent.component.transposed).toEqual([
            [1, 4],
            [2, 5],
            [3, 6],
        ]);
    });

    it('computes percent correctly', () => {
        expect(
            testComponent.component.percentMapper(
                [1, 3],
                testComponent.component.collapsed,
                testComponent.component.computedMax,
            ),
        ).toBe(50);
    });

    it('computes percent correctly in collapsed mode', () => {
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
