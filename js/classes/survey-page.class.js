class SurveyPage extends Base {
	// kickas igång när användare klickat sig till http://localhost:3000/survey/1
	// och routern i app.class instansierat mig (jag är survey-page)
	// routerns arrow funtion skickar med id(1) som props,
	// och en metod om callback(inte helt 100 på hur det funkar)
  constructor(props, callback){
	  // props (1), körs i Base-constructor (som vi kan ignorera)
    super(props);
	
	// jag gissar att instansen av Survey skickas med som ett arg,
	// för att kunna bli this(survey-page alltså).survey
	// skapa en 
    new Survey(props, (survey)=>{
      this.survey = survey;
	  console.log('vad är this.survey?', this.survey)
      new QuestionList((questions)=>{
        this.questions = questions;
        callback(this);
      });
    });
  }

  saveResponse(event){
    event.preventDefault();
    console.log('response saved');
    console.log('this.questions', this.questions);
    for(let q of this.questions){
      let r = new Response({
        question: q.id,
        value: q.value,
        survey: q.survey,
        user: 3 // fake user
      });
      r.insert();
    }
  }

}
