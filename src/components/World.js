import React ,{useState, useEffect} from 'react'
import axios from 'axios'

let  World = () => {
    let [world, setWorld] = useState({data:[], error:null})
    useEffect(()=>{
        axios.get("https://corona.lmao.ninja/v2/countries")
        .then((response)=>{
            setWorld({...world, data:response.data})
        })
        .catch((err)=>{
            setWorld({...world, error:err })
        })
    })
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-striped table-dark">
                        <thead className="thead-light">
                            <tr>
                                
                                <th>Country Name</th>
                                <th>Population</th>
                                <th>Total cases</th>
                                <th>Active</th>
                                <th>Recovered</th>
                                <th>Death</th>
                            </tr>
                        </thead>
                        <tbody>
                            {world.data.map((itm)=>{
                                return(
                                    <tr key={itm.country}>
                                        
                                        <td>{itm.country}</td>
                                        <td>{itm.population}</td>
                                        <td>{itm.cases}</td>
                                        <td>{itm.active}</td>
                                        <td>{itm.recovered}</td>
                                        <td>{itm.deaths}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default World
