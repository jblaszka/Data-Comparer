import { Injectable } from '@nestjs/common';
import { LocalWebPageReader } from './web_page_reader/LocalWebPageReader';
import { DataComparer } from './web_page_reader/DataComparer';
import { RemoteWebPageReader } from './web_page_reader/RemoteWebPageReader';

@Injectable()
export class AppService {
  private daysSinceAGHFoundation: number;

  compareBooks(): Promise<string> {
    const comparer = new DataComparer(
      new RemoteWebPageReader('https://wolnelektury.pl/media/book/pdf/pan-tadeusz.pdf'),
      new LocalWebPageReader('books/pan-tadeusz.pdf')
    );

    const spaces = comparer.compareNumberOfSpaces();
    const dots = comparer.compareNumberOfDots();
    const commas = comparer.compareNumberOfCommas();
  
    return Promise.all([spaces, dots, commas]).then(([spacesResult, dotsResult, commasResult]) => {
      return `${spacesResult} | ${dotsResult} | ${commasResult}`;
    });
  }
}
