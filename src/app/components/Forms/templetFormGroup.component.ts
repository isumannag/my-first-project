import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    selector: 'app-myapp',
    template: `
        <h1>Templet Driven Form Example</h1>
        <form #ff='ngForm' (ngSubmit)="registerMyUser()">
            <div ngModelGroup="allDataForm" #gg="ngModelGroup">
                <label>Email</label>
                <input type="text" name="nameVal" minlength="4" maxlength="10" ngModel required email><br>

                <label>Password</label>
                <input type="password" name="password" ngModel required><br>
                <span class='help-block' *ngIf="!gg.valid && gg.touched">User Data Group is invalid!</span><br>
            </div>

            <label for="secret">Gender</label>
            <div class='radio' *ngFor="let gender of genders">
                <input type="radio" name="gender" ngModel [value]="gender" required> {{gender}}
            </div><br><br>

            <button type="submit" class="btn btn-primary" >Sign Up</button>
            <button type="submit" class="btn btn-secondary" (click)="resetMyForm()">Reset Form</button>
        </form><br>
        <button type="submit" class="btn btn-secondary" (click)="setFormValues()">Set Form Data using setValue property</button>
    `,
    styles: [`input.ng-invalid.ng-touched {border:1px solid red;}`]
})
export class TempletFromGroupComponent{
    @ViewChild('ff') allformData: NgForm; // Using view change also we can retrive form data
    genders = ['male', 'female'];
    registerMyUser(){
        alert(
        "Success!!  Username: "+this.allformData.value.allDataForm.nameVal
        +' Password: '+this.allformData.value.allDataForm.password
        +' Secret Question: '+this.allformData.value.gender
        );
    }

    // Form input vale set by two different method setValue & patchValue
    setFormValues(){
        const defaultVal = {
            allDataForm: {
                nameVal: 'sn@g.c',
                password: 'sd'
            },
            gender: 'female'
        };

        // this.allformData.setValue(defaultVal);
        this.allformData.form.patchValue({gender:'female'});
    }

    // Reset form using reset method
    resetMyForm(){
        this.allformData.reset();
    }
}