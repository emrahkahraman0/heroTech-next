import Image from "next/image";

async function getTeam(slug) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${slug}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user with user`);
  }

  return response.json();
}

async function TeamsDetails({ params: { slug } }) {
  const teamData = await getTeam(slug);
  return (
    <>
      <div id="teams_details">
        <div className="container">
          <div className="teams_details align_items row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="teams_details_image">
              <Image
                className="img_fluid"
                width={600}
                height={600}
                src={teamData.url}
                alt="Team Image"
              />
            </div>
            {/*teams_details_image*/}
            <div className="teams_details_text">
              <h6>{teamData.title}</h6>
            </div>
            {/*teams_details_text*/}
          </div>
          {/*teams_details*/}
        </div>
        {/*container*/}
      </div>
      {/*teams_details#*/}
      <b></b>
      <br />
    </>
  );
}

export default TeamsDetails;
