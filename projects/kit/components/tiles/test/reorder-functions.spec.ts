import {tuiTilesShift, tuiTilesSwap} from '@taiga-ui/kit';

describe('reorder functions', () => {
    describe('swap', () => {
        it('should swap 1 and 3', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3],
            ]);

            /**
             * 1 -> 3
             * 3 -> 1
             */
            const result = tuiTilesSwap(source, 1, 3);

            expect(result.get(0)).toBe(0);
            expect(result.get(1)).toBe(3);
            expect(result.get(2)).toBe(2);
            expect(result.get(3)).toBe(1);
            expect(result.size).toBe(source.size);
        });

        it('should swap 3 and 1', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3],
            ]);

            /**
             * 3 -> 1
             * 1 -> 3
             */
            const result = tuiTilesSwap(source, 3, 1);

            expect(result.get(0)).toBe(0);
            expect(result.get(1)).toBe(3);
            expect(result.get(2)).toBe(2);
            expect(result.get(3)).toBe(1);
            expect(result.size).toBe(source.size);
        });

        it('should return source order if currentIndex is out of range', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
            ]);

            const result = tuiTilesSwap(source, 3, 0);

            expect(result).toBe(result);
            expect(result.size).toBe(source.size);
        });

        it('should return source order if newIndex is out of range', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
            ]);

            const result = tuiTilesSwap(source, 0, 3);

            expect(result).toBe(result);
            expect(result.size).toBe(source.size);
        });

        it('should not change order if current and new indexes are the same', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
            ]);

            const result = tuiTilesSwap(source, 1, 1);

            expect(result.get(0)).toBe(0);
            expect(result.get(1)).toBe(1);
            expect(result.get(2)).toBe(2);
            expect(result.size).toBe(source.size);
        });
    });

    describe('shift', () => {
        it('should make right-left shift 1 -> 4', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
            ]);

            /**
             * 1 -> 4
             * 4 -> 3
             * 3 -> 2
             * 2 -> 1
             */
            const result = tuiTilesShift(source, 1, 4);

            expect(result.get(0)).toBe(0);
            expect(result.get(1)).toBe(4);
            expect(result.get(2)).toBe(1);
            expect(result.get(3)).toBe(2);
            expect(result.get(4)).toBe(3);
            expect(result.size).toBe(source.size);
        });

        it('should make left-right shift 4 -> 1', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
            ]);

            /**
             * 4 -> 1
             * 1 -> 2
             * 2 -> 3
             * 3 -> 4
             */
            const result = tuiTilesShift(source, 4, 1);

            expect(result.get(0)).toBe(0);
            expect(result.get(1)).toBe(2);
            expect(result.get(2)).toBe(3);
            expect(result.get(3)).toBe(4);
            expect(result.get(4)).toBe(1);
            expect(result.size).toBe(source.size);
        });

        it('should return source order if currentIndex is out of range', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
            ]);

            const result = tuiTilesShift(source, 3, 0);

            expect(result).toBe(result);
            expect(result.size).toBe(source.size);
        });

        it('should return source order if newIndex is out of range', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
            ]);

            const result = tuiTilesShift(source, 0, 3);

            expect(result).toBe(result);
            expect(result.size).toBe(source.size);
        });

        it('should not change order if current and new indexes are the same', () => {
            const source = new Map([
                [0, 0],
                [1, 1],
                [2, 2],
            ]);

            const result = tuiTilesShift(source, 1, 1);

            expect(result.get(0)).toBe(0);
            expect(result.get(1)).toBe(1);
            expect(result.get(2)).toBe(2);
            expect(result.size).toBe(source.size);
        });
    });
});
