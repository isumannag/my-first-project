import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    selector: 'app-myapp',
    template: `
        <h1>Templet Driven Form Example</h1>
        <form #ff="ngForm" (ngSubmit)="registerMyUser(ff)">
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

            <button type="submit" class="btn btn-primary" [disabled]="!ff.valid">Sign Up</button>
        </form>
    `,
    styles: [`input.ng-invalid.ng-touched {border:1px solid red;}`]
})
export class TempletFromGroupComponent{
    genders = ['male', 'female'];
    registerMyUser(myNgForm: NgForm){
        alert(
        "Success!!  Username: "+myNgForm.value.allDataForm.nameVal
        +' Password: '+myNgForm.value.allDataForm.password
        +' Secret Question: '+myNgForm.value.gender
        );
    }
}