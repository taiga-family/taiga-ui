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
        define("@angular/common/locales/hi", ["require", "exports"], factory);
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
        'hi',
        [['am', 'pm'], u, u],
        u,
        [
            ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
            [
                'रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र',
                'शनि'
            ],
            [
                'रविवार', 'सोमवार', 'मंगलवार', 'बुधवार',
                'गुरुवार', 'शुक्रवार', 'शनिवार'
            ],
            ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श']
        ],
        u,
        [
            [
                'ज', 'फ़', 'मा', 'अ', 'म', 'जू', 'जु', 'अ', 'सि', 'अ', 'न',
                'दि'
            ],
            [
                'जन॰', 'फ़र॰', 'मार्च', 'अप्रैल', 'मई', 'जून',
                'जुल॰', 'अग॰', 'सित॰', 'अक्तू॰', 'नव॰', 'दिस॰'
            ],
            [
                'जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई',
                'जून', 'जुलाई', 'अगस्त', 'सितंबर',
                'अक्तूबर', 'नवंबर', 'दिसंबर'
            ]
        ],
        u,
        [
            ['ईसा-पूर्व', 'ईस्वी'], u,
            ['ईसा-पूर्व', 'ईसवी सन']
        ],
        0,
        [0, 0],
        ['d/M/yy', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', u, '{1} को {0}', u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##,##0.###', '#,##,##0%', '¤#,##,##0.00', '[#E0]'],
        'INR',
        '₹',
        'भारतीय रुपया',
        { 'JPY': ['JP¥', '¥'], 'RON': [u, 'लेई'], 'THB': ['฿'], 'TWD': ['NT$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9oaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixJQUFJO1FBQ0osQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQ3hDO2dCQUNFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTztnQkFDNUMsS0FBSzthQUNOO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUTtnQkFDdkMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRO2FBQ2hDO1lBQ0QsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7U0FDekM7UUFDRCxDQUFDO1FBQ0Q7WUFDRTtnQkFDRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDMUQsSUFBSTthQUNMO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLO2dCQUM3QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU07YUFDL0M7WUFDRDtnQkFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSTtnQkFDMUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUTtnQkFDakMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRO2FBQzdCO1NBQ0Y7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3pCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztTQUN6QjtRQUNELENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQ25ELENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7UUFDeEQsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUN0RCxLQUFLO1FBQ0wsR0FBRztRQUNILGNBQWM7UUFDZCxFQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDdEUsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG4gIGlmIChpID09PSAwIHx8IG4gPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnaGknLFxuICBbWydhbScsICdwbSddLCB1LCB1XSxcbiAgdSxcbiAgW1xuICAgIFsn4KSwJywgJ+CkuOCliycsICfgpK7gpIInLCAn4KSs4KWBJywgJ+Ckl+ClgScsICfgpLbgpYEnLCAn4KS2J10sXG4gICAgW1xuICAgICAgJ+CksOCkteCkvycsICfgpLjgpYvgpK4nLCAn4KSu4KSC4KSX4KSyJywgJ+CkrOClgeCkpycsICfgpJfgpYHgpLDgpYEnLCAn4KS24KWB4KSV4KWN4KSwJyxcbiAgICAgICfgpLbgpKjgpL8nXG4gICAgXSxcbiAgICBbXG4gICAgICAn4KSw4KS14KS/4KS14KS+4KSwJywgJ+CkuOCli+CkruCkteCkvuCksCcsICfgpK7gpILgpJfgpLLgpLXgpL7gpLAnLCAn4KSs4KWB4KSn4KS14KS+4KSwJyxcbiAgICAgICfgpJfgpYHgpLDgpYHgpLXgpL7gpLAnLCAn4KS24KWB4KSV4KWN4KSw4KS14KS+4KSwJywgJ+CktuCkqOCkv+CkteCkvuCksCdcbiAgICBdLFxuICAgIFsn4KSwJywgJ+CkuOCliycsICfgpK7gpIInLCAn4KSs4KWBJywgJ+Ckl+ClgScsICfgpLbgpYEnLCAn4KS2J11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFtcbiAgICAgICfgpJwnLCAn4KSr4KS8JywgJ+CkruCkvicsICfgpIUnLCAn4KSuJywgJ+CknOClgicsICfgpJzgpYEnLCAn4KSFJywgJ+CkuOCkvycsICfgpIUnLCAn4KSoJyxcbiAgICAgICfgpKbgpL8nXG4gICAgXSxcbiAgICBbXG4gICAgICAn4KSc4KSo4KWwJywgJ+Ckq+CkvOCksOClsCcsICfgpK7gpL7gpLDgpY3gpJonLCAn4KSF4KSq4KWN4KSw4KWI4KSyJywgJ+CkruCkiCcsICfgpJzgpYLgpKgnLFxuICAgICAgJ+CknOClgeCksuClsCcsICfgpIXgpJfgpbAnLCAn4KS44KS/4KSk4KWwJywgJ+CkheCkleCljeCkpOClguClsCcsICfgpKjgpLXgpbAnLCAn4KSm4KS/4KS44KWwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ+CknOCkqOCkteCksOClgCcsICfgpKvgpLzgpLDgpLXgpLDgpYAnLCAn4KSu4KS+4KSw4KWN4KSaJywgJ+CkheCkquCljeCksOCliOCksicsICfgpK7gpIgnLFxuICAgICAgJ+CknOClguCkqCcsICfgpJzgpYHgpLLgpL7gpIgnLCAn4KSF4KSX4KS44KWN4KSkJywgJ+CkuOCkv+CkpOCkguCkrOCksCcsXG4gICAgICAn4KSF4KSV4KWN4KSk4KWC4KSs4KSwJywgJ+CkqOCkteCkguCkrOCksCcsICfgpKbgpL/gpLjgpILgpKzgpLAnXG4gICAgXVxuICBdLFxuICB1LFxuICBbXG4gICAgWyfgpIjgpLjgpL4t4KSq4KWC4KSw4KWN4KS1JywgJ+CkiOCkuOCljeCkteClgCddLCB1LFxuICAgIFsn4KSI4KS44KS+LeCkquClguCksOCljeCktScsICfgpIjgpLjgpLXgpYAg4KS44KSoJ11cbiAgXSxcbiAgMCxcbiAgWzAsIDBdLFxuICBbJ2QvTS95eScsICdkIE1NTSB5JywgJ2QgTU1NTSB5JywgJ0VFRUUsIGQgTU1NTSB5J10sXG4gIFsnaDptbSBhJywgJ2g6bW06c3MgYScsICdoOm1tOnNzIGEgeicsICdoOm1tOnNzIGEgenp6eiddLFxuICBbJ3sxfSwgezB9JywgdSwgJ3sxfSDgpJXgpYsgezB9JywgdV0sXG4gIFsnLicsICcsJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIywjIzAuIyMjJywgJyMsIyMsIyMwJScsICfCpCMsIyMsIyMwLjAwJywgJ1sjRTBdJ10sXG4gICdJTlInLFxuICAn4oK5JyxcbiAgJ+CkreCkvuCksOCkpOClgOCkryDgpLDgpYHgpKrgpK/gpL4nLFxuICB7J0pQWSc6IFsnSlDCpScsICfCpSddLCAnUk9OJzogW3UsICfgpLLgpYfgpIgnXSwgJ1RIQic6IFsn4Li/J10sICdUV0QnOiBbJ05UJCddfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==