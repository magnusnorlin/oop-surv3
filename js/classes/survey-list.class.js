class SurveyList extends List {

  constructor(){
    super(Survey);
    this.readAllFromDb();
  }

  readAllFromDb(callback){
	  // get sqlQueries.readAll körs, dess retur/produkt blir data, en
	  // array av survey-objekt
    this.db.readAll((data)=>{		
	  console.log('vad är this i surv-list-class?', this)
	  console.log('vad är data i surv-list-class?', data)
	  // this.push, push är en list.funktion, surveyList extendar List
	  // (this, data)-this är denna listan, och den har redan 5 platser
	  // vilket jag inte fattar hur den kan ha, då den inte fått innehåll
	  // eller deklarerarts som [5].........
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
