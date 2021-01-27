import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSizeL} from '@taiga-ui/core';
import {configureTestSuite} from 'ng-bullet';
import {TuiStatus} from '../../../enums/status';
import {TuiBadgeComponent} from '../badge.component';
import {TuiBadgeModule} from '../badge.module';

describe('Badge', () => {
    @Component({
        template: `
            <tui-badge [size]="size" [status]="status" [value]="value"></tui-badge>
        `,
    })
    class TestComponent {
        @ViewChild(TuiBadgeComponent, {static: true})
        component: TuiBadgeComponent;

        @ViewChild(TuiBadgeComponent, {read: ElementRef, static: true})
        element: ElementRef<Element>;

        size: TuiSizeL = 'm';
        value: number | string;
        status = TuiStatus.Default;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiBadgeComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiBadgeModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
    });

    describe('value:', () => {
        it('if it accepts a two-digit number, it outputs it', () => {
            testComponent.value = 99;
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('99');
        });

        it('if it takes three digits or more, it displays the abbreviation 99+', () => {
            testComponent.value = 999;
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('99+');
        });

        it('if it accepts a string, it outputs it', () => {
            testComponent.value = 'Text';
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('Text');
        });

        it('if it accepts a string containing a number, it outputs it unchanged', () => {
            testComponent.value = '125';
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('125');
        });
    });

    describe('padding:', () => {
        it('if value is a number, padding has size m', () => {
            testComponent.value = 99;
            fixture.detectChanges();

            expect(component.padding).toBe('m');
        });

        it('if value is a string, padding has size l', () => {
            testComponent.value = '99';
            fixture.detectChanges();

            expect(component.padding).toBe('l');
        });
    });
});
