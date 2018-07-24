import React, { Component } from 'react'
import { Bar, Line , Pie } from 'react-chartjs-2';
class BarChart extends Component {
    constructor(props){

            super(props);
            this.state = {  

                chartData : {
                       labels : [
                        "Mumbai",
                        "Delhi",
                        "Kolkata",
                        "Chennai",
                        "Bangalore",
                        "Hyderabad"

                       ],
                       datasets : [
                        {
                            label : 'Population',
                            data : [

                            18394912, 
                            16349831,
                            14035959,
                            8653521,
                            8520435,
                            7677018


                            ],
                            backgroundColor: [
                                'rgba(72, 126, 176,1.0)',
                                'rgba(46, 204, 113,1.0)',
                                'rgba(241, 196, 15,1.0)',
                                'rgba(192, 57, 43,1.0)',
                                'rgba(44, 62, 80,1.0)',
                                'rgba(26, 188, 156,1.0)'
                            ]    
                        }
                    ] 
                    
                          



                }

            }
    }
  render() {
    return (
      <div className='chart'>
            <Bar
                data={this.state.chartData}
                width={100}
	            height={50}
                options={{
                   
                }}
            />

      </div>
    )
  }
}
export default BarChart;