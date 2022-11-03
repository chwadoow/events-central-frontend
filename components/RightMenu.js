import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Menu, Avatar, Grid, Dropdown } from "antd";

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    fetch(`http://localhost:3000/users/${session}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);
  let router = useRouter();
  function redirect() {
    router.push("/");
  }

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        localStorage.clear();
        redirect();
        alert("logged out");
      }
    });
  };

  const { md } = useBreakpoint();

  const menu = (
    <Menu>
      {Boolean(userData) === true ? (
        " "
      ) : (
        <Menu.Item>
          <a href="/login">Login</a>
        </Menu.Item>
      )}

      {Boolean(userData) == true ? (
        <Menu.Item>
          <a href="/userprofile">View Profile</a>
        </Menu.Item>
      ) : (
        " "
      )}

      {Boolean(userData) == true ? (
        <Menu.Item>
          <a onClick={handleLogout}>Logout</a>
        </Menu.Item>
      ) : (
        " "
      )}
    </Menu>
  );

  return (
    <Menu overflowedIndicator mode={md ? "horizontal" : "inline"}>
      <Menu.Item>
        <a href="/">
          <b>Home</b>
        </a>
      </Menu.Item>

      {userData.is_organiser ? (
        <Menu.Item>
          <a href="/createvent">
            <b>Create an Event</b>
          </a>
        </Menu.Item>
      ) : (
        " "
      )}

      <Menu.Item>
        <a href="/about">
          <b>About Us</b>
        </a>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
            {/* <Link  href={`/userprofile`}> */}
            <Avatar size={50} icon={<UserOutlined />} />
            {/* </Link> */}
          </Dropdown>
        </div>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
