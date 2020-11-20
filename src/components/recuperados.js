import React, { Component } from 'react'
import axios from 'axios'

export default class recuperados extends Component {
    state = {
        cases: []
    }

    async componentDidMount() {
        this.getInfo('https://covidapi-js.herokuapp.com/api/getAllRecuperados')
        console.log(this.state.cases)
    }
    async getInfo(path) {
        const resp = await axios.get(path);
        this.setState({ cases: resp.data });
    }
    render() {
        const a = (this.state.cases.Casos_Recuperados) || 0
        console.log(a);
        return (

            <div className="card text-white bg-success mb-3">
                <div className="card-body">
                    <h2 className="card-title">{Intl.NumberFormat().format(a)}</h2>
                    <p className="card-text">Recuperados</p>
                </div>
            </div>

        )
    }
}