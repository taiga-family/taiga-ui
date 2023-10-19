import {bumpVersion} from '../../../scripts/shared/bump-version';

describe(`Bump version`, () => {
    it(`should be correct bump version`, () => {
        expect(bumpVersion(`3.0.0`, `major`)).toBe(`4.0.0`);
        expect(bumpVersion(`3.0.0`, `minor`)).toBe(`3.1.0`);
        expect(bumpVersion(`3.0.1`, `patch`)).toBe(`3.0.2`);
        expect(bumpVersion(`3.0.0-rc.6`, `major`)).toBe(`3.0.0`);

        expect(() => bumpVersion(`3.0.0-rc.6`, `minor`)).toThrow(
            new Error(
                `You are using the invalid mode (\`minor\`) for bump 3.0.0-rc.6 version`,
            ),
        );

        expect(() => bumpVersion(`3.0.0-rc.6`, `patch`)).toThrow(
            new Error(
                `You are using the invalid mode (\`patch\`) for bump 3.0.0-rc.6 version`,
            ),
        );

        expect(bumpVersion(`3.0.0-rc.6`, `prerelease`)).toBe(`3.0.0-rc.7`);
    });
});
