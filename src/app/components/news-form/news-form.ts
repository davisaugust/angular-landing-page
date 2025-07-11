import { Component, Input, signal } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { News } from '../../services/news';

@Component({
  selector: 'app-news-form',
  standalone:true,
  imports: [
    BtnPrimary,
    ReactiveFormsModule
  ],
  providers:[
    News
  ],
  templateUrl: './news-form.html',
  styleUrl: './news-form.scss'
})
export class NewsForm {

  newsletterForm!:FormGroup;
  loading = signal(false);

  constructor(private service: News){
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  submit(){
    this.loading.set(true)
    if(this.newsletterForm.valid){
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
         next: () =>{
          this.newsletterForm.reset
          this.loading.set(false)
        }
      });
    }
  }

}
