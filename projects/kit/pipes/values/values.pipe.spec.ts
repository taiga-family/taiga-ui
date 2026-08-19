import {TuiValuesPipe} from './values.pipe';

describe('TuiValuesPipe pipe', () => {
    it('works', () => {
        const pipe = new TuiValuesPipe();

        expect(
            pipe.transform(
                [
                    {id: 'admin', name: 'Administrator'},
                    {id: 'user', name: 'Regular User'},
                ],
                'id',
            ),
        ).toStrictEqual(['admin', 'user']);
    });

    it('turns null into null', () => {
        const pipe = new TuiValuesPipe();

        expect(pipe.transform<{name: string}, 'name'>(null, 'name')).toBe(null);
    });
});
