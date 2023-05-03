import { Injectable } from '@nestjs/common';

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
  
}
