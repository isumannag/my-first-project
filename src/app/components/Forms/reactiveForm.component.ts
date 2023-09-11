import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-myapp',
    styles: [`input.ng-invalid.ng-touched {border:1px solid red;}`],
    template: `
        <h2> Reactive Forms Example </h2>
        <form [formGroup]="myLoginForm" (ngSubmit)="login()">
            <label>User Name </label>
            <input type="text" name="username" formControlName="usernameField">
            <p *ngIf="!myLoginForm.get('usernameField')?.valid">Please enter UserName!</p>

            <label> Passowrd </label>
            <input type="password" name="passowrd" [formControl]="password">
            <button type="submit" [disabled]="!myLoginForm.valid" class="btn btn-primary"> Sign Up</button>
            <div [hidden]="password.untouched">
                <div [hidden]="!password.hasError('required')">Passowrd Required</div>
                <div [hidden]="!password.hasError('needExclamation')">Your Password must have an exclamation mark !</div>
            </div>
        </form>
    ` 
})
export class ReactiveFromComponent{
    constructor(private builder: FormBuilder){}
    password = new FormControl ('', [Validators.required, myCustomCondition]);
    
    myLoginForm: FormGroup = this.builder.group({
        usernameField: new FormControl('as', Validators.required),
        password: this.password
    });

    login(): any{ 
        alert('Successful! Username: '+this.myLoginForm.value.usernameField+
              'Password: '+this.myLoginForm.value.password);
    }
}

function myCustomCondition(inputVal: FormControl){
    return inputVal.value.indexOf('!')>=0 ? null : {needExclamation: true}
}