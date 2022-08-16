```ts
@Component({
  selector: 'my-portal-host',
  templateUrl: './my-portal-host.template.html',
  styleUrls: ['./my-portal-host.style.less'],
  providers: [
    {provide: AbstractTuiPortalService, useExisting: MyPortalService},
    {provide: AbstractTuiPortalHostComponent, useExisting: MyPortalHost},
  ],
})
export class MyPortalHost extends AbstractTuiPortalHostComponent {}
```
