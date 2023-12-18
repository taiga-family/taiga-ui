import {fakeAsync} from '@angular/core/testing';
import {tuiPreventDefault} from '@taiga-ui/cdk';
import {first, Subject} from 'rxjs';

describe('preventDefault operator function', () => {
    it('prevents event default behavior', fakeAsync(() => {
        const event = new Event('click', {cancelable: true});
        const subject = new Subject<Event>();

        subject.pipe(tuiPreventDefault(), first()).subscribe();
        subject.next(event);

        expect(event.defaultPrevented).toBe(true);
    }));
});
