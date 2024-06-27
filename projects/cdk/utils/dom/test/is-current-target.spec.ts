import {tuiIsCurrentTarget} from '@taiga-ui/cdk';

describe('isCurrentTarget', () => {
    it('target is equal to currentTarget', () => {
        const event = new MouseEvent('click');

        Object.defineProperty(event, 'target', {value: '<button>'});
        Object.defineProperty(event, 'currentTarget', {value: '<button>'});

        expect(tuiIsCurrentTarget(event)).toBe(true);
    });
});
