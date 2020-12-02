import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiSizeL, TuiSizeS, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputPasswordComponent} from '../input-password.component';
import {TuiInputPasswordModule} from '../input-password.module';

describe('InputPassword', () => {
    @Component({
        template: `
            <tui-input-password
                [formControl]="control"
                [readOnly]="readOnly"
                [tuiTextfieldSize]="size"
            ></tui-input-password>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputPasswordComponent)
        component!: TuiInputPasswordComponent;

        control = new FormControl();
        readOnly = false;
        size: TuiSizeS | TuiSizeL = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPasswordComponent;
    let pageObject: PageObject<TestComponent>;

    function getIcon(): DebugElement | null {
        return pageObject.getByAutomationId(`tui-password__icon`);
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputPasswordModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;

        fixture.detectChanges();
    });

    describe('Поведение иконки "Показать пароль"', () => {
        it('Изначально она присутствует и представляет собой "Закрытый глаз"', () => {
            const icon = getIcon();
            const iconSrc = component.icon;

            expect(icon).not.toBeNull();
            expect(iconSrc).toBe('tuiIconHideLarge');
        });

        it('При клике на нее иконка представляет собой "Открытый глаз"', () => {
            const icon = getIcon();

            icon!.nativeElement.click();

            const iconSrc = component.icon;

            expect(icon).not.toBeNull();
            expect(iconSrc).toBe('tuiIconShowLarge');
        });

        it('В маленьком размере иконки маленькие', () => {
            testComponent.size = 's';
            fixture.detectChanges();

            const icon = getIcon();
            let iconSrc = component.icon;

            expect(iconSrc).toBe('tuiIconEyeClosed');

            icon!.nativeElement.click();

            iconSrc = component.icon;

            expect(icon).not.toBeNull();
            expect(iconSrc).toBe('tuiIconEyeOpen');
        });

        it('Если readOnly - иконки нет', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getIcon()).toBeNull();
        });

        it('Если disabled - иконки нет', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getIcon()).toBeNull();
        });
    });

    describe('Видимость введенного в поле', () => {
        it('Изначально поле type="password", поэтому при вводе видно только точки', () => {
            const inputType = component.inputType;

            expect(inputType).toBe('password');
        });

        it('При клике на иконку "Показать пароль" поле становится type="text"', () => {
            getIcon()!.nativeElement.click();

            const inputType = component.inputType;

            expect(inputType).toBe('text');
        });

        it('При readOnly поле type="password"', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            const inputType = component.inputType;

            expect(inputType).toBe('password');
        });

        it('При disabled поле type="password"', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            const inputType = component.inputType;

            expect(inputType).toBe('password');
        });
    });
});
