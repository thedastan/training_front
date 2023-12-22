import React, { useEffect, useState } from "react";
import Button from "../ui/button/Button";

export default function AdminHeader() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    setUser(data);
  }, []);

  return (
    <div className="container">
      <div className="flex justify-end items-center gap-3 py-5">
        <h3 className="text-2xl">{user?.email}</h3>
        <Button>Выйти</Button>
      </div>
    </div>
  );
}
