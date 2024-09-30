import TimerProgress from '../TimerProgress'
import './perk.css'

const PerksSection = () => {
    return (
        <>
            <div className="container">
                <div className="perksection">
                    <div className="top-sec">
                        <h6>WHY INTRODO?</h6>
                        <h1> Unlock The Perks! </h1>
                    </div>

                    <div className="perkmain">
                        <div className="perksec-cnt bg-liner">
                            <div className="topsect">
                                <h3>Global Payroll Simplicity</h3>
                                <p>Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!  </p>

                            </div>
                            <div className="perksec-cnt-btm">
                                <h6>Run Payroll</h6>
                                <div className="payroll">
                                    <div className="payroll-one">
                                        <img src='uae.png'></img>
                                        <div className="payroll-para">
                                            <div className="wd-80"></div>
                                            <div className="wd-80 wd-40"></div>
                                        </div>
                                        <p>AED 90,718.94</p>
                                    </div>

                                    <div className="payroll-one">
                                        <img src='img2.png'></img>
                                        <div className="payroll-para">
                                            <div className="wd-80"></div>
                                            <div className="wd-80 wd-40"></div>
                                        </div>
                                        <p>SAR 678,100.00</p>
                                    </div>

                                    <div className="payroll-one">
                                        <img src='img3.png'></img>
                                        <div className="payroll-para">
                                            <div className="wd-80"></div>
                                            <div className="wd-80 wd-40"></div>
                                        </div>
                                        <p>OMR 67,693.80</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="second-sec">
                            <div className="second-sec-top">
                                <TimerProgress />
                            </div>
                            <div className="second-sec-btm">
                                <h2>Smart Insights</h2>
                                <p>Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.</p>
                            </div>
                        </div>

                        <div className="perksec-cnt bg2 p-0">
                            <div className="p-20">
                                <h3>Legacy Harmony</h3>
                                <p>Maximize operational efficiency with zero data loss. Sync all your business tools with an open API for seamless data integration.  </p>
                            </div>
                            <div className="app-icon">
                                <div className="app-icon-wrap">
                                    <div className="app-clr blue"></div>
                                    <div className="app-clr "><img src='windows.png'></img></div>

                                </div>

                                <div className="app-icon-wrap">
                                    <div className="app-clr "><img src='google.png'></img></div>
                                    <div className="app-clr "><img src='video.png'></img></div>
                                    <div className="app-clr pink "></div>

                                </div>

                                <div className="app-icon-wrapbtm ">
                                    <div className='divbtm'>
                                        <div className="app-icon-wrapbtm-clm">
                                            <div className="app-clr orange "></div>
                                            <div className="app-clr violet "><img src='oraclenet.png'></img></div>
                                        </div>
                                        <div className="app-icon-wrapbtm-clm">
                                            <div className="app-clr "><img src='Oracle.png'></img></div>
                                            <div className="app-clr darkblue "></div>
                                        </div>


                                    </div>


                                    <div className='divbtm'>
                                        <div className=" bg-white p-ab"><img src='easily.png'></img></div>
                                    </div>




                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="perkmain">
                        <div className="perk-btm-sec pl">


                            <div className="perk-row">
                                <div className="topsect"><h3>Rock-Solid Compliance</h3>
                                    <p>Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.  </p></div>

                            </div>

                            <div className="perk-row">
                                <div className="app-icon">
                                    <div className="app-icon-wrap">
                                        <div className="app-clr "><img src='heart.png'></img></div>

                                    </div>

                                    <div className="app-icon-wrap">
                                        <div className="app-clr "><img src='mohre.png'></img></div>
                                        <div className="app-clr pink "></div>

                                    </div>


                                    <div className="app-icon-wrap ">
                                        <div className="app-clr green  "><img src='green.png'></img></div>

                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="perk-btm-sec pp">
                            <div className="perk-row">
                                <div className="topsect"><img src='portrait-of-young-female.png'></img></div>

                            </div>

                            <div className="perk-row">
                                <div className="topsect"><h3>Cloud-Powered Savings</h3>
                                    <p>Centralize people management with one HR software. Save time and cut costs by leveraging cloud technology.   </p></div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default PerksSection