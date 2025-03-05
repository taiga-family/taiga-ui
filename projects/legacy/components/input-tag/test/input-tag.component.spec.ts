import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {CHAR_NO_BREAK_SPACE, TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiHint, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {
    TuiInputTagComponent,
    TuiInputTagModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {
    tuiIsActive,
    TuiNativeInputPO,
    TuiPageObject,
    tuiTestCleaner,
    tuiTestPlaceholder,
    tuiTestTooltip,
} from '@taiga-ui/testing';

const TAG = 'Tag';

describe('InputTag', () => {
    @Component({
        standalone: true,
        imports: [
            NgIf,
            ReactiveFormsModule,
            TuiHint,
            TuiInputTagModule,
            TuiRoot,
            TuiTextfieldControllerModule,
        ],
        template: `
            <tui-root>
                <button>Focus stealer</button>
                <tui-input-tag
                    *ngIf="defaultInputs"
                    [formControl]="control"
                ></tui-input-tag>
                <tui-input-tag
                    *ngIf="!defaultInputs"
                    [formControl]="control"
                    [placeholder]="placeholder"
                    [readOnly]="readOnly"
                    [separator]="separator"
                    [tagValidator]="tagValidator"
                    [tuiHintContent]="hintContent"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                >
                    Placeholder
                </tui-input-tag>
            </tui-root>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        @ViewChild(TuiInputTagComponent)
        public component!: TuiInputTagComponent;

        public control = new FormControl([TAG]);
        public defaultInputs = false;
        public cleaner = true;
        public readOnly = false;
        public separator: RegExp | string = ',';
        public placeholder = 'Example';
        public labelOutside = true;
        public size: TuiSizeL | TuiSizeS = 'm';
        public hintContent: string | null = 'prompt';
        public tagValidator: TuiBooleanHandler<string> = TUI_TRUE_HANDLER;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiInputTagComponent;
    let pageObject: TuiPageObject<Test>;
    let focusStealer: HTMLElement;
    let inputPO: TuiNativeInputPO;

    const testContext = {
        get pageObject() {
            return pageObject;
        },
        get fixture() {
            return fixture;
        },
        get testComponent() {
            return testComponent;
        },
        get inputPO() {
            return inputPO;
        },
        get prefix() {
            return 'tui-input-tag__';
        },
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        focusStealer = document.querySelector<'button'>('button')!;

        inputPO = new TuiNativeInputPO(fixture, `${testContext.prefix}native`);
    });

    describe('Adding tags', () => {
        beforeEach(async () => {
            inputPO.focus();
            fixture.detectChanges();
            inputPO.sendText('1234,567,89');
            await fixture.whenStable();
        });

        it('adds tags separated by commas', () => {
            expect(component.value[1]).toBe('1234');
            expect(component.value[2]).toBe('567');
            expect(component.value[3]).toBe('89');
            expect(component.value.length).toBe(4);
        });

        it("doesn't create empty tags", () => {
            inputPO.sendText(' ,  ,,,');

            expect(component.value.length).toBe(4);
        });

        it('when exiting the field adds input as a tag', async () => {
            inputPO.sendText('0');
            focusStealer.focus();
            fixture.detectChanges();

            await fixture.whenStable();

            expect(component.value.length).toBe(5);
            expect(component.value[4]).toBe('0');
        });

        it('does not add empty tags when leaving the field', () => {
            inputPO.sendText('   ');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value.length).toBe(4);
        });

        it('when adding a tag on leaving the field, the field is cleared', async () => {
            focusStealer.focus();
            fixture.detectChanges();

            await fixture.whenStable();

            expect(inputPO.value).toBe('');
        });

        it('pressing Enter on the field adds the input as a tag', () => {
            inputPO.sendText(' 0');
            inputPO.sendKeydown('enter');

            expect(component.value[4]).toBe('0');
            expect(component.value.length).toBe(5);
        });

        it('pressing Enter on the field does not add empty tags', () => {
            inputPO.sendText('   ');
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(4);
        });

        it('pressing Enter on a field clears the field', async () => {
            inputPO.sendKeydown('enter');
            fixture.detectChanges();

            await fixture.whenStable();

            expect(inputPO.value).toBe('');
        });

        it("doesn't add tag on hitting Enter if disabledItemHandler returned false", () => {
            component.disabledItemHandler = (item) => item === 'Tag';
            inputPO.sendText('Tag');
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(4);
        });
    });

    describe('Adding tags with custom separator', () => {
        it('adds tags separated by custom separator', () => {
            testComponent.separator = ';';
            inputPO.focus();
            fixture.detectChanges();
            inputPO.sendText('10,5;12,2');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value[1]).toBe('10,5');
            expect(component.value[2]).toBe('12,2');
        });

        it('adds tags last tag without separator', () => {
            testComponent.separator = ';';
            inputPO.focus();
            fixture.detectChanges();
            inputPO.sendText('10,5;12,2;');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value[1]).toBe('10,5');
            expect(component.value[2]).toBe('12,2');
        });
    });

    describe('Adding tags with spaces (spaces inside tags are allowed)', () => {
        it('spaces are preserved and not tagged', () => {
            inputPO.focus();
            fixture.detectChanges();
            inputPO.sendText('1234 567 89');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value[1]).toBe('1234 567 89');
        });
    });

    describe('Adding tags when spaces inside tags are forbidden', () => {
        beforeEach(() => {
            testComponent.separator = /[\s,]/;
            inputPO.focus();
            fixture.detectChanges();
        });

        it('splits into tags by space', () => {
            inputPO.sendText('1234 567 89');

            expect(component.value[1]).toBe('1234');
            expect(component.value[2]).toBe('567');
            expect(component.value[3]).toBe('89');
            expect(component.value.length).toBe(4);
        });

        it('breaks into tags on non-breaking space', () => {
            inputPO.sendText(`1234${CHAR_NO_BREAK_SPACE}567${CHAR_NO_BREAK_SPACE}89`);

            expect(component.value[1]).toBe('1234');
            expect(component.value[2]).toBe('567');
            expect(component.value[3]).toBe('89');
            expect(component.value.length).toBe(4);
        });

        it('splits into tags by comma', () => {
            inputPO.sendText('1234,567,89');

            expect(component.value[1]).toBe('1234');
            expect(component.value[2]).toBe('567');
            expect(component.value[3]).toBe('89');
            expect(component.value.length).toBe(4);
        });

        it('when adding Space does not add tag or change value if tagValidator returned false', () => {
            const savedLength = component.value.length;
            const newTag = 'new';

            component.tagValidator = (item: string) => item !== newTag;
            inputPO.sendText(newTag);
            inputPO.sendKeydown('Space');

            expect(inputPO.value).toBe(newTag);
            expect(component.value.length).toBe(savedLength);
        });

        it('adding a comma does not add the tag and does not change the value if tagValidator returned false', () => {
            const savedLength = component.value.length;
            const newTag = 'new';

            component.tagValidator = (item: string) => item !== newTag;
            inputPO.sendText(newTag);
            inputPO.sendKeydown(',');

            expect(inputPO.value).toBe(newTag);
            expect(component.value.length).toBe(savedLength);
        });

        it('strips away the bad tags, separated by commas or spaces', () => {
            const firstValidTag = 'first';
            const secondValidTag = 'second';
            const invalidTag = 'invalid';

            component.disabledItemHandler = (item) => item === invalidTag;
            inputPO.sendText(`${firstValidTag}, ${invalidTag}, ${secondValidTag}`);

            expect(component.value.find((tag) => tag === invalidTag)).toBeUndefined();
        });
    });

    describe('Cleaner', () => {
        it('there is no cleaner by default', () => {
            testComponent.defaultInputs = true;
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).toBeNull();
        });

        it('if cleaner === true and empty field without cleaner tags is missing', () => {
            testComponent.control.setValue([]);
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).toBeNull();
        });

        it('if cleaner === true and not empty, the cleaner field is present', () => {
            testComponent.control.setValue([]);
            inputPO.sendText('123');

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).not.toBeNull();
        });

        it('with cleaner === true and added tags, cleaner is present', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).not.toBeNull();
        });

        it('clicking on cleaner clears the input field and tags', () => {
            inputPO.sendText('123');
            pageObject
                .getByAutomationId(`${testContext.prefix}cleaner`)!
                .nativeElement.click();

            expect(component.search).toBe('');
            expect(component.value).toEqual([]);
        });
    });

    describe('Editing tags', () => {
        it('edits tags', () => {
            component.onTagEdited('Hapica', 0);
            fixture.detectChanges();

            expect(component.value[0]).toBe('Hapica');
        });

        it('moves focus to the input field after editing', () => {
            component.onTagEdited('Hapica', 0);
            fixture.detectChanges();

            expect(inputPO.focused).toBe(true);
        });
    });

    describe('Go to tags', () => {
        it('goes to tags when pressing arrowLeft', () => {
            inputPO.focus();
            inputPO.sendKeydown('ArrowLeft');

            expect(
                tuiIsActive(
                    pageObject.getByAutomationId(`${testContext.prefix}tag`)!
                        .nativeElement,
                ),
            ).toBe(true);
        });

        it("doesn't jump to tags when pressing arrowLeft if input field is not empty", () => {
            inputPO.focus();
            inputPO.sendText('123');
            inputPO.sendKeydown('ArrowLeft');

            expect(inputPO.focused).toBe(true);
        });

        it('goes to tags on backspace and empty input field', () => {
            inputPO.focus();
            inputPO.sendKeydown('backspace');

            expect(
                tuiIsActive(
                    pageObject.getByAutomationId(`${testContext.prefix}tag`)!
                        .nativeElement,
                ),
            ).toBe(true);
        });

        it("doesn't jump to tags when pressing backspace and not empty input field", () => {
            inputPO.focus();
            inputPO.sendText('123');
            inputPO.sendKeydown('backspace');

            expect(inputPO.focused).toBe(true);
        });
    });

    it('reuse example text as placeholder', () => {
        expect(component.hasValue).toBeTruthy();
        expect(component.labelOutside).toBeTruthy();
        expect(component.inputHidden).toBeFalsy();
        expect(component.hasExampleText).toBeFalsy();
        expect(component.hasPlaceholder).toBeFalsy();
        expect(getPlaceholderText(fixture)).toBe('Example');

        testComponent.control.reset();
        fixture.detectChanges();

        expect(component.hasValue).toBeFalsy();
        expect(component.labelOutside).toBeTruthy();
        expect(component.inputHidden).toBeFalsy();
        expect(component.hasExampleText).toBe(false);
        expect(component.hasPlaceholder).toBe(true);
        expect(getPlaceholderText(fixture)).toBe('Placeholder');

        // noinspection DuplicatedCode
        component.inputHidden = true;
        fixture.detectChanges();

        expect(component.hasValue).toBeFalsy();
        expect(component.labelOutside).toBeTruthy();
        expect(component.inputHidden).toBeTruthy();
        expect(component.hasExampleText).toBe(false);
        expect(component.hasPlaceholder).toBe(true);
        expect(getPlaceholderText(fixture)).toBe('Placeholder');

        testComponent.defaultInputs = true;
        testComponent.labelOutside = true;
        // noinspection DuplicatedCode
        component.inputHidden = true;
        fixture.detectChanges();

        expect(component.hasValue).toBeFalsy();
        expect(component.labelOutside).toBeTruthy();
        expect(component.inputHidden).toBeTruthy();
        expect(component.hasExampleText).toBe(false);
        expect(component.hasPlaceholder).toBe(true);
        expect(getPlaceholderText(fixture)).toBe('');
    });

    tuiTestPlaceholder(testContext, ['test'], []);

    tuiTestCleaner(testContext, ['test'], []);

    tuiTestTooltip(testContext);
});

function getPlaceholderText<T>(fixture: ComponentFixture<T>): string {
    return (
        new TuiPageObject(fixture)
            .getByAutomationId('tui-input-tag__placeholder')
            ?.nativeElement.textContent?.trim() ||
        new TuiPageObject(fixture)?.getByAutomationId('tui-input-tag__native')
            ?.nativeElement.placeholder
    );
}
