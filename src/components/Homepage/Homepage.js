import React from "react";

import Styles from "./Homepage.module.css";
import SidebarDesk from "../Shared/Sidebar/SidebarDesk";
import Header from "../Shared/Header/Header";
import Notices from "../Shared/Notices/Notices";

const notices = [
  {
    title: "notice 1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 252",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnisnostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 1fd",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem! 
          Quidem sint temporibus similique beatae consequatur omnis 
          nostrum asperiores sequi minus`,
    date: "27/09/2021",
  },
  {
    title: "notice 1v3",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. orrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 1vc",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 1re",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. orrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 154",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. orrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 16",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. orrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 1f",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 13",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. orrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 1v",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 1de",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 13",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 143",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem! uidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 143",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. orrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 12",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. orrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnis ostrum asperiores sequi minus",
    date: "27/09/2021",
  },
  {
    title: "notice 1we",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti at sit iure alias nisi asperiores unde ratione eveniet autem!Quidem sint temporibus similique beatae consequatur omnisnostrum asperiores sequi minus",
    date: "27/09/2021",
  },
];

const Homepage = () => {
  return (
    <div className={Styles.container}>
      <SidebarDesk />
      <div className={Styles.mainbody}>
        <Header />
        <div className={Styles.contentBody}>
          <p className={Styles.title}>Notices</p>
          <Notices notices={notices} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
