import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiDropdownHostComponent,
    TuiDropdownHostModule,
} from '@taiga-ui/cdk/components/dropdown-host';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiElementModule} from '../element.module';

describe('TuiElement directive', () => {
    @Component({
        template: `
            <tui-dropdown-host
                #component
                #element="elementRef"
                tuiElement
                [class]="storeRefs(component, element)"
            ></tui-dropdown-host>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        component?: TuiDropdownHostComponent;
        element?: ElementRef<HTMLElement>;

        storeRefs(
            component: TuiDropdownHostComponent,
            element: ElementRef<HTMLElement>,
        ): void {
            this.component = component;
            this.element = element;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiDropdownHostModule, TuiElementModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('gets native element behind component', () => {
        expect(testComponent.component instanceof TuiDropdownHostComponent).toBe(true);
        expect(testComponent.element?.nativeElement instanceof HTMLElement).toBe(true);
        expect(testComponent.element?.nativeElement.tagName.toLowerCase()).toBe(
            'tui-dropdown-host',
        );
    });
});
