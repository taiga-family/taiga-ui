import {Component, DebugElement, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {getOriginalArrayFromQueryList} from '@taiga-ui/cdk';
import {TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiBorders} from '../../../enums/borders';
import {TuiInputModule} from '../../input/input.module';
import {TuiSelectComponent} from '../../select/select.component';
import {TuiSelectModule} from '../../select/select.module';
import {TuiAccordionItemComponent} from '../accordion-item/accordion-item.component';
import {TuiAccordionComponent} from '../accordion.component';
import {TuiAccordionModule} from '../accordion.module';

class Account {
    constructor(readonly name: string, readonly balance: number) {}

    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

describe('Accordion', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;

    const enter = new KeyboardEvent('keydown', {key: 'enter'});
    const space = new KeyboardEvent('keydown', {key: 'space'});
    const esc = new KeyboardEvent('keydown', {key: 'escape'});
    const testContext = {
        get prefix() {
            return 'tui-accordion__';
        },
    };

    @Component({
        template: `
            <tui-accordion *ngIf="single" [rounded]="rounded">
                <tui-accordion-item
                    automation-id="tui-accordion__item1"
                    [borders]="borders"
                    [showArrow]="showArrow"
                    [open]="open"
                >
                    Accordion header
                    <ng-template tuiAccordionItemContent>Accordion content</ng-template>
                </tui-accordion-item>
            </tui-accordion>
            <tui-accordion *ngIf="!single" [closeOthers]="closeOthers">
                <tui-accordion-item automation-id="tui-accordion__item2">
                    Accordion header
                    <ng-template tuiAccordionItemContent>
                        <div automation-id="tui-accordion__content1">
                            <form [formGroup]="testForm">
                                <tui-input
                                    automation-id="tui-accordion__input"
                                    tuiTextfieldSize="l"
                                    tuiTextfieldExampleText="Ivanov Ivan Ivanovich"
                                    formControlName="name"
                                    >Enter your full name</tui-input
                                >
                                <tui-select
                                    automation-id="tui-accordion__select"
                                    tuiTextfieldSize="l"
                                    formControlName="accounts"
                                >
                                    Select account
                                    <tui-data-list-wrapper
                                        *tuiDataList
                                        [items]="accounts"
                                    ></tui-data-list-wrapper>
                                </tui-select>
                            </form>
                        </div>
                    </ng-template>
                </tui-accordion-item>
                <tui-accordion-item automation-id="tui-accordion__item3">
                    Accordion header
                    <ng-template tuiAccordionItemContent>
                        <div automation-id="tui-accordion__content2">
                            Accordion content
                        </div>
                    </ng-template>
                </tui-accordion-item>
            </tui-accordion>
        `,
    })
    class TestComponent {
        @ViewChild(TuiAccordionComponent, {static: true})
        component!: TuiAccordionComponent;

        @ViewChildren(TuiAccordionItemComponent)
        items!: QueryList<TuiAccordionItemComponent>;

        @ViewChild(TuiSelectComponent, {static: true})
        selectComponent!: TuiSelectComponent<any>;

        closeOthers = true;
        single = true;
        borders: TuiBorders = TuiBorders.All;
        rounded = true;
        showArrow = true;
        open = false;

        accounts = [
            new Account('Ruble', 500),
            new Account('Dollar', 237),
            new Account('Euro', 100),
        ];

        testForm = new FormGroup({
            name: new FormControl(''),
            accounts: new FormControl(this.accounts[0]),
        });
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiInputModule,
                TuiSelectModule,
                TuiAccordionModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiTextfieldControllerModule,
                TuiDataListModule,
                TuiDataListWrapperModule,
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

    it('contains title', () => {
        expect(getAccordionItemTitle()!.nativeElement.textContent.trim()).toBe(
            'Accordion header',
        );
    });

    it('content is hidden by default', () => {
        expect(getAccordionItemContent()).toBeNull();
    });

    it('content opens on click', () => {
        getAccordionItemHeaderSingle()!.click();
        fixture.detectChanges();

        expect(getAccordionItemContent()).not.toBeNull();
    });

    it('the content was correctly transferred to the content', () => {
        getAccordionItemHeaderSingle()!.click();
        fixture.detectChanges();

        expect(getAccordionItemContent()!.nativeElement.textContent.trim()).toBe(
            'Accordion content',
        );
    });

    it('default with rounded corners', () => {
        expect(getAccordionGroup()!.classes['tui-group_rounded']).toBe(true);
    });

    it('by default, items have borders on the sides', () => {
        expect(getAccordionItem()!.attributes['data-tui-host-borders']).toBe('all');
    });

    it('with borders = top-bottom there are no borders', () => {
        testComponent.borders = TuiBorders.TopBottom;
        fixture.detectChanges();

        expect(getAccordionItem()!.attributes['data-tui-host-borders']).toBe(
            'top-bottom',
        );
    });

    it('by default there is an arrow', () => {
        expect(getAccordionItemArrow()!).not.toBeNull();
    });

    it('with showArrow = false there is no arrow', () => {
        testComponent.showArrow = false;
        fixture.detectChanges();

        expect(getAccordionItemArrow()!).toBeNull();
    });

    describe('Keyboard control', () => {
        beforeEach(() => {
            pageObject
                .getByAutomationId(`${testContext.prefix}item-wrapper`)!
                .nativeElement.focus();
            fixture.detectChanges();
        });

        it('Pressing space opens content', () => {
            sendKeydown(space);
            fixture.detectChanges();

            expect(getAccordionItemContent()).not.toBeNull();
        });

        it('Pressing space again closes the content', () => {
            sendKeydown(space);
            sendKeydown(space);
            fixture.detectChanges();

            expect(getOriginalArrayFromQueryList(testComponent.items)[0].open).toBe(
                false,
            );
        });

        it('Pressing enter opens content', () => {
            sendKeydown(enter);
            fixture.detectChanges();

            expect(getAccordionItemContent()).not.toBeNull();
        });

        it('Pressing enter again closes the content', () => {
            sendKeydown(enter);
            sendKeydown(enter);
            fixture.detectChanges();

            expect(getOriginalArrayFromQueryList(testComponent.items)[0].open).toBe(
                false,
            );
        });

        it('Pressing esc closes the content', () => {
            sendKeydown(space);
            sendKeydown(esc);
            fixture.detectChanges();

            expect(getOriginalArrayFromQueryList(testComponent.items)[0].open).toBe(
                false,
            );
        });
    });

    describe('Multi-section', () => {
        beforeEach(() => {
            testComponent.single = false;
            fixture.detectChanges();
        });

        it('clicking on the 1st section opens its contents', () => {
            accordionHeaderClick(2);
            fixture.detectChanges();

            expect(getAccordionContent1()).not.toBeNull();
            expect(getAccordionContent2()).toBeNull();
        });

        it('clicking on the 2nd section opens its contents and closes the contents of the 1st', () => {
            accordionHeaderClick(2);
            accordionHeaderClick(3);
            fixture.detectChanges();

            expect(getAccordionContent1()).toBeNull();
            expect(getAccordionContent2()).not.toBeNull();
        });

        it('when closeOthers = false, already open sections are not closed when new ones are opened', () => {
            testComponent.closeOthers = false;
            fixture.detectChanges();

            accordionHeaderClick(2);
            accordionHeaderClick(3);
            fixture.detectChanges();

            expect(getAccordionContent1()).not.toBeNull();
            expect(getAccordionContent2()).not.toBeNull();
        });

        it('pressing the space bar in the input does not close the accordion', () => {
            accordionHeaderClick(2);
            fixture.detectChanges();

            const input = getAccordionInput()!.query(By.css('.input'))!.nativeElement;

            input.dispatchEvent(space);
            fixture.detectChanges();

            expect(getAccordionContent1()).not.toBeNull();
        });

        it(
            'in the select inside the content, the dropdown on ESC is correctly closed, ' +
                'the accordion content is not closed',
            done => {
                accordionHeaderClick(2);
                fixture.detectChanges();

                getAccordionSelectNative().dispatchEvent(space);
                getAccordionSelectNative().dispatchEvent(esc);
                fixture.detectChanges();

                fixture.whenStable().then(() => {
                    expect(getAccordionContent1()).not.toBeNull();
                    done();
                });
            },
        );
    });

    function sendKeydown(key: KeyboardEvent) {
        if (document.activeElement) {
            document.activeElement.dispatchEvent(key);
        }

        fixture.detectChanges();
    }

    function getAccordionItem(i: number = 1): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}item${i}`)!;
    }

    function getAccordionItemHeader(i: number): DebugElement | null {
        return pageObject.getByAutomationId(
            `${testContext.prefix}item-header`,
            getAccordionItem(i)!,
        );
    }

    function accordionHeaderClick(i: number) {
        getAccordionItemHeader(i)!.nativeElement.click();
    }

    function getAccordionContent1(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}content1`)!;
    }

    function getAccordionContent2(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}content2`)!;
    }

    function getAccordionGroup(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}group`);
    }

    function getAccordionInput(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}input`);
    }

    function getAccordionSelect(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}select`);
    }

    function getAccordionSelectNative(): HTMLInputElement {
        return pageObject.getByAutomationId(
            'tui-primitive-textfield__native-input',
            getAccordionSelect()!,
        )!.nativeElement;
    }

    function getAccordionItemHeaderSingle(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}item-header`)!
            .nativeElement;
    }

    function getAccordionItemTitle(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}item-title`);
    }

    function getAccordionItemArrow(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}item-arrow`);
    }

    function getAccordionItemContent(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}item-content`);
    }
});
