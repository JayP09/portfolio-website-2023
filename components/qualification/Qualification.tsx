import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '@/context/context'
import { changeDateFormat, getYearFromDate } from '@/utils/extraUtils'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)
  const { education, experience } = useAppContext()

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="qualification section" id="">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="sectionTitle">Qualification</h2>
        <span className="sectionSubtitle">My Personal Journey</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="qualification__container max-w-[768px] sectionContainer mx-6 md:mx-auto"
      >
        <div className="qualification__tabs flex justify-center mb-8">
          <div
            className={
              toggleState === 1
                ? 'qualificationButton qualificationActive buttonFlex'
                : 'qualificationButton buttonFlex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="bx bxs-graduation qualificationIcon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualificationButton qualificationActive buttonFlex'
                : 'qualificationButton buttonFlex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="bx bx-briefcase-alt qualificationIcon"></i> Experience
          </div>
        </div>
        <div className="qualification__sections grid grid-cols-[initial] sm:grid-cols-[0.6fr] justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            viewport={{ once: true }}
            className={
              toggleState === 1
                ? 'qualificationContent qualificationContentActive'
                : 'qualificationContent'
            }
          >
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">{education[0].name}</h3>
                <span className="qualificationSubtitle mb-0">
                  {education[0].universityName}
                </span>
                <span className="qualificationSubtitle">{`Percentage - ${education[0].percentage}%`}</span>
                <div className="qualificationcalendar">
                  <i className="bx bxs-calendar-alt"></i>{' '}
                  {`${getYearFromDate(
                    education[0].yearStarted
                  )} - ${getYearFromDate(education[0].yearEnded)}`}
                </div>
              </div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>
            <div className="qualificationData">
              <div></div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>

              <div>
                <h3 className="qualificationTitle">{education[1].name}</h3>
                <span className="qualificationSubtitle mb-0">
                  {education[1].universityName}
                </span>
                <span className="qualificationSubtitle">
                  {`Percentage - ${education[1].percentage}%`}
                </span>
                <div className="qualificationcalendar">
                  <i className="bx bxs-calendar-alt"></i>{' '}
                  {`${getYearFromDate(
                    education[1].yearStarted
                  )} - ${getYearFromDate(education[1].yearEnded)}`}
                </div>
              </div>
            </div>
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">{education[2].name}</h3>
                <span className="qualificationSubtitle mb-0">
                  {education[2].universityName}
                </span>
                <span className="qualificationSubtitle">
                  {`Percentage - ${education[2].percentage}%`}
                </span>
                <div className="qualificationcalendar">
                  <i className="bx bxs-calendar-alt"></i>{' '}
                  {`${getYearFromDate(
                    education[2].yearStarted
                  )} - ${getYearFromDate(education[2].yearEnded)}`}
                </div>
              </div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            viewport={{ once: true }}
            className={
              toggleState === 2
                ? 'qualificationContent qualificationContentActive'
                : 'qualificationContent'
            }
          >
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">{experience[0].jobTitle}</h3>
                <span className="qualificationSubtitle">
                  {experience[0].companyName}
                </span>
                <div className="qualificationcalendar">
                  <i className="bx bxs-calendar-alt"></i>{' '}
                  {`${changeDateFormat(
                    experience[0].dateStarted
                  )} - ${changeDateFormat(experience[0].dateEnded)}`}
                </div>
              </div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>
            <div className="qualificationData">
              <div></div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>

              <div>
                <h3 className="qualificationTitle">{experience[1].jobTitle}</h3>
                <span className="qualificationSubtitle">
                  {experience[1].companyName}
                </span>
                <div className="qualificationcalendar">
                  <i className="bx bxs-calendar-alt"></i>{' '}
                  {`${changeDateFormat(
                    experience[1].dateStarted
                  )} - ${changeDateFormat(experience[1].dateEnded)}`}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Qualification
