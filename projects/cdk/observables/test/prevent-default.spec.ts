import {fakeAsync} from '@angular/core/testing';
import {Subject} from 'rxjs';
import {first} from 'rxjs/operators';

import {preventDefault} from '../prevent-default';

describe(`preventDefault operator function`, () => {
    it(`prevents event default behavior`, fakeAsync(() => {
        const event = new Event(`click`, {cancelable: true});
        const subject = new Subject<Event>();

        subject.pipe(preventDefault(), first()).subscribe();
        subject.next(event);

        expect(event.defaultPrevented).toBe(true);
    }));
});
