import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({rent, car, utility, food, school, misc})=>{
    const data ={
        labels: ["Rent", "Car", "Utility", "Food", "School", "Miscellaneous" ],
        datasets: [
            {
                data: [rent, car, utility, food, school, misc],
                backgroundColor: ["#00cc00", "#33cccc", "#ffff00", "#ff66ff", "#6699ff", "#ff9900"]
            }
        ]
    };

    return (
        <div>
            <Pie data={data} />
        </div>
    )
}

export default PieChart;