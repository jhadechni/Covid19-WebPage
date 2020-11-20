import React, { Component } from 'react'
import axios from 'axios'
import Recuperados from './recuperados'
import Muertos from './muertos'
import Grafica from './bar'


export default class info extends Component {

    state = {
        cases: []
    }
  

    async componentDidMount() {
        this.getInfo('https://covidapi-js.herokuapp.com/api/getAllCases')
        console.log(this.state.cases)
    }
    async getInfo(path){
        const resp = await axios.get(path);
        this.setState({ cases: resp.data });
    }
   
    render() {
        const a = (this.state.cases.Number_of_cases) || 0 
        console.log(a);
        //const b = (this.state.muertos.Muertos) || 0
        //const c = (this.state.recuperados.Casos_Recuperados) || 0
        return (
            <div className="container p-4">
                
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title" >En colombia hay:</h5>
                    <h1 className="" style ={{fontSize : "80px"}}>{Intl.NumberFormat().format(a)}</h1>

                    <p>Casos confirmados de COVID-19, te invitamos a respetar las medidas de bioseguridad.</p>
                    <div className="container p-5">
                        <Recuperados/>
                        <Muertos/>
                        
                    </div>
                    
                </div>
                
            </div>
            <Grafica/>
            </div>
            
        )
    }
}
