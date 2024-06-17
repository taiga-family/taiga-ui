import type {HarnessLoader} from '@angular/cdk/testing';
import {parallel} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import type {QueryList} from '@angular/core';
import {Component, ViewChild, ViewChildren} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {
    TuiAccordion,
    TuiAccordionDirective,
    TuiAccordionItemComponent,
} from '@taiga-ui/kit';
import {
    TuiAccordionHarness,
    TuiAccordionItemHarness,
    TuiSelectHarness,
    TuiTextfieldHarness,
} from '@taiga-ui/testing';

class Account {
    constructor(
        public readonly name: string,
        public readonly balance: number,
    ) {}

    public toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

describe('Accordion', () => {
    let fixture: ComponentFixture<Test>;
    let loader: HarnessLoader;
    let accordion: TuiAccordionHarness;
    let testComponent: Test;

    @Component({
        standalone: true,
        imports: [TuiAccordion, ReactiveFormsModule, TuiDataList],
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
                            <form [formGroup]="testForm"></form>
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
    class Test {
        @ViewChild(TuiAccordionDirective, {static: true})
        public component!: TuiAccordionDirective;

        @ViewChildren(TuiAccordionItemComponent)
        public items!: QueryList<TuiAccordionItemComponent>;

        public closeOthers = true;

        public accounts = [
            new Account('Ruble', 500),
            new Account('Dollar', 237),
            new Account('Euro', 100),
        ];

        public testForm = new FormGroup({
            name: new FormControl(''),
            accounts: new FormControl(this.accounts[0]),
        });
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);
        accordion = await loader.getHarness(TuiAccordionHarness);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('contains title', async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.getTitle()).toBe('Accordion header');
    });

    it('content is hidden by default', async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.getContent()).toBeNull();
    });

    it('content opens on click', async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        await accordionItem.clickHeader();
        expect(await accordionItem.getContent()).not.toBeNull();
    });

    it('the content was correctly transferred to the content', async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        await accordionItem.clickHeader();
        expect(await accordionItem.getContent()).toBe('Accordion content');
    });

    it('by default, items have borders on the sides', async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.getBorders()).toBe('all');
    });

    it('with borders = top-bottom there are no borders', async () => {
        const accordionItem = await accordion.getHarness(
            TuiAccordionItemHarness.with({selector: '#border-top'}),
        );

        expect(await accordionItem.getBorders()).toBe('top-bottom');
    });

    it('by default there is an arrow', async () => {
        const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

        expect(await accordionItem.hasArrow()).toBe(true);
    });

    it('with showArrow = false there is no arrow', async () => {
        const accordionItem = await accordion.getHarness(
            TuiAccordionItemHarness.with({selector: '#hide-arrow'}),
        );

        expect(await accordionItem.hasArrow()).toBe(false);
    });

    describe('Multi-section', () => {
        beforeEach(async () => {
            accordion = await loader.getHarness(
                TuiAccordionHarness.with({selector: '#multi-select'}),
            );
        });

        it('clicking on the 1st section opens its contents', async () => {
            const [accordionItem1, accordionItem2] = await accordion.getAllHarnesses(
                TuiAccordionItemHarness,
            );

            await accordionItem1.clickHeader();
            expect(await accordionItem1.getContent()).not.toBeNull();
            expect(await accordionItem2.getContent()).toBeNull();
        });

        it('clicking on the 2nd section opens its contents and closes the contents of the 1st', async () => {
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

        it('when closeOthers = false, already open sections are not closed when new ones are opened', async () => {
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

        xit('pressing the space bar in the input does not close the accordion', async () => {
            const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

            await accordionItem.clickHeader();
            const input = await accordionItem.getHarness(TuiTextfieldHarness);

            await input.sendSpaceKey();
            expect(await accordionItem.getContent()).not.toBeNull();
        });

        xit('in the select inside the content, the dropdown on ESC is correctly closed, the accordion content is not closed', async () => {
            const accordionItem = await accordion.getHarness(TuiAccordionItemHarness);

            await accordionItem.clickHeader();
            const select = await accordionItem.getHarness(TuiSelectHarness);

            await parallel(() => [select.sendSpaceKey(), select.sendEscKey()]);
            expect(await accordionItem.getContent()).not.toBeNull();
        });
    });
});
