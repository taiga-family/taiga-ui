import {tuiIsValidUrl} from '@taiga-ui/cdk';

describe(`tuiIsValidUrl`, () => {
    it(`valid url`, () => {
        expect(tuiIsValidUrl(`https://taiga-ui.dev`)).toBe(true);
        expect(tuiIsValidUrl(`https://tinkoff-group.com/`)).toBe(true);
        expect(tuiIsValidUrl(`www.jsowl.com`)).toBe(true);
        expect(tuiIsValidUrl(`https://burgers.example.com/?burger=%s`)).toBe(true);
        expect(tuiIsValidUrl(`taiga-ui.dev`)).toBe(true);
        expect(tuiIsValidUrl(`http://localhost:3333/editor/API`)).toBe(true);
        expect(tuiIsValidUrl(`127.0.0.1:8080`)).toBe(true);
        expect(tuiIsValidUrl(`localhost:3333`)).toBe(true);
        expect(tuiIsValidUrl(`ftp://ftp.example:21/`)).toBe(true);
    });

    it(`invalid`, () => {
        expect(tuiIsValidUrl(``)).toBe(false);
        expect(tuiIsValidUrl(`invalidURL`)).toBe(false);
        expect(tuiIsValidUrl(`htt//jsowl`)).toBe(false);
        expect(tuiIsValidUrl(`web+burger:hello-world`)).toBe(false);
        expect(tuiIsValidUrl(`mailto:user@example.com`)).toBe(false);
        expect(tuiIsValidUrl(`tel:+79111232232`)).toBe(false);
        expect(
            tuiIsValidUrl(
                `user1@example.com%2C%20user2@example.com?to=user3@example.com%2C%20user4@example.com`,
            ),
        ).toBe(false);
    });
});
