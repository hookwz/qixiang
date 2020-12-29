import DataHelp from '../data_helper/DataHelp'

export default class Interacter{
    static updateParallelChart(chartData,focus)
    {
      chartData.parallelchartData.focus=focus;
      chartData.parallelchartData.data=DataHelp.updateParallelChartsFocus(chartData.data,focus)
    }
}