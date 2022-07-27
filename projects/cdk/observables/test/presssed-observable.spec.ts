import {fakeAsync} from '@angular/core/testing';
import {pressedObservable} from '@taiga-ui/cdk/observables';

describe(`pressedObservable operator function`, () => {
    const element: Element = document.createElement(`div`);

    it(`expected only trusted mousedown events without parameters`, () => {
        let result: boolean | null = null;

        pressedObservable(element).subscribe((pressed: boolean) => {
            result = pressed;
        });

        fireMousedownEvent();
        expect(result).toBeNull();
    });

    it(`expected any mousedown events`, fakeAsync(() => {
        let result: boolean | null = null;

        pressedObservable(element, {onlyTrusted: false}).subscribe((pressed: boolean) => {
            result = pressed;
        });

        fireMousedownEvent();
        expect(result).toBeTruthy();
    }));

    function fireMousedownEvent(): void {
        element.dispatchEvent(new MouseEvent(`mousedown`));
    }
});
