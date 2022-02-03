```ts
constructor(private readonly dialogsService: TuiMobileDialogService) {}

// ...

this.dialogsService
    .open(
        'Text',
        {
            label: 'Heading',
            actions: ['Button 1', 'Button 2'],
            data: 'Some data'
        },
    )
    .subscribe(index => {
        // Index of clicked button
        console.log(index);
    });
```
