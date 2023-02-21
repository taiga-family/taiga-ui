import {tuiGenerateDialogableRoute} from '../generate-dialogable-route';
import {TuiRoutableDialogComponent} from '../routable-dialog.component';

class DialogComponent {}

describe(`tuiGenerateDialogableRoute`, () => {
    it(`generated route should have component: TuiRoutableDialogComponent`, () => {
        const result = tuiGenerateDialogableRoute(DialogComponent);

        expect(result.component).toBe(TuiRoutableDialogComponent);
    });

    it(`if passed path is undefined then route path is empty string`, () => {
        const result = tuiGenerateDialogableRoute(DialogComponent);

        expect(result.path).toEqual(``);
    });

    it(`path passed correctly`, () => {
        const result = tuiGenerateDialogableRoute(DialogComponent, {
            path: `path/to/dialog`,
        });

        expect(result.path).toEqual(`path/to/dialog`);
    });

    it(`dialog options are passed correctly`, () => {
        const dialogOptions = {
            dismissible: true,
            closeable: true,
        };

        const result = tuiGenerateDialogableRoute(DialogComponent, {
            path: ``,
            ...dialogOptions,
        });

        expect(result?.data?.dialogOptions).toEqual(dialogOptions);
    });

    it(`if path is undefined then isLazy: true`, () => {
        const result = tuiGenerateDialogableRoute(DialogComponent);

        expect(result?.data?.isLazy).toBe(true);
    });

    it(`if path is empty string then isLazy: true`, () => {
        const result = tuiGenerateDialogableRoute(DialogComponent, {path: ``});

        expect(result?.data?.isLazy).toBe(true);
    });

    it(`if path is not empty string then isLazy: false`, () => {
        const result = tuiGenerateDialogableRoute(DialogComponent, {path: `path`});

        expect(result?.data?.isLazy).toBe(false);
    });

    describe(`checking back url calculation`, () => {
        it(`back url calculated correctly for undefined path`, () => {
            const result = tuiGenerateDialogableRoute(DialogComponent);

            expect(result?.data?.backUrl).toBe(`..`);
        });

        it(`back url calculated correctly for empty path`, () => {
            const result = tuiGenerateDialogableRoute(DialogComponent, {
                path: ``,
            });

            expect(result?.data?.backUrl).toBe(`..`);
        });

        it(`back url calculated correctly for single segment`, () => {
            const result = tuiGenerateDialogableRoute(DialogComponent, {
                path: `path`,
            });

            expect(result?.data?.backUrl).toBe(`..`);
        });

        it(`back url calculated correctly for double segments`, () => {
            const result = tuiGenerateDialogableRoute(DialogComponent, {
                path: `path/to`,
            });

            expect(result?.data?.backUrl).toBe(`../..`);
        });

        it(`back url calculated correctly for triple segments`, () => {
            const result = tuiGenerateDialogableRoute(DialogComponent, {
                path: `path/to/dialog`,
            });

            expect(result?.data?.backUrl).toBe(`../../..`);
        });
    });
});
