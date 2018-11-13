import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}

@Component({
  selector: 'app-day2day',
  templateUrl: './day2day.component.html',
  styleUrls: ['./day2day.component.scss']
})
export class Day2dayComponent implements OnInit {

      myControl = new FormControl();
      options: User[] = [
        {name: 'Mary'},
        {name: 'Shelley'},
        {name: 'Igor'},
        {name: '1Igor'},
        {name: '2Igor'},
        {name: '3Igor'},
        {name: '4Igor'},
        {name: '5Igor'},
        {name: '6Igor'},
        {name: '7Igor'},
      ];
      filteredOptions: Observable<User[]>;

      ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.options.slice())
          );
      }

      displayFn(user?: User): string | undefined {
        return user ? user.name : undefined;
      }

      private _filter(name: string): User[] {
        const filterValue = name.toLowerCase();
          console.log(filterValue);
        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
      }
  
 
}