import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectUserList } from 'src/app/store/selectors/user.selector';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  constructor(private _store: Store<IAppState>) { }

  users$ = this._store.pipe(select(selectUserList));

  users: any[];

  ngOnInit() {
    this._store.dispatch(new GetUsers());
    this.users$.subscribe((res:any)=>{
      if(res){
        this.users = res;
      }
    })
  }

}
