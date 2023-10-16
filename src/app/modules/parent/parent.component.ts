import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  message: string = 'PARENT DATA';

  print(value: string) {
    console.log(value);
  }

  constructor(public userService: ServiceService) {
    console.log('Parent constructor');
  }

  ngOnInit() {
    console.log('Parent OnInit');
    console.log(this.userService.users);
  }

  ngAfterViewInit(): void {
    console.log('Parent ngAfterViewInit');
  }


}
