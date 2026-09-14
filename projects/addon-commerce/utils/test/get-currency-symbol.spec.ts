import {
    TuiCurrency,
    TuiCurrencyCode,
    tuiGetCurrencySymbol,
} from '@taiga-ui/addon-commerce';

describe('getCurrencySymbol', () => {
    describe('string', () => {
        it('returns founded currency symbol by currency', () => {
            expect(tuiGetCurrencySymbol('HKD')).toBe('HK$');
        });

        it('returns founded currency symbol by currency code', () => {
            expect(tuiGetCurrencySymbol('344')).toBe('HK$');
        });

        it('returns null if symbol not found', () => {
            expect(tuiGetCurrencySymbol('CSTM')).toBeNull();
        });
    });

    describe('number', () => {
        it('returns currency symbol by numeric currency code', () => {
            expect(tuiGetCurrencySymbol(344)).toBe('HK$');
        });

        it('pads numeric currency code with leading zero', () => {
            expect(tuiGetCurrencySymbol(36)).toBe('A$');
        });

        it('returns null if numeric currency code is not found', () => {
            expect(tuiGetCurrencySymbol(999)).toBeNull();
        });
    });

    it('ruble', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Ruble)).toBe('₽');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Ruble)).toBe('₽');
    });

    it('dollar', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Dollar)).toBe('$');
        expect(tuiGetCurrencySymbol(TuiCurrency.MexicanPeso)).toBe('$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Dollar)).toBe('$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.MexicanPeso)).toBe('$');
    });

    it('singapore dollar', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.SingaporeDollar)).toBe('S$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.SingaporeDollar)).toBe('S$');
    });

    it('australian dollar', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.AustralianDollar)).toBe('A$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.AustralianDollar)).toBe('A$');
    });

    it('hongKong dollar', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.HongKongDollar)).toBe('HK$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.HongKongDollar)).toBe('HK$');
    });

    it('canadian dollar', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.CanadianDollar)).toBe('C$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.CanadianDollar)).toBe('C$');
    });

    it('euro', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Euro)).toBe('€');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Euro)).toBe('€');
    });

    it('pound', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Pound)).toBe('£');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Pound)).toBe('£');
    });

    it('baht', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Baht)).toBe('฿');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Baht)).toBe('฿');
    });

    it('turkishLira', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.TurkishLira)).toBe('₺');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.TurkishLira)).toBe('₺');
    });

    it('yuan renminbi', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.YuanRenminbi)).toBe('CN¥');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.YuanRenminbi)).toBe('CN¥');
    });

    it('yen', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Yen)).toBe('¥');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Yen)).toBe('¥');
    });

    it('israeli shekel', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.IsraeliShekel)).toBe('₪');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.IsraeliShekel)).toBe('₪');
    });

    it('indian rupee', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.IndianRupee)).toBe('₹');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.IndianRupee)).toBe('₹');
    });

    it('swiss franc', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.SwissFranc)).toBe('₣');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.SwissFranc)).toBe('₣');
    });

    it('armenian dram', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.ArmenianDram)).toBe('֏');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.ArmenianDram)).toBe('֏');
    });

    it('won', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Won)).toBe('₩');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Won)).toBe('₩');
    });

    it('tenge', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Tenge)).toBe('₸');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Tenge)).toBe('₸');
    });

    it('hryvnia', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Hryvnia)).toBe('₴');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Hryvnia)).toBe('₴');
    });

    it('uzbek sum', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.UzbekSum)).toBe("So'm");
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.UzbekSum)).toBe("So'm");
    });

    it('kyrgyzstan som', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.KyrgyzstanSom)).toBe('c');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.KyrgyzstanSom)).toBe('c');
    });

    it('dirham', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.Dirham)).toBe('Dh');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.Dirham)).toBe('Dh');
    });

    it('argentine peso', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.ArgentinePeso)).toBe('$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.ArgentinePeso)).toBe('$');
    });

    it('cambodian riel', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.CambodianRiel)).toBe('៛');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.CambodianRiel)).toBe('៛');
    });

    it('chilean peso', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.ChileanPeso)).toBe('$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.ChileanPeso)).toBe('$');
    });

    it('egyptian pound', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.EgyptianPound)).toBe('£E');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.EgyptianPound)).toBe('£E');
    });

    it('kenyan shilling', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.KenyanShilling)).toBe('KSh');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.KenyanShilling)).toBe('KSh');
    });

    it('lao kip', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.LaoKip)).toBe('₭');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.LaoKip)).toBe('₭');
    });

    it('maldivian rufiyaa', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.MaldivianRufiyaa)).toBe('ރ');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.MaldivianRufiyaa)).toBe('ރ');
    });

    it('peruvian sol', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.PeruvianSol)).toBe('S/');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.PeruvianSol)).toBe('S/');
    });

    it('philippine peso', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.PhilippinePeso)).toBe('₱');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.PhilippinePeso)).toBe('₱');
    });

    it('tanzanian shilling', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.TanzanianShilling)).toBe('TSh');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.TanzanianShilling)).toBe('TSh');
    });

    it('unidad de fomento', () => {
        expect(tuiGetCurrencySymbol(TuiCurrency.UnidadDeFomento)).toBe('$');
        expect(tuiGetCurrencySymbol(TuiCurrencyCode.UnidadDeFomento)).toBe('$');
    });

    it('unknown', () => {
        expect(tuiGetCurrencySymbol('unknown')).toBeNull();
        expect(tuiGetCurrencySymbol('unknown')).toBeNull();
    });
});
