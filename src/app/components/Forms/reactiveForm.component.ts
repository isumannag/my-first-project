import { Component, OnInit } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, 
        FormArray, FormControl, FormGroup, 
        ValidationErrors, Validators } from "@angular/forms";
import { Observable, catchError, delay, map, of } from "rxjs";

@Component({
    selector: 'app-myapp',
    styles: [`input.ng-invalid.ng-touched {border:1px solid red;}`],
    template: `
        <h2> Reactive Forms Example </h2>
        <a class="link-primary" (click)="setMyForm()">Default Form Value Set</a><br>
        <a class="link-primary" (click)="resetMyForm()">Reset Form</a><br><br>
        <form [formGroup]="myLoginForm" (ngSubmit)="login()">
            <div formGroupName="userData">
                <label>User Name </label>
                <input type="text" name="username" formControlName="usernameField">
                <p *ngIf="!myLoginForm.get('userData.usernameField')?.valid">Please enter UserName!</p> <br>

                <label for="secret">Gender</label>
                <div class='radio' *ngFor="let gender of genders" >
                    <input type="radio"
                        name="usergender"
                        [value]="gender"
                        formControlName="usergender"
                    >{{gender}}
                </div><br>
            </div>

            <div formArrayName="hobbies">
                Your Hobby: <button class="btn btn-secondary" (click)="onAddHobby()">Add Hobby</button>

                <div *ngFor="let hobbyControl of myhobbies.controls; let i=index">
                    <input type="text" [formControlName]="i">
                </div>
            </div><br>

            <label>Email</label>
                <input type="text" name="email" formControlName="myEmail"><br>

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
export class ReactiveFromComponent implements OnInit{
    // constructor(private builder: FormBuilder){}

    genders = ['male', 'female'];
    myLoginForm: FormGroup;
    formGender = new FormControl ('female', Validators.required);
    password = new FormControl ('', [Validators.required, this.myCustomCondition]);
    myhobbies= new FormArray([]);

    ngOnInit() {
        this.myLoginForm = new FormGroup({
            userData: new FormGroup({   // Nested FormGroup Example
                usernameField: new FormControl('as', Validators.required),
                usergender: this.formGender
            }),

            // myEmail: new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmail()]),
            myEmail: new FormControl(null, { //Async Custom Validator
                validators: [Validators.required, Validators.email], 
                asyncValidators: [this.forbiddenEmail()]
            }),
            hobbies: this.myhobbies,   // As there is n number of hobbies can be and need to add dynemically
            password: this.password
        });

        // Below two hooks we ave to get the status of overall Forms
        this.myLoginForm.valueChanges.subscribe(v => console.log(v));
        this.myLoginForm.statusChanges.subscribe(v => console.log(v));
        
    }

    login(): any{ 
        alert('Username: '+this.myLoginForm.value.userData.usernameField+
        ', Gender: '+this.myLoginForm.value.userData.usergender+
        ', 1st Hobby: '+this.myLoginForm.value.hobbies[0]+
        ', Email: '+this.myLoginForm.value.myEmail+
        ', Password: '+this.myLoginForm.value.password
        );
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.myLoginForm.get('hobbies')).push(control);
    }

    myCustomCondition(inputVal: FormControl): {[s: string]: boolean}|null {
        return inputVal.value.indexOf('!')>=0 ? null : {needExclamation: true};
    }

    forbiddenEmail(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return this.forbiddenEmailAPI(control.value).pipe(
                map((exist) => (exist ? {emailExist: true} : null)),
                catchError((err) => of(null))
            );
        }
    }

    // Our Dummy API call for testing Async Reactvive Form Validation
    forbiddenEmailAPI(emailVal: string): Observable<boolean>{
        return of(emailVal).pipe(
            delay(500),
            map((emailVal) => {
                const forbiddenEmailList = ['test@test.com'];
                return forbiddenEmailList.includes(emailVal);
            })
        );
    }

    setMyForm(){
        this.myLoginForm.setValue({
            userData: {usernameField: 'suman', usergender: 'male'},
            myEmail: 'mydummy@gmail.com',
            hobbies: [],
            password: 'ss!ok'
        });

        /* To set partial value of overall form value
        this.myLoginForm.patchValue({
            userData: {usernameField: 'chayan', usergender: 'male'}
        }); */
    }

    resetMyForm(){ this.myLoginForm.reset(); }
}