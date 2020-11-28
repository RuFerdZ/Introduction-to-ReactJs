import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JobList, HomeIcon, JobDetails } from "./Job";


function App() {

  

  const payload = {
    A08: "A08,RM6 4NA,,,,,,,,,,,,,,,,,,,,,,,,,6:00:00,0:00:00,0:00:00,0:00:00", 
    P34: "P34,CO12 5BZ,2191,,,,6:03:43,2:46:17,2:53:59,YES,DELIVERY,,,,,,,,,,,,,,,,11:40:16,2:46:17,2:53:59,5:40:16"
  };


  function getKeys(){
    const allKeys = []
    for (var k in payload){
      allKeys.push(k);
    }
    return allKeys;
  }

  const keys = getKeys();

  const values = payload[keys[1]].split(',')

  const getRow = (callerSign) => {
    console.log( payload[callerSign].split(','))
    return payload[callerSign].split(',')
  }

  const getJobs = (callerSign) => {
    return getRow(callerSign).slice(2,6);
  }

  const getJob = (jobId) => {
    // get job 
    //return useSelector(state => state.job.allJobs.byId[jobId]);
  }

  return (
    <div className="cell">
      <table className="main-table">
      {keys.map(callerSign => (
        <tr key={callerSign}> 
          <td><JobDetails callerSign={callerSign} totalDriveDistance="XXX" totalDriveTime={getRow(callerSign)[29]} totalIdleDistance="XXX" totalIdleTime={getRow(callerSign)[28]}/></td>
          <td><HomeIcon /></td>
          <td><JobList distance="XXX" /></td>


          {getJobs(callerSign).map(id => (
            <>
              {id.length===0? "":  <><td><JobList collect="getJob(id).collect_postcode" delivery="getJob(id).delivery_postcode" distance="XXX" job="true" jobId={id} collectTime="6:00:00" deliverTime="2:53:59" /></td> <td><JobList distance="XXX" /></td></>}
            </>
          ))}

          
          <td><HomeIcon /></td>
      </tr>
      ))}
      </table>
    </div>
  );
}

export default App;
