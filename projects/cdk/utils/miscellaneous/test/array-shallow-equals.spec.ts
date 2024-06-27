import {tuiArrayShallowEquals} from '@taiga-ui/cdk';

describe('tuiArrayShallowEquals', () => {
    it('items are equal', () => {
        expect(tuiArrayShallowEquals([1, 2, 3], [1, 2, 3])).toBeTruthy();
    });

    it('items are not equal', () => {
        expect(tuiArrayShallowEquals([1, 2, 3], [1, 3, 2])).toBeFalsy();
    });

    it('different sizes are not equal', () => {
        expect(tuiArrayShallowEquals([1, 2, 3], [1, 2])).toBeFalsy();
        expect(tuiArrayShallowEquals([1, 2], [1, 2, 3])).toBeFalsy();
    });

    it('copies are not equal', () => {
        expect(tuiArrayShallowEquals([{a: 'b'}], [{a: 'b'}])).toBeFalsy();
    });
});
