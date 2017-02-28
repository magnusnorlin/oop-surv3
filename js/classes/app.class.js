class App {

  constructor(){
	// När startPage instansieras körs dess constructor
	// och automatiskt dess html-template (verkar det som, bör vara så, tror jag)
	// både class och template bakas in i this.startPage,
	// eller så anropas de båda när this startpage används senare i denna app.class (()=>{ this.showPage(this.startPage); },)
    this.startPage = new StartPage();
	console.log('vad är this.startPage nu?', this.startPage);
	// verkar som att de bakas in redan nu
	
	//Används inte
    //this.surveys = new SurveyList();
	console.log('app.class-constructor har körts');
	

    // Add a page-content area in the DOM	
    $('body').append('<div class="page-content"/>');

    // Some routes
	// router bestämmer vad som händer på olika URL
	// på /		,alltså inget mer än mypage.com, där ska startpage visas
    var router = new Router({
		// när användare ropar på mypage.com/ körs arrow-funktionen
		// som i sin tur skickar vidare this.startPage till showPage() längst ner i denna class
      '/': ()=>{ this.showPage(this.startPage); },
      //'/survey/:id': (props)=>{ new Survey(props, this.showPage); }
	  
	  // props är här id(1) från den länk vi klickat på, t.ex http://localhost:3000/survey/1
	  // skickas med som argument till construktor i SurveyPage
	  // showPage() skickas med som callback-funktion
      '/survey/:id': (props)=>{ new SurveyPage(props, this.showPage); }

      // examples:
      // 'propName': 'propVal',
      // '/studentTest/:id': function(id){ this.showPage(this.studentTest); },
      // '/tests/:id': this.myNamedFunctionToLoadTests
    });

  }

  showPage(page){
    $('.page-content').empty();
    page.display('.page-content');
  }

}
