import React from 'react';
import '../styles/About.css'; // Assuming you have a CSS file for styles

const AboutPage = () => {
  const technicalHighlights = [
    {
      title: "Enhanced Cybersecurity",
      description: "Advanced security protocols to protect your business data"
    },
    {
      title: "Cloud-Based Scalability",
      description: "Flexible infrastructure that grows with your business"
    },
    {
      title: "Seamless Integrations",
      description: "Connect with existing systems effortlessly"
    },
    {
      title: "AI-Powered Insights",
      description: "Smart analytics for data-driven decision making"
    },
    {
      title: "Secure Payment Gateways",
      description: "Reliable and secure transaction processing"
    },
    {
      title: "Mobile-Friendly Interfaces",
      description: "Access your business tools anywhere, anytime"
    }
  ];

  const challenges = [
    {
      title: "Inefficiencies",
      description: "Manual processes consume time and resources, leaving little room for strategic initiatives."
    },
    {
      title: "Data Silos",
      description: "Disconnected systems make it challenging to access and analyze critical information."
    },
    {
      title: "Human Errors",
      description: "Repetitive tasks increase the likelihood of mistakes, impacting productivity and profitability."
    },
    {
      title: "Scalability Issues",
      description: "As businesses grow, outdated systems fail to support the increased complexity of operations."
    }
  ];

  return (
    <div className="aboutPageWrapper">
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContainer">
          <h1 className="heroTitle">
            <span className="companyName">Simplertechnologies</span>
            <span className="heroSubtitle">Pioneering ERP and Management Software Solutions for Modern Businesses</span>
          </h1>
          <p className="heroDescription">
            In the ever-evolving landscape of technology, businesses today face unprecedented challenges and opportunities. 
            To thrive in this dynamic environment, enterprises need innovative tools that simplify their operations and 
            empower them to achieve more.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="missionSection">
        <div className="container">
          <div className="missionContent">
            <h2 className="sectionTitle">Our Mission</h2>
            <p className="missionText">
              At Simplertechnologies, we specialize in developing ERP (Enterprise Resource Planning) and management 
              software solutions designed to meet the unique needs of modern businesses. Our mission is to deliver 
              intuitive, scalable, and accessible tools that help companies optimize their processes, enhance 
              productivity, and focus on their core objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="visionSection">
        <div className="container">
          <h2 className="sectionTitle">Our Vision: Simplifying Complexity Through Technology</h2>
          <div className="visionContent">
            <div className="visionText">
              <p>
                Simplertechnologies was established with a singular goal: to simplify the complexities of business 
                management through cutting-edge ERP and management software solutions. We recognize that every business 
                is unique, with its own set of challenges and requirements.
              </p>
              <p>
                Our vision extends beyond merely developing software. We aim to create an ecosystem where technology 
                acts as an enabler, allowing businesses to innovate, grow, and succeed without being bogged down by 
                operational inefficiencies.
              </p>
              <p>
                By harnessing the latest advancements in technology, such as artificial intelligence, machine learning, 
                and cloud computing, we ensure that our clients remain ahead of the curve in an increasingly competitive 
                marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights Section */}
      <section className="highlightsSection">
        <div className="container">
          <h2 className="sectionTitle">Technological Highlights</h2>
          <div className="highlightsGrid">
            {technicalHighlights.map((highlight, index) => (
              <div key={index} className="highlightCard">
                <h3 className="highlightTitle">{highlight.title}</h3>
                <p className="highlightDescription">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ERP Matters Section */}
      <section className="whyErpSection">
        <div className="container">
          <h2 className="sectionTitle">Why ERP and Management Software Matters?</h2>
          <div className="erpContent">
            <p className="erpIntro">
              ERP and management software serve as the backbone of modern enterprises, enabling them to coordinate 
              various functions such as operations, finance, supply chain, human resources, and customer relationships. 
              Without an efficient system, businesses often struggle with:
            </p>
            
            <div className="challengesGrid">
              {challenges.map((challenge, index) => (
                <div key={index} className="challengeCard">
                  <h3 className="challengeTitle">{challenge.title}</h3>
                  <p className="challengeDescription">{challenge.description}</p>
                </div>
              ))}
            </div>

            <div className="solutionText">
              <p>
                At Simplertechnologies, we address these pain points by providing comprehensive ERP and management 
                software solutions that streamline workflows, integrate data, and automate routine tasks. Our tools 
                not only enhance operational efficiency but also provide actionable insights, enabling businesses to 
                make informed decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="ctaSection">
        <div className="container">
          <div className="ctaContent">
            <h2 className="ctaTitle">Join the Simplertechnologies Revolution</h2>
            <p className="ctaDescription">
              Simplertechnologies is more than just a software company—we're a partner in your success. Our ERP and 
              management software solutions empower businesses to achieve their full potential by streamlining 
              operations, enhancing productivity, and driving innovation.
            </p>
            <p className="ctaSubtext">
              Explore how Simplertechnologies can transform your business. Contact us today and take the first step 
              toward a smarter, more efficient future.
            </p>
            <div className="ctaButtons">
              <button className="ctaPrimary">Contact Us Today</button>
              <button className="ctaSecondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;