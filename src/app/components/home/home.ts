import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { NewsForm } from '../news-form/news-form';
import { IlusExample } from '../ilus-example/ilus-example';

@Component({
  selector: 'app-home',
  imports: [Header,BtnPrimary,IlusExample , NewsForm ,NgOptimizedImage],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
