import { Injectable } from '@nestjs/common';
import { LocalWebPageReader } from './web_page_reader/LocalWebPageReader';
import { DataComparer } from './web_page_reader/DataComparer';
import { RemoteWebPageReader } from './web_page_reader/RemoteWebPageReader';

@Injectable()
export class AppService {
  private daysSinceAGHFoundation: number;

  constructor(){
    this.calculateDaysSinceAGHFoundation();
  }

  getHello(): string {
    return 'Hello World!';
  }

  calculateDaysSinceAGHFoundation(): void {
    const aghFoundationDate: Date = new Date('1919-04-08');
    const today: Date = new Date();
    const millisecondsPerDay: number = 86400000;
    this.daysSinceAGHFoundation = Math.floor((today.getTime() - aghFoundationDate.getTime()) / millisecondsPerDay);
  }

  getDaysSinceAGHFoundation(): string {
    return `${this.daysSinceAGHFoundation} days have passed since the founding of AGH.`;
  }

  compareBooks(): Promise<string> {
    const comparer = new DataComparer(
      new RemoteWebPageReader('https://wolnelektury.pl/media/book/pdf/pan-tadeusz.pdf'),
      new LocalWebPageReader('project\books\pan-tadeusz.pdf')
    );

    const spaces = comparer.compareNumberOfSpaces();
    const dots = comparer.compareNumberOfDots();
    const commas = comparer.compareNumberOfCommas();
  
    return Promise.all([spaces, dots, commas]).then(([spacesResult, dotsResult, commasResult]) => {
      return `${spacesResult} | ${dotsResult} | ${commasResult}`;
    });
  }
  
}
