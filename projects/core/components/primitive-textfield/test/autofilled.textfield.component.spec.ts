import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiAutofilledDirective} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/core/components';
import {configureTestSuite, TuiNativeInputPO} from '@taiga-ui/testing';

describe('TuiAutofillModule and TuiPrimitiveTextfield', () => {
    @Component({
        template: `
            <tui-primitive-textfield
                [(value)]="value"
                (autofilledChange)="autofilled = $event"
            ></tui-primitive-textfield>
        `,
    })
    class TestComponent {
        value = '';
        autofilled = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let inputPO: TuiNativeInputPO;
    let directiveInstance: TuiAutofilledDirective;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TuiPrimitiveTextfieldModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputPO = new TuiNativeInputPO(fixture, `tui-primitive-textfield__native-input`);
        directiveInstance = fixture.debugElement
            .query(By.directive(TuiAutofilledDirective))
            .injector.get(TuiAutofilledDirective);
    });

    it('correctly works if `tuiAutofilledChange` is set to `tui-wrapper`', () => {
        expect(testComponent.autofilled).toBeFalse();
        expect(testComponent.value).toBe('');
        expect(getWrapperClassList(fixture)).toEqual(['tui-autofill']);

        /**
         * emulate autofill (focus)
         */
        directiveInstance.transitionStartHandler({
            propertyName: 'box-shadow',
            target: inputPO.nativeElement,
        } as TransitionEvent);
        inputPO.nativeElement.value = '1111 2222 3333 4444';
        inputPO.nativeElement.dispatchEvent(
            new InputEvent('input', {data: '1111 2222 3333 4444'}),
        );
        fixture.detectChanges();

        expect(getWrapperClassList(fixture)).toEqual(['tui-autofill', '_autofilled']);
        expect(testComponent.autofilled).toBeTrue();
        expect(testComponent.value).toBe('1111 2222 3333 4444');

        /**
         * emulate autofill (blur)
         */
        directiveInstance.transitionStartHandler({
            propertyName: 'box-shadow',
            target: inputPO.nativeElement,
        } as TransitionEvent);
        inputPO.nativeElement.value = '';
        inputPO.nativeElement.dispatchEvent(new InputEvent('input', {data: ''}));
        fixture.detectChanges();

        expect(getWrapperClassList(fixture)).toEqual(['tui-autofill']);
        expect(testComponent.autofilled).toBeFalse();
        expect(testComponent.value).toBe('');
    });
});

function getWrapperClassList<T>(fixture: ComponentFixture<T>): string[] {
    return Array.from(
        (fixture.nativeElement.querySelector('tui-wrapper')?.classList as string[]) || [],
    ).filter(className => !className.includes('_no-'));
}
