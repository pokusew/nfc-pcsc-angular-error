import { Component, OnInit } from '@angular/core';
import { NFC } from 'nfc-pcsc';

const _nfc = new NFC();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor() {
  }

  ngOnInit() {
    _nfc.on('reader', reader => {

        console.log(reader.name + ' reader attached, waiting for cards ...');

        reader.on('card', card => {
          console.log(card.uid);
        });

        reader.on('error', err => {
          console.error('reader error', err);
        });

        reader.on('end', () => {
          console.log(reader.name + ' reader disconnected.');
        });


      });

      _nfc.on('error', err => {
        console.error(err);
      });
  }



}
