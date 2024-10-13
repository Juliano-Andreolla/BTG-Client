import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BtgModels, IBtgModel } from './btg-screen.model';
import { Subject, takeUntil } from 'rxjs';
import { NumericInputPipe } from '../shared/pipes/numeric-input.pipe';

@Component({
    templateUrl: './btg-screen.component.html',
    selector: 'btg-screen',
})
export class BtgScreenComponent implements OnInit, OnDestroy {
    public sourceCheck: boolean = false;
    public models: IBtgModel[] = BtgModels;
    public selectedModelDescription: string = '';
    public logValue: string = 'Log here!';
    public processing: boolean = false;

    public formGroup: FormGroup = new FormGroup({
        source: new FormControl('', Validators.required),
        output: new FormControl(''),
        pitchShift: new FormControl(0, [
            Validators.max(9),
            Validators.min(-9),
            Validators.required,
        ]),
        model: new FormControl('', Validators.required),
        log: new FormControl(''),
    });

    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private numericInputPipe: NumericInputPipe) {}

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

    public onNumericInputBlur(): void {
        const pitchShiftControl: AbstractControl = this.formGroup.get('pitchShift');

        pitchShiftControl.setValue(this.numericInputPipe.transform(pitchShiftControl.value));
    }

    public setModel(modelName: string): void {
        this.formGroup.get('model').setValue(this.models.find((model: IBtgModel) => model.name === modelName));
    }
}