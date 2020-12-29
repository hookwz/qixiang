import axios from 'axios';

export default class ServerData{
   
    static getBeijing_air()
    {
        return axios.get('http://localhost:3001/air');
    }
    
    static getCenterJson()//坑点
    {
      return axios.get('http://localhost:3001/regions');
    }

    static getCityPointJson()
    {
      return axios.get('http://localhost:3001/cityPoint');
    } 

    static Text()
    {
        return axios.get('http://localhost:3001/regions');
    }

    static getCdAir()
    {
        return axios.get('http://localhost:3001/air');
    }

    static getBjThree()
    {
      return axios.get('http://localhost:3001/beijing');
    }

    //关键的
    
    static getAir()
    {
       return axios.get('http://localhost:3001/Air');
    }
    
    static getDay()
    {
      //获取每天的
      return axios.get('http://localhost:3001/cityday');
    }

    static getTest()
    {
      return axios.get('http://localhost:3001/Test');
    }
}