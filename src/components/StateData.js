import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

let StateData = () => {
    let [state, setState] = useState({ stateData: {}, error: null })
    useEffect(() => {
        axios.get("https://api.covid19india.org/state_district_wise.json")
            .then((response) => { setState({ ...state, stateData: response.data }) })
            .catch((err) => { setState({ ...state, error: err }) })
    }, [state])
    let keys = Object.keys(state.stateData)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">

                        {keys.map((itm) => {
                            let districts = state.stateData[itm].districtData;


                            let total_active = 0;
                            let total_confirmed = 0;
                            let total_deaths = 0;
                            let total_recover = 0;
                            let district_list = [];
                            for (let x in districts) {
                                total_active += districts[x].active;
                                total_confirmed += districts[x].confirmed;
                                total_deaths += districts[x].deceased;
                                total_recover += districts[x].recovered;
                                let ob = districts[x];
                                ob["district_name"] = x;
                                district_list.push(ob);
                            }
                            return (
                                <div className="card">
                                    <div className="card-header">
                                        <button className="btn btn-primary">Active:{total_active}</button>
                                        <button className="btn btn-success">Recovered:{total_recover}</button>
                                        <button className="btn btn-info">confirmed:{total_confirmed}</button>
                                        <button className="btn btn-danger">Death:{total_deaths}</button>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-hover stripped bg-info">
                                            <thead>
                                                <tr>
                                                    <th>District</th>
                                                    <th>active</th>
                                                    <th>Recovered</th>
                                                    <th>confirmed</th>
                                                    <th>Death</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {district_list.map((itm) => {
                                                    return (
                                                        <tr key={itm.district_name}>
                                                            <td>{itm.district_name}</td>
                                                            <td>{itm.active}</td>
                                                            <td>{itm.recovered}</td>
                                                            <td>{itm.confirmed}</td>
                                                            <td>{itm.deceased}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StateData
