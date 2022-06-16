import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiSizeL} from '@taiga-ui/core';
import {configureTestSuite, PageObject} from '@taiga-ui/testing';

import {TuiFileState} from '../../../enums/file-state';
import {TuiFileLike} from '../../../interfaces/file-like';
import {TuiInputFileComponent} from '../input-file.component';
import {TuiInputFileModule} from '../input-file.module';

describe('InputFile', () => {
    @Component({
        template: `
            <tui-input-file
                [accept]="accept"
                [multiple]="true"
                [loadingFiles]="loadingFiles"
                [showSize]="showSize"
                [size]="size"
                [readOnly]="readOnly"
                [disabled]="disabled"
                [(ngModel)]="files"
                [(rejectedFiles)]="rejectedFiles"
            ></tui-input-file>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputFileComponent, {static: true})
        component!: TuiInputFileComponent;

        files: readonly TuiFileLike[] = [
            {
                name: 'test.txt',
                size: 237,
            },
        ];

        loadingFiles: readonly TuiFileLike[] = [];
        rejectedFiles: readonly TuiFileLike[] = [];
        state = TuiFileState.Normal;
        showSize = true;
        readOnly = false;
        disabled = false;
        size: TuiSizeL = 'm';
        accept = 'image/*,.txt';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TuiInputFileModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
    });

    describe('file', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('has delete button', () => {
            expect(pageObject.getByAutomationId('tui-file__remove')).toBeTruthy();
        });

        it('delete button is not present in readOnly mode', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(pageObject.getByAutomationId('tui-file__remove')).toBeFalsy();
        });

        it('delete button is not present when control is disabled', async () => {
            testComponent.disabled = true;
            fixture.autoDetectChanges(true);
            await fixture.whenStable();
            expect(pageObject.getByAutomationId('tui-file__remove')).toBeFalsy();
        });

        it('has no message', () => {
            expect(pageObject.getByAutomationId('tui-file__content')).toBeFalsy();
        });

        it('has default message for failed file', () => {
            testComponent.rejectedFiles = testComponent.files;
            testComponent.files = [];
            fixture.detectChanges();

            expect(pageObject.getByAutomationId('tui-file__content')).toBeTruthy();
        });

        it('has no spinner', () => {
            expect(pageObject.getByAutomationId('tui-file__loading')).toBeFalsy();
        });

        it('has spinner', async () => {
            testComponent.loadingFiles = testComponent.files;
            fixture.autoDetectChanges(true);
            await fixture.whenStable();
            expect(pageObject.getByAutomationId('tui-file__loader')).toBeTruthy();
        });

        it('has size', () => {
            expect(
                pageObject
                    .getByAutomationId('tui-file__size')!
                    .nativeElement.textContent.trim(),
            ).toBe('237 B');
        });

        it('size is hidden', () => {
            testComponent.showSize = false;
            fixture.detectChanges();

            expect(pageObject.getByAutomationId('tui-file__size')).toBeFalsy();
        });

        it('has name', () => {
            expect(
                pageObject
                    .getByAutomationId('tui-file__name')!
                    .nativeElement.textContent.trim(),
            ).toBe('test');
        });

        it('has extension', () => {
            expect(
                pageObject
                    .getByAutomationId('tui-file__type')!
                    .nativeElement.textContent.trim(),
            ).toBe('.txt');
        });
    });

    it('does not show loading files that are not in control', () => {
        testComponent.loadingFiles = [
            {
                name: 'test.txt',
                size: 237,
            },
        ];
        fixture.detectChanges();

        expect(pageObject.getByAutomationId('tui-file__loading')).toBeFalsy();
    });

    it('rejects incorrect formats', () => {
        fixture.componentInstance.files = [];
        fixture.detectChanges();

        const text: TuiFileLike = {name: 'test.txt', type: 'text'};
        const image: TuiFileLike = {name: 'test.png', type: 'image/png'};
        const error: TuiFileLike = {name: 'test.hap', type: 'wtf'};

        const files: FileList = [text, image, error] as unknown as FileList;

        testComponent.component.onDropped(
            {files: files} as unknown as DataTransfer,
            {
                maxSizeRejectionReason: 'File exceeds size ',
                formatRejectionReason: 'Wrong file format',
            },
            ['B', 'KB', 'MB'],
        );
        fixture.detectChanges();

        expect(testComponent.rejectedFiles.length).toBe(1);
        expect(testComponent.files).toEqual([text, image]);
    });

    it('does not rejects formats with whitespaces', () => {
        fixture.componentInstance.files = [];
        fixture.componentInstance.accept =
            'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf';
        fixture.detectChanges();

        const text: TuiFileLike = {
            name: 'test.pdf',
            type: 'application/pdf',
        };

        const files: FileList = [text] as unknown as FileList;

        testComponent.component.onDropped(
            {files: files} as unknown as DataTransfer,
            {
                maxSizeRejectionReason: 'File exceeds size ',
                formatRejectionReason: 'Wrong file format',
            },
            ['B', 'KB', 'MB'],
        );
        fixture.detectChanges();

        expect(testComponent.rejectedFiles.length).toBe(0);
    });

    it('if no files in control, not drawing files', () => {
        testComponent.files = [];
        testComponent.rejectedFiles = [];

        fixture.detectChanges();

        expect(pageObject.getByAutomationId('tui-input-file__error')).toBeNull();
        expect(pageObject.getByAutomationId('tui-input-file__loading')).toBeNull();
        expect(pageObject.getByAutomationId('tui-input-file__file')).toBeNull();
    });

    it('if no files in control, but has rejectedFiles, draw files', () => {
        testComponent.files = [];
        testComponent.rejectedFiles = [
            {
                name: 'rejected file',
            },
        ];

        fixture.detectChanges();

        expect(pageObject.getByAutomationId('tui-input-file__error')).not.toBeNull();
        expect(pageObject.getByAutomationId('tui-input-file__loading')).toBeNull();
        expect(pageObject.getByAutomationId('tui-input-file__file')).toBeNull();
    });

    it('if no rejectedFiles to drawing, but has files in control, draw files', () => {
        testComponent.files = [
            {
                name: 'loaded file',
            },
        ];
        testComponent.rejectedFiles = [];

        fixture.detectChanges();

        expect(pageObject.getByAutomationId('tui-input-file__error')).toBeNull();
        expect(pageObject.getByAutomationId('tui-input-file__loading')).toBeNull();
        expect(pageObject.getByAutomationId('tui-input-file__file')).not.toBeNull();
    });
});
