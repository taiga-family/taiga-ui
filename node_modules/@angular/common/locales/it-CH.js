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
        define("@angular/common/locales/it-CH", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'it-CH',
        [['m.', 'p.'], ['AM', 'PM'], u],
        u,
        [
            ['D', 'L', 'M', 'M', 'G', 'V', 'S'], ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
            ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
            ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
        ],
        u,
        [
            ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'],
            ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            [
                'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre',
                'ottobre', 'novembre', 'dicembre'
            ]
        ],
        u,
        [['aC', 'dC'], ['a.C.', 'd.C.'], ['avanti Cristo', 'dopo Cristo']],
        1,
        [6, 0],
        ['dd.MM.yy', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, '{1} {0}', u],
        ['.', '’', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤ #,##0.00;¤-#,##0.00', '#E0'],
        'CHF',
        'CHF',
        'franco svizzero',
        {
            'BRL': [u, 'R$'],
            'BYN': [u, 'Br'],
            'EGP': [u, '£E'],
            'HKD': [u, '$'],
            'JPY': [u, '¥'],
            'KRW': [u, '₩'],
            'MXN': [u, '$'],
            'NOK': [u, 'NKr'],
            'THB': ['฿'],
            'TWD': [u, 'NT$'],
            'USD': [u, '$']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXQtQ0guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9pdC1DSC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLE9BQU87UUFDUCxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RGLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQzlFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ2xEO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3BGO2dCQUNFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVztnQkFDN0YsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO2FBQ2xDO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztRQUNyRCxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUM7UUFDdkQsS0FBSztRQUNMLEtBQUs7UUFDTCxpQkFBaUI7UUFDakI7WUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdpdC1DSCcsXG4gIFtbJ20uJywgJ3AuJ10sIFsnQU0nLCAnUE0nXSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ0QnLCAnTCcsICdNJywgJ00nLCAnRycsICdWJywgJ1MnXSwgWydkb20nLCAnbHVuJywgJ21hcicsICdtZXInLCAnZ2lvJywgJ3ZlbicsICdzYWInXSxcbiAgICBbJ2RvbWVuaWNhJywgJ2x1bmVkw6wnLCAnbWFydGVkw6wnLCAnbWVyY29sZWTDrCcsICdnaW92ZWTDrCcsICd2ZW5lcmTDrCcsICdzYWJhdG8nXSxcbiAgICBbJ2RvbScsICdsdW4nLCAnbWFyJywgJ21lcicsICdnaW8nLCAndmVuJywgJ3NhYiddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ0cnLCAnRicsICdNJywgJ0EnLCAnTScsICdHJywgJ0wnLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgWydnZW4nLCAnZmViJywgJ21hcicsICdhcHInLCAnbWFnJywgJ2dpdScsICdsdWcnLCAnYWdvJywgJ3NldCcsICdvdHQnLCAnbm92JywgJ2RpYyddLFxuICAgIFtcbiAgICAgICdnZW5uYWlvJywgJ2ZlYmJyYWlvJywgJ21hcnpvJywgJ2FwcmlsZScsICdtYWdnaW8nLCAnZ2l1Z25vJywgJ2x1Z2xpbycsICdhZ29zdG8nLCAnc2V0dGVtYnJlJyxcbiAgICAgICdvdHRvYnJlJywgJ25vdmVtYnJlJywgJ2RpY2VtYnJlJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snYUMnLCAnZEMnXSwgWydhLkMuJywgJ2QuQy4nXSwgWydhdmFudGkgQ3Jpc3RvJywgJ2RvcG8gQ3Jpc3RvJ11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZGQuTU0ueXknLCAnZCBNTU0geScsICdkIE1NTU0geScsICdFRUVFLCBkIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSwgezB9JywgdSwgJ3sxfSB7MH0nLCB1XSxcbiAgWycuJywgJ+KAmScsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqTCoCMsIyMwLjAwO8KkLSMsIyMwLjAwJywgJyNFMCddLFxuICAnQ0hGJyxcbiAgJ0NIRicsXG4gICdmcmFuY28gc3Zpenplcm8nLFxuICB7XG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQllOJzogW3UsICdCciddLFxuICAgICdFR1AnOiBbdSwgJ8KjRSddLFxuICAgICdIS0QnOiBbdSwgJyQnXSxcbiAgICAnSlBZJzogW3UsICfCpSddLFxuICAgICdLUlcnOiBbdSwgJ+KCqSddLFxuICAgICdNWE4nOiBbdSwgJyQnXSxcbiAgICAnTk9LJzogW3UsICdOS3InXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVFdEJzogW3UsICdOVCQnXSxcbiAgICAnVVNEJzogW3UsICckJ11cbiAgfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==