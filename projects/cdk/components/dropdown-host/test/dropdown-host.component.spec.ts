import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDropdownHostComponent, TuiDropdownHostModule} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

describe(`DropdownHost`, () => {
    @Component({
        template: `
            <tui-dropdown-host>
                <button>Content</button>
            </tui-dropdown-host>
        `,
    })
    class TestComponent {
        @ViewChild(TuiDropdownHostComponent)
        dropdownHost?: TuiDropdownHostComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, PolymorpheusModule, TuiDropdownHostModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`calculates clientRect`, () => {
        expect(testComponent.dropdownHost!.clientRect.top).toBeGreaterThanOrEqual(0);
    });

    it(`calculates fixedPositionOffset`, () => {
        expect(
            testComponent.dropdownHost!.fixedPositionOffset().top,
        ).toBeGreaterThanOrEqual(0);
    });
});
