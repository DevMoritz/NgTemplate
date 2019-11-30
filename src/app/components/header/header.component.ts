import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerRoutes: Routes = this.$router.config;
  showHeader: boolean;

  constructor(private $router: Router) {
  }

  ngOnInit() {
  }

  collapseHeader(): void {
    this.showHeader = !this.showHeader;
  }
}
