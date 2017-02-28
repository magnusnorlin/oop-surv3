class Response extends Base {

  // db table: https://codeshare.io/GLwLkk
  /*
    CREATE TABLE `responses` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `question` int(11) unsigned NOT NULL,
    `value` varchar(255) DEFAULT '',
    `survey` int(11) unsigned NOT NULL,
    `user` int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;

   */

  static defaultPropertyValues(){
    return {
      id: 0,
      question: 0,
      value: '',
      survey: 0,
      user: 0
    }
  }

  constructor(props){
    super(props);

  }

  insert(callback){
    this.db.insert({
      question: this.question,
      value: this.value,
      survey: this.survey,
      user: 3
    }, callback);
  }


  static get sqlQueries(){
    return {
      insert: `
        INSERT responses SET ?
      `
    }
  }

}
