import {ChangeDetectionStrategy, Component, signal, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiBarChart} from '@taiga-ui/addon-charts';

describe('BarChart', () => {
    @Component({
        imports: [TuiBarChart],
        template: `
            <tui-bar-chart
                [collapsed]="collapsed()"
                [max]="max"
                [value]="value"
            />
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
        public collapsed = signal(false);
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

    it('computes percent correctly', () => {
        expect(
            testComponent.component.percentMapper(
                [1, 3],
                testComponent.component.collapsed(),
                testComponent.component.computedMax(),
            ),
        ).toBe(50);
    });

    it('computes percent correctly in collapsed mode', () => {
        testComponent.collapsed.set(true);
        fixture.detectChanges();

        expect(
            testComponent.component.percentMapper(
                [8, 1],
                testComponent.component.collapsed(),
                testComponent.component.computedMax(),
            ),
        ).toBe(100);
    });
});
