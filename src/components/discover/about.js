function AboutUs() {
  const collegeInfoTable = [
    {
      title: "Institution",
      info: "Sophia Homoeopathic Medical College and Research Institute",
    },
    {
      title: "Year of Establishment",
      info: "2002",
    },
    {
      title: "Recognition",
      info: `1) Central Council of Homoeopathy (New Delhi)
2) Higher Education, Government of Madhya Pradesh
3) Department of AYUSH – Government of India`,
    },
    {
      title: "Affiliation",
      info: "Madhya Pradesh Medical Science University, Jabalpur",
    },
    {
      title: "Course of Study",
      info: "B.H.M.S (Bachelor of Homoeopathic Medicine and Surgery)",
    },
    {
      title: "Course Duration",
      info: "5 ½ years including 1 year compulsory internship",
    },
    {
      title: "No. of Seats",
      info: "100 Seats",
    },
    {
      title: "Eligibility for Admission",
      info: "Through NEET Exam or 10+2 (Science) with minimum 50%",
    },
    {
      title: "Age at Admission Time",
      info: "Not less than 17 years",
    },
    {
      title: "Academic Session",
      info: "As per instruction by C.C.H & University",
    },
    {
      title: "Medium of Instruction",
      info: "English & Hindi",
    },
    {
      title: "College Hours",
      info: "10:00 AM to 05:00 PM",
    },
    {
      title: "Infrastructure",
      info: `Well-equipped laboratories and departments, Well-furnished classrooms & seminar hall`,
    },
    {
      title: "Facilities",
      info: `• Audio Visual Aid for Teaching
             • Distinguished and Experienced Faculty
             • Training Hospital and Peripheral O.P.D
             • Well-stocked and Spacious Library
             • Girls Hostel – 100 Seats
             • Transport Facilities – By College Bus
             • Scholarship
             • Railway and Other Concession Facilities`,
    },
    {
      title: "Personality Development Programme",
      info: "Available",
    },
    {
      title: "N.S.S., Sports and Co-curricular Activities",
      info: "Available",
    },
    {
      title: "Result of Examination",
      info: "72% (average of last three years)",
    },
  ];
  return (
    <>
      <style jsx>{`
        .about-article {
          font-weight: 500;
          font-size: 1.15rem;
        }

        .info-table {
          width: 90%;
          max-width: 900px;
          margin: 0 auto;
          border-collapse: collapse;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .info-row {
          display: grid;
          grid-template-columns: 30% 70%;
          padding: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
        }

        .info-row:nth-child(even) {
          background: #f9f9f9;
        }

        .info-title {
          font-weight: 600;
          color: #e74c3c;
          text-transform: uppercase;
          font-size: 1rem;
        }

        .info-text {
          white-space: pre-line;
          color: #222;
          font-size: 1rem;
        }

        @media screen and (max-width: 768px) {
          .info-row {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .info-title {
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }

          .info-text {
            font-size: 0.95rem;
          }
        }

        @media screen and (max-width: 400px) {
          .info-title {
            font-size: 0.9rem;
          }
          .info-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
      <section id="about-us" style={{}}>
        {/* About Article */}
        <div style={{ textAlign: "justify" }}>
          <p className="about-article">
            <span style={{ fontSize: "1.5rem" }}>
              <i className="bi bi-quote"></i>
            </span>
            Sophia Medical Institute is one of the leading Institute in the city
            of Gwalior and has achieved new horizons. It was established in the
            year 1999 with a motto to Impart quality education. Located in posh
            City Center Area, barely 2KM away from Gwalior Railway Station, With
            its stupendous college building dominating the View and Glorifying
            the City. The College has been a Temple of Learning and matter of
            Pride for the "SOPHIANS".
          </p>
          <p className="about-article">
            The college are Affiliated to Jiwaji University and Recognised by
            Central Council of Homoeopathy New Delhi, Indian Nursing Council,
            Mahakushal Nursing Council Bhopal, Higher Education and Medical
            Education Govt. of M.P. and other statutory bodies.The College is
            managed by a committee of highly professional Educationists and
            outstanding social activists and is promoted by Swastik Educational
            and Social Welfare Society, a registered body under M.P. Society Act
            1973. It has been working in the field of education for last ten
            years . The Institute has a successful background of running
            Diploma, Bachelor Degree and Master Degree Courses in Nursing
            Education The institute has been Forutnate enough to launch, The
            Sophia Homoepathic Medical College that impart the BHMS Course.
          </p>

          <p className="about-article">
            The Institute endeavors to meet aspirations of Students insuring
            their future and to equip them with quality education and skill,
            essential to be a winner for overcoming challenges in life. In the
            race to win, they need special care, training and able hands to
            guide. The highly Professional, dedicated and motivated staff
            members are good support to the institute. The Working environment
            is very congenial. The teachers- taught relationship is free from
            anxiety. Apart from the regualar Teaching Period, Faculty members
            are available to clarify doubts of the students. We pay individual
            attension to each and every student and cater to care and well being
            of the wards residing in the college hostels.
          </p>
          <p className="about-article">
            It is like a very happy family where students and faculty members
            work together to achieve the common goal of success and excellence.
            The institute is proud of the legacy and wish our Students all the
            very best in life. This has resulted in producing meritorious
            students and toppers. The institute has been in the forefront of
            extracurricular activities, competing against the oldest
            institutions of the city, Recognizing the aspirations of the
            students the institute has managed to ensure placements Further
            expansion of the college building, hostel for boys and girls, indoor
            hospital, herbal garden is under development.
            <span
              style={{
                fontSize: "1.5rem",
                display: "inline-block",
                transform: "scaleX(-1)",
              }}
            >
              <i className="bi bi-quote"></i>
            </span>
          </p>
        </div>

        {/* Information About College*/}
        <div className="info-table">
          {collegeInfoTable.map((item, index) => (
            <div key={`info-table-${index}`} className="info-row">
              <div className="info-title">{item.title}</div>
              <div className="info-text">{item.info}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
