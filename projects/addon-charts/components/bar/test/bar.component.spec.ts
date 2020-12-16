import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiBaseColor} from '@taiga-ui/core';
import {configureTestSuite} from 'ng-bullet';
import {TuiColorHandler} from '../../../types/color-handler';
import {TuiBarComponent} from '../bar.component';
import {TuiBarModule} from '../bar.module';

describe('Bar', () => {
    @Component({
        template: ` <tui-bar [value]="value" [colorHandler]="colorHandler"></tui-bar> `,
    })
    class TestComponent {
        @ViewChild(TuiBarComponent)
        readonly component: TuiBarComponent;
        readonly value = [10, 20, 30, 40];
        readonly colorHandler: TuiColorHandler = index =>
            index % 2 ? TuiBaseColor.Primary : TuiBaseColor.Secondary;
    }

    let fixture: ComponentFixture<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiBarModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it('Sets color correctly', () => {
        expect(
            fixture.debugElement.queryAll(By.css('[data-tui-background="primary"]'))
                .length,
        ).toBe(2);
    });
});
