import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TUI_DEFAULT_IDENTITY_MATCHER} from '@taiga-ui/cdk';
import {TuiDataListDirective, TuiRootComponent} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {
    TuiSelectComponent,
    TuiSelectModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

class Beast {
    constructor(
        public readonly species: string,
        public readonly trait: string,
        public readonly id: string,
    ) {}

    public toString(): string {
        return `${this.trait} ${this.species}`;
    }
}

const ITEMS = [
    new Beast('mouse', 'Gray', '0'),
    new Beast('cat', 'Sly', '1'),
    new Beast('raccoon', 'Naughty', '2'),
];

const CHECKMARK = 'tui-select-option__checkmark';
const MATCHER: TuiIdentityMatcher<Beast> = (item1, item2) => item1.id === item2.id;

describe('Select', () => {
    @Component({
        standalone: true,
        imports: [
            TuiRootComponent,
            TuiSelectModule,
            ReactiveFormsModule,
            TuiTextfieldControllerModule,
            TuiDataListWrapperComponent,
            TuiDataListDirective,
        ],
        template: `
            <tui-root>
                <tui-select
                    [formControl]="control"
                    [identityMatcher]="identityMatcher"
                    [tuiTextfieldCleaner]="cleaner"
                >
                    Who stole the ball?
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    ></tui-data-list-wrapper>
                </tui-select>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSelectComponent, {static: true})
        public component!: TuiSelectComponent<Beast | string>;

        public items = ITEMS;
        public control = new FormControl();
        public cleaner = false;
        public identityMatcher: TuiIdentityMatcher<Beast> = TUI_DEFAULT_IDENTITY_MATCHER;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
    });

    describe('Cleaning the field', () => {
        beforeEach(() => {
            testComponent.cleaner = true;
            fixture.detectChanges();
        });

        it('delete key clears the field', () => {
            testComponent.control.setValue(ITEMS[0]);
            fixture.detectChanges();
            inputPO.sendKeydown('delete');

            expect(testComponent.control.value).toBeNull();
        });

        it('if the cross is disabled, the delete key does not clear the field', () => {
            testComponent.cleaner = false;
            testComponent.control.setValue(ITEMS[0]);
            fixture.detectChanges();
            inputPO.sendKeydown('delete');

            expect(testComponent.control.value).not.toBeNull();
        });
    });

    describe('identityMatcher', () => {
        describe('Default matcher', () => {
            beforeEach(() => {
                inputPO.sendKeydown('ArrowDown');
            });

            it('Considers the same object to be identical to itself', () => {
                testComponent.control.setValue(ITEMS[0]);
                fixture.detectChanges();

                expect(pageObject.getByAutomationId(CHECKMARK)).not.toBeNull();
            });

            it("Doesn't consider copies of objects identical", () => {
                testComponent.control.setValue(new Beast('mouse', 'Gray', '0'));
                fixture.detectChanges();

                expect(pageObject.getByAutomationId(CHECKMARK)).toBeNull();
            });
        });

        describe('Custom matcher (matching by id)', () => {
            beforeEach(() => {
                testComponent.identityMatcher = MATCHER;
                fixture.detectChanges();
            });

            it('Considers the same object to be identical to itself', () => {
                testComponent.control.setValue(ITEMS[0]);
                inputPO.sendKeydown('ArrowDown');

                expect(pageObject.getByAutomationId(CHECKMARK)).not.toBeNull();
            });

            it('Considers copies of objects identical', () => {
                testComponent.control.setValue(new Beast('mouse', 'Gray', '0'));
                inputPO.sendKeydown('ArrowDown');

                expect(pageObject.getByAutomationId(CHECKMARK)).not.toBeNull();
            });
        });
    });
});
