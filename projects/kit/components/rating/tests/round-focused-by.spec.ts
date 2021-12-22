import {roundFocusedBy} from '../utils/round-focused-by';

describe('roundFocusedBy utility', () => {
    const max = 5;
    const iconSizeWidth = 24; //px
    const widthPx = iconSizeWidth * max; // 120px

    it(`function should return the rating`, () => {
        let expected = roundFocusedBy({max, widthPx, offsetX: 0});

        expect(expected).toEqual(0);

        // [1/2 1st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 12});
        expect(expected).toEqual(1);

        // 2/3 [1st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 16});
        expect(expected).toEqual(1);

        // 1/3 [2st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 30});
        expect(expected).toEqual(2);

        // 1/3 [3st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 56});

        expect(expected).toEqual(3);

        // 2/3 [3st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 64});
        expect(expected).toEqual(3);

        // 1/3 [4st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 80});
        expect(expected).toEqual(4);

        // 2/3 [4st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 88});
        expect(expected).toEqual(4);

        // 1/3 [5st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 104});
        expect(expected).toEqual(5);

        // 2/3 [5st icon of position X]
        expected = roundFocusedBy({widthPx, max, offsetX: 112});
        expect(expected).toEqual(5);
    });
});
