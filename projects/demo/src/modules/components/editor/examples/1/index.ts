import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-editor-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample1 {
    model =
        'WYSIWYG (What you see is what you get) — Rich Text Editor для использования с формами Angular.' +
        '<p><font size="6">Заголовок</font></p><font size="4">Отделом УФМС России по <font color="#ff78a7">' +
        'Камчатскому краю</font> в центральном районе города Петропаловск-Камчатский Отделом УФМС ' +
        '<span style="background-color: rgb(163, 129, 255);">России</span></font><blockquote>Расплачивайтесь ' +
        '<u>дебетовой картой</u> <b>везде</b>, где возможно, и пользуйтесь предложениями от банка и партнеров, ' +
        'чтобы получать максимум кэшбэка</blockquote><p style="text-align: right;">Полная статистика по счетам и ' +
        'картам, любые платежи и переводы, круглосуточная помощь в чате — в удобном мобильном и интернет-банке</p>';

    onClick() {
        this.model = '<b>HTML FTW!</b>';
    }
}
