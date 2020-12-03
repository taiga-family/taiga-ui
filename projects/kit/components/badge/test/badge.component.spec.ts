import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiNotification, TuiSizeL, TuiSupportColor} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiStatus} from '../../../enums/status';
import {TuiBadgeComponent} from '../badge.component';
import {TuiBadgeModule} from '../badge.module';

describe('Badge', () => {
    @Component({
        template: `
            <tui-badge
                automation-id="tui-badge__component"
                [notification]="notification"
                [hoverable]="hoverable"
                [size]="size"
                [status]="status"
                [value]="value"
            ></tui-badge>
        `,
    })
    class TestComponent {
        @ViewChild(TuiBadgeComponent, {static: true})
        component: TuiBadgeComponent;

        hoverable = false;
        notification: TuiNotification | TuiSupportColor | null = null;
        size: TuiSizeL = 'm';
        value: number | string;
        status: TuiStatus | null = null;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiBadgeComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-badge__';
        },
    };

    function getNotification(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}notification`);
    }

    function getOutputValue(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}output-value`)!
            .nativeElement;
    }

    function getBadge(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}component`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiBadgeModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
    });

    describe('value:', () => {
        it('если принимает двузначное число, выводит его', () => {
            testComponent.value = 99;
            fixture.detectChanges();

            expect(getOutputValue().textContent).toEqual('99');
        });

        it('если принимает трехзначное и более, выводит сокращение 99+', () => {
            testComponent.value = 999;
            fixture.detectChanges();

            expect(getOutputValue().textContent).toEqual('99+');
        });

        it('если принимает строку, выводит её', () => {
            testComponent.value = 'Текст';
            fixture.detectChanges();

            expect(getOutputValue().textContent).toEqual('Текст');
        });

        it('если принимает строку, содержащую число, выводит её в неизменном виде', () => {
            testComponent.value = '125';
            fixture.detectChanges();

            expect(getOutputValue().textContent).toEqual('125');
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

    describe('hoverable:', () => {
        it('если false, ховер не работает', () => {
            expect(getBadge().classes['_hoverable']).toBe(false);
        });

        it('если true, ховер работает', () => {
            testComponent.hoverable = true;
            fixture.detectChanges();

            expect(getBadge().classes['_hoverable']).toBe(true);
        });
    });

    describe('notification:', () => {
        it('если не задано, notification нет', () => {
            expect(getNotification()).toBeNull();
        });

        it('если передан цвет, notification есть', () => {
            testComponent.notification = TuiNotification.Info;
            fixture.detectChanges();

            expect(getNotification()).not.toBeNull();
        });
    });
});
