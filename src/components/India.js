import React from 'react'
import StateData from './StateData'
import axios from 'axios'
import {useState, useEffect} from 'react'
let India= () => {
    let [india, setIndia] =useState({data:{},error:null})
    useEffect(()=>{
        axios.get("https://corona.lmao.ninja/v2/countries/india")
        .then((response)=>{
            setIndia({...india, data:response.data})
        })
        .catch((err)=>{
            setIndia({...india, error:err})
        })
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col md-12">
                    <img src="https://www.countryflags.io/in/flat/64.png" alt="not found"/>
                    <h3>INDIA</h3>
                    </div>
                    <div className="col md-12">
                        <div className="row">
                            <div className="col md-3">
                                    <div className="badge badge-primary" style={{ width: '18rem' }}>
                                        <div className="card-header">
                                            Total Cases
                                        <div className="card-body">
                                            {india.data.cases}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col md-3">
                                    <div className="badge badge-info" style={{ width: '18rem' }}>
                                        <div className="card-header">Active Cases</div>
                                        <div className="card-body">{india.data.active}</div>
                                </div>
                            </div>
                            <div className="col md-3">
                                    <div className="badge badge-success" style={{ width: '18rem' }}>
                                        <div className="card-header">Recovered</div>
                                        <div className="card-body">{india.data.recovered}</div>
                                </div>
                            </div>
                            <div className="col md-3">
                                    <div className="badge badge-danger" style={{ width: '18rem' }}>
                                        <div className="card-header">Death Cases</div>
                                        <div className="card-body">{india.data.deaths}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StateData />
        </div>
    )
}

export default India
