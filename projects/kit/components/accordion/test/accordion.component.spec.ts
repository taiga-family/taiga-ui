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
                    Заголовок аккордеона
                    <ng-template tuiAccordionItemContent>Контент аккордеона</ng-template>
                </tui-accordion-item>
            </tui-accordion>
            <tui-accordion *ngIf="!single" [closeOthers]="closeOthers">
                <tui-accordion-item automation-id="tui-accordion__item2">
                    Заголовок аккордеона
                    <ng-template tuiAccordionItemContent>
                        <div automation-id="tui-accordion__content1">
                            <form [formGroup]="testForm">
                                <tui-input
                                    automation-id="tui-accordion__input"
                                    tuiTextfieldSize="l"
                                    tuiTextfieldExampleText="Иванов Иван Иванович"
                                    formControlName="name"
                                    >Введите ФИО</tui-input
                                >
                                <tui-select
                                    automation-id="tui-accordion__select"
                                    tuiTextfieldSize="l"
                                    formControlName="accounts"
                                >
                                    Выберите счет
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
                    Заголовок аккордеона
                    <ng-template tuiAccordionItemContent>
                        <div automation-id="tui-accordion__content2">
                            Контент аккордеона
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
            new Account('Рублёвый', 500),
            new Account('Долларовый', 237),
            new Account('Евровый', 100),
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

    it('содержит заголовок', () => {
        expect(getAccordionItemTitle()!.nativeElement.textContent.trim()).toBe(
            'Заголовок аккордеона',
        );
    });

    it('контент по умолчанию скрыт', () => {
        expect(getAccordionItemContent()).toBeNull();
    });

    it('контент открывается по клику', () => {
        getAccordionItemHeaderSingle()!.click();
        fixture.detectChanges();

        expect(getAccordionItemContent()).not.toBeNull();
    });

    it('в контент коррекно передалось содержимое', () => {
        getAccordionItemHeaderSingle()!.click();
        fixture.detectChanges();

        expect(getAccordionItemContent()!.nativeElement.textContent.trim()).toBe(
            'Контент аккордеона',
        );
    });

    it('по умолчанию со скругленными углами', () => {
        expect(getAccordionGroup()!.classes['tui-group_rounded']).toBe(true);
    });

    it('по умолчанию границы по бокам у айтемов есть', () => {
        expect(getAccordionItem()!.attributes['data-tui-host-borders']).toBe('all');
    });

    it('при borders = top-bottom границ нет', () => {
        testComponent.borders = TuiBorders.TopBottom;
        fixture.detectChanges();

        expect(getAccordionItem()!.attributes['data-tui-host-borders']).toBe(
            'top-bottom',
        );
    });

    it('по умолчанию стрелка есть', () => {
        expect(getAccordionItemArrow()!).not.toBeNull();
    });

    it('при showArrow = false стрелки нет', () => {
        testComponent.showArrow = false;
        fixture.detectChanges();

        expect(getAccordionItemArrow()!).toBeNull();
    });

    describe('Управление с клавиатуры', () => {
        beforeEach(() => {
            pageObject
                .getByAutomationId(`${testContext.prefix}item-wrapper`)!
                .nativeElement.focus();
            fixture.detectChanges();
        });

        it('Нажатие space открывает контент', () => {
            sendKeydown(space);
            fixture.detectChanges();

            expect(getAccordionItemContent()).not.toBeNull();
        });

        it('Повторное нажатие space закрывает контент', () => {
            sendKeydown(space);
            sendKeydown(space);
            fixture.detectChanges();

            expect(getOriginalArrayFromQueryList(testComponent.items)[0].open).toBe(
                false,
            );
        });

        it('Нажатие enter открывает контент', () => {
            sendKeydown(enter);
            fixture.detectChanges();

            expect(getAccordionItemContent()).not.toBeNull();
        });

        it('Повторное нажатие enter закрывает контент', () => {
            sendKeydown(enter);
            sendKeydown(enter);
            fixture.detectChanges();

            expect(getOriginalArrayFromQueryList(testComponent.items)[0].open).toBe(
                false,
            );
        });

        it('Нажатие esc закрывает контент', () => {
            sendKeydown(space);
            sendKeydown(esc);
            fixture.detectChanges();

            expect(getOriginalArrayFromQueryList(testComponent.items)[0].open).toBe(
                false,
            );
        });
    });

    describe('Многосекционный', () => {
        beforeEach(() => {
            testComponent.single = false;
            fixture.detectChanges();
        });

        it('клик по 1-ой секции открывает ее содержимое', () => {
            accordionHeaderClick(2);
            fixture.detectChanges();

            expect(getAccordionContent1()).not.toBeNull();
            expect(getAccordionContent2()).toBeNull();
        });

        it('клик по 2-ой секции открывает ее содержимое и закрывает содержимое 1-й', () => {
            accordionHeaderClick(2);
            accordionHeaderClick(3);
            fixture.detectChanges();

            expect(getAccordionContent1()).toBeNull();
            expect(getAccordionContent2()).not.toBeNull();
        });

        it('при closeOthers = false уже открытые секции не закрываются при открытии новых', () => {
            testComponent.closeOthers = false;
            fixture.detectChanges();

            accordionHeaderClick(2);
            accordionHeaderClick(3);
            fixture.detectChanges();

            expect(getAccordionContent1()).not.toBeNull();
            expect(getAccordionContent2()).not.toBeNull();
        });

        it('нажатие пробела в инпуте не закрывает аккордеон', () => {
            accordionHeaderClick(2);
            fixture.detectChanges();

            const input = getAccordionInput()!.query(By.css('.input'))!.nativeElement;

            input.dispatchEvent(space);
            fixture.detectChanges();

            expect(getAccordionContent1()).not.toBeNull();
        });

        it(
            'в селекте внутри контента корректно закрывается дропдаун на ESC, ' +
                'контент аккордеона при этом не закрывается',
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
