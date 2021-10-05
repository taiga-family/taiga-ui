import {Component, ElementRef} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PageObject} from '@taiga-ui/testing';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {configureTestSuite} from 'ng-bullet';
import {TuiRootModule} from '../../../components/root/root.module';
import {TuiDropdownModule} from '../dropdown.module';

describe('TuiDropdown directive', () => {
    @Component({
        template: `
            <tui-root>
                <button automation-id="tui-dropdow-directive__button"></button>
                <div [tuiDropdownContent]="dropdown" [tuiDropdown]="open">
                    Hosty host
                    <button automation-id="tui-dropdow-directive__host"></button>
                </div>
                <ng-template #dropdown="polymorpheus" polymorpheus>
                    <div automation-id="tui-dropdow-directive__item">
                        Droppy down
                        <input automation-id="tui-dropdow-directive__input" />
                    </div>
                </ng-template>
            </tui-root>
        `,
    })
    class TestComponent {
        open = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let pageObject: PageObject<TestComponent>;
    let testComponent: TestComponent;
    const testContext = {
        get prefix() {
            return 'tui-dropdow-directive__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiDropdownModule,
                NoopAnimationsModule,
                TuiRootModule,
                PolymorpheusModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('when tuiDropdown = false, dropdown is not shown', () => {
        expect(getDropdown()).toBe(null);
    });

    it('when tuiDropdown = true, dropdown is shown', () => {
        testComponent.open = true;
        fixture.detectChanges();

        expect(getDropdown()!.nativeElement.textContent!.trim()).toBe('Droppy down');
    });

    function getDropdown(): ElementRef<HTMLDivElement> | null {
        return pageObject.getByAutomationId(`${testContext.prefix}item`);
    }
});
