import {dragAndDropFrom, TuiDragStage} from '@taiga-ui/cdk';
import {skip, take} from 'rxjs/operators';

describe(`dragAndDropFrom`, () => {
    it(`throws an error if there is no document`, () => {
        let result: unknown;
        const element: Element = {ownerDocument: undefined} as unknown as Element;

        try {
            dragAndDropFrom(element).subscribe();
        } catch (e) {
            result = e;
        }

        expect(result).toBeTruthy();
    });

    it(`emits start when drag starts`, () => {
        let result: unknown;
        const element = document.createElement(`div`);

        dragAndDropFrom(element)
            .pipe(take(1))
            .subscribe(event => {
                result = event.stage;
            });

        element.dispatchEvent(new Event(`mousedown`));
        element.dispatchEvent(new Event(`mousemove`));
        expect(result).toBe(TuiDragStage.Start);
    });

    it(`emits Continues when drag continues`, () => {
        let result: unknown;
        const element = document.createElement(`div`);

        dragAndDropFrom(element)
            .pipe(skip(1), take(1))
            .subscribe(event => {
                result = event.stage;
            });

        element.dispatchEvent(new Event(`mousedown`));
        document.dispatchEvent(new Event(`mousemove`));
        expect(result).toBe(TuiDragStage.Continues);
    });

    it(`emits End when drag ends`, () => {
        let result: unknown;
        const element = document.createElement(`div`);

        dragAndDropFrom(element)
            .pipe(skip(2), take(1))
            .subscribe(event => {
                result = event.stage;
            });

        element.dispatchEvent(new Event(`mousedown`));
        document.dispatchEvent(new Event(`mousemove`));
        document.dispatchEvent(new Event(`dragend`));
        expect(result).toBe(TuiDragStage.End);
    });
});
