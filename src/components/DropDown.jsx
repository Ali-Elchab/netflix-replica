import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/drop-down.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleDropdown = (itemId) => {
    setOpenItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  const getDescriptionVisibility = (itemId) => {
    return openItemId === itemId ? "visible" : "hidden";
  };

  const items = [
    {
      id: 1,
      title: "What is Netflix?",
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      title: "How much does Netflix cost?",
      description:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD9.99 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      title: "Where can I watch?",
      description:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      title: "How do I cancel?",
      description:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      title: "What can I watch on Netflix?",
      description:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      title: " Is Netflix good for kids?",
      description:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <div className="dropdownContainer">
      <p>Frequently Asked Questions</p>
      {items.map((item) => (
        <div key={item.id} className="key">
          <div className="faqColumn">
            <button
              className="buttonContainer"
              onClick={() => toggleDropdown(item.id)}
            >
              {item.title}
            </button>

            <button
              className="toggleButton"
              onClick={() => toggleDropdown(item.id)}
            >
              {openItemId === item.id ? "x" : "+"}
            </button>
          </div>

          <CSSTransition
            in={openItemId === item.id}
            timeout={20}
            classNames="dropdown"
            unmountOnExit
          >
            <div
              className="dropDown"
              style={{ visibility: getDescriptionVisibility(item.id) }}
            >
              <p>{item.description}</p>
            </div>
          </CSSTransition>
        </div>
      ))}
      <div className="downText">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="emailSubmit">
        <input type="text" placeholder="Email address" />
        <Link to="/movieslist" className="startedButtonLink">
          <button className="startedButton">Get Started &gt; </button>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
