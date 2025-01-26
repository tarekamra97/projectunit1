import React from "react";
import Card from "./Card";
import "./CardList.css";

const resources = [
    {
      id: 1,
      title: "React Documentation",
      link: "https://react.dev",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 2,
      title: "JavaScript Info",
      link: "https://javascript.info",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      id: 3,
      title: "MDN Web Docs",
      link: "https://developer.mozilla.org",
      image: "https://pbs.twimg.com/media/Ezp-1wTX0AILbq3.jpg",
    },
    {
      id: 4,
      title: "CSS Tricks",
      link: "https://css-tricks.com",
      image: "https://css-tricks.com/apple-touch-icon.png",
    },
    {
      id: 5,
      title: "Frontend Masters",
      link: "https://frontendmasters.com",
      image: "https://frontendmasters.com/static-assets/workshops/default-thumbnail.png",
    },
    {
      id: 6,
      title: "Tailwind CSS",
      link: "https://tailwindcss.com",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*_6ooq0R60ba3UT5c-QVemA.png",
    },
    {
      id: 7,
      title: "Web.dev",
      link: "https://web.dev",
      image: "https://web.dev/images/social-wide.jpg",
    },
    {
      id: 8,
      title: "CodePen",
      link: "https://codepen.io",
      image: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png",
    },
    {
      id: 9,
      title: "FreeCodeCamp",
      link: "https://freecodecamp.org",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
    },
    {
      id: 10,
      title: "JavaScript 30",
      link: "https://javascript30.com",
      image: "https://assets.leetcode.com/static_assets/others/JS_30_-_240x240.png",
    },
  ];
  

function CardList() {
  return (
    <div className="card-list">
      {resources.map((resource) => (
        <Card
          key={resource.id}
          title={resource.title}
          link={resource.link}
          image={resource.image}
        />
      ))}
    </div>
  );
}

export default CardList;
