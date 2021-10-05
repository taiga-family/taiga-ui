import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    ALWAYS_TRUE_HANDLER,
    CHAR_NO_BREAK_SPACE,
    TuiBooleanHandler,
    TuiFocusedModule,
} from '@taiga-ui/cdk';
import {
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    isActive,
    NativeInputPO,
    PageObject,
    testCleaner,
    testExampleText,
    testPlaceholder,
    testTooltip,
} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputTagComponent} from '../input-tag.component';
import {TuiInputTagModule} from '../input-tag.module';

const TAG = 'Tag';

describe('InputTag', () => {
    @Component({
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
                    [readOnly]="readOnly"
                    [allowSpaces]="allowSpaces"
                    [tagValidator]="tagValidator"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                    [tuiHintContent]="hintContent"
                ></tui-input-tag>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputTagComponent)
        component: TuiInputTagComponent;

        control = new FormControl([TAG]);
        defaultInputs = false;
        cleaner = true;
        readOnly = false;
        allowSpaces = true;
        labelOutside = true;
        exampleText = 'Пример';
        size: TuiSizeS | TuiSizeL = 'm';
        hintContent: string | null = 'prompt';
        tagValidator: TuiBooleanHandler<string> = ALWAYS_TRUE_HANDLER;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputTagComponent;
    let pageObject: PageObject<TestComponent>;
    let focusStealer: HTMLElement;
    let inputPO: NativeInputPO;

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

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputTagModule,
                TuiFocusedModule,
                TuiRootModule,
                TuiHintControllerModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        focusStealer = document.querySelector<'button'>('button')!;

        inputPO = new NativeInputPO(fixture, `${testContext.prefix}native`);
    });

    describe('Adding tags', () => {
        beforeEach(done => {
            inputPO.focus();
            fixture.detectChanges();
            inputPO.sendText('1234,567,89');
            fixture.whenStable().then(done);
        });

        it('Adds tags separated by commas', () => {
            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('Leaves the value after the last comma in the input field', () => {
            expect(inputPO.value).toEqual('89');
        });

        it(`Doesn't create empty tags`, () => {
            inputPO.sendText(' ,  ,,,');

            expect(component.value.length).toBe(3);
        });

        it('When exiting the field adds input as a tag', done => {
            focusStealer.focus();
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(component.value.length).toBe(4);
                expect(component.value[3]).toBe('89');
                done();
            });
        });

        it('Does not add empty tags when leaving the field', () => {
            inputPO.sendText('   ');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value.length).toBe(3);
        });

        it('When adding a tag on leaving the field, the field is cleared', done => {
            focusStealer.focus();
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('');
                done();
            });
        });

        it('Pressing Enter on the field adds the input as a tag', () => {
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(4);
            expect(component.value[3]).toBe('89');
        });

        it('Pressing Enter on the field does not add empty tags', () => {
            inputPO.sendText('   ');
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(3);
        });

        it('Pressing Enter on a field clears the field', done => {
            inputPO.sendKeydown('enter');
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('');
                done();
            });
        });

        it(`Doesn't add tag on hitting Enter if disabledItemHandler returned false`, () => {
            component.disabledItemHandler = item => item === 'Tag';
            inputPO.sendText('Tag');
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(3);
        });
    });

    describe('Adding tags with spaces when the allowSpaces option is enabled', () => {
        it('Spaces are preserved and not tagged', fakeAsync(() => {
            inputPO.focus();
            fixture.detectChanges();
            tick();
            inputPO.sendText('1234 567 89');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value[1]).toEqual('1234 567 89');
        }));
    });

    describe('Adding tags when the allowSpaces option is disabled', () => {
        beforeEach(() => {
            testComponent.allowSpaces = false;
            inputPO.focus();
            fixture.detectChanges();
        });

        it('splits into tags by space', () => {
            inputPO.sendText('1234 567 89');

            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('breaks into tags on non-breaking space', () => {
            inputPO.sendText(`1234${CHAR_NO_BREAK_SPACE}567${CHAR_NO_BREAK_SPACE}89`);

            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('splits into tags by comma', () => {
            inputPO.sendText('1234,567,89');

            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('When adding Space does not add tag or change value if tagValidator returned false', () => {
            const savedLength = component.value.length;
            const newTag = 'new';

            component.tagValidator = item => item !== newTag;
            inputPO.sendText(newTag);
            inputPO.sendKeydown('Space');

            expect(inputPO.value).toBe(newTag);
            expect(component.value.length).toBe(savedLength);
        });

        it('Adding a comma does not add the tag and does not change the value if tagValidator returned false', () => {
            const savedLength = component.value.length;
            const newTag = 'new';

            component.tagValidator = item => item !== newTag;
            inputPO.sendText(newTag);
            inputPO.sendKeydown(',');

            expect(inputPO.value).toBe(newTag);
            expect(component.value.length).toBe(savedLength);
        });

        it('Strips away the bad tags, separated by commas or spaces', () => {
            const firstValidTag = 'first';
            const secondValidTag = 'second';
            const invalidTag = 'invalid';

            component.disabledItemHandler = item => item === invalidTag;
            inputPO.sendText(`${firstValidTag}, ${invalidTag}, ${secondValidTag}`);

            expect(component.value.find(tag => tag === invalidTag)).toBeUndefined();
        });
    });

    describe('Cleaner', () => {
        it('There is no cleaner by default', () => {
            testComponent.defaultInputs = true;
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).toBeNull();
        });

        it('If cleaner === true and empty field without cleaner tags is missing', () => {
            testComponent.control.setValue([]);
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).toBeNull();
        });

        it('If cleaner === true and not empty, the cleaner field is present', () => {
            testComponent.control.setValue([]);
            inputPO.sendText('123');

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).not.toBeNull();
        });

        it('With cleaner === true and added tags, cleaner is present', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).not.toBeNull();
        });

        it('Clicking on cleaner clears the input field and tags', () => {
            inputPO.sendText('123');
            pageObject
                .getByAutomationId(`${testContext.prefix}cleaner`)!
                .nativeElement.click();

            expect(component.search).toBe('');
            expect(component.value).toEqual([]);
        });
    });

    describe('Editing tags', () => {
        it('Edits tags', () => {
            component.onTagEdited('Hapica', TAG);
            fixture.detectChanges();

            expect(component.value[0]).toBe('Hapica');
        });

        it('Moves focus to the input field after editing', () => {
            component.onTagEdited('Hapica', TAG);
            fixture.detectChanges();

            expect(inputPO.focused).toBe(true);
        });
    });

    describe('Go to tags', () => {
        it('Goes to tags when pressing arrowLeft', () => {
            inputPO.focus();
            inputPO.sendKeydown('ArrowLeft');

            expect(
                isActive(
                    pageObject.getByAutomationId(`${testContext.prefix}tag`)!
                        .nativeElement,
                ),
            ).toBe(true);
        });

        it("Doesn't jump to tags when pressing arrowLeft if input field is not empty", () => {
            inputPO.focus();
            inputPO.sendText('123');
            inputPO.sendKeydown('ArrowLeft');

            expect(inputPO.focused).toBe(true);
        });

        it('Goes to tags on backspace and empty input field', () => {
            inputPO.focus();
            inputPO.sendKeydown('backspace');

            expect(
                isActive(
                    pageObject.getByAutomationId(`${testContext.prefix}tag`)!
                        .nativeElement,
                ),
            ).toBe(true);
        });

        it("Doesn't jump to tags when pressing backspace and not empty input field", () => {
            inputPO.focus();
            inputPO.sendText('123');
            inputPO.sendKeydown('backspace');

            expect(inputPO.focused).toBe(true);
        });
    });

    testExampleText(testContext, ['test'], []);

    testPlaceholder(testContext, ['test'], []);

    testCleaner(testContext, ['test'], []);

    testTooltip(testContext);
});
