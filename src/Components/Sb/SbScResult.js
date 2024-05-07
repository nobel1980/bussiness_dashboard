import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ZoneSbValue from './ZoneSbValue';

const SbScResult = () => {
    const { id } = useParams();
    console.log(id);
    const [ekokData, setEkokData] = useState([]);

    useEffect(() => {
        axios.get(`http://202.164.213.67/payment/sc_sb.php?DIV_CODE=${id}`)
            .then(data => {
                const loadedData = data.data.Policy_Statement;

                console.log(loadedData);

                const ekokScData = loadedData.map(ekok => {

                    // const d = ekok.SC_id;
                    // const { name } = ekok.SC_NAME;
                    // console.log(d);
                    // console.log(name);
                    const partss = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;
                    const figLac = 100000;
                    const ph = {
                        off_code: partss[0],
                        name: partss[1],
                        fy_Target: (partss[2]),
                        fy_business: (partss[3]),
                        re_target: (partss[4]),
                        re_business: (partss[5]),
                        t_target: (partss[6]),
                        t_business: (partss[7]),
                        fy_ratio: (partss[8]),
                        re_ratio: (partss[9]),
                        t_ratio: (partss[10])
                    };
                    return ph;
                });
                setEkokData(ekokScData);
                // console.log(ekokScData);
            })
    }, [])

    return (
        <div>
            <div>

                <h2 className='p-3 font-bold drop-shadow text-success text-lg'>DIVISION TO SERVICE CENTER BUSINESS REPORT <span className='text-fareast text-[#003300] text-xl'>(SC-SB )</span></h2>
                <div className="row flex m-2">
                    <div className="col-md-6 shadow p-1">
                        <button style={{ fontSize: '14px' }} className='btn rounded mb-2 btn-success drop-shadow-lg bg-[#006db3] btn-md text-white m-1'><b>FIRST YEAR TARGET VS BUSINESS  <span className='text-fareast text-[#ffea00] text-xl'>(SC-SB)</span> </b></button>

                        <div style={{ width: "100%", height: "250px", marginTop: '0px', background: '#fafafa' }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}

                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >

                                    <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={false}
                                        axisLine={{ stroke: "#333" }}
                                    />

                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={60} />


                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="fy_Target"
                                        barSize={30}
                                        fill="#00766c"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="FY_Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="fy_business"
                                        barSize={25}
                                        fill="#00b248"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="FY_Business"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="fy_ratio"
                                        stroke="#ffab40"
                                        yAxisId="right"
                                        color='#fff'
                                        name='Achievement'
                                        legendType="rect"

                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
                                        tickCount={10}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        stroke="#3B7AD9"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                    // unit="K"
                                    // domain={[5, "dataMax + 5"]}
                                    // tickCount={5}
                                    />
                                </ComposedChart>

                            </ResponsiveContainer>

                        </div>


                        <div className='flex justify-center justify-evenly px-10 mt-1'>
                            {
                                ekokData.map(product => <ZoneSbValue key={product.id} product={product}></ZoneSbValue>)

                            }

                        </div>

                    </div>
                    <div className="col-md-6 shadow bordered p-1">
                        <button style={{ fontSize: '14px' }} className='btn rounded mb-2 btn-success drop-shadow-lg bg-[#006db3] btn-md text-white m-1'><b>RENEWAL TARGET VS RENEWAL BUSINESS <span className='text-fareast text-[#ffea00] text-xl'>(SC-SB)</span> </b></button>

                        <div style={{ width: "100%", height: "250px", marginTop: '0px', background: '#fafafa' }}>

                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}

                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >

                                    <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={false}
                                        axisLine={{ stroke: "#333" }}
                                    />

                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={170} />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="re_target"
                                        barSize={30}
                                        fill="#4c96cc"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Re_Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="re_business"
                                        barSize={25}
                                        fill="#ff6166"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Re_Business"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="re_ratio"
                                        stroke="#ffab40"
                                        yAxisId="right"
                                        color='#fff'
                                        name='Achievement'
                                        legendType="rect"
                                    />

                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
                                        tickCount={10}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        stroke="#3B7AD9"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                    // unit="K"
                                    // domain={[5, "dataMax + 5"]}
                                    // tickCount={5}
                                    />
                                </ComposedChart>

                            </ResponsiveContainer>

                        </div>
                        <div className='flex justify-center justify-evenly px-6 mt-1'>
                            {
                                ekokData.map(product => <ZoneSbValue key={product.id} product={product}></ZoneSbValue>)

                            }

                        </div>
                    </div>
                </div>



                <div className="row justify-center mt-5 mb-5">
                    <div className="col-md-8 shadow bordered p-4">
                        <button style={{ fontSize: '14px' }} className='btn rounded mb-2 btn-success drop-shadow-lg bg-[#006db3] btn-md text-white m-1'><b>TOTAL TARGET VS TOTAL BUSINESS <span className='text-fareast text-[#ffea00] text-xl'>(SC-SB)</span>  </b></button>

                        <div style={{ width: "100%", height: "200px", marginTop: '0px', background: '#fafafa' }}>

                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}

                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >

                                    <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={false}
                                        axisLine={{ stroke: "#333" }}
                                    />

                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={120} />


                                    <Bar

                                        radius={[0, 0, 0, 0]}
                                        dataKey="t_target"
                                        barSize={30}
                                        fill="#4c96cc"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Total Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="t_business"
                                        barSize={25}
                                        fill="#ff6166"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Total Business"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="t_ratio"
                                        stroke="#ffab40"
                                        yAxisId="right"
                                        color='#fff'
                                        name='Achievement'
                                        legendType="rect"

                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="left"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                        unit="C"
                                        tickCount={10}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        stroke="#3B7AD9"
                                        axisLine={{ stroke: "#f5f5f5" }}
                                    // unit="K"
                                    // domain={[5, "dataMax + 5"]}
                                    // tickCount={5}
                                    />
                                </ComposedChart>

                            </ResponsiveContainer>

                        </div>
                        <div className='flex justify-center justify-evenly px-6 mt-1'>
                            {
                                ekokData.map(product => <ZoneSbValue key={product.id} product={product}></ZoneSbValue>)

                            }

                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default SbScResult;