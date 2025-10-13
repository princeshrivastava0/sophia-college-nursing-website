import { useState } from "react";
import { useRouter } from "next/router";

function Courses() {
  const router = useRouter();
  const { basePath } = router;
  const [isExpandded, setIsExpanded] = useState({});

  const toggleExpand = (index) => {
    setIsExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const CourseList = [
    {
      title: "GNM - General Nursing and Midwifery",
      intro:
        "GNM stands for General Nursing and Midwifery. It is a 3½ years long Diploma program. Academic program is 3 years long and 6 months are dedicated towards internship. In this article, you will be reading about GNM course details, eligibility criteria, admission process, syllabus, pg courses & advanced studies, career prospects and job profiles available after completing the course. Nursing is a noble profession. It is a promising area offering diverse job opportunities to male and female aspirants. Nursing is an integral part of healthcare sector. Nurses play an important role in the smooth functioning of various healthcare setups.",
      seats: "60",
      eligibility:
        "According to the website of Indian Nursing Council, 10+2 Science stream Biology group (PCB) passed students are the most preferred ones. However, it has also been mentioned that 10+2 Arts stream passed students are also eligible to pursue this course. Minimum aggregate marks required may vary from one institute to another. Usually, it is around 40-50% marks.",
      admission_procedure:
        "Most institutes follow the direct admission process. Seats are allotted to deserving applicants based on the marks scored by them in 10+2 board examination. In case of some reputed institutes, private screening tests and interviews are also used in admission process.",
      duration:
        "The course is 3½ years long. Academic program is of 3 years and 6 months are dedicated towards internship. Internship is mandatory.",
    },
    {
      title: "B.Sc. - Nursing",
      intro:
        "B.Sc. Nursing course is a job oriented course that can be pursued by students who have completed 10+2 (Science stream, with PCB subjects) from a recognized board. This article covers vital course details such as duration, eligibility criteria, admission process, syllabus and career prospects. Nursing aspirants will find this article very informative and useful. If you are interested in the profession of nursing, the details mentioned in this article will help you make an informed choice. B.Sc. Nursing Nurses are trained healthcare professionals who are capable of taking care of patients, treating them and assisting Doctors in treatment and surgery. A qualified RN (Registered Nurse) is capable of providing preventive, promotive, curative and rehabilitative services to patients (individuals) and communities. Nurses usually work under qualified Doctors. They are also capable of making independent decisions when such a situation arrives. Nurses usually work in healthcare setups such as hospitals (Government and Private), clinics, nursing homes & NGOs. They are also capable of providing services at rural & community level healthcare initiatives and schemes. Nursing is a noble profession. Nurses bring relief into the lives of patients! It is a challenging and satisfying job. Apart from that, the job is also financially rewarding.",
      seats: "60",
      eligibility:
        "Students who have passed 10+2 (Science stream- with Physics, Chemistry and Biology subjects) from a recognized board are eligible to pursue this course. Minimum aggregate marks criteria may exist.",
      admission_procedure:
        "Reputed institutes follow merit based admission process. Under this scheme, marks scored by students in 10+2 board examination and/or relevant entrance test (national, state or institute-wise) are taken into consideration. Seats are allotted to deserving candidates on the basis of merit marks obtained by them.",
      duration: "B.Sc. Nursing course is 4 years long.",
    },
    {
      title: "M.Sc. - Nursing",
      intro:
        "M.Sc Nursing is a post-graduation degree course that comes under healthcare. The course duration is 2 years. Eligibility to apply for the course is qualifying B.Sc Nursing under graduation from any recognized university. The main goal of M.Sc Nursing is to serve patients with confidence, care, and patience. A requirement of Nurses is more because doctors need assistance in treating patients. M.Sc Nursing students work in Healthcare as Nurse in-charge, Nurse Supervisor, Clinical Instructor, Occupational Health Nurse, etc.",
      seats: "20",
      eligibility:
        "Students who have passed 10+2 (Science stream- with Physics, Chemistry and Biology subjects) from a recognized board are eligible to pursue this course. Minimum aggregate marks criteria may exist.",
      admission_procedure:
        "Reputed institutes follow merit based admission process. Under this scheme, marks scored by students in 10+2 board examination and/or relevant entrance test (national, state or institute-wise) are taken into consideration. Seats are allotted to deserving candidates on the basis of merit marks obtained by them.",
      duration:
        "The duration of M.Sc in Nursing is mostly of two academic years but it varies from institute to institute.",
    },
    {
      title: "P.B.B.Sc. - Post Basic Nursing",
      intro:
        "M.Sc Nursing is a post-graduation degree course that comes under healthcare. The course duration is 2 years. Eligibility to apply for the course is qualifying B.Sc Nursing under graduation from any recognized university. The main goal of M.Sc Nursing is to serve patients with confidence, care, and patience. A requirement of Nurses is more because doctors need assistance in treating patients. M.Sc Nursing students work in Healthcare as Nurse in-charge, Nurse Supervisor, Clinical Instructor, Occupational Health Nurse, etc.",
      seats: "20",
      eligibility:
        "Students who have passed 10+2 (Science stream- with Physics, Chemistry and Biology subjects) from a recognized board are eligible to pursue this course. Minimum aggregate marks criteria may exist (in case of some institutes).",
      admission_procedure:
        "Reputed institutes follow merit based admission process. Under this scheme, marks scored by students in 10+2 board examination and/or relevant entrance test (national, state or institute-wise) are taken into consideration. Seats are allotted to deserving candidates on the basis of merit marks obtained by them.",
      duration:
        "The duration of M.Sc in Nursing is mostly of two academic years but it varies from institute to institute",
    },
  ];
  return (
    <>
      <style jsx>{`
        .heading {
          text-align: left;
          font-size: 2.5rem;
          width: 80%;
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        }

        .details-container {
          width: 90%;
        }

        .intro-text-btn {
          border: none;
          outline: none;
          color: #e74c3c;
          font-weight: 700;
          font-size: 1.2rem;
          background: none;
        }

        .course-main-details {
          text-align: center;
          width: 100%;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
          background-color: #2c3e50;
          color: #fff;
          padding: 0.5rem 1rem;
        }

        .application-form {
          border: none;
          outline: none;
          font-weight: 700;
          background-color: #e74c3c;
          color: #fff;
          letter-spacing: 0.15rem;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in;
          font-size: 1rem;
          text-transform: uppercase;
          display: inline-block;
        }

        .application-form:hover {
          box-shadow: 0 0px 24px rgba(0, 0, 0, 0.5);
          transform: scale(1.1);
        }

        // for small mobile screens - reduced text size
        @media screen and (max-width: 350px) {
          .heading {
            font-size: 1.5rem !important;
            width: 90% !important;
          }
        }

        @media screen and (max-width: 991.98px) {
          .course-table > * {
            width: 100% !important;
            text-align: center !important;
          }

          .heading {
            text-align: center;
            font-size: 2rem;
          }

          .mobile-heading {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
      <section
        id="courses"
        style={{
          paddingTop: "100px",
        }}
      >
        {/* Heading */}
        <h2 className="fw-bold m-0 pt-lg-5 pt-4 pb-3 ps-lg-3 mx-auto heading">
          Courses Offered
        </h2>

        {/* Application Form */}
        <div className="text-center my-md-5 mt-4 px-md-3">
          <a
            href={`${basePath}/documents/admission-form.pdf`}
            className="application-form p-3 px-4 rounded-4 text-decoration-none"
            rel="noopener noreferrer"
            title="Download Application Form"
          >
            Application Form
          </a>
        </div>

        {/* Details Container */}
        <div className="details-container mx-auto my-md-5 my-4 px-md-3">
          {CourseList.map((course, index) => {
            return (
              <div
                key={`course-${index}`}
                className="my-md-5 mt-4 mb-5 rounded-4 shadow"
                style={{
                  overflow: "hidden",
                  border: "1px solid #e74d3c73",
                  backgroundColor: "rgba(145, 132, 132, 0.15)",
                }}
              >
                {/* Course Heading */}
                <h3
                  className="py-3 fw-bold mobile-heading m-0 text-center"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "1px",
                    cursor: "default",
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                  }}
                >
                  {course.title}
                </h3>

                {/* Course Intro */}
                <div className="text-center my-4">
                  <p
                    className="px-md-5 px-3 m-0"
                    style={{
                      textAlign: "justify",
                      fontSize: "1.15rem",
                      fontWeight: "500",
                    }}
                  >
                    {isExpandded[index]
                      ? course.intro
                      : course.intro.slice(0, 400) + "..."}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="intro-text-btn"
                  >
                    {isExpandded[index] ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* course main-details */}
                <div
                  className="mb-4 d-flex flex-column flex-lg-row course-table"
                  style={{ overflow: "auto" }}
                >
                  <div
                    style={{
                      width: "15%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="course-main-details d-inline-block">
                      Intake
                    </span>
                    <span className="px-3 py-2 m-auto">{course.seats}</span>
                  </div>

                  <div
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="course-main-details d-inline-block">
                      Eligibility
                    </span>
                    <span className="px-3 py-2 m-auto">
                      {course.eligibility}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="course-main-details d-inline-block">
                      Admission Procedure
                    </span>
                    <span className="px-3 py-2 m-auto">
                      {course.admission_procedure}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "15%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="course-main-details d-inline-block">
                      Duration
                    </span>
                    <span className="px-3 py-2 m-auto">{course.duration}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Courses;
