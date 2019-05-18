import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';
class PeopleListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleDetail:[]
    }
    this.getPeopleDetail = this.getPeopleDetail.bind(this);
  }

  getPeopleDetail() {
    axios.get(`${this.props.url}`)
      .then(res => {
        console.log(res.data);
        let peopleDetailInformation =[res.data] ;
        // this.setState({});
        this.setState({ peopleDetail: peopleDetailInformation});
        
      })
  }

  componentDidMount() {
    this.getPeopleDetail()
  }
  // componentWillUnmount() {
  //   this.setState({});
  // }
  
  render() {
    const columns = [
      {
        Header: () => (
          <div>
            <p className="name-second">height</p>
          </div>
        ),
        accessor:'height',
      },
      
      {
        Header: () => (
          <div>
            <p className="name-second">mass</p>
          </div>
        ),
        accessor: 'mass'
      },
      {
        Header: () => (
          <div>
            <p className="name-second">hair_color</p>
          </div>
        ),
        accessor: 'hair_color'
      },
      {
        Header: () => (
          <div>
            <p className="name-second">skin_color</p>
          </div>
        ),
        accessor: 'skin_color'
      },
      {
        Header: () => (
          <div>
            <p className="name-second">eye_color</p>
          </div>
        ),
        accessor: 'eye_color'
      },
      {
        Header: (
          <div>
            <p className="name-second">birth_year</p>
          </div>
        ),
        accessor: 'birth_year'
      },
      {
        Header: (
          <div>
            <p className="name-second">homeworld</p>
          </div>
        ),
        accessor: 'homeworld',
        width:250
      },
      {
        Header: (
          <div>
            <p className="name-second">gender</p>
          </div>
        ),
        accessor: 'gender'
      },
      {
        Header: (
          <div>
            <p className="name-second">films</p>
          </div>
        ),
        accessor: 'films',
        width:1000
      },
      {
        Header: (
          <div>
            <p className="name-second">species</p>
          </div>
        ),
        accessor: 'species',
        width:250
      },
      {
        Header: (
          <div>
            <p className="name-second">vehicles</p>
          </div>
        ),
        accessor: 'vehicles',
        width:500
      },
      {
        Header: (
          <div>
            <p className="name-second">starships</p>
          </div>
        ),
        accessor: 'starships',
        width:250
      },
      {
        Header: (
          <div>
            <p className="name-second">created</p>
          </div>
        ),
        accessor: 'created',
        width:250
      },
      {
        Header: (
          <div>
            <p className="name-second">edited</p>
          </div>
        ),
        accessor: 'edited',
        width:250
      },  
        
    ]
    return (
      <div>
        <ReactTable
          data={this.state.peopleDetail}
          columns={columns} 
          pageSize={1}
        />
      </div>
    );
  }
}

export default PeopleListDetail;