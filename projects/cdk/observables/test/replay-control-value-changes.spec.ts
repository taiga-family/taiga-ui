import {FormControl} from '@angular/forms';
import {skip} from 'rxjs/operators';

import {tuiReplayedValueChangesFrom} from '../replay-control-value-changes';

describe('tuiReplayedValueChangesFrom', () => {
    it('takes control and starts with its value', done => {
        const control = new FormControl('hello');

        tuiReplayedValueChangesFrom(control).subscribe(value => {
            expect(value).toBe('hello');
            done();
        });
    });

    it('takes control and emits its values', done => {
        const control = new FormControl('hello');

        tuiReplayedValueChangesFrom(control)
            .pipe(skip(1))
            .subscribe(value => {
                expect(value).toBe('test');
                done();
            });

        control.setValue('test');
    });

    it('throwns an error if there is no valueChanges', done => {
        const control = {} as any;

        tuiReplayedValueChangesFrom(control).subscribe(
            () => {
                fail();
            },
            () => {
                done();
            },
        );
    });
});
