import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@common/echart/map/fujian';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
