import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navigation extends Component {
    render() {
        return (
            <div className="container p-4">
                <div className="row" style={{ justifyContent: "center" }}>

                    <button type="button" class="btn btn-outline-primary" style={{ fontSize: "20px" }} >
                        <Link className="nav-link active" to="/cases">Ver Casos</Link>


                    </button>
                    <h1 style={{ padding: "5px" }}></h1>
                    <button type="button" class="btn btn-outline-primary" style={{ fontSize: "20px" }}>
                        <Link className="nav-link active" to="/aboutus">
                            About Us
                            </Link>
                    </button>
                    <h1 style={{ padding: "5px" }}></h1>
                    <a class="btn btn-outline-primary" href="https://g.co/kgs/ApoViS" role="button" style={{ fontSize: "20px" }}>Noticias</a>
                    <h1 style={{ padding: "5px" }}></h1>
                    <a class="btn btn-outline-primary" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks" role="button" style={{ fontSize: "20px" }}>Recomendaciones</a>
                    

                </div>
                <h1 style={{padding: "10px"}}></h1>
                <div class="row row-cols-1 row-cols-md-2 ">
                    <div class="col mb-4 ">
                        <div class="card bg-light mb-3" >
                            <img src="https://i.imgur.com/XAAb3on.png?1" class="card-img-top rounded" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">¿Qué es el COVID-19?</h2>
                                <p class="card-text">Los coronavirus (CoV) son virus que surgen periódicamente en diferentes áreas del mundo y que causan Infección Respiratoria Aguda (IRA), es decir gripa, que pueden llegar a ser leve, moderada o grave. El nuevo Coronavirus (COVID-19) ha sido catalogado por la Organización Mundial de la Salud como una emergencia en salud pública de importancia internacional (ESPII). Se han identificado casos en todos los continentes y, el 6 de marzo se confirmó el primer caso en Colombia.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card bg-light mb-3">
                            <img src="https://i.imgur.com/4HRjcKl.png?1" class="card-img-top rounded" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">¿Cuáles son los síntomas?</h2>
                                <p class="card-text">En general, los síntomas principales de las infecciones por coronavirus pueden ser los siguientes. Dependerá del tipo de coronavirus y de la gravedad de la infección: Fiebre, Tos, Dificultad para respirar, Fatiga, Malestar general, Secreción y goteo nasal.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card bg-light mb-3">
                            <img src="https://i.imgur.com/1SATaRM.png" class="card-img-top rounded" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">¿Cómo prevenirlo?</h2>
                                <p class="card-text">La medida más efectiva para prevenir el COVID-19 es lavarse las manos correctamente, con agua y jabón. Hacerlo frecuentemente reduce hasta en 50% el riesgo de contraer coronavirus. El uso de tapabocas en lugares públicos y cerca de personas con síntomas de gripe</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card bg-light mb-3">
                            <img src="https://i.imgur.com/SaClYMl.png?1" class="card-img-top rounded" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">¿Cómo se transmite?</h2>
                                <p class="card-text">La infección se produce cuando una persona enferma tose o estornuda y expulsa partículas del virus que entran en contacto con otras personas. Este mecanismo es similar entre todas las Infecciones Respiratorias Agudas (IRA).</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        )
    }
}
