import { DataReader } from "./DataReader";

export class DataComparer{
    private firstDataToCompare: DataReader;
    private secondDataToCompare: DataReader;

    constructor(firstDataToCompare: DataReader, secondDataToCompare: DataReader){
        this.firstDataToCompare = firstDataToCompare;
        this.secondDataToCompare = secondDataToCompare;
    }

    async compareNumberOfSpaces(): Promise<string> {
        const firstNumberOfSpaces = await this.firstDataToCompare.numberOfSpaces();
        const secondNumberOfSpaces = await this.secondDataToCompare.numberOfSpaces();

        if(firstNumberOfSpaces > secondNumberOfSpaces){
            return `${firstNumberOfSpaces} > ${secondNumberOfSpaces}`;
        } 
        else if(firstNumberOfSpaces < secondNumberOfSpaces){
            return `${firstNumberOfSpaces} < ${secondNumberOfSpaces}`;
        }        
        else if(firstNumberOfSpaces == secondNumberOfSpaces){
            return `${firstNumberOfSpaces} = ${secondNumberOfSpaces}`;
        }
        else return `Some problem with spaces. First: ${firstNumberOfSpaces} Second: ${secondNumberOfSpaces}`;
    }

    async compareNumberOfDots(): Promise<string> {
        const firstNumberOfDots = await this.firstDataToCompare.numberOfDots();
        const secondNumberOfDots = await this.secondDataToCompare.numberOfDots();

        if(firstNumberOfDots > secondNumberOfDots){
            return `${firstNumberOfDots} > ${secondNumberOfDots}`;
        } 
        else if(firstNumberOfDots < secondNumberOfDots){
            return `${firstNumberOfDots} < ${secondNumberOfDots}`;
        }        
        else if(firstNumberOfDots == secondNumberOfDots){
            return `${firstNumberOfDots} = ${secondNumberOfDots}`;
        }
        else return `Some problem with dots. First: ${firstNumberOfDots} Second: ${secondNumberOfDots}`;
    }

    async compareNumberOfCommas(): Promise<string> {
        const firstNumberOfCommas = await this.firstDataToCompare.numberOfCommas();
        const secondNumberOfCommas = await this.secondDataToCompare.numberOfCommas();

        if(firstNumberOfCommas > secondNumberOfCommas){
            return `${firstNumberOfCommas} > ${secondNumberOfCommas}`;
        } 
        else if(firstNumberOfCommas < secondNumberOfCommas){
            return `${firstNumberOfCommas} < ${secondNumberOfCommas}`;
        }        
        else if(firstNumberOfCommas == secondNumberOfCommas){
            return `${firstNumberOfCommas} = ${secondNumberOfCommas}`;
        }
        else return `Some problem with commas. First: ${firstNumberOfCommas} Second: ${secondNumberOfCommas}`;
    }

}