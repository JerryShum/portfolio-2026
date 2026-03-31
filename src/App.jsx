import { Routes, Route, useLocation } from 'react-router-dom';
import Experience from './experience/Experience';
import LoadingScreen from './components/LoadingScreen';
import TransitionComponent from './components/TransitionComponent';
import NavHelper from './components/NavHelper';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import BlogPage from './pages/BlogPage';
import './app.css';

function App() {
   const location = useLocation();

   return (
      <div className="relative w-full h-screen overflow-hidden">
         <LoadingScreen />
         <NavHelper />

         {/* Background 3D Layer */}
         <div className="absolute inset-0 z-0">
            <Experience />
         </div>

         {/* Foreground UI Layer — left half panel */}
         <div className="absolute left-0 top-0 bottom-0 w-[40%] z-10">
            <TransitionComponent>
               <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/blog" element={<BlogPage />} />
               </Routes>
            </TransitionComponent>
         </div>
      </div>
   );
}

export default App;
