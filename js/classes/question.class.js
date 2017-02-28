class Question extends Base {

  static defaultPropertyValues(){
    return {
      id: 0,
      text: '',
      survey: 0,
      value: ''
    }
  }

  constructor(propertyValues, callback){
    super(propertyValues);
    //this.load(propertyValues.id, callback);
  }

  load(id, callback){
    this.db.load([id], (data)=>{
      var row = data[0];
      for(var name in row){
        this[name] = row[name];
      }
      callback && callback(this);
    });
  }

  static get sqlQueries(){
    return {
      load: `
        SELECT * FROM questions WHERE id = ?
      `
    }
  }

}
