import type {ElementRef} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiDropdownDirective, TuiDropdownManual, TuiRoot} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {TuiPageObject} from '@taiga-ui/testing';

describe('TuiDropdownDirective', () => {
    @Component({
        standalone: true,
        imports: [
            PolymorpheusOutlet,
            PolymorpheusTemplate,
            TuiDropdownDirective,
            TuiDropdownManual,
            TuiRoot,
        ],
        template: `
            <tui-root>
                <button
                    automation-id="tui-dropdown-directive__button"
                    type="button"
                >
                    Element content
                </button>
                <div
                    [tuiDropdown]="dropdown"
                    [tuiDropdownManual]="open"
                >
                    Hosty host
                    <button
                        automation-id="tui-dropdown-directive__host"
                        type="button"
                    >
                        Element content
                    </button>
                </div>
                <ng-template
                    #dropdown="polymorpheus"
                    polymorpheus
                >
                    <div automation-id="tui-dropdown-directive__item">
                        Droppy down
                        <input automation-id="tui-dropdown-directive__input" />
                    </div>
                </ng-template>
            </tui-root>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public open = false;
    }

    let fixture: ComponentFixture<Test>;
    let pageObject: TuiPageObject<Test>;
    let testComponent: Test;
    const testContext = {
        get prefix() {
            return 'tui-dropdown-directive__';
        },
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('when tuiDropdownManual = false, dropdown is not shown', () => {
        expect(getDropdown()).toBeNull();
    });

    it('when tuiDropdownManual = true, dropdown is shown', () => {
        testComponent.open = true;
        fixture.detectChanges();

        expect(getDropdown()?.nativeElement.textContent?.trim()).toBe('Droppy down');
    });

    function getDropdown(): ElementRef<HTMLDivElement> | null {
        return pageObject.getByAutomationId(`${testContext.prefix}item`);
    }
});
