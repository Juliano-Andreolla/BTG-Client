import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BtgModels, IBtgModel } from './btg-screen.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
    templateUrl: './btg-screen.component.html',
    selector: 'btg-screen',
})
export class BtgScreenComponent implements OnInit, OnDestroy {
    public sourceCheck: boolean = false;
    public models: IBtgModel[] = BtgModels;
    public selectedModelDescription: string = '';
    public logValue: string = 'Log here!';

    public formGroup: FormGroup = new FormGroup({
        link: new FormControl(''),
        path: new FormControl(''),
        pitchShift: new FormControl(''),
        model: new FormControl(''),
        log: new FormControl(''),
    });

    private ngUnsubscribe: Subject<void> = new Subject<void>();

    public ngOnInit(): void {
        this.formGroup.get('model').valueChanges
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((selectedModel: IBtgModel) =>
                 this.selectedModelDescription = selectedModel.description
        );

        this.setModel('htdemucs_ft');
    }

    public ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public onFileSourceChange(event: MatSlideToggleChange): void {
        this.sourceCheck = event.checked;
    }

    public setModel(modelName: string): void {
        this.formGroup.get('model').setValue(this.models.find((model: IBtgModel) => model.name === modelName));
    }
}