import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { users } from '../users';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  user;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = (routeParams.get('userId'));

    this.user = users.find(user => user.id.value === userIdFromRoute);
  }

}
