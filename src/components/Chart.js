import React, { Component } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'
import { variables } from '../styles/variables'

class Chart extends Component {

  setLevel = (level) => {
    switch (level) {
      case variables.levels.veryLow:
        return 18;
      case variables.levels.low:
        return 36;
      case variables.levels.moderate:
        return 54;
      case variables.levels.busy:
        return 72;
      case variables.levels.veryBusy:
        return 90;
      default:
          return;
    }
  }

  setPoints = (value) => {
    switch (value) {
      case 18:
        return '+50';
      case 36:
        return '+40';
      case 54:
        return '+30';
      case 72:
        return '+20';
      case 90:
        return '+10';
      default:
          return;
    }
  }

  renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{this.setPoints(value)}</text>;
  };

  render() {
    const { data } = this.props

    const dataList = data.map((item, i) => ({
      day: item.day,
      level: this.setLevel(item.level)
    }))

    return (
      <ResponsiveContainer width="100%" height={250}>
       <BarChart data={dataList}>
         <XAxis dataKey="day" width={300} axisLine={false} tickLine={false}/>
         <Bar dataKey='level' fill='#d8d8d8' barSize={20} label={this.renderCustomBarLabel} />
       </BarChart>
    </ResponsiveContainer>
    );
  }
}

export default Chart;