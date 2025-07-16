import {Location} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiPageObject} from '@taiga-ui/testing';

describe('PieChart', () => {
    @Component({
        standalone: true,
        imports: [TuiPieChart],
        template: `
            <tui-pie-chart
                [tuiHintDirection]="hintDirection"
                [value]="value"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiPieChart)
        public readonly component!: TuiPieChart;

        public readonly value = [1, 2, 3];
        public hintDirection: any = 'bottom';
    }

    let fixture: ComponentFixture<Test>;
    let pageObject: TuiPageObject<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                {
                    provide: Location,
                    useValue: {
                        path: () => '',
                    },
                },
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('has segment for each item in value', () => {
        expect(pageObject.getAllByAutomationId('tui-pie-chart__segment').length).toBe(3);
    });
});
