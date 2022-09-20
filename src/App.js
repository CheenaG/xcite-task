import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage/mainpage";
import RegisterNowPage from "./components/register/registernowpage";
import PersonalDetails from "./components/personaldetails/personaldetails";
import Education from "./components/Education/education";
import WorkExperience from "./components/workexperience/workexperience";
import Certification from "./components/certification/certification";
import Skills from "./components/skills/skills";
import ProfileLinks from "./components/profilelinks/profilelinks";
import Header from "./components/header/header";
import Landing from "./components/landingpage/landingpage";
import ForEmployers from "./components/Foremployers/foremployers";
import EmployeeReg from "./components/employeeregistration/employeereg";
import EmployeeRegOne from "./components/employeeregistration/emplyeeregone";
import HeaderLandingPage from "./components/landingpage/header_landingpage";
import JobsTitle from "./components/landingpage/jobstitle";
import LoginPrompt from "./components/loginPrompt/loginprompt";
import HeaderViewApp from "./components/viewapplication/header_viewapplication";
import ViewappMain from "./components/viewapp_main/viewapp";

import ViewappProfile from "./components/viewappprof/viewappprof";
import PostJob from "./components/postjob/postjob";
import PostaJob from "./components/postAjob/postajob";
import HeaderpostAJob from "./components/postAjob/header_postajob";
import Employeereg2 from "./components/emp_reg2/employeereg2";
import SignUpPrompt from "./components/emp_signup_prompt/empsignup";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/main" element={<Mainpage />} />
          <Route exact path="/register" element={<RegisterNowPage />} />
          <Route exact path="/personal" element={<PersonalDetails />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/work" element={<WorkExperience />} />
          <Route exact path="/certify" element={<Certification />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/profile" element={<ProfileLinks />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/employers" element={<ForEmployers />} />
          <Route exact path="/employeereg" element={<EmployeeReg />} />
          <Route exact path="/employeeregone" element={<EmployeeRegOne />} />
          <Route exact path="/jobs" element={<JobsTitle />} />
          <Route exact path="/loginprompt" element={<LoginPrompt />} />
          <Route exact path="/headerviewapp" element={<HeaderViewApp />} />
          <Route exact path="/viewappmain" element={<ViewappMain />} />
          <Route exact path="/viewappprofile" element={<ViewappProfile />} />
          <Route exact path="/postjob" element={<PostJob />} />
          <Route exact path="/postajob" element={<PostaJob />} />
          <Route exact path="/headerpostajob" element={<HeaderpostAJob />} />
          <Route exact path="/employeereg2" element={<Employeereg2 />} />
          <Route exact path="/signupprompt" element={<SignUpPrompt />} />
          <Route
            exact
            path="/headerlandingpage"
            element={<HeaderLandingPage />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
