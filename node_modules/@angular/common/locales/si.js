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
        define("@angular/common/locales/si", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (n === 0 || n === 1 || i === 0 && f === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'si',
        [['පෙ', 'ප'], ['පෙ.ව.', 'ප.ව.'], u],
        [['පෙ.ව.', 'ප.ව.'], u, u],
        [
            ['ඉ', 'ස', 'අ', 'බ', 'බ්\u200dර', 'සි', 'සෙ'],
            [
                'ඉරිදා', 'සඳුදා', 'අඟහ', 'බදාදා',
                'බ්\u200dරහස්', 'සිකු', 'සෙන'
            ],
            [
                'ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා',
                'බ්\u200dරහස්පතින්දා', 'සිකුරාදා',
                'සෙනසුරාදා'
            ],
            [
                'ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්\u200dරහ', 'සිකු',
                'සෙන'
            ]
        ],
        u,
        [
            [
                'ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ',
                'නෙ', 'දෙ'
            ],
            [
                'ජන', 'පෙබ', 'මාර්තු', 'අප්\u200dරේල්', 'මැයි',
                'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ',
                'දෙසැ'
            ],
            [
                'ජනවාරි', 'පෙබරවාරි', 'මාර්තු',
                'අප්\u200dරේල්', 'මැයි', 'ජූනි', 'ජූලි',
                'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්',
                'නොවැම්බර්', 'දෙසැම්බර්'
            ]
        ],
        [
            [
                'ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ',
                'නෙ', 'දෙ'
            ],
            [
                'ජන', 'පෙබ', 'මාර්', 'අප්\u200dරේල්', 'මැයි',
                'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ',
                'දෙසැ'
            ],
            [
                'ජනවාරි', 'පෙබරවාරි', 'මාර්තු',
                'අප්\u200dරේල්', 'මැයි', 'ජූනි', 'ජූලි',
                'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්',
                'නොවැම්බර්', 'දෙසැම්බර්'
            ]
        ],
        [
            ['ක්\u200dරි.පූ.', 'ක්\u200dරි.ව.'], u,
            [
                'ක්\u200dරිස්තු පූර්ව',
                'ක්\u200dරිස්තු වර්ෂ'
            ]
        ],
        1,
        [6, 0],
        ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
        ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', '.'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#'],
        'LKR',
        'රු.',
        'ශ්\u200dරී ලංකා රුපියල',
        {
            'JPY': ['JP¥', '¥'],
            'LKR': ['රු.'],
            'THB': ['฿'],
            'TWD': ['NT$'],
            'USD': ['US$', '$'],
            'XOF': ['සිෆ්එ']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9zaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QjtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzdDO2dCQUNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU87Z0JBQ2hDLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSzthQUM5QjtZQUNEO2dC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aWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCBmID0gcGFyc2VJbnQobi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuICBpZiAobiA9PT0gMCB8fCBuID09PSAxIHx8IGkgPT09IDAgJiYgZiA9PT0gMSkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdzaScsXG4gIFtbJ+C2tOC3mScsICfgtrQnXSwgWyfgtrTgt5ku4LeALicsICfgtrQu4LeALiddLCB1XSxcbiAgW1sn4La04LeZLuC3gC4nLCAn4La0LuC3gC4nXSwgdSwgdV0sXG4gIFtcbiAgICBbJ+C2iScsICfgt4MnLCAn4LaFJywgJ+C2ticsICfgtrbgt4pcXHUyMDBk4La7JywgJ+C3g+C3kicsICfgt4Pgt5knXSxcbiAgICBbXG4gICAgICAn4LaJ4La74LeS4Lav4LePJywgJ+C3g+C2s+C3lOC2r+C3jycsICfgtoXgtp/gt4QnLCAn4La24Lav4LeP4Lav4LePJyxcbiAgICAgICfgtrbgt4pcXHUyMDBk4La74LeE4LeD4LeKJywgJ+C3g+C3kuC2muC3lCcsICfgt4Pgt5ngtrEnXG4gICAgXSxcbiAgICBbXG4gICAgICAn4LaJ4La74LeS4Lav4LePJywgJ+C3g+C2s+C3lOC2r+C3jycsICfgtoXgtp/gt4Tgtrvgt5Tgt4Dgt4/gtq/gt48nLCAn4La24Lav4LeP4Lav4LePJyxcbiAgICAgICfgtrbgt4pcXHUyMDBk4La74LeE4LeD4LeK4La04Lat4LeS4Lax4LeK4Lav4LePJywgJ+C3g+C3kuC2muC3lOC2u+C3j+C2r+C3jycsXG4gICAgICAn4LeD4LeZ4Lax4LeD4LeU4La74LeP4Lav4LePJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ+C2ieC2u+C3kicsICfgt4PgtrPgt5QnLCAn4LaF4LafJywgJ+C2tuC2r+C3jycsICfgtrbgt4pcXHUyMDBk4La74LeEJywgJ+C3g+C3kuC2muC3lCcsXG4gICAgICAn4LeD4LeZ4LaxJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFtcbiAgICAgICfgtqInLCAn4La04LeZJywgJ+C2uOC3jycsICfgtoUnLCAn4La44LeQJywgJ+C2ouC3licsICfgtqLgt5YnLCAn4LaFJywgJ+C3g+C3kCcsICfgtpQnLFxuICAgICAgJ+C2seC3mScsICfgtq/gt5knXG4gICAgXSxcbiAgICBbXG4gICAgICAn4Lai4LaxJywgJ+C2tOC3meC2ticsICfgtrjgt4/gtrvgt4rgtq3gt5QnLCAn4LaF4La04LeKXFx1MjAwZOC2u+C3muC2veC3iicsICfgtrjgt5Dgtrrgt5InLFxuICAgICAgJ+C2ouC3luC2seC3kicsICfgtqLgt5bgtr3gt5InLCAn4LaF4Lac4LedJywgJ+C3g+C3kOC2tOC3iicsICfgtpTgtprgt4onLCAn4Lax4Lec4LeA4LeQJyxcbiAgICAgICfgtq/gt5ngt4Pgt5AnXG4gICAgXSxcbiAgICBbXG4gICAgICAn4Lai4Lax4LeA4LeP4La74LeSJywgJ+C2tOC3meC2tuC2u+C3gOC3j+C2u+C3kicsICfgtrjgt4/gtrvgt4rgtq3gt5QnLFxuICAgICAgJ+C2heC2tOC3ilxcdTIwMGTgtrvgt5rgtr3gt4onLCAn4La44LeQ4La64LeSJywgJ+C2ouC3luC2seC3kicsICfgtqLgt5bgtr3gt5InLFxuICAgICAgJ+C2heC2nOC3neC3g+C3iuC2reC3lCcsICfgt4Pgt5DgtrTgt4rgtq3gt5Dgtrjgt4rgtrbgtrvgt4onLCAn4LaU4Laa4LeK4Lat4Led4La24La74LeKJyxcbiAgICAgICfgtrHgt5zgt4Dgt5Dgtrjgt4rgtrbgtrvgt4onLCAn4Lav4LeZ4LeD4LeQ4La44LeK4La24La74LeKJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFtcbiAgICAgICfgtqInLCAn4La04LeZJywgJ+C2uOC3jycsICfgtoUnLCAn4La44LeQJywgJ+C2ouC3licsICfgtqLgt5YnLCAn4LaFJywgJ+C3g+C3kCcsICfgtpQnLFxuICAgICAgJ+C2seC3mScsICfgtq/gt5knXG4gICAgXSxcbiAgICBbXG4gICAgICAn4Lai4LaxJywgJ+C2tOC3meC2ticsICfgtrjgt4/gtrvgt4onLCAn4LaF4La04LeKXFx1MjAwZOC2u+C3muC2veC3iicsICfgtrjgt5Dgtrrgt5InLFxuICAgICAgJ+C2ouC3luC2seC3kicsICfgtqLgt5bgtr3gt5InLCAn4LaF4Lac4LedJywgJ+C3g+C3kOC2tOC3iicsICfgtpTgtprgt4onLCAn4Lax4Lec4LeA4LeQJyxcbiAgICAgICfgtq/gt5ngt4Pgt5AnXG4gICAgXSxcbiAgICBbXG4gICAgICAn4Lai4Lax4LeA4LeP4La74LeSJywgJ+C2tOC3meC2tuC2u+C3gOC3j+C2u+C3kicsICfgtrjgt4/gtrvgt4rgtq3gt5QnLFxuICAgICAgJ+C2heC2tOC3ilxcdTIwMGTgtrvgt5rgtr3gt4onLCAn4La44LeQ4La64LeSJywgJ+C2ouC3luC2seC3kicsICfgtqLgt5bgtr3gt5InLFxuICAgICAgJ+C2heC2nOC3neC3g+C3iuC2reC3lCcsICfgt4Pgt5DgtrTgt4rgtq3gt5Dgtrjgt4rgtrbgtrvgt4onLCAn4LaU4Laa4LeK4Lat4Led4La24La74LeKJyxcbiAgICAgICfgtrHgt5zgt4Dgt5Dgtrjgt4rgtrbgtrvgt4onLCAn4Lav4LeZ4LeD4LeQ4La44LeK4La24La74LeKJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsn4Laa4LeKXFx1MjAwZOC2u+C3ki7gtrTgt5YuJywgJ+C2muC3ilxcdTIwMGTgtrvgt5Iu4LeALiddLCB1LFxuICAgIFtcbiAgICAgICfgtprgt4pcXHUyMDBk4La74LeS4LeD4LeK4Lat4LeUIOC2tOC3luC2u+C3iuC3gCcsXG4gICAgICAn4Laa4LeKXFx1MjAwZOC2u+C3kuC3g+C3iuC2reC3lCDgt4Dgtrvgt4rgt4InXG4gICAgXVxuICBdLFxuICAxLFxuICBbNiwgMF0sXG4gIFsneS1NTS1kZCcsICd5IE1NTSBkJywgJ3kgTU1NTSBkJywgJ3kgTU1NTSBkLCBFRUVFJ10sXG4gIFsnSEgubW0nLCAnSEgubW0uc3MnLCAnSEgubW0uc3MgeicsICdISC5tbS5zcyB6enp6J10sXG4gIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJy4nLCAnLCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnLiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqQjLCMjMC4wMCcsICcjJ10sXG4gICdMS1InLFxuICAn4La74LeULicsXG4gICfgt4Hgt4pcXHUyMDBk4La74LeTIOC2veC2guC2muC3jyDgtrvgt5TgtrTgt5Lgtrrgtr0nLFxuICB7XG4gICAgJ0pQWSc6IFsnSlDCpScsICfCpSddLFxuICAgICdMS1InOiBbJ+C2u+C3lC4nXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnVVNEJzogWydVUyQnLCAnJCddLFxuICAgICdYT0YnOiBbJ+C3g+C3kuC3huC3iuC2kSddXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=