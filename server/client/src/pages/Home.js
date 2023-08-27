import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:4000/api/user`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));

    user &&
      fetch(`http://localhost:4000/api/user/info/${user?.id}`)
        .then((res) => res.json())
        .then((json) => {
          setCurrUser(json);
          console.log(json, "home73");
        })
        .catch((e) => console.log(e));
  }, [user]);
=======
    fetch("http://localhost:4000/api/user")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(e => console.log(e));

    fetch(`http://localhost:4000/api/user/info/${user?.id}`)
      .then(res => res.json())
      .then(json => {
        setCurrUser(json)
        console.log(json, 'home73');
      })
      .catch(e => console.log(e));
  }, []);
>>>>>>> 3a948bbad46871ff722c12dc64ed219e22d0657d

  return (
    <>
      <div className="px-3 mx-auto max-w-7xl">
<<<<<<< HEAD
        {currUser ? (
          <div className="flex flex-row items-center space-x-4 mx-4 py-2 my-4">
            <Link
              to={`/user/${currUser._id}`}
              className="font-bold text-2xl pb-1"
            >
              {currUser?.fullName}
            </Link>
          </div>
=======
        {currUser ? (<>
          {/* <h3 className="font-bold text-2xl">Feed</h3> */}
          <h3 className="font-bold text-2xl">{currUser?.fullName}</h3>
        </>
>>>>>>> 3a948bbad46871ff722c12dc64ed219e22d0657d
        ) : (
          <h3 className="">Loading...</h3>
        )}
        <div className="m-auto max-w-sm md:max-w-3xl xl:max-w-7xl container">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1280: 3 }}
          >
            <Masonry gutter={"1.5rem"}>
              {data &&
<<<<<<< HEAD
                data
                  .filter((x) => user.id !== x._id)
                  .map((x, index) => {
                    return (
                      <Card
                        key={index}
                        data={x}
                        currUser={currUser}
                        setCurrUser={setCurrUser}
                        className="max-w-[400px]"
                      />
                    );
                  })}
=======
                data.filter(x => user.id !== x._id).map((x, index) => {
                  return (
                    <Card key={index} data={x} currUser={currUser} setCurrUser={setCurrUser} className="max-w-[400px]" />
                  );
                })}
>>>>>>> 3a948bbad46871ff722c12dc64ed219e22d0657d
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
}

export default Home;