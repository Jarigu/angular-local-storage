import { Component, Input, OnInit } from '@angular/core';
import { LSService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'web-view';
  @Input() lsValue: string = '';

  constructor(private lsService: LSService) {}

  ngOnInit() : void {
    this.lsService.getValue().subscribe(value => {this.lsValue = value});
  }

  getValue() {
    this.lsService.getValue().subscribe(value => {this.lsValue = value});
  }

  createTodo() {
    this.lsService.createValue();
  }

  cleanLocalStorage() {
    this.lsService.clear();
  }
}
