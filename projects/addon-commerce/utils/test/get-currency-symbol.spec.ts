import {
    TuiCurrency,
    TuiCurrencyCode,
    tuiGetCurrencySymbol,
} from '@taiga-ui/addon-commerce';

describe(`getCurrencySymbol`, () => {
    describe(`string`, () => {
        it(`returns founded currency symbol`, () => {
            expect(tuiGetCurrencySymbol(`HKD`)).toBe(`HK$`);
        });

        it(`returns founded currency symbol`, () => {
            expect(tuiGetCurrencySymbol(`344`)).toBe(`HK$`);
        });

        it(`returns null if symbol not found`, () => {
            expect(tuiGetCurrencySymbol(`CSTM`)).toBe(null);
        });
    });

    it(`Ruble`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Ruble)).toBe(`₽`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Ruble)).toBe(`₽`);
    });

    it(`Dollar`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Dollar)).toBe(`$`);
        expect(tuiGetCurrencySymbol(TuiCurrency.MexicanPeso)).toBe(`$`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Dollar)).toBe(`$`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.MexicanPeso)).toBe(`$`);
    });

    it(`SingaporeDollar`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.SingaporeDollar)).toBe(`S$`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.SingaporeDollar)).toBe(`S$`);
    });

    it(`AustralianDollar`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.AustralianDollar)).toBe(`A$`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.AustralianDollar)).toBe(`A$`);
    });

    it(`HongKongDollar`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.HongKongDollar)).toBe(`HK$`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.HongKongDollar)).toBe(`HK$`);
    });

    it(`CanadianDollar`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.CanadianDollar)).toBe(`C$`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.CanadianDollar)).toBe(`C$`);
    });

    it(`Euro`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Euro)).toBe(`€`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Euro)).toBe(`€`);
    });

    it(`Pound`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Pound)).toBe(`£`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Pound)).toBe(`£`);
    });

    it(`Baht`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Baht)).toBe(`฿`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Baht)).toBe(`฿`);
    });

    it(`TurkishLira`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.TurkishLira)).toBe(`₺`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.TurkishLira)).toBe(`₺`);
    });

    it(`YuanRenminbi`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.YuanRenminbi)).toBe(`CN¥`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.YuanRenminbi)).toBe(`CN¥`);
    });

    it(`Yen`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Yen)).toBe(`¥`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Yen)).toBe(`¥`);
    });

    it(`IsraeliShekel`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.IsraeliShekel)).toBe(`₪`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.IsraeliShekel)).toBe(`₪`);
    });

    it(`IndianRupee`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.IndianRupee)).toBe(`₹`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.IndianRupee)).toBe(`₹`);
    });

    it(`SwissFranc`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.SwissFranc)).toBe(`₣`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.SwissFranc)).toBe(`₣`);
    });

    it(`ArmenianDram`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.ArmenianDram)).toBe(`֏`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.ArmenianDram)).toBe(`֏`);
    });

    it(`Won`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Won)).toBe(`₩`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Won)).toBe(`₩`);
    });

    it(`Tenge`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Tenge)).toBe(`₸`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Tenge)).toBe(`₸`);
    });

    it(`Hryvnia`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Hryvnia)).toBe(`₴`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Hryvnia)).toBe(`₴`);
    });

    it(`UzbekSum`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.UzbekSum)).toBe(`So'm`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.UzbekSum)).toBe(`So'm`);
    });

    it(`KyrgyzstanSom`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.KyrgyzstanSom)).toBe(`c`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.KyrgyzstanSom)).toBe(`c`);
    });

    it(`Dirham`, () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Dirham)).toBe(`Dh`);
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Dirham)).toBe(`Dh`);
    });

    it(`unknown`, () => {
        expect(tuiGetCurrencySymbol(`unknown`)).toBe(null);
        expect(tuiGetCurrencySymbol(`unknown`)).toBe(null);
    });
});
