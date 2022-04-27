import {CommonModule} from '@angular/common';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiPortalModule} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

describe('Portal directive', () => {
    @Component({
        template: `
            <tui-root></tui-root>
            <ng-container *ngIf="present">
                <div
                    *tuiPortal="show"
                    id="test"
                >
                    Hi
                </div>
            </ng-container>
        `,
    })
    class TestComponent {
        present = true;
        show = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, TuiPortalModule, TuiRootModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('doesnt show template initially', () => {
        expect(getPortal()).toBeNull();
    });

    it('shows template when true is passes', () => {
        testComponent.show = true;
        fixture.detectChanges();

        expect(getPortal()).not.toBeNull();
    });

    it('hides template when directive is destroyed', () => {
        testComponent.show = true;
        fixture.detectChanges();
        testComponent.present = false;
        fixture.detectChanges();

        expect(getPortal()).toBeNull();
    });

    function getPortal(): DebugElement | null {
        return fixture.debugElement.query(By.css('#test'));
    }
});
