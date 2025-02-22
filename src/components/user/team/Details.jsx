"use client";
import Button from "../../Button";
import Input from "../../Input";
import { useEffect, useState } from "react";
import toaster from "@/utils/toaster";
import Loading from "../../Loading";
import { BiLink, BiSolidCopy } from "react-icons/bi";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

const Details = () => {
  const { data: session } = useSession();

  const defaultTeam = {
    id: "",
    name: "",
  };
  const [load, setLoad] = useState(false);
  const [team, setTeam] = useState(defaultTeam);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({
    ...session.user,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(user.team);
    toaster("Successfully copied team id!", "success");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}user/join/${user.team}`
    );
    toaster("Successfully copied join link!", "success");
  };

  const handleLeave = () => {
    api({
      method: "DELETE",
      url: "/api/members",
    }).then(() => {
      toaster("Successfully left team!", "success");
      setTeam(defaultTeam);
      setUser({ ...user, team: null });
      setLoad(false);
    });
  };

  const handleJoin = () => {
    if (team.id === "") {
      toaster("Enter a Valid Team ID", "error");
      return;
    }
    api({
      method: "PUT",
      url: "/api/members",
      body: { team: team.id },
    }).then((response) => {
      if (response.message !== "OK") {
        toaster(`${response.message}`, "error");
        return;
      }
      toaster("Successfully joined team!", "success");
      setUser({ ...user, team: team.id });
    });
  };

  const handleCreate = () => {
    if (team.name === "") {
      toaster("Enter a Valid Team Name", "error");
      return;
    }
    api({
      method: "POST",
      url: "/api/team",
      body: { team: team },
    }).then(({ items }) => {
      setTeam(items);
      setUser({ ...user, team: items.id });
      toaster("Successfully created a new team!", "success");
      setEdit(false);
      setLoad(true);
    });
  };

  const handleEdit = async () => {
    setEdit(true);
  };

  const handleSave = () => {
    if (!(team.devpost === "" || team.devpost.includes("devpost.com/"))) {
      toaster("Invalid Devpost Link", "error");
      return;
    }

    api({
      method: "PUT",
      url: "/api/team",
      body: team,
    }).then(() => {
      toaster("Successfully Updated!", "success");
      setEdit(false);
    });
  };

  useEffect(() => {
    if (user.team) {
      api({
        method: "GET",
        url: `/api/team?teamid=${user.team}`,
      })
        .then(({ items }) => {
          setTeam(items);
          setLoad(true);
        })
        .catch(({ response: data }) => {
          if (data.message === "Invalid Team ID")
            toaster("Invalid Team ID", "error");
          else toaster("Internal Server Error", "error");
        });
    }
  }, [user.team]);

  return (
    <div className="bg-design-green-300/40  border-2 border-design-green-400 rounded-3xl p-4 gap-3 m-2 overflow-auto max-h-[70vh] flex flex-col justify-center">
      {user.team && !load && <Loading />}
      {user.team && load && (
        <>
          <div className="flex justify-between">
            <Input
              name="name"
              type="text"
              title="Team Name"
              value={team.name}
              user={team}
              editable={edit}
              setUser={setTeam}
              placeholder="N/A"
            />
            <div className="w-full flex justify-end">
              <p className="font-semibold text-right">
                Table: {team.table ?? "No assigned table"}
              </p>
            </div>
          </div>
          <Input
            name="devpost"
            type="text"
            title="Devpost"
            value={team.devpost.replace("https://", "")}
            user={team}
            editable={edit}
            setUser={setTeam}
            placeholder="N/A"
          />
          <div>
            <p className="mb-1 font-semibold">Members</p>
            {team.members.map((member, index) => (
              <p
                className="pl-3 m-0 flex items-center text-[#65717d]"
                key={index}
              >
                {member.name}
                <span className="ml-3 text-[#65717d]">{member.discord}</span>
              </p>
            ))}
          </div>
          <div className="mt-3 pt-2 flex-grow">
            <p className="mb-1 font-semibold">Team ID</p>
            <p className="pl-3 mb-0 flex items-center text-[#65717d]">
              {user.team}
              <BiSolidCopy
                onClick={handleCopy}
                className="text-lg text-gray-400 ml-2 hover:cursor-pointer hover:text-design-orange"
              />
              <BiLink
                onClick={handleCopyLink}
                className="text-lg text-gray-400 ml-2 hover:cursor-pointer hover:text-design-orange"
              />
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              color="greenEdit"
              size="lg"
              text={edit ? "done" : "edit"}
              onClick={edit ? handleSave : handleEdit}
            />
            <Button color="red" size="lg" text="leave" onClick={handleLeave} />
          </div>
        </>
      )}
      {!user.team && team && (
        <div className="flex flex-col justify-start h-full gap-5">
          <div className="">
            <Input
              name="id"
              type="text"
              placeholder="team ID"
              title="Join a Team"
              value={team.id}
              user={team}
              editable={true}
              setUser={setTeam}
            />
            <Button color="red" size="lg" text="join" onClick={handleJoin} />
          </div>
          <div className="">
            <Input
              name="name"
              type="text"
              placeholder="team name"
              title="Create a Team"
              value={team.name}
              user={team}
              editable={true}
              setUser={setTeam}
            />
            <Button
              color="red"
              size="lg"
              text="create"
              onClick={handleCreate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
