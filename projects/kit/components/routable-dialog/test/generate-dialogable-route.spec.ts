import {tuiGenerateDialogableRoute} from '../generate-dialogable-route';
import TuiRoutableDialog from '../routable-dialog.component';

class Dialog {}

describe('tuiGenerateDialogableRoute', () => {
    it('generated route should have component: TuiRoutableDialogComponent', done => {
        const result = tuiGenerateDialogableRoute(Dialog);

        void Promise.resolve(result.loadComponent?.()).then((module: any) => {
            expect(module.default).toBe(TuiRoutableDialog);

            done();
        });
    });

    it('if passed path is undefined then route path is empty string', () => {
        const result = tuiGenerateDialogableRoute(Dialog);

        expect(result.path).toBe('');
    });

    it('path passed correctly', () => {
        const result = tuiGenerateDialogableRoute(Dialog, {
            path: 'path/to/dialog',
        });

        expect(result.path).toBe('path/to/dialog');
    });

    it('dialog options are passed correctly', () => {
        const dialogOptions = {
            dismissible: true,
            closeable: true,
        };

        const result = tuiGenerateDialogableRoute(Dialog, {
            path: '',
            ...dialogOptions,
        });

        expect(result?.data?.dialogOptions).toEqual(dialogOptions);
    });

    it('if path is undefined then isLazy: true', () => {
        const result = tuiGenerateDialogableRoute(Dialog);

        expect(result?.data?.isLazy).toBe(true);
    });

    it('if path is empty string then isLazy: true', () => {
        const result = tuiGenerateDialogableRoute(Dialog, {path: ''});

        expect(result?.data?.isLazy).toBe(true);
    });

    it('if path is not empty string then isLazy: false', () => {
        const result = tuiGenerateDialogableRoute(Dialog, {path: 'path'});

        expect(result?.data?.isLazy).toBe(false);
    });

    describe('checking back url calculation', () => {
        it('back url calculated correctly for undefined path', () => {
            const result = tuiGenerateDialogableRoute(Dialog);

            expect(result?.data?.backUrl).toBe('..');
        });

        it('back url calculated correctly for empty path', () => {
            const result = tuiGenerateDialogableRoute(Dialog, {
                path: '',
            });

            expect(result?.data?.backUrl).toBe('..');
        });

        it('back url calculated correctly for single segment', () => {
            const result = tuiGenerateDialogableRoute(Dialog, {
                path: 'path',
            });

            expect(result?.data?.backUrl).toBe('..');
        });

        it('back url calculated correctly for double segments', () => {
            const result = tuiGenerateDialogableRoute(Dialog, {
                path: 'path/to',
            });

            expect(result?.data?.backUrl).toBe('../..');
        });

        it('back url calculated correctly for triple segments', () => {
            const result = tuiGenerateDialogableRoute(Dialog, {
                path: 'path/to/dialog',
            });

            expect(result?.data?.backUrl).toBe('../../..');
        });
    });
});
