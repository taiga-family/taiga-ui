import {FormControl} from '@angular/forms';
import {
    TUI_FORMAT_ERROR,
    TUI_SIZE_ERROR,
    tuiFilesAccepted,
    tuiFilesRejected,
} from '@taiga-ui/kit';

const REJECTED = new File([], 'photo.png', {type: 'image/png'});
const ACCEPTED = new File([], 'photo.jpg', {type: 'image/jpeg'});

describe('tuiFilesRejected', () => {
    it('returns an empty array for a missing control', () => {
        expect(tuiFilesRejected(null)).toEqual([]);
    });

    it('reads both rejection reasons', () => {
        const control = new FormControl([ACCEPTED, REJECTED]);

        control.setErrors({
            [TUI_FORMAT_ERROR]: {$implicit: [REJECTED]},
            [TUI_SIZE_ERROR]: {$implicit: [ACCEPTED]},
        });

        expect(tuiFilesRejected(control)).toEqual([REJECTED, ACCEPTED]);
    });

    it('deduplicates a file rejected for both reasons', () => {
        const control = new FormControl([REJECTED]);

        control.setErrors({
            [TUI_FORMAT_ERROR]: {$implicit: [REJECTED]},
            [TUI_SIZE_ERROR]: {$implicit: [REJECTED]},
        });

        expect(tuiFilesRejected(control)).toEqual([REJECTED]);
    });
});

describe('tuiFilesAccepted', () => {
    it('returns an empty array for a missing control', () => {
        expect(tuiFilesAccepted(null)).toEqual([]);
    });

    it('drops the rejected files', () => {
        const control = new FormControl([ACCEPTED, REJECTED]);

        control.setErrors({[TUI_FORMAT_ERROR]: {$implicit: [REJECTED]}});

        expect(tuiFilesAccepted(control)).toEqual([ACCEPTED]);
    });
});
