import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { NewsForm } from '../news-form/news-form';
import { IlusExample } from '../ilus-example/ilus-example';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, BtnPrimary, IlusExample, NewsForm,Footer, NgOptimizedImage, Footer],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
