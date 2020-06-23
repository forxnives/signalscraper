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
                                    { direction[i] + ' ' + symbol[i].slice(-10,-4) }
                                    </h1>
                                </div>
                                <div className="fl w-100 w-50-ns bg-light-gray tr">
                                    <div className="f5 lh-title fw9 mb0 mt0 pt3 bt bw2">
                                        <time className="f6 ttu tracked gray tr">{date[i]}</time>
                                    </div>
                                </div>
                            </article>


                            <div className="mb0 pa1">
                                <img className="mw-60" src={object[i].image} />
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





                            {/* <ol className="comments">
                            <li><span>According to the most brokers’ <a href="https://fxssi.com/fxssi-current-ratio-mt4"><a href="https://fxssi.com/fxssi-current-ratio-mt4">data</a></a>, more than half of the traders are currently in short positions on EURJPY. As a result, we recommend considering only Long trades at this time.</span></li>
                            <li><span>The last downward movement was characterized by a “surge” in retail sellers. This is a good reason to start thinking about long positions.</span></li>
                            <li><span>When the price decreases, a signal is formed <a href="https://fxssi.com/fxssi-profit-ratio-mt4"><a href="https://fxssi.com/fxssi-profit-ratio-mt4">(orange labels)</a></a>, which implies an upward movement.</span></li>
                            <li><span>In the <a href="https://fxssi.com/fxssi-order-book-mt4"><a href="https://fxssi.com/fxssi-order-book-mt4">left orderbook</a></a>, we see a cluster of <a href="https://fxssi.com/fxssi-order-book-mt4"><a href="https://fxssi.com/fxssi-order-book-mt4"><a href="https://fxssi.com/fxssi-order-book-mt4"><a href="https://fxssi.com/fxssi-order-book-mt4">stop losses</a></a></a></a> and stop orders right at the level of the previous peak. This is a good level for placing take profit according to our forecast.</span></li>
                            </ol> */}


                            <div class="bg-black-90 w-100">
                                <h3 class="white sans-serif fw1 tracked">Progress</h3>
                                <div class="bg-moon-gray br-pill h1 overflow-y-hidden mb0">
                                    <div class="bg-green br-pill h1 shadow-1 progress-bar" style={{width:object[i].progress}}></div>
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




// <p className="f5 lh-copy measure mt0-ns">
// TYPOGRAPHY, even when poorly executed, can never be taken for granted;
// nor is it ever accidental. Indeed, beauti- fully typeset pages are always
// the result of long experience. Now and then they even attain the rank of
// great artistic achievement. But the art of typesetting stands apart from
// ex- pressive artwork, because the appeal is not limited to a small
// circle. It is open to everyone's critical judgment, and nowhere does this
// judgment carry more weight. Typography that can- not be read by everybody
// is useless. Even for someone who constantly ponders matters of
// readability and legibility, it is difficult to determine whether
// something can be read with ease, but the average reader will rebel at
// once when the type is too small or otherwise irritates the eye; both are
// signs of a certain illegibility already.
// </p>
// <p className="f5 lh-copy measure">
// All typography consists of letters. These appear either in the form of a
// smoothly running sentence or as an assembly of lines, which may even have
// contrasting shapes. Good typog- raphy begins, and this is no minor
// matter, with the typeset- ting of a single line of text in a book or a
// newspaper. Using exactly the same typeface, it is possible to create either
// a pleasant line, easily read, or an onerous one. Spacing, if it is too wide
// or too compressed, will spoil almost any typeface.
// </p>