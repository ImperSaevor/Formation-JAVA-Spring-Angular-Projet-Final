import { Extra } from './extra';
import { Film } from './film';

export class Cinema {

  id:number;
	nom:String;
  image:string;
	films:Array<Film>;
  extra:Array<Extra>;

}
