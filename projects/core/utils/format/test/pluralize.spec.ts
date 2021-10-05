import {pluralize} from '../pluralize';

function check(value: number, result: string) {
    expect(pluralize(value, ['год', 'года', 'лет'])).toBe(result);
}

describe('Pluralize', () => {
    describe('год', () => {
        it('1', () => {
            check(1, 'год');
        });

        it('21', () => {
            check(21, 'год');
        });
    });

    describe('года', () => {
        it('2', () => {
            check(2, 'года');
        });

        it('22', () => {
            check(22, 'года');
        });
    });

    describe('лет', () => {
        it('0', () => {
            check(0, 'лет');
        });

        it('11', () => {
            check(11, 'лет');
        });
    });
});
