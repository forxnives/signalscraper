import React from 'react'


const Table = ({ date, symbol, status, direction, link }) => {
    
    
    
    
    
    
    return(
        <div className="pa4">
        <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
                <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Symbol</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Date</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Direction</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Status</th>
                </tr>
            </thead>
            <tbody className="lh-copy">

                {
                
                
                
                status.map((each, i) => 
                    status[i] === 'Market' ? null : 

                        <tr>
                        <td className="pv3 pr3 bb b--black-20"><a href={link[i]}>{symbol[i].slice(-10,-4)}</a></td>
                        <td className="pv3 pr3 bb b--black-20">{date[i]}</td>
                        <td className="pv3 pr3 bb b--black-20">{direction[i]}</td>
                        <td className="pv3 pr3 bb b--black-20">{each}</td>
                        </tr>

                )}


            </tbody>
            </table>
        </div>
        </div>

    )
}

export default Table