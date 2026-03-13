import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Activities from './pages/Activities'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Results from './pages/Results'

import MissionGoal from './pages/MissionGoal'
import Campus from './pages/Campus'
import Methodology from './pages/Methodology'
import Assessment from './pages/Assessment'
import LeaveApplications from './pages/LeaveApplications'
import ValueEducation from './pages/ValueEducation'
import MentalAbility from './pages/MentalAbility'
import Assembly from './pages/Assembly'
import Yoga from './pages/Yoga'
import Games from './pages/Games'
import Clubs from './pages/Clubs'
import Karate from './pages/Karate'
import Aerobics from './pages/Aerobics'
import PrefectorialSystem from './pages/PrefectorialSystem'
import MentoringCounselling from './pages/MentoringCounselling'
import Transport from './pages/Transport'
import CareerGuidance from './pages/CareerGuidance'
import Library from './pages/Library'
import TeachingAV from './pages/TeachingAV'
import Labs from './pages/Labs'
import Souvenir from './pages/Souvenir'
import Videos from './pages/Videos'
import StudentCommittee from './pages/StudentCommittee'
import Archive from './pages/Archive'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/results" element={<Results />} />

        <Route path="/mission-goal" element={<MissionGoal />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/leave-applications" element={<LeaveApplications />} />
        <Route path="/value-education" element={<ValueEducation />} />
        <Route path="/mental-ability" element={<MentalAbility />} />
        <Route path="/assembly" element={<Assembly />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/games" element={<Games />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/karate" element={<Karate />} />
        <Route path="/aerobics" element={<Aerobics />} />
        <Route path="/prefectorial-system" element={<PrefectorialSystem />} />
        <Route path="/mentoring-counselling" element={<MentoringCounselling />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/library" element={<Library />} />
        <Route path="/teaching-av" element={<TeachingAV />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/souvenir" element={<Souvenir />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/student-committee" element={<StudentCommittee />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App