import React from 'react'
import {PolarArea} from 'react-chartjs-2'
import { Chart } from 'chart.js';
export const PolarChart = ({datas}) => {
  
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
            text: 'Intensity '
        },

      },
  };
  var China=0
  var Nigeria = 0
  var Colombia = 0
  var Russia = 0

  {datas.map((i)=>{
    if (i.country == 'China'){
      China += i.intensity
    }
    if (i.country == 'Nigeria'){
      Nigeria += i.intensity
    }
    if (i.country == 'Colombia'){
      Colombia += i.intensity
    }
    if (i.country == 'Russia'){
      Russia += i.intensity
    }
  })}
  const data={
    labels: ['Colombia',"Nigeria",'China','Russia'],
    
    datasets:[
        {
            label: 'Intensity ',
            backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56','#00BFFF'],
            data: [Colombia,Nigeria, China, Russia],
            
        },
        
    ]
   
  };  
  return (
        <PolarArea data={data} options={options} className='w-[40vh] h-[80vh]'/>
  )
}
