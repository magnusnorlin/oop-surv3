class StartPage extends Base {
	//propertyValues är undefined
  constructor(propertyValues){
    super(propertyValues);
	
	// alla dessa this är vad html-temp ropar på
    this.title = 'Välkommen till kungen av enkäter';
    this.description = 'Här kan du kryssa i både 1 och 2';
    this.toggleDescription();
    this.surveys = new SurveyList();
	console.log('Är propertyValues undefined? ', propertyValues);
  }

  toggleDescription(){
    this.descriptionVisible = this.descriptionVisible? false : true;
    this.toggleText = this.descriptionVisible? 'Göm' : 'Visa';
  }

}
