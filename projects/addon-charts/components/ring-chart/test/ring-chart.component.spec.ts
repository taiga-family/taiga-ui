import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';

import {TuiRingChartModule} from '../ring-chart.module';

describe('RingChart', () => {
    @Component({
        template: `
            <tui-ring-chart content="test" [value]="value" [size]="size"></tui-ring-chart>
        `,
    })
    class TestComponent {
        readonly value = [1, 2, 3];
        size = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiRingChartModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: Location,
                    useValue: {
                        path: () => '',
                        prepareExternalUrl: () => '',
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        pageObject = new PageObject(fixture);
        fixture.detectChanges();
    });

    it('Shows content by default', () => {
        expect(pageObject.getByAutomationId('tui-ring-chart__content')).not.toBeNull();
    });

    it('Does not show content on small size', () => {
        testComponent.size = 's';
        fixture.detectChanges();

        expect(pageObject.getByAutomationId('tui-ring-chart__content')).toBeNull();
    });
});
