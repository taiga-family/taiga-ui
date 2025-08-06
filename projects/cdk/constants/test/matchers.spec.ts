import {
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_MATCHER,
    TUI_STRICT_MATCHER,
    type TuiStringHandler,
} from '@taiga-ui/cdk';

class Item {
    constructor(
        public readonly name: string,
        public readonly price: number,
    ) {}

    public toString(): string {
        return this.name;
    }
}

describe('Matcher functions', () => {
    const defaultMatcher = TUI_DEFAULT_MATCHER;
    const strictMatcher = TUI_STRICT_MATCHER;
    const identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
    const stringify: TuiStringHandler<Item> = (item) => item.price.toString();
    const search = 'HOLY GRAIL';
    const item = new Item('Monty Python and the Holy Grail DVD', 99);

    describe('TUI_DEFAULT_MATCHER', () => {
        it('compares stringified values, case insensitive', () => {
            expect(defaultMatcher(item, search)).toBe(true);
        });

        it('does not do the trimming', () => {
            expect(defaultMatcher(item, `    ${search}  `)).toBe(false);
        });

        it('uses String if stringify function was not provided', () => {
            expect(defaultMatcher(item, search)).toBe(true);
        });

        it('returns false if requested string is not found in stringified version', () => {
            expect(defaultMatcher(item, 'Brian')).toBe(false);
        });

        it('accepts stringify function', () => {
            expect(defaultMatcher(item, '99', stringify)).toBe(true);
        });
    });

    describe('TUI_STRICT_MATCHER', () => {
        it('returns false by not equal stringified values, case insensitive', () => {
            expect(strictMatcher(item, search)).toBe(false);
        });

        it('returns true by equal stringified values, case insensitive', () => {
            const uppedCasedItemSearch = item.toString().toLocaleUpperCase();
            const stringify = (item: Item): string => item.toString();

            expect(strictMatcher(item, uppedCasedItemSearch, stringify)).toBe(true);
        });
    });

    describe('TUI_DEFAULT_IDENTITY_MATCHER', () => {
        it('returns true if the parameters are the same', () => {
            expect(identityMatcher(item, item)).toBe(true);
        });

        it('returns true if both parameters are empty arrays', () => {
            expect(identityMatcher([], [])).toBe(true);
        });

        it('returns false if both parameters are equal arrays', () => {
            expect(identityMatcher([0], [0])).toBe(false);
        });

        it('returns false if the parameters are not the same object', () => {
            const anotherItemWithSameFields = new Item(item.name, item.price);

            expect(identityMatcher(item, anotherItemWithSameFields)).toBe(false);
        });
    });
});
