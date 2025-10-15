import { useState } from "react";

function AboutUs() {
  const [isExpandded, setIsExpanded] = useState(false);

  const chairpersonText = `Sophia Medical Institute is one of the leading Institute in the city of Gwalior and has achieved new horizons. It was established in the year 1999 with a motto to Impart quality education. Located in posh City Center Area, barely 2KM away from Gwalior Railway Station, With its stupendous college building dominating the View and Glorifying the City. The College has been a Temple of Learning and matter of Pride for the "SOPHIANS".

The college are Affiliated to Jiwaji University and Recognised by Central Council of Homoeopathy New Delhi, Indian Nursing Council, Mahakushal Nursing Council Bhopal, Higher Education and Medical Education Govt. of M.P. and other statutory bodies.The College is managed by a committee of highly professional Educationists and outstanding social activists and is promoted by Swastik Educational and Social Welfare Society, a registered body under M.P. Society Act 1973. It has been working in the field of education for last ten years . The Institute has a successful background of running Diploma, Bachelor Degree and Master Degree Courses in Nursing Education The institute has been Forutnate enough to launch, The Sophia Homoepathic Medical College that impart the BHMS Course.

The Institute endeavors to meet aspirations of Students insuring their future and to equip them with quality education and skill, essential to be a winner for overcoming challenges in life. In the race to win, they need special care, training and able hands to guide. The highly Professional, dedicated and motivated staff members are good support to the institute. The Working environment is very congenial. The teachers- taught relationship is free from anxiety. Apart from the regualar Teaching Period, Faculty members are available to clarify doubts of the students. We pay individual attension to each and every student and cater to care and well being of the wards residing in the college hostels.

It is like a very happy family where students and faculty members work together to achieve the common goal of success and excellence. The institute is proud of the legacy and wish our Students all the very best in life. This has resulted in producing meritorious students and toppers. The institute has been in the forefront of extracurricular activities, competing against the oldest institutions of the city, Recognizing the aspirations of the students the institute has managed to ensure placements Further expansion of the college building, hostel for boys and girls, indoor hospital, herbal garden is under development `;

  return <section id="about-us"></section>;
}

export default AboutUs;

<section
  id="chairperson-desk"
  style={{ backgroundColor: "#d6d6d654" }}
  className="p-5 px-2 px-md-5 text-center w-100"
>
  {/* Container */}
  <div className="container mx-auto" style={{ width: "80%" }}>
    <h2
      className="fw-bold mb-3"
      style={{ textTransform: "uppercase", color: "#e74c3c" }}
    >
      Chairperson's Message
    </h2>
    <div>
      {/* Chairperson's Image floated right */}
      <div
        className="m-3 responsive-float"
        style={{
          float: "right",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
          shapeOutside: "circle()",
          WebkitShapeOutside: "circle()",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)",
          border: "2px solid rgba(0,0,0,0.3)",
        }}
      >
        <Image
          src={`${basePath}/chairperson-img.jpeg`}
          alt="chairperson"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Chairperson's Message */}
      <p
        style={{
          textAlign: "justify",
          fontWeight: "500",
          fontSize: "1.15rem",
        }}
        className="m-0"
      >
        <span style={{ fontSize: "1.5rem" }}>
          <i className="bi bi-quote"></i>
        </span>
        {isExpandded ? chairpersonText : chairpersonText.slice(0, 1500) + "..."}
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
      <button
        style={{
          border: "none",
          outline: "none",
          color: "#e74c3c",
          fontWeight: "700",
          fontSize: "1.2rem",
        }}
        onClick={() => setIsExpanded(!isExpandded)}
      >
        {isExpandded ? "Read less" : "Read More"}
      </button>
    </div>

    {/* Clear float */}
    <div style={{ clear: "both" }}></div>
  </div>
</section>;
