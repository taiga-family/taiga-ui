import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiOverscrollModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiMobileLoaderAndroidComponent} from './loader-android/loader-android.component';
import {TuiMobileLoaderIOSComponent} from './loader-ios/loader-ios.component';
import {TuiPullToRefreshComponent} from './pull-to-refresh.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiOverscrollModule,
        TuiRepeatTimesModule,
        PolymorpheusModule,
    ],
    declarations: [
        TuiPullToRefreshComponent,
        TuiMobileLoaderAndroidComponent,
        TuiMobileLoaderIOSComponent,
    ],
    exports: [TuiPullToRefreshComponent],
})
export class TuiPullToRefreshModule {}
