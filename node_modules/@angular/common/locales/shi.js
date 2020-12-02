/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/shi", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (i === 0 || n === 1)
            return 1;
        if (n === Math.floor(n) && n >= 2 && n <= 10)
            return 3;
        return 5;
    }
    exports.default = [
        'shi',
        [['ⵜⵉⴼⴰⵡⵜ', 'ⵜⴰⴷⴳⴳⵯⴰⵜ'], u, u],
        u,
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            [
                'ⴰⵙⴰ', 'ⴰⵢⵏ', 'ⴰⵙⵉ', 'ⴰⴽⵕ', 'ⴰⴽⵡ', 'ⴰⵙⵉⵎ',
                'ⴰⵙⵉⴹ'
            ],
            [
                'ⴰⵙⴰⵎⴰⵙ', 'ⴰⵢⵏⴰⵙ', 'ⴰⵙⵉⵏⴰⵙ', 'ⴰⴽⵕⴰⵙ',
                'ⴰⴽⵡⴰⵙ', 'ⵙⵉⵎⵡⴰⵙ', 'ⴰⵙⵉⴹⵢⴰⵙ'
            ],
            [
                'ⴰⵙⴰ', 'ⴰⵢⵏ', 'ⴰⵙⵉ', 'ⴰⴽⵕ', 'ⴰⴽⵡ', 'ⴰⵙⵉⵎ',
                'ⴰⵙⵉⴹ'
            ]
        ],
        u,
        [
            ['ⵉ', 'ⴱ', 'ⵎ', 'ⵉ', 'ⵎ', 'ⵢ', 'ⵢ', 'ⵖ', 'ⵛ', 'ⴽ', 'ⵏ', 'ⴷ'],
            [
                'ⵉⵏⵏ', 'ⴱⵕⴰ', 'ⵎⴰⵕ', 'ⵉⴱⵔ', 'ⵎⴰⵢ', 'ⵢⵓⵏ', 'ⵢⵓⵍ',
                'ⵖⵓⵛ', 'ⵛⵓⵜ', 'ⴽⵜⵓ', 'ⵏⵓⵡ', 'ⴷⵓⵊ'
            ],
            [
                'ⵉⵏⵏⴰⵢⵔ', 'ⴱⵕⴰⵢⵕ', 'ⵎⴰⵕⵚ', 'ⵉⴱⵔⵉⵔ', 'ⵎⴰⵢⵢⵓ',
                'ⵢⵓⵏⵢⵓ', 'ⵢⵓⵍⵢⵓⵣ', 'ⵖⵓⵛⵜ', 'ⵛⵓⵜⴰⵏⴱⵉⵔ',
                'ⴽⵜⵓⴱⵔ', 'ⵏⵓⵡⴰⵏⴱⵉⵔ', 'ⴷⵓⵊⴰⵏⴱⵉⵔ'
            ]
        ],
        u,
        [
            ['ⴷⴰⵄ', 'ⴷⴼⵄ'], u,
            ['ⴷⴰⵜ ⵏ ⵄⵉⵙⴰ', 'ⴷⴼⴼⵉⵔ ⵏ ⵄⵉⵙⴰ']
        ],
        1,
        [6, 0],
        ['d/M/y', 'd MMM, y', 'd MMMM y', 'EEEE d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00¤', '#E0'],
        'MAD',
        'MAD',
        'ⴰⴷⵔⵉⵎ ⵏ ⵍⵎⵖⵔⵉⴱ',
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvc2hpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLEtBQUs7UUFDTCxDQUFDLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkM7Z0JBQ0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO2dCQUN6QyxNQUFNO2FBQ1A7WUFDRDtnQkFDRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPO2dCQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVM7YUFDN0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU07Z0JBQ3pDLE1BQU07YUFDUDtTQUNGO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUMvQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSzthQUNsQztZQUNEO2dCQUNFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVO2dCQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVU7YUFDaEM7U0FDRjtRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO1NBQy9CO1FBQ0QsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQ2xELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUM7UUFDM0MsS0FBSztRQUNMLEtBQUs7UUFDTCxnQkFBZ0I7UUFDaEIsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQzFDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICBpZiAoaSA9PT0gMCB8fCBuID09PSAxKSByZXR1cm4gMTtcbiAgaWYgKG4gPT09IE1hdGguZmxvb3IobikgJiYgbiA+PSAyICYmIG4gPD0gMTApIHJldHVybiAzO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnc2hpJyxcbiAgW1sn4rWc4rWJ4rS84rSw4rWh4rWcJywgJ+K1nOK0sOK0t+K0s+K0s+K1r+K0sOK1nCddLCB1LCB1XSxcbiAgdSxcbiAgW1xuICAgIFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICAgIFtcbiAgICAgICfitLDitZnitLAnLCAn4rSw4rWi4rWPJywgJ+K0sOK1meK1iScsICfitLDitL3itZUnLCAn4rSw4rS94rWhJywgJ+K0sOK1meK1ieK1jicsXG4gICAgICAn4rSw4rWZ4rWJ4rS5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ+K0sOK1meK0sOK1juK0sOK1mScsICfitLDitaLitY/itLDitZknLCAn4rSw4rWZ4rWJ4rWP4rSw4rWZJywgJ+K0sOK0veK1leK0sOK1mScsXG4gICAgICAn4rSw4rS94rWh4rSw4rWZJywgJ+K1meK1ieK1juK1oeK0sOK1mScsICfitLDitZnitYnitLnitaLitLDitZknXG4gICAgXSxcbiAgICBbXG4gICAgICAn4rSw4rWZ4rSwJywgJ+K0sOK1ouK1jycsICfitLDitZnitYknLCAn4rSw4rS94rWVJywgJ+K0sOK0veK1oScsICfitLDitZnitYnitY4nLFxuICAgICAgJ+K0sOK1meK1ieK0uSdcbiAgICBdXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ+K1iScsICfitLEnLCAn4rWOJywgJ+K1iScsICfitY4nLCAn4rWiJywgJ+K1oicsICfitZYnLCAn4rWbJywgJ+K0vScsICfitY8nLCAn4rS3J10sXG4gICAgW1xuICAgICAgJ+K1ieK1j+K1jycsICfitLHitZXitLAnLCAn4rWO4rSw4rWVJywgJ+K1ieK0seK1lCcsICfitY7itLDitaInLCAn4rWi4rWT4rWPJywgJ+K1ouK1k+K1jScsXG4gICAgICAn4rWW4rWT4rWbJywgJ+K1m+K1k+K1nCcsICfitL3itZzitZMnLCAn4rWP4rWT4rWhJywgJ+K0t+K1k+K1iidcbiAgICBdLFxuICAgIFtcbiAgICAgICfitYnitY/itY/itLDitaLitZQnLCAn4rSx4rWV4rSw4rWi4rWVJywgJ+K1juK0sOK1leK1micsICfitYnitLHitZTitYnitZQnLCAn4rWO4rSw4rWi4rWi4rWTJyxcbiAgICAgICfitaLitZPitY/itaLitZMnLCAn4rWi4rWT4rWN4rWi4rWT4rWjJywgJ+K1luK1k+K1m+K1nCcsICfitZvitZPitZzitLDitY/itLHitYnitZQnLFxuICAgICAgJ+K0veK1nOK1k+K0seK1lCcsICfitY/itZPitaHitLDitY/itLHitYnitZQnLCAn4rS34rWT4rWK4rSw4rWP4rSx4rWJ4rWUJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsn4rS34rSw4rWEJywgJ+K0t+K0vOK1hCddLCB1LFxuICAgIFsn4rS34rSw4rWcIOK1jyDitYTitYnitZnitLAnLCAn4rS34rS84rS84rWJ4rWUIOK1jyDitYTitYnitZnitLAnXVxuICBdLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZC9NL3knLCAnZCBNTU0sIHknLCAnZCBNTU1NIHknLCAnRUVFRSBkIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycsJywgJ8KgJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICcjLCMjMC4wMMKkJywgJyNFMCddLFxuICAnTUFEJyxcbiAgJ01BRCcsXG4gICfitLDitLfitZTitYnitY4g4rWPIOK1jeK1juK1luK1lOK1ieK0sScsXG4gIHsnSlBZJzogWydKUMKlJywgJ8KlJ10sICdVU0QnOiBbJ1VTJCcsICckJ119LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19