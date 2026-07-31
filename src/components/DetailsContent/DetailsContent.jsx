
export default function DetailsContent({ post }) {
  const sections = post.content.split("##");

  return (
 
     <div className="details-content">
      <div className="content-intro">
        <p>{sections[0]}</p>
      </div>

      {sections.slice(1).map((section, index) => {
        const lines = section.trim().split("\n\n");

        const title = lines[0];

        const body = lines.slice(1);

        return (
          <div className="content-section" key={index}>
            <h2>
              <i className="fa-solid fa-camera"></i>

              {title}
            </h2>

            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
