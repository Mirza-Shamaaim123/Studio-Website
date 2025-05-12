import type React from "react";

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

interface PartnersSectionProps {
  subtitle?: string;
  title?: string;
  partners?: Partner[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  subtitle = "JOIN THE LEADERS",
  title = "Our partners",
  partners = [
    {
      name: "KFK",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "KFK Logo",
    },
    {
      name: "DKO",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "DKO Logo",
    },
    {
      name: "Milieu",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "Milieu Logo",
    },
    {
      name: "Assemble",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "Assemble Logo",
    },
    {
      name: "PVA",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "PVA Logo",
    },
    {
      name: "FIELDWORK",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "FIELDWORK Logo",
    },
    {
      name: "MAIN PROJECTS",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "MAIN PROJECTS Logo",
    },
    {
      name: "MHNDU",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "MHNDU Logo",
    },
    {
      name: "PS",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "PS Logo",
    },
    {
      name: "Eldridge Anderson",
      logo: "https://images.prismic.io/cuub/2a43a824-4b52-402a-823f-a7506a0d1e8d_1.png?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=134",
      alt: "Eldridge Anderson Logo",
    },
  ],
}) => {
  // Calculate how many partners to show per row
  const firstRowCount = Math.ceil(partners.length / 2);
  const firstRow = partners.slice(0, firstRowCount);
  const secondRow = partners.slice(firstRowCount);

  return (
    <div className="parent-services-faq-unique-container">
      <div className="partners-section-container">
        <div className="partners-section-content">
          <p className="partners-section-subtitle">{subtitle}</p>
          <h2 className="partners-section-title">{title}</h2>

          <div className="partners-section-logos">
            <div className="partners-section-row">
              {firstRow.map((partner, index) => (
                <div
                  key={`partner-1-${index}`}
                  className="partners-section-logo-item"
                >
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="partners-section-logo"
                  />
                </div>
              ))}
            </div>

            <div className="partners-section-row">
              {secondRow.map((partner, index) => (
                <div
                  key={`partner-2-${index}`}
                  className="partners-section-logo-item"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.alt}
                    className="partners-section-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
