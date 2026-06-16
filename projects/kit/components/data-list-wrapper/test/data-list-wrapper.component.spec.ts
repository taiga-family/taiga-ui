import {ChangeDetectionStrategy, Component, Directive, forwardRef} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {type ControlValueAccessor, FormControl, NgControl} from '@angular/forms';
import {provideTaiga} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiMultiSelect} from '@taiga-ui/kit';

describe('TuiDataListWrapper', () => {
    @Directive({
        selector: '[testControl]',
        providers: [
            {
                provide: NgControl,
                useExisting: forwardRef(() => TestControl),
            },
        ],
    })
    class TestControl extends NgControl {
        private readonly testControl = new FormControl<readonly string[]>([], {
            nonNullable: true,
        });

        public override name: number | string | null = null;
        public override valueAccessor: ControlValueAccessor | null = null;

        public override get control(): FormControl<readonly string[]> {
            return this.testControl;
        }

        public override viewToModelUpdate(): void {}
    }

    @Component({
        imports: [TestControl, TuiDataListWrapper, TuiMultiSelect],
        template: `
            <tui-data-list-wrapper
                testControl
                tuiMultiSelectGroup
                [items]="items"
                [labels]="labels"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public items: ReadonlyArray<readonly string[]> = [
            ['Option 1', 'Option 2', 'Option 3'],
        ];

        public labels: readonly string[] = [];
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    function getElement(): HTMLElement {
        return fixture.nativeElement;
    }

    function getButtonTexts(): string[] {
        return Array.from(
            getElement().querySelectorAll('button'),
            (button) => button.textContent?.trim() ?? '',
        );
    }

    function getMultiSelectGroups(): NodeListOf<Element> {
        return getElement().querySelectorAll('tui-opt-group[tuiMultiSelectGroup]');
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
    });

    it('does not render group select-all for a single group with hidden label', () => {
        fixture.detectChanges();

        expect(getButtonTexts()).toEqual(['Option 1', 'Option 2', 'Option 3']);
        expect(getMultiSelectGroups()).toHaveLength(0);
    });

    it('keeps group select-all for a single labeled group', () => {
        testComponent.labels = ['Options'];
        fixture.detectChanges();

        expect(getButtonTexts()).toEqual([
            'Select all',
            'Option 1',
            'Option 2',
            'Option 3',
        ]);
        expect(getMultiSelectGroups()).toHaveLength(1);
    });

    it('keeps group select-all for multiple groups with hidden labels', () => {
        testComponent.items = [['Option 1'], ['Option 2']];
        fixture.detectChanges();

        expect(getButtonTexts()).toEqual([
            'Select all',
            'Option 1',
            'Select all',
            'Option 2',
        ]);
        expect(getMultiSelectGroups()).toHaveLength(2);
    });
});
