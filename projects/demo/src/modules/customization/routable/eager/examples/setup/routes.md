```ts
export const routes = [
  {
    path: '',
    component: MyPageComponent,
    children: [
      tuiGenerateDialogableRoute(MyDialogComponent, {
        path: 'path/to/dialog',
      }),
    ],
  },
];
```
