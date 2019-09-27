import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@reservo-front/utils';
import { ReservoFrontCoreModule } from '@reservo-front/web';

@NgModule({
  imports: [ReservoFrontCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class ReservoFrontIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ReservoFrontIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'ReservoFrontIonicCoreModule');
  }
}
