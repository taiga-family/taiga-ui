import {TuiIdService} from '@taiga-ui/cdk';

describe('TuiIdService', () => {
    let service: TuiIdService;

    beforeEach(() => {
        service = new TuiIdService();
    });

    it('increments number of id', () => {
        const id1 = service.generate();
        const id2 = service.generate();
        const match1 = Array.from(/\d/.exec(id1) || []);
        const match2 = Array.from(/\d/.exec(id2) || []);

        expect(parseInt(match1[0], 10) + 1).toBe(parseInt(match2[0], 10));
    });
});
