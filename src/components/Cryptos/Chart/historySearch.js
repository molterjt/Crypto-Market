import React from 'react';
import {Switch} from '../../Common/Switch';
import './historySearch.scss';

export const HistorySearch = ({setHistoryRange, historicalSearch}) => {
  const [allTime, setAllTime] = React.useState(false);
  const [oneYear, setOneYear] = React.useState(false);
  const [halfYear, setHalfYear] = React.useState(false);
  const [threeMonths, setThreeMonths] = React.useState(false);
  const [oneMonth, setOneMonth] = React.useState(false);
  const [oneWeek, setOneWeek] = React.useState(false);

  React.useEffect(() => {
    switch (historicalSearch) {
      case "max":
        setAllTime(true);
        break;
      case 365:
        setOneYear(true);
        break;
      case 182:
        setHalfYear(true);
        break;
      case 92:
        setThreeMonths(true);
        break;
      case 31:
        setOneMonth(true);
        break;
      case 7:
        setOneWeek(true);
        break;
      default:
        break;
    }
  }, [historicalSearch])

  const handleSwitches = (stateRange) => {
    switch (stateRange) {
      case "allTime":
        setAllTime(true);
        setOneYear(false)
        setHalfYear(false)
        setThreeMonths(false)
        setOneMonth(false)
        setOneWeek(false)
        setHistoryRange("max")
        break;
      case "oneYear":
        setAllTime(false);
        setOneYear(true)
        setHalfYear(false)
        setThreeMonths(false)
        setOneMonth(false)
        setOneWeek(false)
        setHistoryRange(365)
        break;
      case "halfYear":
        setAllTime(false);
        setOneYear(false)
        setHalfYear(true)
        setThreeMonths(false)
        setOneMonth(false)
        setOneWeek(false)
        setHistoryRange(182)
        break;
      case "threeMonths":
        setAllTime(false);
        setOneYear(false)
        setHalfYear(false)
        setThreeMonths(true)
        setOneMonth(false)
        setOneWeek(false)
        setHistoryRange(92)
        break;
      case "oneMonth":
        setAllTime(false);
        setOneYear(false)
        setHalfYear(false)
        setThreeMonths(false)
        setOneMonth(true)
        setOneWeek(false)
        setHistoryRange(31)
        break;
      case "oneWeek":
        setAllTime(false);
        setOneYear(false)
        setHalfYear(false)
        setThreeMonths(false)
        setOneMonth(false)
        setOneWeek(true)
        setHistoryRange(7)
        break;
      default:
        break;
    }
  }
  
  return (
    <div className="search-btn-container">
     <Switch
        title={"Week"}
        onColor={"#EF476F"}
        isOn={oneWeek}
        handleToggle={() => handleSwitches("oneWeek")}        
      />
      <Switch
        title={"Month"}
        onColor={"#EF476F"}
        isOn={oneMonth}
        handleToggle={() => handleSwitches("oneMonth")}        
      />
      <Switch
        title={"Quarter"}
        onColor={"#EF476F"}
        isOn={threeMonths}
        handleToggle={() => handleSwitches("threeMonths")}        
      />
       <Switch
        title={"Half Year"}
        onColor={"#EF476F"}
        isOn={halfYear}
        handleToggle={() => handleSwitches("halfYear")}        
      />
       <Switch
        title={"Year"}
        onColor={"#EF476F"}
        isOn={oneYear}
        handleToggle={() => handleSwitches("oneYear")}        
      />
      <Switch
        title={"All Time"}
        onColor={"#EF476F"}
        isOn={allTime}
        handleToggle={() => handleSwitches("allTime")}        
      />
    </div>
  );
}