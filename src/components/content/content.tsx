import "./content.scss";

import imgPatient from "../../assets/icons/crutch.svg";
import imgOperation from "../../assets/icons/operation.svg";
import imgEarnings from "../../assets/icons/bank.svg";

export default function Content() {
  return (
    <main id="content">
      <div className="content_header">
        <input type="text" name="search" placeholder="Search" />
        <i className="icon ion-md-notifications"></i>
      </div>
      <div className="content_cards">
        <div className="card">
          <i className="icon ion-md-medkit"></i>
          <div>
            <p>Appointments</p>
            <span>213</span>
          </div>
        </div>
        <div className="card">
          <img src={imgPatient} alt="patient" />
          <div>
            <p>New Patients</p>
            <span>104</span>
          </div>
        </div>
        <div className="card">
          <img src={imgOperation} alt="operation" />
          <div>
            <p>Operations</p>
            <span>24</span>
          </div>
        </div>
        <div className="card">
          <img src={imgEarnings} alt="bank" />
          <div>
            <p>Hospital Earnings</p>
            <span>$ 12,174</span>
          </div>
        </div>
      </div>
    </main>
  );
}
