import {HarnessLoader, parallel} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiAccordionComponent,
    TuiAccordionItemComponent,
    TuiAccordionModule,
    TuiInputModule,
    TuiSelectComponent,
    TuiSelectModule,
} from '@taiga-ui/kit';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {
    configureTestSuite,
    TuiAccordionHarness,
    TuiAccordionItemHarness,
    TuiSelectHarness,
    TuiTextfieldHarness,
} from '@taiga-ui/testing';

class Account {
    constructor(readonly name: string, readonly balance: number) {}

    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

describe(`Accordion`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;
    let accordion: TuiAccordionHarness;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-accordion
                id="single-select"
                [rounded]="true"
            >
                <tui-accordion-item
                    id="border-all"
                    borders="all"
                >
                    Accordion header
                    <ng-template tuiAccordionItemContent>Accordion content</ng-template>
                </tui-accordion-item>
                <tui-accordion-item
                    id="border-top"
                    borders="top-bottom"
                >
                    Accordion header
                    <ng-template tuiAccordionItemContent>Accordion content</ng-template>
                </tui-accordion-item>
                <tui-accordion-item
                    id="hide-arrow"
                    [showArrow]="false"
                >
                    Accordion header
                    <ng-template tuiAccordionItemContent>Accordion content</ng-template>
                </tui-accordion-item>
            </tui-accordion>
            <tui-accordion
                id="multi-select"
                [closeOthers]="closeOthers"
            >
                <tui-accordion-item>
                    Accordion header
                    <ng-template tuiAccordionItemContent>
                        <div>
                            <form [formGroup]="testForm">
                                <tui-input
                                    tuiTextfieldSize="l"
                                    formControlName="name"
                                >
                                    Enter your full name
                                    <input
                                        tuiTextfield
                                        placeholder="Ivanov Ivan Ivanovich"
                                    />
                                </tui-input>
                                <tui-select
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
                <tui-accordion-item>
                    Accordion header
                    <ng-template tuiAccordionItemContent>
                        <div>Accordion content</div>
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
        selectComponent!: TuiSelectComponent<unknown>;

        closeOthers = true;

        accounts = [
            new Account(`Ruble`, 500),
            new Account(`Dollar`, 237),
            new Account(`Euro`, 100),
        ];

        testForm = new FormGroup({
            name: new FormControl(``),
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

    beforeEach(async () => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        accordion = await loader.getHarness(TuiAccordionHarness);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`contains title`, async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.getTitle()).toBe(`Accordion header`);
    });

    it(`content is hidden by default`, async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.getContent()).toBe(null);
    });

    it(`content opens on click`, async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        await accordionItem.clickHeader();
        expect(await accordionItem.getContent()).not.toBeNull();
    });

    it(`the content was correctly transferred to the content`, async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        await accordionItem.clickHeader();
        expect(await accordionItem.getContent()).toBe(`Accordion content`);
    });

    it(`default with rounded corners`, async () => {
        expect(await accordion.hasRoundedCorners()).toBe(true);
    });

    it(`by default, items have borders on the sides`, async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.getBorders()).toBe(`all`);
    });

    it(`with borders = top-bottom there are no borders`, async () => {
        const accordionItem = await accordion.getHarness(
            TuiAccordionItemHarness.with({selector: `#border-top`}),
        );

        expect(await accordionItem.getBorders()).toBe(`top-bottom`);
    });

    it(`by default there is an arrow`, async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.hasArrow()).toBe(true);
    });

    it(`with showArrow = false there is no arrow`, async () => {
        const accordionItem = await accordion.getHarness(
            TuiAccordionItemHarness.with({selector: `#hide-arrow`}),
        );

        expect(await accordionItem.hasArrow()).toBe(false);
    });

    describe(`Keyboard control`, () => {
        let accordionItem: TuiAccordionItemHarness;

        beforeEach(async () => {
            accordionItem = await accordion.getHarness(TuiAccordionItemHarness);
            await accordionItem.focus();
        });

        it(`Pressing space opens content`, async () => {
            await accordionItem.sendSpaceKey();
            expect(await accordionItem.getContent()).not.toBeNull();
        });

        it(`Pressing space again closes the content`, async () => {
            await parallel(() => [
                accordionItem.sendSpaceKey(),
                accordionItem.sendSpaceKey(),
            ]);
            expect(await accordionItem.getContent()).toBeNull();
        });

        it(`Pressing enter opens content`, async () => {
            await accordionItem.sendEnterKey();
            expect(await accordionItem.getContent()).not.toBeNull();
        });

        it(`Pressing enter again closes the content`, async () => {
            await parallel(() => [
                accordionItem.sendEnterKey(),
                accordionItem.sendEnterKey(),
            ]);
            expect(await accordionItem.getContent()).toBeNull();
        });

        it(`Pressing esc closes the content`, async () => {
            await parallel(() => [
                accordionItem.sendSpaceKey(),
                accordionItem.sendEscKey(),
            ]);
            expect(await accordionItem.getContent()).toBeNull();
        });
    });

    describe(`Multi-section`, () => {
        beforeEach(async () => {
            accordion = await loader.getHarness(
                TuiAccordionHarness.with({selector: `#multi-select`}),
            );
        });

        it(`clicking on the 1st section opens its contents`, async () => {
            const [accordionItem1, accordionItem2] = await accordion.getAllHarnesses(
                TuiAccordionItemHarness,
            );

            await accordionItem1.clickHeader();
            expect(await accordionItem1.getContent()).not.toBeNull();
            expect(await accordionItem2.getContent()).toBeNull();
        });

        it(`clicking on the 2nd section opens its contents and closes the contents of the 1st`, async () => {
            const [accordionItem1, accordionItem2] = await accordion.getAllHarnesses(
                TuiAccordionItemHarness,
            );

            await parallel(() => [
                accordionItem1.clickHeader(),
                accordionItem2.clickHeader(),
            ]);

            expect(await accordionItem1.getContent()).toBeNull();
            expect(await accordionItem2.getContent()).not.toBeNull();
        });

        it(`when closeOthers = false, already open sections are not closed when new ones are opened`, async () => {
            testComponent.closeOthers = false;

            const [accordionItem1, accordionItem2] = await accordion.getAllHarnesses(
                TuiAccordionItemHarness,
            );

            await parallel(() => [
                accordionItem1.clickHeader(),
                accordionItem2.clickHeader(),
            ]);

            expect(await accordionItem1.getContent()).not.toBeNull();
            expect(await accordionItem2.getContent()).not.toBeNull();
        });

        it(`pressing the space bar in the input does not close the accordion`, async () => {
            const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

            await accordionItem.clickHeader();
            const input = await accordionItem.getHarness(TuiTextfieldHarness);

            await input.sendSpaceKey();
            expect(await accordionItem.getContent()).not.toBeNull();
        });

        it(`in the select inside the content, the dropdown on ESC is correctly closed, the accordion content is not closed`, async () => {
            const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

            await accordionItem.clickHeader();
            const select = await accordionItem.getHarness(TuiSelectHarness);

            await parallel(() => [select.sendSpaceKey(), select.sendEscKey()]);
            expect(await accordionItem.getContent()).not.toBeNull();
        });
    });
});
