import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    selector: 'app-myapp',
    template: `
        <h1>Templet Driven Form Example</h1>
        <form #signupForm="ngForm" (ngSubmit)="registerMyUser(signupForm)">
            <label>Email</label>
            <input type="text" name="nameVal" [ngModel]='name' required minlength="4" maxlength="10">

            <label>Password</label>
            <input type="password" name="password" ngModel>
            <button type="submit">Sign Up</button>
        </form>
    ` 
})
export class TempletFromComponent{
    name = 'TestData';
    registerMyUser(myNgForm: NgForm){
        alert("Success!!  Username: "+myNgForm.value.nameVal+' Password: '+myNgForm.value.password);
    }
}