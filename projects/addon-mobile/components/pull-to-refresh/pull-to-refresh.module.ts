import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiMobileLoaderAndroidComponent} from './loader-android/loader-android.component';
import {TuiMobileLoaderIOSComponent} from './loader-ios/loader-ios.component';
import {TuiPullToRefreshComponent} from './pull-to-refresh.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgComponent,
        TuiRepeatTimesModule,
        PolymorpheusModule,
        TuiMobileLoaderAndroidComponent,
    ],
    declarations: [TuiPullToRefreshComponent, TuiMobileLoaderIOSComponent],
    exports: [TuiPullToRefreshComponent],
})
export class TuiPullToRefreshModule {}
