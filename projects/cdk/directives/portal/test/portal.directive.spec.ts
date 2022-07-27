import {CommonModule} from '@angular/common';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiDropdownHostModule, TuiPortalModule} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`Portal directive`, () => {
    @Component({
        template: `
            <tui-dropdown-host></tui-dropdown-host>
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
            imports: [CommonModule, TuiPortalModule, TuiDropdownHostModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`doesnt show template initially`, () => {
        expect(getPortal()).toBeNull();
    });

    it(`shows template when true is passes`, () => {
        testComponent.show = true;
        fixture.detectChanges();

        expect(getPortal()).not.toBeNull();
    });

    it(`hides template when directive is destroyed`, () => {
        testComponent.show = true;
        fixture.detectChanges();
        testComponent.present = false;
        fixture.detectChanges();

        expect(getPortal()).toBeNull();
    });

    function getPortal(): DebugElement | null {
        return fixture.debugElement.query(By.css(`#test`));
    }
});
