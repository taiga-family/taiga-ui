import {ChangeDetectionStrategy, Component, type ElementRef} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    provideTaiga,
    TuiDropdown,
    TuiRoot,
    type TuiSizeL,
    type TuiSizeS,
    TuiTextfield,
} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {TuiPageObject} from '@taiga-ui/testing';

describe('TuiTextfieldOptionsDirective', () => {
    @Component({
        imports: [PolymorpheusTemplate, TuiDropdown, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <button
                    type="button"
                    [tuiDropdown]="dropdown"
                    [tuiDropdownManual]="true"
                >
                    Open
                </button>
                <ng-template
                    #dropdown="polymorpheus"
                    polymorpheus
                >
                    <form [tuiTextfieldSize]="size">
                        <div [tuiTextfieldCleaner]="false">
                            <tui-textfield automation-id="textfield" />
                        </div>
                    </form>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public size: TuiSizeL | TuiSizeS = 's';
    }

    let fixture: ComponentFixture<Test>;
    let pageObject: TuiPageObject<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('inherits parent options inside dropdown', () => {
        const textfield = pageObject.getByAutomationId(
            'textfield',
        ) as ElementRef<HTMLElement>;

        expect(textfield.nativeElement.dataset.size).toBe('s');

        fixture.componentInstance.size = 'l';
        fixture.detectChanges();

        expect(textfield.nativeElement.dataset.size).toBe('l');
    });
});
