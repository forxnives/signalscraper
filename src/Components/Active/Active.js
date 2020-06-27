import React from 'react'
// import './Active.css';


const Active = ({ object, date, symbol, direction, link }) => {
    return(
        <div>
        {
            object.map((each, i) => 

                <article className="cf ph5-n pv mw-100 center bg-white br3 pa3 pa4-ns mv ba b--black-10 ">
                    <div className="tl">
                        <header className="fn fl-ns w-50-ns pr4-ns">

                            <article className="cf">
                                <div className="fl w-100 w-50-ns bg-near-white tl">
                                    <h1 className="f5 lh-title fw9 mb0 mt0 pt3 bt bw2">
                                    <a href={link[i]}> {direction[i] + ' ' + symbol[i].slice(-10,-4)} </a>
                                    </h1>
                                </div>
                                <div className="fl w-100 w-50-ns bg-light-gray tr">
                                    <div className="f5 lh-title fw9 mb0 mt0 pt3 bt bw2">
                                        <time className="f6 ttu tracked gray tr">{date[i]}</time>
                                    </div>
                                </div>
                            </article>


                            <div className="mb0 pa1">
                                <a href={link[i]}><img className="mw-60" src={object[i].image} /></a>
                            </div>

                        </header>

                        <div className="fn fl-ns w-50-ns">

                            <div className="cf">

                                <div className="fl w-50 w-25-ns tc bg-black-05">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Entry</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].entry}
                                            </p>
                                        </div>
                                    </article>
                                </div>

                                <div className="fl w-50 w-25-ns tc bg-black-10">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Stoploss</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].stoploss}
                                            </p>
                                        </div>
                                    </article>
                                </div>


                                <div className="fl w-50 w-25-ns tc bg-black-20">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Target 1</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].target1}
                                            </p>
                                        </div>
                                    </article>
                                </div>

                                <div className="fl w-50 w-25-ns tc bg-black-10">
                                    <article class="center mw5 mw6-ns hidden mv0">
                                        <h1 class="f6 bg-near-black white mv0 pv2 ph3">Target 2</h1>
                                        <div class="pa0 bt">
                                            <p class="f6 f5-ns lh-copy measure mv0">
                                            {object[i].target2}
                                            </p>
                                        </div>
                                    </article>
                                </div>

                            </div>


                            {<div dangerouslySetInnerHTML={{__html: object[i].comments}} />}


                            <div class="bg-black-90 w-100">
                                <h3 class="white sans-serif fw1 tracked">Progress</h3>
                                <div class="bg-moon-gray br-pill h1 overflow-y-hidden mb0">
                                    {Number((object[i].progress).replace('%', '')) < 100 ? 
                                        <div class="bg-green br-pill h1 shadow-1 progress-bar" style={{width:object[i].progress}}></div> :
                                        <div class="bg-green br-pill h1 shadow-1 progress-bar" style={{width:'100%'}}></div>}

                                </div>

                            </div>
                        </div>
                    </div>
                </article>
        )}
        </div>
    )
}

export default Active

