import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function JobDetails({callerSign, totalDriveDistance, totalIdleDistance, totalDriveTime, totalIdleTime}){
    return(
        <div className="jobDetails">
            <table>
                <tr className="text-center caller-sign">
                    <td></td>
                    <td><b>{callerSign}</b></td>
                    <td></td>
                </tr>
                <tr className="text-center">
                    <td rowSpan="2">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-map-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                        </svg>
                    </td>
                    <td>&Sigma; DR <span className="badge badge-primary">{totalDriveDistance}</span></td>
                    <td>{totalDriveTime}</td>
                </tr>
                <tr className="text-center">
                    <td>&Sigma; TR <span className="badge badge-success">{totalIdleDistance}</span></td>
                    <td>{totalIdleTime}</td>
                </tr>
            </table>
        </div>

    );
}

export function JobList({collect, delivery, distance, job = false, jobId, collectTime, deliverTime}){
    return (
        <div className="jobList">
            <table>
                <tr className="text-center job" >
                  <td></td>
                  <td><b>{jobId}</b></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                    <td><span>{collect}</span> </td>
                    <td>
                        <span className="glyphicon glyphicon-minus"></span>   
                        {job? <span className="badge badge-primary">{distance}</span>: <span className="badge badge-success">{distance}</span>}
                        <span className="glyphicon glyphicon-arrow-right"></span>    
                    </td>
                    <td><span>{delivery}</span> </td>
                </tr>
                <tr className="text-center">
                    <td><i>{collectTime}</i></td>
                    <td></td>
                    <td><i>{deliverTime}</i></td>
                </tr>
            </table>
        </div>
      );
}

export function HomeIcon(){
    return(
        <div className="cell">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            </svg>
        </div>
    );
}