import {getActualTarget} from '../get-actual-target';

describe('isCurrentTarget', () => {
    it('Actual target from composedPath', () => {
        const event = new MouseEvent('click');
        const target = document.createElement('button');

        Object.defineProperty(event, 'composedPath', {value: () => [target]});

        expect(getActualTarget(event)).toEqual(target);
    });

    it('Actual target is event.target', () => {
        const target = document.createElement('button');
        const event = {target: target} as unknown;

        Object.defineProperty(event, 'target', {value: target});

        expect(getActualTarget(event as Event)).toEqual(target);
    });
});
