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
        define("@angular/common/locales/mr", ["require", "exports"], factory);
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
        return 5;
    }
    exports.default = [
        'mr',
        [['स', 'सं'], ['म.पू.', 'म.उ.'], u],
        [['म.पू.', 'म.उ.'], u, u],
        [
            ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
            [
                'रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र',
                'शनि'
            ],
            [
                'रविवार', 'सोमवार', 'मंगळवार', 'बुधवार',
                'गुरुवार', 'शुक्रवार', 'शनिवार'
            ],
            ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श']
        ],
        u,
        [
            [
                'जा', 'फे', 'मा', 'ए', 'मे', 'जू', 'जु', 'ऑ', 'स', 'ऑ',
                'नो', 'डि'
            ],
            [
                'जाने', 'फेब्रु', 'मार्च', 'एप्रि', 'मे',
                'जून', 'जुलै', 'ऑग', 'सप्टें', 'ऑक्टो',
                'नोव्हें', 'डिसें'
            ],
            [
                'जानेवारी', 'फेब्रुवारी', 'मार्च',
                'एप्रिल', 'मे', 'जून', 'जुलै', 'ऑगस्ट',
                'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर',
                'डिसेंबर'
            ]
        ],
        u,
        [
            ['इ. स. पू.', 'इ. स.'], u,
            ['ईसवीसनपूर्व', 'ईसवीसन']
        ],
        0,
        [0, 0],
        ['d/M/yy', 'd MMM, y', 'd MMMM, y', 'EEEE, d MMMM, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', u, '{1} रोजी {0}', u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##,##0.###', '#,##0%', '¤#,##0.00', '[#E0]'],
        'INR',
        '₹',
        'भारतीय रुपया',
        { 'JPY': ['JP¥', '¥'], 'THB': ['฿'], 'TWD': ['NT$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9tci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixJQUFJO1FBQ0osQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDeEM7Z0JBQ0UsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPO2dCQUM1QyxLQUFLO2FBQ047WUFDRDtnQkFDRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRO2dCQUN2QyxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVE7YUFDaEM7WUFDRCxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUN6QztRQUNELENBQUM7UUFDRDtZQUNFO2dCQUNFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7Z0JBQ3RELElBQUksRUFBRSxJQUFJO2FBQ1g7WUFDRDtnQkFDRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSTtnQkFDeEMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU87Z0JBQ3RDLFNBQVMsRUFBRSxPQUFPO2FBQ25CO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPO2dCQUNqQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTztnQkFDdEMsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXO2dCQUNsQyxTQUFTO2FBQ1Y7U0FDRjtRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO1NBQzFCO1FBQ0QsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUM7UUFDdEQsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztRQUN4RCxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDO1FBQ2hELEtBQUs7UUFDTCxHQUFHO1FBQ0gsY0FBYztRQUNkLEVBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ25ELEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICBpZiAoaSA9PT0gMCB8fCBuID09PSAxKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ21yJyxcbiAgW1sn4KS4JywgJ+CkuOCkgiddLCBbJ+Ckri7gpKrgpYIuJywgJ+Ckri7gpIkuJ10sIHVdLFxuICBbWyfgpK4u4KSq4KWCLicsICfgpK4u4KSJLiddLCB1LCB1XSxcbiAgW1xuICAgIFsn4KSwJywgJ+CkuOCliycsICfgpK7gpIInLCAn4KSs4KWBJywgJ+Ckl+ClgScsICfgpLbgpYEnLCAn4KS2J10sXG4gICAgW1xuICAgICAgJ+CksOCkteCkvycsICfgpLjgpYvgpK4nLCAn4KSu4KSC4KSX4KSzJywgJ+CkrOClgeCkpycsICfgpJfgpYHgpLDgpYEnLCAn4KS24KWB4KSV4KWN4KSwJyxcbiAgICAgICfgpLbgpKjgpL8nXG4gICAgXSxcbiAgICBbXG4gICAgICAn4KSw4KS14KS/4KS14KS+4KSwJywgJ+CkuOCli+CkruCkteCkvuCksCcsICfgpK7gpILgpJfgpLPgpLXgpL7gpLAnLCAn4KSs4KWB4KSn4KS14KS+4KSwJyxcbiAgICAgICfgpJfgpYHgpLDgpYHgpLXgpL7gpLAnLCAn4KS24KWB4KSV4KWN4KSw4KS14KS+4KSwJywgJ+CktuCkqOCkv+CkteCkvuCksCdcbiAgICBdLFxuICAgIFsn4KSwJywgJ+CkuOCliycsICfgpK7gpIInLCAn4KSs4KWBJywgJ+Ckl+ClgScsICfgpLbgpYEnLCAn4KS2J11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFtcbiAgICAgICfgpJzgpL4nLCAn4KSr4KWHJywgJ+CkruCkvicsICfgpI8nLCAn4KSu4KWHJywgJ+CknOClgicsICfgpJzgpYEnLCAn4KSRJywgJ+CkuCcsICfgpJEnLFxuICAgICAgJ+CkqOCliycsICfgpKHgpL8nXG4gICAgXSxcbiAgICBbXG4gICAgICAn4KSc4KS+4KSo4KWHJywgJ+Ckq+Clh+CkrOCljeCksOClgScsICfgpK7gpL7gpLDgpY3gpJonLCAn4KSP4KSq4KWN4KSw4KS/JywgJ+CkruClhycsXG4gICAgICAn4KSc4KWC4KSoJywgJ+CknOClgeCksuCliCcsICfgpJHgpJcnLCAn4KS44KSq4KWN4KSf4KWH4KSCJywgJ+CkkeCkleCljeCkn+CliycsXG4gICAgICAn4KSo4KWL4KS14KWN4KS54KWH4KSCJywgJ+CkoeCkv+CkuOClh+CkgidcbiAgICBdLFxuICAgIFtcbiAgICAgICfgpJzgpL7gpKjgpYfgpLXgpL7gpLDgpYAnLCAn4KSr4KWH4KSs4KWN4KSw4KWB4KS14KS+4KSw4KWAJywgJ+CkruCkvuCksOCljeCkmicsXG4gICAgICAn4KSP4KSq4KWN4KSw4KS/4KSyJywgJ+CkruClhycsICfgpJzgpYLgpKgnLCAn4KSc4KWB4KSy4KWIJywgJ+CkkeCkl+CkuOCljeCknycsXG4gICAgICAn4KS44KSq4KWN4KSf4KWH4KSC4KSs4KSwJywgJ+CkkeCkleCljeCkn+Cli+CkrOCksCcsICfgpKjgpYvgpLXgpY3gpLngpYfgpILgpKzgpLAnLFxuICAgICAgJ+CkoeCkv+CkuOClh+CkguCkrOCksCdcbiAgICBdXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ+Ckhy4g4KS4LiDgpKrgpYIuJywgJ+Ckhy4g4KS4LiddLCB1LFxuICAgIFsn4KSI4KS44KS14KWA4KS44KSo4KSq4KWC4KSw4KWN4KS1JywgJ+CkiOCkuOCkteClgOCkuOCkqCddXG4gIF0sXG4gIDAsXG4gIFswLCAwXSxcbiAgWydkL00veXknLCAnZCBNTU0sIHknLCAnZCBNTU1NLCB5JywgJ0VFRUUsIGQgTU1NTSwgeSddLFxuICBbJ2g6bW0gYScsICdoOm1tOnNzIGEnLCAnaDptbTpzcyBhIHonLCAnaDptbTpzcyBhIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsICd7MX0g4KSw4KWL4KSc4KWAIHswfScsIHVdLFxuICBbJy4nLCAnLCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqQjLCMjMC4wMCcsICdbI0UwXSddLFxuICAnSU5SJyxcbiAgJ+KCuScsXG4gICfgpK3gpL7gpLDgpKTgpYDgpK8g4KSw4KWB4KSq4KSv4KS+JyxcbiAgeydKUFknOiBbJ0pQwqUnLCAnwqUnXSwgJ1RIQic6IFsn4Li/J10sICdUV0QnOiBbJ05UJCddfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==