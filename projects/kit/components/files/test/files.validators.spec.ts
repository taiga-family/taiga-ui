import {FormControl} from '@angular/forms';
import {TUI_FORMAT_ERROR, tuiCreateFileFormatValidator} from '@taiga-ui/kit';

function makeFile(name: string, type = ''): File {
    return new File([], name, {type});
}

describe('tuiCreateFileFormatValidator', () => {
    describe('empty accept', () => {
        it('accepts any file when accept is empty string', () => {
            const validator = tuiCreateFileFormatValidator('');
            const control = new FormControl([
                makeFile('photo.exe', 'application/x-msdownload'),
            ]);

            expect(validator(control)).toBeNull();
        });
    });

    describe('extension-based accept', () => {
        const validator = tuiCreateFileFormatValidator('.jpg');

        it('accepts file with matching extension', () => {
            const control = new FormControl([makeFile('photo.jpg', 'image/jpeg')]);

            expect(validator(control)).toBeNull();
        });

        it('rejects file with non-matching extension', () => {
            const control = new FormControl([makeFile('photo.png', 'image/png')]);

            expect(validator(control)?.[TUI_FORMAT_ERROR].$implicit).toEqual([
                makeFile('photo.png', 'image/png'),
            ]);
        });

        it('is case-insensitive for file extensions', () => {
            const control = new FormControl([makeFile('photo.JPG', 'image/jpeg')]);

            expect(validator(control)).toBeNull();
        });
    });

    describe('accept string with spaces after commas (.jpeg, .jpg, .png, .pdf, .doc, .docx, .zip, .tif)', () => {
        const accept = '.jpeg, .jpg, .png, .pdf, .doc, .docx, .zip, .tif';
        const validator = tuiCreateFileFormatValidator(accept);

        it.each([
            ['photo.jpeg', 'image/jpeg'],
            ['photo.jpg', 'image/jpeg'],
            ['image.png', 'image/png'],
            ['document.pdf', 'application/pdf'],
            ['document.doc', 'application/msword'],
            [
                'document.docx',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ],
            ['archive.zip', 'application/zip'],
            ['scan.tif', 'image/tiff'],
        ])('accepts %s', (name, type) => {
            const control = new FormControl([makeFile(name, type)]);

            expect(validator(control)).toBeNull();
        });

        it.each([
            ['video.mp4', 'video/mp4'],
            ['script.js', 'text/javascript'],
            ['data.csv', 'text/csv'],
        ])('rejects %s', (name, type) => {
            const control = new FormControl([makeFile(name, type)]);

            expect(validator(control)?.[TUI_FORMAT_ERROR]).toBeTruthy();
        });

        it('accepts .tif file when browser does not report MIME type (empty type)', () => {
            const control = new FormControl([makeFile('scan.tif', '')]);

            expect(validator(control)).toBeNull();
        });

        it('accepts .zip file when browser does not report MIME type (empty type)', () => {
            const control = new FormControl([makeFile('archive.zip', '')]);

            expect(validator(control)).toBeNull();
        });

        it('rejects file with unknown extension even with empty type', () => {
            const control = new FormControl([makeFile('script.sh', '')]);

            expect(validator(control)?.[TUI_FORMAT_ERROR]).toBeTruthy();
        });
    });

    describe('MIME type-based accept', () => {
        it('accepts file with matching MIME type', () => {
            const validator = tuiCreateFileFormatValidator('application/pdf');
            const control = new FormControl([makeFile('doc.pdf', 'application/pdf')]);

            expect(validator(control)).toBeNull();
        });

        it('rejects file with non-matching MIME type', () => {
            const validator = tuiCreateFileFormatValidator('application/pdf');
            const control = new FormControl([makeFile('photo.jpg', 'image/jpeg')]);

            expect(validator(control)?.[TUI_FORMAT_ERROR]).toBeTruthy();
        });
    });

    describe('wildcard MIME type accept (image/*)', () => {
        const validator = tuiCreateFileFormatValidator('image/*');

        it('accepts any image', () => {
            const control = new FormControl([makeFile('photo.jpg', 'image/jpeg')]);

            expect(validator(control)).toBeNull();
        });

        it('accepts png as an image', () => {
            const control = new FormControl([makeFile('image.png', 'image/png')]);

            expect(validator(control)).toBeNull();
        });

        it('rejects non-image file', () => {
            const control = new FormControl([makeFile('doc.pdf', 'application/pdf')]);

            expect(validator(control)?.[TUI_FORMAT_ERROR]).toBeTruthy();
        });
    });

    describe('trailing comma in accept string (bug: empty format should not match empty type)', () => {
        it('does not accept arbitrary file with empty type when accept has trailing comma', () => {
            const validator = tuiCreateFileFormatValidator('.jpg,');
            const control = new FormControl([makeFile('script.sh', '')]);

            expect(validator(control)?.[TUI_FORMAT_ERROR]).toBeTruthy();
        });

        it('still accepts correct file when accept has trailing comma', () => {
            const validator = tuiCreateFileFormatValidator('.jpg,');
            const control = new FormControl([makeFile('photo.jpg', 'image/jpeg')]);

            expect(validator(control)).toBeNull();
        });
    });

    describe('null and empty value', () => {
        it('returns null for null value', () => {
            const validator = tuiCreateFileFormatValidator('.jpg');
            const control = new FormControl(null);

            expect(validator(control)).toBeNull();
        });

        it('returns null for empty array', () => {
            const validator = tuiCreateFileFormatValidator('.jpg');
            const control = new FormControl([]);

            expect(validator(control)).toBeNull();
        });
    });

    describe('multiple files', () => {
        const validator = tuiCreateFileFormatValidator('.jpg, .png');

        it('returns null when all files match', () => {
            const control = new FormControl([
                makeFile('a.jpg', 'image/jpeg'),
                makeFile('b.png', 'image/png'),
            ]);

            expect(validator(control)).toBeNull();
        });

        it('returns only rejected files in error context', () => {
            const validFile = makeFile('a.jpg', 'image/jpeg');
            const invalidFile = makeFile('b.pdf', 'application/pdf');
            const control = new FormControl([validFile, invalidFile]);
            const error = validator(control)?.[TUI_FORMAT_ERROR];

            expect(error?.$implicit).toEqual([invalidFile]);
        });
    });
});
