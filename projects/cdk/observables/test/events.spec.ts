import {fakeAsync} from '@angular/core/testing';
import {tuiPreventDefault, tuiStopPropagation} from '@taiga-ui/cdk';
import {first, Subject} from 'rxjs';

describe('Event helper', () => {
    it('prevents event default behavior', fakeAsync(() => {
        const event = new Event('click', {cancelable: true});
        const subject = new Subject<Event>();

        subject.pipe(tuiPreventDefault(), first()).subscribe();
        subject.next(event);

        expect(event.defaultPrevented).toBe(true);
    }));

    it('stops event propagation', fakeAsync(() => {
        const event = new Event('click');
        const subject = new Subject<Event>();

        subject.pipe(tuiStopPropagation(), first()).subscribe();
        subject.next(event);

        expect(event.cancelBubble).toBe(true);
    }));
});
