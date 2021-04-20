import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from 'src/app/home/signin/signin.component';
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';


@NgModule ({
    declarations: [ SigninComponent ],
    imports: [ 
        ReactiveFormsModule,
        CommonModule,
        VmessageModule
    ]
})

export class HomeModule {}