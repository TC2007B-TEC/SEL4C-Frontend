import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useTheme } from '@emotion/react';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const theme = useTheme()
  const legendBackgroundColor = theme == 'dark' ? 'black' : 'white';
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: legendBackgroundColor, position:'Bottom' }}
      height={height}
      width='100%'
      background= 'transparent'
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Actividades"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;

// {`${theme.palette.mode==='dark' ? 'black': ' white'}`}