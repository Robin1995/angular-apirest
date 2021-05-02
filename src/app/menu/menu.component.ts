import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const a1 = [
      { id: 'abdc4051', date: '2017-01-24' },
      { id: 'abdc4052', date: '2017-01-22' }
    ];
    const a2 = [
      { id: 'abdc4051', name: 'ab' },
      { id: 'abdc4052', name: 'abc' }
    ];
    const unidos = a1.map((item, i) => Object.assign({}, item, a2[i]));
    console.log(unidos);
  }

}
