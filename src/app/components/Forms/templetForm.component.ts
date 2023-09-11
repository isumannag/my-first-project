import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    selector: 'app-myapp',
    template: `
        <h2>Templet Driven Form Example</h2>
        <form #ff="ngForm" (ngSubmit)="registerMyUser(ff)">
            <div>
                <label>Email</label>
                <input type="text" name="nameVal" minlength="4" maxlength="10" ngModel required email><br>

                <label>Password</label>
                <input type="password" name="password" ngModel required #pp=ngModel><br>
                <span class='help-block' *ngIf="!pp.valid && pp.touched">Please enter a valid password!</span><br>

                <label for="secret">Select Question</label>
                <select [ngModel]="defaultVal" name="secret">
                    <option value="tcs">Tata Consultancy Services</option>
                    <option value="citi">Citi Bank</option>
                </select><br><br>

                <button type="submit" class="btn btn-primary" [disabled]="!ff.valid">Sign Up</button>
            </div>
        </form>
    `,
    styles: [`input.ng-invalid.ng-touched {border:1px solid red;}`]
})
export class TempletFromComponent{
    defaultVal = 'citi';
    registerMyUser(myNgForm: NgForm){
        alert("Success!!  Username: "+myNgForm.value.nameVal+' Password: '+myNgForm.value.password+' Secret Question: '+myNgForm.value.secret);
        console.log(myNgForm.valid);
    }
}