class SurveyList extends List {

  constructor(){
    super(Survey);
    this.readAllFromDb();
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
		// this.push, push görs på List, som surveyList extendar
      this.push.apply(this,data);
      callback && callback();
    });
  }

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM surveys
      `
    }
  }

}
