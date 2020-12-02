import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiToggleModule} from '../toggle.module';

describe('Toggle', () => {
    @Component({
        template: `
            <tui-toggle
                [formControl]="control"
                [showIcons]="showIcons"
                [showLoader]="showLoader"
            >
            </tui-toggle>
        `,
    })
    class TestComponent {
        control = new FormControl();
        showIcons = false;
        showLoader = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-toggle__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiToggleModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
    });

    it('Если value не задано, клик меняет значение на true', () => {
        fixture.detectChanges();

        clickOnToggle();

        expect(testComponent.control.value).toBe(true);
    });

    it('Если value === false, клик меняет значение на true', () => {
        testComponent.control.setValue(false);
        fixture.detectChanges();

        clickOnToggle();

        expect(testComponent.control.value).toBe(true);
    });

    it('Если value === true, клик меняет значение на false', () => {
        testComponent.control.setValue(true);
        fixture.detectChanges();

        clickOnToggle();

        expect(testComponent.control.value).toBe(false);
    });

    it('Если контрол задизейблен, клик не меняет значение', () => {
        testComponent.control.setValue(false);
        testComponent.control.disable();
        fixture.detectChanges();

        clickOnToggle();

        expect(testComponent.control.value).toBe(false);
    });

    it('Если контрол снова раздизейблен, клик меняет значение на противоположное', () => {
        testComponent.control.setValue(false);
        testComponent.control.disable();
        fixture.detectChanges();

        testComponent.control.enable();
        fixture.detectChanges();

        clickOnToggle();

        expect(testComponent.control.value).toBe(true);
    });

    describe('Иконки', () => {
        describe('showIcons === false', () => {
            beforeEach(() => {
                testComponent.showIcons = false;
            });

            it('Иконки скрыты, когда toggle в состоянии "отключен"', () => {
                testComponent.control.setValue(false);
                fixture.detectChanges();

                checkIconVisibility(`${testContext.prefix}check-icon`, false);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, false);
            });

            it('Иконки скрыты, когда toggle в состоянии "включен"', () => {
                testComponent.control.setValue(true);
                fixture.detectChanges();

                checkIconVisibility(`${testContext.prefix}check-icon`, false);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, false);
            });
        });

        describe('showIcons === true', () => {
            beforeEach(() => {
                testComponent.showIcons = true;
            });

            it('Иконки показаны, когда toggle в состоянии "отключен"', () => {
                testComponent.control.setValue(false);
                fixture.detectChanges();

                // Если иконки включены, то в DOM добавляются сразу обе -
                // особенность реализации для плавной анимации
                checkIconVisibility(`${testContext.prefix}check-icon`, true);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, true);
            });

            it('Иконки показаны, когда toggle в состоянии "включен"', () => {
                testComponent.control.setValue(true);
                fixture.detectChanges();

                checkIconVisibility(`${testContext.prefix}check-icon`, true);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, true);
            });
        });
    });

    describe('Loader', () => {
        describe('showLoader === false', () => {
            beforeEach(() => {
                testComponent.showLoader = false;
            });

            it('Иконки скрыты, когда toggle в состоянии "отключен"', () => {
                testComponent.control.setValue(false);
                fixture.detectChanges();

                checkIconVisibility(`${testContext.prefix}check-icon`, false);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, false);
            });

            it('Иконки скрыты, когда toggle в состоянии "включен"', () => {
                testComponent.control.setValue(true);
                fixture.detectChanges();

                checkIconVisibility(`${testContext.prefix}check-icon`, false);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, false);
            });
        });

        describe('showLoader === true', () => {
            beforeEach(() => {
                testComponent.showLoader = true;
                testComponent.showIcons = true;
            });

            it('Иконки скрыты, когда toggle в состоянии "отключен", loader имеет над ними приоритет', () => {
                testComponent.control.setValue(false);
                fixture.detectChanges();

                checkIconVisibility(`${testContext.prefix}check-icon`, false);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, false);
            });

            it('Иконки скрыты, когда toggle в состоянии "включен", loader имеет над ними приоритет', () => {
                testComponent.control.setValue(true);
                fixture.detectChanges();

                checkIconVisibility(`${testContext.prefix}check-icon`, false);
                checkIconVisibility(`${testContext.prefix}cancel-icon`, false);
            });
        });
    });

    function clickOnToggle() {
        const checkbox = pageObject.getByAutomationId(`${testContext.prefix}checkbox`);

        checkbox!.nativeElement.click();
    }

    function checkIconVisibility(
        tuiIconAutomationId: string,
        expectedVisibility: boolean,
    ) {
        const icon = pageObject.getByAutomationId(tuiIconAutomationId);

        if (expectedVisibility) {
            expect(icon).not.toBeNull();
        } else {
            expect(icon).toBeNull();
        }
    }
});
