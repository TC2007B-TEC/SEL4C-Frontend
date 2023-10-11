import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/mockData';

import {useTheme} from '@mui/material'

const Stacked = ({ width, height }) => {
    const theme = useTheme()
    return (
    <ChartComponent
        id="charts"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        width={width}
        height={height}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: false }}
        background="transparent"
        legendSettings={{ background: 'white' }}
    >
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
    );
};

export default Stacked;