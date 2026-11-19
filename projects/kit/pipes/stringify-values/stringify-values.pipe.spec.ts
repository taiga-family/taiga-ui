import {TuiStringifyValuesPipe} from './stringify-values.pipe';

describe('TuiStringifyValuesPipe pipe', () => {
    it('works', () => {
        // arrange
        const pipe = new TuiStringifyValuesPipe();

        // act
        const transformer = pipe.transform(
            [
                {id: 'admin', name: 'Administrator'},
                {id: 'user', name: 'Regular User'},
            ],
            'id',
            'name',
        );

        // assert
        expect(transformer('admin')).toBe('Administrator');
    });

    it('projects null and given keys into empty string', () => {
        // arrange
        const pipe = new TuiStringifyValuesPipe();

        // act
        const transformer = pipe.transform<any, any, any>(null, 'id', 'name');

        // assert
        expect(transformer('admin')).toBe('');
    });

    it('if no projected value found, then returns transformer with default stringified value', () => {
        // arrange
        const pipe = new TuiStringifyValuesPipe();

        // act
        const transformer = pipe.transform(
            [
                {id: 1, name: 'Administrator'},
                {id: 2, name: 'Regular User'},
            ],
            'id',
            'name',
        );

        // assert
        expect(transformer(3)).toBe('3');
    });
});
