import type {ElementRef} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiDropdownDirective, TuiDropdownManual, TuiDropdownOpen, TuiDropdownSelection, TuiRoot} from '@taiga-ui/core';
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

describe('TuiDropdownDirective with TuiDropdownSelection', () => {
    @Component({
        standalone: true,
        imports: [
            PolymorpheusOutlet,
            PolymorpheusTemplate,
            TuiDropdownDirective,
            TuiDropdownOpen,
            TuiDropdownSelection,
            TuiRoot,
        ],
        template: `
            <tui-root>
                <div
                    [tuiDropdown]="dropdown"
                    tuiDropdownSelection
                    [tuiDropdownOpen]="open"
                >
                    <textarea 
                        automation-id="tui-dropdown-selection__textarea"
                        style="width: 200px; height: 100px;"
                    >Line 1
Line 2
Line 3</textarea>
                </div>
                <ng-template
                    #dropdown="polymorpheus"
                    polymorpheus
                >
                    <div automation-id="tui-dropdown-selection__content">
                        Dropdown content
                    </div>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class TestDropdownSelection {
        public open = false;
    }

    let fixture: ComponentFixture<TestDropdownSelection>;
    let pageObject: TuiPageObject<TestDropdownSelection>;
    let testComponent: TestDropdownSelection;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestDropdownSelection],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestDropdownSelection);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should allow default arrow key behavior in dropdown-selection context', () => {
        const textarea = pageObject.getByAutomationId('tui-dropdown-selection__textarea')?.nativeElement;
        
        expect(textarea).toBeTruthy();
        
        // Focus the textarea
        textarea.focus();
        textarea.setSelectionRange(0, 0); // Start of first line
        
        // Create arrow down key event
        const arrowDownEvent = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            keyCode: 40,
            which: 40,
            bubbles: true,
            cancelable: true
        });
        
        // Spy on preventDefault to ensure it's not called
        const preventDefaultSpy = jest.spyOn(arrowDownEvent, 'preventDefault');
        
        // Dispatch the event on the textarea
        textarea.dispatchEvent(arrowDownEvent);
        
        // Verify preventDefault was NOT called (allowing default text navigation)
        expect(preventDefaultSpy).not.toHaveBeenCalled();
        
        // Verify the dropdown is not opened by the arrow key
        const dropdownContent = pageObject.getByAutomationId('tui-dropdown-selection__content');
        expect(dropdownContent).toBeNull();
    });
});
