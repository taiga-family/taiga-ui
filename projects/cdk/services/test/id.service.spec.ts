import {TuiIdService} from '@taiga-ui/cdk';

describe(`TuiIdService`, () => {
    let service: TuiIdService;

    beforeEach(() => {
        service = new TuiIdService();
    });

    it(`increments number of id`, () => {
        const id1 = service.generate();
        const id2 = service.generate();
        const match1 = id1.match(/\d/);
        const match2 = id2.match(/\d/);

        expect(parseInt(match1![0], 10) + 1).toBe(parseInt(match2![0], 10));
    });
});
