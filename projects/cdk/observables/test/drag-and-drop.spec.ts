import {skip, take} from 'rxjs/operators';
import {dragAndDropFrom, TuiDragStage} from '../drag-and-drop-from';

describe('dragAndDropFrom', () => {
    it('throws an error if there is no document', done => {
        const element: any = {ownerDocument: undefined};

        try {
            dragAndDropFrom(element);
        } catch (e) {
            expect(e).toBeTruthy();
            done();
        }
    });

    it('emits start when drag starts', done => {
        const element = document.createElement('div');

        dragAndDropFrom(element)
            .pipe(take(1))
            .subscribe(event => {
                expect(event.stage).toBe(TuiDragStage.Start);
                done();
            });

        element.dispatchEvent(new Event('mousedown'));
        element.dispatchEvent(new Event('mousemove'));
    });

    it('emits Continues when drag continues', done => {
        const element = document.createElement('div');

        dragAndDropFrom(element)
            .pipe(skip(1), take(1))
            .subscribe(event => {
                expect(event.stage).toBe(TuiDragStage.Continues);
                done();
            });

        element.dispatchEvent(new Event('mousedown'));
        document.dispatchEvent(new Event('mousemove'));
    });

    it('emits End when drag ends', done => {
        const element = document.createElement('div');

        dragAndDropFrom(element)
            .pipe(skip(2), take(1))
            .subscribe(event => {
                expect(event.stage).toBe(TuiDragStage.End);
                done();
            });

        element.dispatchEvent(new Event('mousedown'));
        document.dispatchEvent(new Event('mousemove'));
        document.dispatchEvent(new Event('dragend'));
    });
});
