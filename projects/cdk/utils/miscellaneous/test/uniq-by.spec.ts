import {uniqBy} from '../uniq-by';

describe('uniqBy', () => {
    it('removes entries with repeated key', () => {
        expect(
            uniqBy(
                [
                    {
                        id: 1,
                        name: 'Test',
                        value: 237,
                    },
                    {
                        id: 2,
                        name: 'Test2',
                        value: 42,
                    },
                    {
                        id: 1,
                        name: 'Test3',
                        value: 777,
                    },
                ],
                'id',
            ),
        ).toEqual([
            {
                id: 1,
                name: 'Test',
                value: 237,
            },
            {
                id: 2,
                name: 'Test2',
                value: 42,
            },
        ]);
    });
});
