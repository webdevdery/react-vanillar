import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// Basic Layout
import Header from './components/layout/Header'
// Basic Detail 1
import Phone from './container/basic/Phone'
import Name from './container/basic/Name'
import Bio from './container/basic/Bio'
import Proposer from './container/basic/Proposer'
import ProposerDetail from './container/basic/ProposerDetail'
import PersonalInfo from './container/basic/PersonalInfo'
import WorkDetail from './container/basic/WorkDetail'
import ChildDetail from './container/basic/ChildDetail'
import Member from './container/basic/Member'
import AddMember from './container/basic/Member-Add'
import Family from './container/basic/Family'
// Liability Detail 2
import Liability from './container/liability/Liability'
import Assets from './container/liability/Assets'
import Additional from './container/liability/Additional'
// Policy Details
import LifeInsurance from './container/policy/Life-Insurance'
import AddLifeInsurance from './container/policy/Life-Insurance-add'
import HealthInsurance from './container/policy/Health-Insurance'
import AddHealthInsurance from './container/policy/Health-Insurance-add'
import TICover from './container/policy/TI-Cover'
import AddTICover from './container/policy/TI-Cover-add'
import CICover from './container/policy/CI-Cover'
import AddCICover from './container/policy/CI-Cover-add'
import PermanentCover from './container/policy/Permanent-Cover'
import AddPermanentCover1 from './container/policy/Permanent-Cover-add-1'
import AddPermanentCover2 from './container/policy/Permanent-Cover-add-2'
import HomeInsurance from './container/policy/Home-Insurance'
import AddHomeInsurance1 from './container/policy/Home-Insurance-add-1'
import AddHomeInsurance2 from './container/policy/Home-Insurance-add-2'
import MotorVehicle from './container/policy/Motor-Vehicle'
import AddMotorVehicle from './container/policy/Motor-Vehicle-add'
import MotorInsurance from './container/policy/Motor-Insurance'
import AddMotorInsurance1 from './container/policy/Motor-Insurance-add-1'
import AddMotorInsurance2 from './container/policy/Motor-Insurance-add-2'
import Final from './container/policy/Final'

import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
      <div className="container-fluid">
        <div className="row">
            <div className="card w-100">
                <div id="msform">
                  {/* <StepBar /> */}
                  <Router>
                    <Switch>
                      {/*  Basic Detail start */}
                      <Route exact path="/">
                        <Phone />
                      </Route>
                      <Route exact path="/name">
                        <Name />
                      </Route>
                      <Route exact path="/bio">
                        <Bio />
                      </Route>
                      <Route exact path="/proposer">
                        <Proposer />
                      </Route>
                      <Route exact path="/proposer-detail">
                        <ProposerDetail />
                      </Route>
                      <Route exact path="/personal-info">
                        <PersonalInfo />
                      </Route>
                      <Route exact path="/work-detail">
                        <WorkDetail />
                      </Route>
                      <Route exact path="/child-detail">
                        <ChildDetail />
                      </Route>
                      <Route exact path="/member">
                        <Member />
                      </Route>
                      <Route exact path="/member-add">
                        <AddMember />
                      </Route>
                      <Route exact path="/family">
                        <Family />
                      </Route>
                      {/*  Basic Detail End */}

                      {/*  Liability Detail start */}
                      <Route exact path="/liability">
                        <Liability />
                      </Route>
                      <Route exact path="/assets">
                        <Assets />
                      </Route>
                      <Route exact path="/additional">
                        <Additional />
                      </Route>
                      {/*  Liability Detail End */}

                      {/*  Policy Detail start */}
                      <Route exact path="/life-insurance">
                        <LifeInsurance />
                      </Route>
                      <Route exact path="/life-insurance-add">
                        <AddLifeInsurance />
                      </Route>
                      <Route exact path="/health-insurance">
                        <HealthInsurance />
                      </Route>
                      <Route exact path="/health-insurance-add">
                        <AddHealthInsurance />
                      </Route>
                      <Route exact path="/ti-cover">
                        <TICover />
                      </Route>
                      <Route exact path="/ti-cover-add">
                        <AddTICover />
                      </Route>
                      <Route exact path="/ci-cover">
                        <CICover />
                      </Route>
                      <Route exact path="/ci-cover-add">
                        <AddCICover />
                      </Route>
                      <Route exact path="/permanent-cover">
                        <PermanentCover />
                      </Route>
                      <Route exact path="/permanent-cover-add-1">
                        <AddPermanentCover1 />
                      </Route>
                      <Route exact path="/permanent-cover-add-2">
                        <AddPermanentCover2 />
                      </Route>
                      <Route exact path="/home-insurance">
                        <HomeInsurance />
                      </Route>
                      <Route exact path="/home-insurance-add-1">
                        <AddHomeInsurance1 />
                      </Route>
                      <Route exact path="/home-insurance-add-2">
                        <AddHomeInsurance2 />
                      </Route>
                      <Route exact path="/motor-vehicle">
                        <MotorVehicle />
                      </Route>
                      <Route exact path="/motor-vehicle-add">
                        <AddMotorVehicle />
                      </Route>
                      <Route exact path="/motor-insurance">
                        <MotorInsurance />
                      </Route>
                      <Route exact path="/motor-insurance-add-1">
                        <AddMotorInsurance1 />
                      </Route>
                      <Route exact path="/motor-insurance-add-2">
                        <AddMotorInsurance2 />
                      </Route>
                      {/*  Policy Detail End */}
                      <Route exact path="/final">
                        <Final />
                      </Route>
                    </Switch>
                  </Router>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
