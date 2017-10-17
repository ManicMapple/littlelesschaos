export class Lifelog {
  id: string;
  title:String;
  date:String;
  content:String;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }
}
