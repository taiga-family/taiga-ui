import {InjectionToken} from '@angular/core';
import {TuiModalService} from '@taiga-ui/core';

import {tuiGenerateDialogableRoute} from '../generate-dialogable-route';
import TuiRoutableDialog from '../routable-dialog.component';

class Dialog {}

const MODAL_SERVICE = new InjectionToken<TuiModalService<unknown>>('MODAL_SERVICE');

describe('tuiGenerateDialogableRoute', () => {
    it('generated route should have component: TuiRoutableDialogComponent', (done) => {
        const result = tuiGenerateDialogableRoute(Dialog);

        void Promise.resolve(result.loadComponent?.()).then((module: any) => {
            expect(module.default).toBe(TuiRoutableDialog);

            done();
        });
    });

    it('if passed path is undefined then route path is empty string', () => {
        const result = tuiGenerateDialogableRoute(Dialog);

        expect(result.path).toBe('');
        expect(result.data?.dialogOptions).toEqual({});
    });

    it('accepts empty options', () => {
        const result = tuiGenerateDialogableRoute(Dialog, {});

        expect(result.path).toBe('');
        expect(result.data?.dialogOptions).toEqual({});
    });

    it('path passed correctly', () => {
        const result = tuiGenerateDialogableRoute(Dialog, {path: 'path/to/dialog'});

        expect(result.path).toBe('path/to/dialog');
    });

    it('dialog options are passed correctly', () => {
        const dialogOptions = {
            dismissible: true,
            closable: true,
        };

        const result = tuiGenerateDialogableRoute(Dialog, {
            path: '',
            ...dialogOptions,
        });

        expect(result?.data?.dialogOptions).toEqual(dialogOptions);
    });

    it('preserves mixed dialog options and strips route options', () => {
        const options = {
            path: 'path/to/dialog',
            outlet: 'modal',
            dismissible: false,
            size: 'l',
            initial: 1,
            offset: 24,
            stops: ['100px', '50vh'],
            bar: false,
            themeColor: '#123456',
        };

        const result = tuiGenerateDialogableRoute(Dialog, options);

        expect(result.path).toBe('path/to/dialog');
        expect(result.outlet).toBe('modal');
        expect(result.data?.dialogOptions).toEqual({
            dismissible: false,
            size: 'l',
            initial: 1,
            offset: 24,
            stops: ['100px', '50vh'],
            bar: false,
            themeColor: '#123456',
        });
    });

    it('accepts explicitly typed data', () => {
        const result = tuiGenerateDialogableRoute<{data: {id: number}}>(Dialog, {
            data: {id: 42},
        });

        expect(result.data?.dialogOptions).toEqual({data: {id: 42}});
    });

    it('accepts void data', () => {
        const result = tuiGenerateDialogableRoute<void>(Dialog);

        expect(result.data?.dialogOptions).toEqual({});
    });

    it('accepts a modal service provider token', () => {
        tuiGenerateDialogableRoute<unknown>(Dialog, {service: MODAL_SERVICE});
    });

    it('rejects a modal service instance', () => {
        const service = {} as TuiModalService<unknown>;

        tuiGenerateDialogableRoute<unknown>(Dialog, {
            // @ts-expect-error service must be a provider token
            service,
        });
    });

    it('rejects invalid option values at compile time', () => {
        tuiGenerateDialogableRoute<{data: {id: number}}>(Dialog, {
            // @ts-expect-error data must match the explicitly declared input type
            data: {id: '42'},
        });

        tuiGenerateDialogableRoute<{initial: number}>(Dialog, {
            // @ts-expect-error initial must be a number
            initial: '1',
        });

        tuiGenerateDialogableRoute<{bar: boolean}>(Dialog, {
            // @ts-expect-error bar must be a boolean
            bar: 'false',
        });
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
            const result = tuiGenerateDialogableRoute(Dialog, {path: ''});

            expect(result?.data?.backUrl).toBe('..');
        });

        it('back url calculated correctly for single segment', () => {
            const result = tuiGenerateDialogableRoute(Dialog, {path: 'path'});

            expect(result?.data?.backUrl).toBe('..');
        });

        it('back url calculated correctly for double segments', () => {
            const result = tuiGenerateDialogableRoute(Dialog, {path: 'path/to'});

            expect(result?.data?.backUrl).toBe('../..');
        });

        it('back url calculated correctly for triple segments', () => {
            const result = tuiGenerateDialogableRoute(Dialog, {path: 'path/to/dialog'});

            expect(result?.data?.backUrl).toBe('../../..');
        });
    });
});
