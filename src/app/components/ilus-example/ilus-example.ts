import { Component, input, Input } from '@angular/core';

type imgVariants = "project-guide" | "team";

@Component({
  selector: 'app-ilus-example',
  imports: [],
  templateUrl: './ilus-example.html',
  styleUrl: './ilus-example.scss'
})
export class IlusExample {
  @Input("tittle-text") tittleText:string = "";
  @Input() variant: imgVariants = "project-guide";

  
  get changeImg(){
    return `${this.variant}.png`;
    
  }  
}
