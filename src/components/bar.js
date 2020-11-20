import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from 'axios';


//let deps = [];
//let valu = [];
//cases.forEach(caso => {
//deps.push(nomDep[caso.Departamento])
//valu.push(parseInt(caso.Casos))
//});




export default class BarExample extends Component {

  state = {
    cases: []
  }
  extractdata() {
    var nomDep = {
      '05': "Antioquia",
      '08': "Atlantico",
      "08001": "Barranquilla",
      '11': "Bogotá",
      '13': "Bolivar",
      '13001': "Cartagena",
      '15': "Boyacá",
      '17': "Caldas",
      '18': "Caquetá",
      '19': "Cauca",
      '20': "Cesar",
      '23': "Cordoba",
      '25': "Cundinamarca",
      '27': "Chocó",
      '41': "Huila",
      '44': "Guajira",
      '47': "Magdalena",
      '47001': "Sta. Marta D.E",
      '50': "Meta",
      '52': "Nariño",
      '54': "Norte de Santander",
      '63': "Quindio",
      '66': "Risaralda",
      '68': "Santander",
      '70': "Sucre",
      '73': "Tolima",
      '76': "Valle",
      '81': "Arauca",
      '85': "Casanare",
      '86': "Putumayo",
      '88': "San Andrés",
      '91': "Amazonas",
      '94': "Guainia",
      '95': "Guaviare",
      '97': "Vaupes",
      '99': "Vichada",
    };
    let deps = [];
    let valu = [];
    this.state.cases.forEach(caso => {
      deps.push(nomDep[caso.Departamento])
      valu.push(parseInt(caso.Casos))
    });
    return deps, valu;
  }

  async componentDidMount() {
    this.getInfo('https://covidapi-js.herokuapp.com/api/getAllCases')
    console.log(this.state.cases)
  }


  async getInfo(path) {
    const resp = await axios.get(path);
    this.setState({ cases: resp.data });
  }

  graficar() {
    
    const data = {
      labels: this.extractdata().deps,
      datasets: [
        {
          label: 'Top 10 Departamentos con más casos',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.extractdata().valu
        }
      ]
    }
    return data
  }

  render() {
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={this.graficar().data}
          width={100}
          height={120}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
};