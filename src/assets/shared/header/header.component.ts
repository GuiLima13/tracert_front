import { Component, OnInit } from '@angular/core';
import { UserFilterService } from 'src/app/service/filter/user/userFilter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filter = this.userFilter
  constructor(private userFilter : UserFilterService) { }

  ngOnInit(): void {
    this.filter.user.name = localStorage.getItem('name') || 'Login';
  }

}
