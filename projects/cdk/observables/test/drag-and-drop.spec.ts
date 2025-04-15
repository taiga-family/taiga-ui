import {tuiDragAndDropFrom} from '@taiga-ui/cdk';
import {skip, take} from 'rxjs';

describe('tuiDragAndDropFrom', () => {
    it('throws an error if there is no document', () => {
        let result: unknown;
        const element: Element = {ownerDocument: undefined} as unknown as Element;

        try {
            tuiDragAndDropFrom(element).subscribe();
        } catch (e) {
            result = e;
        }

        expect(result).toBeTruthy();
    });

    it('emits start when drag starts', () => {
        let result: unknown;
        const element = document.createElement('div');

        tuiDragAndDropFrom(element)
            .pipe(take(1))
            .subscribe((event) => {
                result = event.stage;
            });

        element.dispatchEvent(new Event('pointerdown'));
        element.dispatchEvent(new Event('pointermove'));

        expect(result).toBe('start');
    });

    it('emits Continues when drag continues', () => {
        let result: unknown;
        const element = document.createElement('div');

        tuiDragAndDropFrom(element)
            .pipe(skip(1), take(1))
            .subscribe((event) => {
                result = event.stage;
            });

        element.dispatchEvent(new Event('pointerdown'));
        document.dispatchEvent(new Event('pointermove'));

        expect(result).toBe('continues');
    });

    it('emits End when drag ends', () => {
        let result: unknown;
        const element = document.createElement('div');

        tuiDragAndDropFrom(element)
            .pipe(skip(2), take(1))
            .subscribe((event) => {
                result = event.stage;
            });

        element.dispatchEvent(new Event('pointerdown'));
        document.dispatchEvent(new Event('pointermove'));
        document.dispatchEvent(new Event('dragend'));

        expect(result).toBe('end');
    });
});
