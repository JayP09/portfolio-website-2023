import React, { useState } from 'react'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="qualification section" id="">
      <h2 className="sectionTitle">Qualification</h2>
      <span className="sectionSubtitle">My Personal Journey</span>
      <div className="qualification__container max-w-[768px] sectionContainer mx-6 md:mx-auto">
        <div className="qualification__tabs flex justify-center mb-8">
          <div 
            className={toggleState === 1 ? "qualificationButton qualificationActive buttonFlex":"qualificationButton buttonFlex"}
            onClick={() => toggleTab(1)}
          >
            <i className='bx bxs-graduation qualificationIcon'></i> Education
          </div>

          <div 
            className={toggleState === 2 ? "qualificationButton qualificationActive buttonFlex":"qualificationButton buttonFlex"}
            onClick={() => toggleTab(2)}
          >
            <i className='bx bx-briefcase-alt qualificationIcon'></i> Experience
          </div>
        </div>
        <div className="qualification__sections grid grid-cols-[initial] sm:grid-cols-[0.6fr] justify-center">
          <div 
            className={toggleState === 1 ? "qualificationContent qualificationContentActive": "qualificationContent"}
          >
            <div className='qualificationData'>
              <div>
                <h3 className="qualificationTitle">Bachelor of Engineering</h3>
                <span className='qualificationSubtitle mb-0'>University of mumbai</span>
                <span className='qualificationSubtitle'>CGPA - 8.81</span>
                <div className='qualificationcalendar'>
                  <i className='bx bxs-calendar-alt' ></i> 2018-2022
                </div>
              </div>
              <div>
                <span className='qualificationRounder'>
                  
                </span>
                <span className='qualificationLine'></span>
              </div>
            </div>
            <div className='qualificationData'>
              <div></div>
              <div>
                <span className='qualificationRounder'></span>
                <span className='qualificationLine'></span>
              </div>

              <div>
                <h3 className="qualificationTitle">12th</h3>
                <span className='qualificationSubtitle mb-0'>Maharashtra - India</span>
                <span className='qualificationSubtitle'>Percentage - 64.15%</span>
                <div className='qualificationcalendar'>
                  <i className='bx bxs-calendar-alt' ></i> 2017 - 2018
                </div>
              </div>
              
            </div>

            <div className='qualificationData'>
              <div>
                <h3 className="qualificationTitle">10th Class</h3>
                <span className='qualificationSubtitle mb-0'>Maharashtra - India</span>
                <span className='qualificationSubtitle'>Percentage - 86.80%</span>
                <div className='qualificationcalendar'>
                  <i className='bx bxs-calendar-alt' ></i> 2015 - 2016
                </div>
              </div>
              <div>
                <span className='qualificationRounder'></span>
                <span className='qualificationLine'></span>
              </div>
            </div>
          </div>

          <div 
            className={toggleState === 2 ? "qualificationContent qualificationContentActive": "qualificationContent"}
          >
            <div className='qualificationData'>
              <div>
                <h3 className="qualificationTitle">Full-Stack Developer</h3>
                <span className='qualificationSubtitle'>Dustecosystem</span>
                <div className='qualificationcalendar'>
                  <i className='bx bxs-calendar-alt' ></i> 08/2022 - 10/2022
                </div>
              </div>
              <div>
                <span className='qualificationRounder'>
                  
                </span>
                <span className='qualificationLine'></span>
              </div>
            </div>
            <div className='qualificationData'>
              <div></div>
              <div>
                <span className='qualificationRounder'></span>
                <span className='qualificationLine'></span>
              </div>

              <div>
                <h3 className="qualificationTitle">Full-stack developer</h3>
                <span className='qualificationSubtitle'>Startup</span>
                <div className='qualificationcalendar'>
                  <i className='bx bxs-calendar-alt' ></i> 03/2021 - 05/2021
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification