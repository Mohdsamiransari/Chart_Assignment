import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart } from 'chart.js/auto';

export const RadarChart = ({datas}) => {
    
  const options ={
    maintainAspectRatio: false,
    responsive: true,
    plugins:{
        legend:{
            position: 'top',
            labels: {
              // This more specific font property overrides the global property
              font: {
                  size: 10,
                  family: "sans"
              }
          }
            
        },
        title:{
            display: true,
            text: 'likelihood '
        },

      },
  };
  var China=0
  var Nigeria = 0
  var Colombia = 0
  var Russia = 0

  {datas.map((i)=>{
    if (i.country == 'China'){
      China += i.likelihood
    }
    if (i.country == 'Nigeria'){
      Nigeria += i.likelihood
    }
    if (i.country == 'Colombia'){
      Colombia += i.likelihood
    }
    if (i.country == 'Russia'){
      Russia += i.likelihood
    }
  })}
  const data={
    labels: ['Colombia',"Nigeria",'China','Russia'],
    
    datasets:[
        {
            label: 'likelihood',
            color: '#4BC0C0',
            backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56','#00BFFF'],
            data: [Colombia,Nigeria,China,Russia],
            
        },
        
    ]
   
  };
  return (
    <Line data={data} options={options} className='w-[60vh] h-[80vh] '/>
  )
}
