import React from 'react'


const Table = ({ date, symbol, status, direction, link }) => {
    return(
        <div class="pa4">
        <div class="overflow-auto">
            <table class="f6 w-100 mw8 center" cellspacing="0">
            <thead>
                <tr>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Symbol</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Date</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Direction</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Status</th>
                </tr>
            </thead>
            <tbody class="lh-copy">

                {
                
                
                
                status.map(each => 
                    <tr>
                    <td class="pv3 pr3 bb b--black-20">{each}</td>
                    <td class="pv3 pr3 bb b--black-20">@hassan</td>
                    <td class="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
                    <td class="pv3 pr3 bb b--black-20">14419232532474</td>
                    </tr>

                )}


            </tbody>
            </table>
        </div>
        </div>

    )
}

export default Table