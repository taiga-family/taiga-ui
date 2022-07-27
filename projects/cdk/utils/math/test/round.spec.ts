import {ceil, floor, round} from '../round';

describe(`round`, () => {
    describe(`round - rounds up and down`, () => {
        it(`to the closest integer`, () => {
            expect(round(200.134)).toBe(200);
        });

        it(`to the closest order of magnitude`, () => {
            expect(round(4321.12, -2)).toBe(4300);
        });

        it(`rounds to 0 if the order of magnitude is more than two times bigger than the number`, () => {
            expect(round(4321.12, -4)).toBe(0);
        });

        it(`rounds up to the order of magnitude if it is less than two times bigger`, () => {
            expect(round(5000.12, -4)).toBe(10000);
        });

        it(`rounds the last digit to the precision`, () => {
            expect(round(200.123456789, 4)).toBe(200.1235);
        });

        it(`if precision is floating returns NaN`, () => {
            expect(round(200.14, 1.6)).toBeNaN();
        });

        it(`if value is NaN returns NaN`, () => {
            expect(round(NaN, 1)).toBeNaN();
        });

        it(`if value is Infinity returns Infinity`, () => {
            expect(round(Infinity, 1)).toBe(Infinity);
        });

        it(`rounds values with exponent`, () => {
            expect(round(123.4567e2)).toBe(12346);
        });

        it(`rounds values with exponent to the precision`, () => {
            expect(round(7e-20, 19)).toBe(1e-19);
        });
    });

    describe(`floor - rounds down`, () => {
        it(`to the closest integer`, () => {
            expect(floor(200.987)).toBe(200);
        });

        it(`to the closest order of magnitude`, () => {
            expect(floor(789.12, -2)).toBe(700);
        });

        it(`rounds to 0 if the number is below set order of magnitude`, () => {
            expect(floor(5000.12, -4)).toBe(0);
        });

        it(`rounds the last digit to the precision`, () => {
            expect(floor(200.123456789, 4)).toBe(200.1234);
        });
    });

    describe(`ceil - rounds up`, () => {
        it(`to the closest integer`, () => {
            expect(ceil(200.059)).toBe(201);
        });

        it(`to the closest order of magnitude`, () => {
            expect(ceil(789.12, -2)).toBe(800);
        });

        it(`to the closest order of magnitude if number is at least anything above 0`, () => {
            expect(ceil(789.12, -4)).toBe(10000);
        });

        it(`rounds the last digit to the precision`, () => {
            expect(ceil(200.123456789, 4)).toBe(200.1235);
        });
    });
});
