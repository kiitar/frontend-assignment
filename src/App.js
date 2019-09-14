import React from 'react';
import Card from './components/Card'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data:{
        faculty : 'คณะวิศวกรรมศาสตร์',
        major: 'สาขาวิศวกรรมทั่วไป',
        university: 'จุฬาลงกรณ์มหาวิทยาลัย',
        round : [ {id : 1 , active : 1},
                  {id : 2 , active : 1},
                  {id : 3 , active : 0},
                  {id : 4 , active : 1},
                  {id : 5 , active : 0}, 
                ],
        current_round : {
          id : 4,
          name : 'Admission'
        },
        your_point : 23453,
        min_point : 20845,
        avg_point : 21345,
        max_point : 23415,
        interesting_people : 10
      }
    }
  }

  render() {
    const { data } = this.state
    
    return (
      <Card data={data}/>
    )
  }
}

export default App;
