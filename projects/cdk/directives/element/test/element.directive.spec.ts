import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiPortalHostComponent,
    TuiPortalHostModule,
} from '@taiga-ui/cdk/components/portal-host';
import {configureTestSuite} from 'ng-bullet';

import {TuiElementModule} from '../element.module';

describe('TuiElement directive', () => {
    @Component({
        template: `
            <tui-portal-host
                #component
                #element="elementRef"
                tuiElement
                [class]="storeRefs(component, element)"
            ></tui-portal-host>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        component: any;
        element: any;

        storeRefs(component: any, element: any) {
            this.component = component;
            this.element = element;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPortalHostModule, TuiElementModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('gets native element behind component', () => {
        expect(testComponent.component instanceof TuiPortalHostComponent).toBe(true);
        expect(testComponent.element.nativeElement instanceof HTMLElement).toBe(true);
        expect(testComponent.element.nativeElement.tagName.toLowerCase()).toBe(
            'tui-portal-host',
        );
    });
});
