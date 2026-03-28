import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>SRM Institute of Science and Technology</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Final-year Computer Science and Engineering student. CGPA: 7.2/10.0.
              Relevant coursework: Data Structures & Algorithms, OOP, DBMS,
              Operating Systems, Computer Networks, System Design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Vulnerability Detection</h4>
                <h5>Academic Project</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and trained a Graph Convolutional Network (GCN) to classify
              Java code vulnerabilities including SQL Injection and XSS. Integrated
              the model into Java runtime via DJL for live code scanning and CI/CD
              pipeline integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics</h4>
                <h5>Deloitte Australia (Virtual)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed consulting-style data analysis tasks via Forage. Built
              interactive Tableau dashboards to visualize KPIs and used Excel
              for data classification, trend analysis, and business insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Spotify Music Pipeline</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built a full-stack real-time pipeline using Flask and Socket.IO
              for automated Spotify playlist downloads. Engineered multi-source
              fallback logic and reduced API overhead by 60%+ through intelligent
              caching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
