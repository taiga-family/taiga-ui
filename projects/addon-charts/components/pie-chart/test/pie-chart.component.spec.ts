import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiPieChartModule} from '../pie-chart.module';

describe('PieChart', () => {
    @Component({
        template: `
            <tui-pie-chart [value]="value"></tui-pie-chart>
        `,
    })
    class TestComponent {
        readonly value = [1, 2, 3];
    }

    let fixture: ComponentFixture<TestComponent>;
    let pageObject: TuiPageObject<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPieChartModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: Location,
                    useValue: {
                        path: () => '',
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('Has segment for each item in value', () => {
        expect(pageObject.getAllByAutomationId('tui-pie-chart__segment').length).toBe(3);
    });
});
