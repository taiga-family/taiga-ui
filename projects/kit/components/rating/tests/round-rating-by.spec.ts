import {roundRatingBy} from '../utils/round-rating-by';

describe('roundRatingBy utility', () => {
    const max = 5;

    it(`function should return the rating`, () => {
        expect(roundRatingBy({value: 1, max})).toEqual(1);
        expect(roundRatingBy({value: 10, max})).toEqual(5);
        expect(roundRatingBy({value: -1, max})).toEqual(0);
        expect(roundRatingBy({value: 1.35, max})).toEqual(2);
        expect(roundRatingBy({value: 1.5, max})).toEqual(2);
        expect(roundRatingBy({value: 1.76, max})).toEqual(2);
        expect(roundRatingBy({value: 0.42, max})).toEqual(1);
        expect(roundRatingBy({value: 0.58, max})).toEqual(1);
    });
});
