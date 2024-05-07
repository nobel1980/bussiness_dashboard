import React, { useEffect, useState } from 'react';
import logo from '../icon/logo.png'

import generateDate from '../generateData';

import {
    ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Scatter
} from "recharts";
import axios from 'axios';
import { NumberFormatter } from '@amcharts/amcharts5';
import ScValue from './ScValue';
import useSB from '../useData/useSB';

const Sb = () => {

    const [sbdataa] = useSB();
    const itemProduct = sbdataa;
    console.log(itemProduct);


    const [ekokData, setEkokData] = useState([]);
    const [ReData, setReData] = useState([]);
    useEffect(() => {
        axios.get('http://202.164.213.67/payment/daily_business/div_sb.php')
            .then(data => {
                const loadedData = data.data;

                const phoneData = loadedData.map(ekok => {

                    // const office = {
                    //     ofc: ekok.OFF_NAME

                    // }

                    // const fy_b = {
                    //     fb: ekok.FY_BUSINESS
                    // }
                    // const fy_t = {
                    //     ft: ekok.FY_TARGET
                    // }
                    const parts = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;
                    const figLac = 100000;


                    const ph = {
                        off_code: parts[0],
                        name: parts[1],
                        target: (parts[2]),
                        business: (parts[3]),
                        ratio: (parts[4]),
                    };
                    return ph;
                });
                setEkokData(phoneData);
                // console.log(phoneData);

            })
    }, [])
    useEffect(() => {
        axios.get('http://202.164.213.67/payment/daily_business/div_sb.php')
            .then(data => {
                const loadedData = data.data;

                const phoneData = loadedData.map(ekok => {

                    // const office = {
                    //     ofc: ekok.OFF_NAME

                    // }

                    // const fy_b = {
                    //     fb: ekok.FY_BUSINESS
                    // }
                    // const fy_t = {
                    //     ft: ekok.FY_TARGET
                    // }
                    const parts = ekok.OFF_NAME.split('-');
                    const figCore = 10000000;
                    const figLac = 100000;
                    const ph = {
                     off_code: parts[0],
                        name: parts[1],
                        target: (parts[2]) ,
                        business: (parts[3]),
                        ratio: (parts[4]),
                        re_target: (parts[5]),
                        re_business: (parts[6]),
                        re_ratio: (parts[7]),
                        t_bus: (parts[8]),
                        t_target: (parts[9]),
                        t_ratio: (parts[10])
                    };
                    return ph;
                });
                setReData(phoneData);
                // console.log(phoneData);

            })
    }, [])
    return (

        <div>

            <button style={{ fontSize: '14px' }} className='btn rounded btn-primary drop-shadow-lg bg-[#006db3] btn-md text-white m-1'><b>FIRST YEAR TARGET VS BUSINESS <span className='text-fareast text-[#ffea00] text-xl'>(DIVISION-SB )</span></b></button>
            {/* <img className='rounded-circle shadow bg-white p-3 m-3' style={{ width: '100px', height: '100px' }} src={logo} alt="" /> */}
            {/* <h6 className='mb-0 text-success'> <b style={{ fontWeight: 'bold' }} >FIRST YEAR BUSINESS</b>  INFORMATION-2022</h6> */}
            {/* <p className='mb-0 text-success'>(All DIVISION-SB)</p> */}
           <div className="row container-fluid justify-content-center p-1">
                <div class="shadow p-3 m-0 mb-2 bg-body rounded">
                    <div className=" col-md-12 mt-0">
                        <div style={{ width: "100%", height: "280px", marginTop: '0px', background: '#fafafa' }}>

                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ekokData}

                                    margin={{
                                        top: 30,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >

                                    {/* <XAxis
                                        tick={{ fill: 'dark' }}
                                        dataKey="name"
                                        tickLine={true}
                                        axisLine={{ stroke: "#000000" }}
                                    /> */}

                                    {/* <XAxis
                                        tickLine={false}

                                        axisLine={{ stroke: "#333" }}
                                    /> */}

                                    <Tooltip />
                                    <Legend verticalAlign="top" align="left" height={140} />


                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="target"
                                        barSize={35}
                                        fill="#0031ca"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="business"
                                        barSize={35}
                                        fill="#00600f"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Business"
                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="ratio"
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
                                itemProduct.map(p => <ScValue key={p.id} p={p}></ScValue>)

                            }

                        </div>


                    </div>
                </div>
            </div>


            <button style={{ fontSize: '14px' }} className='btn rounded btn-primary drop-shadow-lg bg-[#006db3] btn-md text-white m-1'><b >RENEWAL TARGET VS BUSINESS <span className='text-fareast text-[#ffca28] text-xl'>(DIVISION-SB)</span></b></button>

            {/* <h6 className='mb-0 text-success'> <b style={{ fontWeight: 'bold' }}>RENEWAL</b>  BUSINESS INFORMATION-2022</h6>
            <p className='mb-0 text-success'>(All DIVISION-SB)</p> */}
            <div className="row  p-0">
                <div class="shadow p-3 container-fluid  mb-2 bg-body rounded">
                    <div className=" col-md-12 mt-0">
                        <div style={{ width: "100%", height: "210px", marginTop: '0px', background: '#fafafa' }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ReData}
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
                                    <Legend verticalAlign="top" align="left" height={155} />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="re_target"
                                        barSize={35}
                                        fill="#003d00"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Renewal_Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="re_business"
                                        barSize={35}
                                        fill="#0088a3"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Renewal_Business"
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
                    </div>
                </div>
            </div>



            <button style={{ fontSize: '14px' }} className='btn rounded btn-primary drop-shadow-lg bg-[#006db3] btn-md text-white m-1'><b>TOTAL TARGET VS BUSINESS <span className='text-fareast text-[#ffca28] text-xl'>(DIVISION-SB)</span></b></button>

            {/* <h6 className='mb-0 text-success'> <b style={{ fontWeight: 'bold' }}>TOTAL</b>  BUSINESS INFORMATION-2022</h6>
            <p className='mb-0 text-success'>(All DIVISION-SB)</p> */}
            <div className="row  p-0">
                <div class="shadow p-3  mb-5 bg-body rounded">
                    <div className=" col-md-12 mt-0">
                        <div style={{ width: "100%", height: "290px", marginTop: '0px', background: '#fafafa' }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    width={1000}
                                    height={500}
                                    data={ReData}
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
                                    <Legend verticalAlign="top" align="left" height={205} />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="t_target"
                                        barSize={35}
                                        fill="#49599a"
                                        yAxisId="left"
                                        tick={{ fill: 'dark' }}
                                        legendType="rect"
                                        name="Total_Target"
                                        label={{ position: 'top' }}
                                    />

                                    <Bar
                                        radius={[0, 0, 0, 0]}
                                        dataKey="t_bus"
                                        barSize={35}
                                        fill="#870000"
                                        yAxisId="left"
                                        legendType="rect"
                                        name="Total_Business"

                                        label={{ position: 'top' }}
                                    />
                                    <Line
                                        dot={true}
                                        activeDot={{ r: 10 }}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        type="monotone"
                                        dataKey="t_ratio"
                                        stroke="#c49000"
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sb;