import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {identity, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiTextMaskOptions} from '@taiga-ui/core';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputInlineComponent} from '../input-inline.component';
import {TuiInputInlineModule} from '../input-inline.module';

const D = /\d/;

describe('InputInline', () => {
    @Component({
        template: `
            <tui-input-inline
                [formControl]="control"
                [textMaskOptions]="textMaskOptions"
                [unmaskHandler]="unmaskHandler"
            ></tui-input-inline>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputInlineComponent, {static: true})
        component: TuiInputInlineComponent;

        control = new FormControl('');

        textMaskOptions: TuiTextMaskOptions | null = null;

        unmaskHandler: TuiStringHandler<string> = identity;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;
    const testContext = {
        get prefix() {
            return 'tui-input-inline__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputInlineModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        inputPO = new NativeInputPO(fixture, `tui-input-inline__native`);
    });

    describe('Mask', () => {
        beforeEach(() => {
            testComponent.textMaskOptions = {
                guide: false,
                mask: [D, D, D, D, ' ', D, D, D, D, ' ', D, D, D, D, ' ', D, D, D, D],
            };
            fixture.detectChanges();
        });

        it('Masks value', () => {
            inputPO.sendText('12345');

            expect(testComponent.control.value).toBe('1234 5');
        });

        it('unmasks value', () => {
            testComponent.unmaskHandler = value => value.replace(/ /g, '');
            fixture.detectChanges();
            inputPO.sendText('12345');

            expect(inputPO.value).toBe('1234 5');
            expect(testComponent.control.value).toBe('12345');
        });
    });

    describe('placeholder', () => {
        it('отображается, если нет значения', () => {
            expect(getPlaceholder()).not.toBeNull();
        });

        it('не отображается, если есть значение', () => {
            testComponent.control.setValue('123');
            fixture.detectChanges();
            expect(getPlaceholder()).toBeNull();
        });
    });

    describe('поле ввода', () => {
        it('редактируемо, если не заблокировано', () => {
            expect(getNative()!.nativeElement.disabled).toBe(false);
        });

        it('не редактируемо, если заблокировано', done => {
            testComponent.control.disable();
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(getNative()!.nativeElement.disabled).toBe(true);
                done();
            });
        });
    });

    function getPlaceholder(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}placeholder`);
    }

    function getNative(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}native`);
    }
});
