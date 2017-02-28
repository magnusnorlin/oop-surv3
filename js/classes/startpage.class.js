class StartPage extends Base {
	//propertyValues är undefined
  constructor(propertyValues){
    super(propertyValues);
	console.log('Är propertyValues undefined? ', propertyValues);
	
	// alla dessa this är vad html-temp ropar på
    this.title = 'Välkommen till kungen av enkäter';
    this.description = 'Här kan du kryssa i både 1 och 2';
    this.toggleDescription();
	
	// this.surveys är listan med fem olika länkar
	// http://localhost:3000/survey/1
	// http://localhost:3000/survey/2 osv
	//
    this.surveys = new SurveyList();
	
  }

  toggleDescription(){
    this.descriptionVisible = this.descriptionVisible? false : true;
    this.toggleText = this.descriptionVisible? 'Göm' : 'Visa';
  }

}
