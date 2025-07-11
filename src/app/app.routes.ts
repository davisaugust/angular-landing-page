import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import path from 'path';
import { Header } from './components/header/header';

export const routes: Routes = [
    {
        path: "",
        component: Home
    }
];
