import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeadImage from './components/HeadImage';
import SectionTwo from './components/SectionTwo';
import Sectionthree from './components/Sectionthree';
function App() {
  return (
    <div className='w-full' >
  

{/* Header Navbar */}
<Navbar/>
{/* Section Head */}
<HeadImage/>
{/* Section 2 */}
<SectionTwo/>
{/* Section 3 */}
<Sectionthree title={'Inspiration for your next getaway'} data = {'We have curated some amazing experiences to help you find your next getaway.'}/>
{/* Footer */}
      
      </div>
  
  );
}

export default App;
