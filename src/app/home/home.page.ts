import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { IAppState } from '../store/state/app.state';
import { GetConfig } from '../store/actions/config.actions';
import { selectConfig } from '../store/selectors/config.selector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }

}
