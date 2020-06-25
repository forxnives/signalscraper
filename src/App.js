import React from 'react';
import './App.css';
import 'tachyons';
import Nav from './Components/Nav/Nav'
import Active from './Components/Active/Active'
import Table from './Components/Table/Table'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: [],
      symbol: [],
      status: [],
      direction: [],
      link: []
    };

    //keeping an array of objects for active forecasts outside of state, to avoid unnecesary calls to backend
    this.activeObject = []


  };
  

  componentDidMount() {                                                        //component has mounted after initial state

  //Setting up timer and calling iterate every period

    this.timerID = setInterval(() => this.iterate(), 6000);
  };



  componentDidUpdate(prevProps, prevState) {                                     //component is updating after mount

    //checking if state has changed
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {    

      //getting list of links for active forecasts
      let activeLinks = this.getActiveTradeUrls()

      // let activeLinks = ['https://fxssi.com/eurjpy-daily-forecast-for-18-jun-2020', 'https://fxssi.com/audusd-daily-forecast-for-17-jun-2020']     //test 
      
      //only proceed if there are active links
      if (activeLinks.length !== 0){
        if (activeLinks[0] !== undefined){

          //fetching data for each active forecast
          activeLinks.map(link => {
  
            this.activeFetch(link.slice(18))    //slicing to avoid https bla bla and pluggin into helper function




            this.test();
  
          })


        }


      }
    }

  }


  componentWillUnmount() {                       //clearing timer on unmount
    clearInterval(this.timerID);
  }

    
  
  iterate() {                            //the iterate thats run every period

    this.getBigJson();

  };


  //Fetching initial big Json and updating state


  getBigJson = async () => {
    const response = await fetch('/all');
    const data = await response.json();


    const dateArray = this.dateList(data);
    const symbolArray = this.symbolList(data);
    const statusArray = this.statusList(data);
    const directionArray = this.directionList(data);
    const linkArray = this.linkList(data);


    this.setState({date: dateArray });
    this.setState({symbol: symbolArray });
    this.setState({status: statusArray });
    this.setState({direction: directionArray });
    this.setState({link: linkArray })
  };

  
  //helper function that returns a list of links for active forecasts..

  getActiveTradeUrls () {
    const activeLinkArray = [];
    

    (this.state.status).map((entry, i) =>{
      if (entry === 'Market') {
        // const url = (this.state.link[i])
        activeLinkArray.push(this.state.link[i])
        // this.activeObject.date.push(this.state.date[i])
        // this.activeObject.direction.push(this.state.direction[i]) 
        // activeLinkArray.push(url);

      }
    })

    return activeLinkArray;

  }




  //helper function that fetches information for active forecast and return object

  activeFetch = async (url_url) => {

      const response = await fetch(`/active/${url_url}`);
      
      const data = await response.json();


      
      this.activeObject.push(data)
      // this.commentsHTML.push(data.comments)
      // console.log(data);

  }


  stringToHTML (str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};


  test () {
    console.log('function passed!')
  }

  //helper functions for 'getBigJson'.. breaking down big json into lists and allocating them to state


  dateList (data) {
    let i;
    let dates = []
    for (i in data){
      dates.push(data[i].date)
    }
    return dates;

  }

  symbolList (data) {
    let i;
    let symbols = []
    for (i in data){
      symbols.push(data[i].symbol)
    }

    return symbols;
  }


  statusList (data) {
    let i;
    let statuses = []
    for (i in data){
      statuses.push(data[i].status)
    }

    return statuses;

  }

  directionList (data) {
    let i;
    let directions = []
    for (i in data){
      directions.push(data[i].direction)
    }
    return directions;

  }

  linkList (data) {
    let i;
    let links = []
    for (i in data){
      links.push(data[i].symbol.slice(9, -12))
    }
    return links;
  }


  //render function

  render() {
    return (
      <div className="App">
        <Nav />
        <Active object={this.activeObject} date={ this.state.date } symbol={ this.state.symbol } status={ this.state.status } direction={ this.state.direction } link={ this.state.link } />
        <Table date={ this.state.date } symbol={ this.state.symbol } status={ this.state.status } direction={ this.state.direction } link={ this.state.link }  />
        <h1>{this.state.date}</h1>
      </div>
    );
  };


};

export default App;


