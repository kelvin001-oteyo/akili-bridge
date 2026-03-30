import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Apply from "./pages/Apply";
import Labs from "./pages/Labs";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

// Sub-pages
import GetToKnowUs from "./pages/about/GetToKnowUs";
import WhoWeAre from "./pages/about/WhoWeAre";
import MissionPurpose from "./pages/about/MissionPurpose";
import Fellowship from "./pages/whatwedo/Fellowship";
import TrainingWorkshops from "./pages/whatwedo/TrainingWorkshops";
import ForFellows from "./pages/apply/ForFellows";
import ForMentors from "./pages/apply/ForMentors";
import UndergraduateAssistant from "./pages/careers/UndergraduateAssistant";
import CareersApplication from "./pages/careers/CareersApplication";

// Dashboards
import AdminDashboard from "./pages/admin/AdminDashboard";
import Dashboard from "./pages/Dashboard";   // ✅ Unified user dashboard

// Auth
import Auth from "./pages/Auth";

// Protected route wrappers
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/get-to-know-us" element={<GetToKnowUs />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/mission-purpose" element={<MissionPurpose />} />

        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/what-we-do/fellowship" element={<Fellowship />} />
        <Route path="/what-we-do/training" element={<TrainingWorkshops />} />

        <Route path="/apply" element={<Apply />} />
        <Route path="/apply/fellows" element={<ForFellows />} />
        <Route path="/apply/mentors" element={<ForMentors />} />

        <Route path="/labs" element={<Labs />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/undergraduate" element={<UndergraduateAssistant />} />
        <Route path="/careers/application" element={<CareersApplication />} />

        <Route path="/news" element={<News />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Auth routes */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} /> {/* alias */}

        {/* User Dashboard (now public) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin Dashboard (still protected) */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default App;
