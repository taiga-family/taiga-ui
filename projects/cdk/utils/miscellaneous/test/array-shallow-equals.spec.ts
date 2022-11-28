import {tuiArrayShallowEquals} from '@taiga-ui/cdk';

describe(`tuiArrayShallowEquals`, () => {
    it(`Items are equal`, () => {
        expect(tuiArrayShallowEquals([1, 2, 3], [1, 2, 3])).toBeTruthy();
    });

    it(`Items are not equal`, () => {
        expect(tuiArrayShallowEquals([1, 2, 3], [1, 3, 2])).toBeFalsy();
    });

    it(`Different sizes are not equal`, () => {
        expect(tuiArrayShallowEquals([1, 2, 3], [1, 2])).toBeFalsy();
        expect(tuiArrayShallowEquals([1, 2], [1, 2, 3])).toBeFalsy();
    });

    it(`Copies are not equal`, () => {
        expect(tuiArrayShallowEquals([{a: `b`}], [{a: `b`}])).toBeFalsy();
    });
});
