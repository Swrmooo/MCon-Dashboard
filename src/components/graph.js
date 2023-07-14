import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function Graph({ data }) {
  const [chartData, setChartData] = useState([['Date', 'Value']]);

  useEffect(() => {
    if (data && data.length > 0) {
      const updatedChartData = [['Date', 'Value']];
      data.forEach(([date, value]) => {
        const dateString = formatDate(date);
        updatedChartData.push([dateString, value]);
      });
      setChartData(updatedChartData);
    }
  }, [data]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return formattedDate;
  };

  const options = {
    title: 'จำนวนคิวทั้งหมดในแต่ละวันของเดือนนี้',
    chartArea: { width: '90%' },
    legend: { position: 'none' },
    hAxis: {
      slantedText: false,
      format: 'd MMM',
      title: '',
      textStyle: { fontSize: 10 },
      titleTextStyle: { fontSize: 15 },
    },
    vAxis: {
      slantedText: false,
      title: 'จำนวนคิวทั้งหมดในแต่ละวัน',
    },
    colors: ['#90D7FF'],
    lineWidth: 0,
    pointSize: 5,
    pointShape: 'circle',
  };

  return (
    <div>
      <Chart
        chartType="AreaChart"
        data={chartData}
        options={options}
        width={'100%'}
        height="280px"
      />
    </div>
  );
}

export default Graph;
