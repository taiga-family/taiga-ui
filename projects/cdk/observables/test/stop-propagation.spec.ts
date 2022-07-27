import {fakeAsync} from '@angular/core/testing';
import {Subject} from 'rxjs';
import {first} from 'rxjs/operators';

import {stopPropagation} from '../stop-propagation';

describe(`stopPropagation operator function`, () => {
    it(`stops event propagation`, fakeAsync(() => {
        const event = new Event(`click`);
        const subject = new Subject<Event>();

        subject.pipe(stopPropagation(), first()).subscribe();
        subject.next(event);

        expect(event.cancelBubble).toBe(true);
    }));
});
