import Image from "next/image";
import Link from "next/link";

async function getTeams() {
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=11"
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return await response.json();
}

async function Teams() {
  const teams = await getTeams();
  return (
    <>
      <div id="teams">
        <div className="container">
          <div className="teams row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            {teams.map(team => {
              return (
                <>
                  <div className="teams_item" key={team.id}>
                    <Link href={`/teams/${team.id}`}>
                      <Image
                        className="img_fluid"
                        width={150}
                        height={150}
                        src={team.thumbnailUrl}
                        alt="Team Image"
                      />
                    </Link>
                    <h6>
                      <Link href={`/teams/${team.id}`}>{team.title}</Link>
                    </h6>
                    <Link className="read_more" href={`/teams/${team.id}`}>
                      read more
                    </Link>
                  </div>
                  {/*teams_item*/}
                </>
              );
            })}
          </div>
          {/*teams*/}
        </div>
        {/*container*/}
      </div>
      {/*teams#*/}
    </>
  );
}

export default Teams;
