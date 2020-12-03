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
        it('если принимает двузначное число, выводит его', () => {
            testComponent.value = 99;
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('99');
        });

        it('если принимает трехзначное и более, выводит сокращение 99+', () => {
            testComponent.value = 999;
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('99+');
        });

        it('если принимает строку, выводит её', () => {
            testComponent.value = 'Текст';
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('Текст');
        });

        it('если принимает строку, содержащую число, выводит её в неизменном виде', () => {
            testComponent.value = '125';
            fixture.detectChanges();

            expect(testComponent.element.nativeElement.textContent).toEqual('125');
        });
    });

    describe('padding:', () => {
        it('если значение – число, у padding размер m', () => {
            testComponent.value = 99;
            fixture.detectChanges();

            expect(component.padding).toBe('m');
        });

        it('если значение – строка, у padding размер l', () => {
            testComponent.value = '99';
            fixture.detectChanges();

            expect(component.padding).toBe('l');
        });
    });
});
