import React, { Component } from 'react'

export default class info extends Component {
    render() {
        return (
            <div className="container p-4">

       
            <div className="row">
            <h1 style={{padding: "60px"}}></h1>
                <div class="card" style={{width: "15.3rem"}} >
                    <img src="https://i.imgur.com/SJFraUF.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h4 class="card-text" style={{fontFamily : 'Poppins'}}>Jaime Sierra</h4>
                        <p>Ingenierías de Sistemas, Univeridad del Norte</p>
                        </div>
                    </div>
                    <h1 style={{padding: "20px"}}></h1>
                    <div class="card" style={{width: "15rem"}}>
                    <img src="https://cdn.discordapp.com/attachments/692844047068561458/774490136909316106/IMG_1738.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-text" style={{fontFamily : 'Poppins'}}>Victor Mendoza</h4>
                            <p>Ingenierías de Sistemas, Univeridad del Norte</p>
                        </div>
                    </div>
                    <h1 style={{padding: "20px"}}></h1>
                    <div class="card" style={{width: "17rem"}}>
                    <img src="https://i.imgur.com/7oYlVGV.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h4 class="card-text" style={{fontFamily : 'Poppins'}}>Daniel Carrillo</h4>
                        <p>Ingenierías de Sistemas, Univeridad del Norte</p>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}