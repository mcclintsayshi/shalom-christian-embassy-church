import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Banner from "../components/banner";

// markup
const About = () => {
  const itemss = [
    {
      name: "Aubrey Graham",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis illo commodi iusto voluptatem. Atque dolores rem fuga est fugit!",
      image: "../images/hero-bg.jpg",
    },
    {
      name: "Aubrey Graham",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis illo commodi iusto voluptatem. Atque dolores rem fuga est fugit!",
      image: "../images/home.jpg",
    },
    {
      name: "Aubrey Graham",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis illo commodi iusto voluptatem. Atque dolores rem fuga est fugit!",
      image: "../images/home.jpg",
    },
  ];

  return (
    <Layout>
      <Banner title="About us" img="../images/hero-bg.jpg" />

      <section className="container mx-auto min-h-52 flex flex-col justify-center">
        <p className="text-sm my-4 sm:my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          repudiandae quam ipsam eos eaque alias?
        </p>

        <div className="flex flex-row gap-2 sm:gap-2 md:gap-3 justify-between">
          <a className="block w-full" href="#mission-vision">
            <StaticImage
              className="h-24 sm:h-32 w-full"
              src="../images/hero-bg.jpg"
              alt=""
            />
            <h4 className="my-1 text-xs">Mission &amp; Vision</h4>
          </a>
          <a className="block w-full" href="#what-we-believe">
            <StaticImage
              className="h-24 sm:h-32 w-full"
              src="../images/home.jpg"
              alt=""
            />
            <h4 className="my-1 text-xs">What we beleive</h4>
          </a>
          <a className="block w-full" href="#leadership">
            <StaticImage
              className="h-24 sm:h-32 w-full"
              src="../images/drake.JPG"
              alt=""
            />
            <h4 className="my-1 text-xs">Our Leadership</h4>
          </a>
        </div>
      </section>

      <div className="container mx-auto h-px my-4 sm:my-8"></div>

      {/* Mission, Vision and Values */}
      <section id="mission-vision">
        <div className="container mx-auto pt-2 flex flex-col sm:flex-row items-center">
          <StaticImage
            className="block h-48 w-full sm:h-72 sm:flex-1"
            src="../images/hero-bg.jpg"
          />

          <div className="flex-1 py-5 sm:pl-10">
            <h2 className="text-2xl">Vision</h2>
            <p className="py-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta fuga accusamus molestias necessitatibus quos
              reiciendis autem laboriosam voluptatem? Totam.
            </p>
          </div>
        </div>
        <div className="container block mx-auto h-px w-full my-8 sm:bg-gray-200"></div>
        <div className="container mx-auto flex flex-col sm:flex-row-reverse items-center">
          {/* <div className="h-48 sm:h-72 w-full sm:flex-1 bg-green-500"></div> */}
          <StaticImage
            className="block h-48 w-full sm:h-72 sm:flex-1"
            src="../images/pastor-sithole.jpg"
          />

          <div className="flex-1 py-5 sm:pr-10">
            <h2 className="text-2xl py-0">Mission</h2>
            <p className="pt-1 text-base">
              To ensure that the peace of our Lord Jesus Christ is received by
              many through the preaching of the message of the Cross across all
              Nations, through deeds of mercy, church planting, home cells,
              crusades, discipleship, healing of the sick and impartation of the
              Gifts of the Holy Spirit through which all are equipped.
            </p>
          </div>
        </div>

        <div className="flex container mx-auto h-px w-full my-8 sm:bg-gray-200"></div>

        <div className="container mx-auto">
          <h2 className="text-2xl font-normal">Values</h2>

          <div className="flex flex-row justify-start flex-wrap gap-1 py-4 p-0 mx-0">
            <h4 className="w-max p-4 capitalize shadow">integrity</h4>
            <h4 className="w-max p-4 capitalize shadow">transparency</h4>
            <h4 className="w-max p-4 capitalize shadow">integrity</h4>
            <h4 className="w-max p-4 capitalize shadow">transparency</h4>
            <h4 className="w-max p-4 capitalize shadow">integrity</h4>
            <h4 className="w-max p-4 capitalize shadow">transparency</h4>
            <h4 className="w-max p-4 capitalize shadow">integrity</h4>
            <h4 className="w-max p-4 capitalize shadow">transparency</h4>
            <h4 className="w-max p-4 capitalize shadow">integrity</h4>
            <h4 className="w-max p-4 capitalize shadow">transparency</h4>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full sm:m-8 my-16"></div>

      {/* Our Statement of Faith */}
      <section id="what-we-believe">
        <div className="container mx-auto flex flex-col items-left">
          <header className="my-4">
            <h2 className="mb-1 text-2xl">Statement of Faith</h2>
            <p className="text-sm">
              The SCE Church as body of Jesus Christ believes
            </p>
          </header>

          <ul className="list-none list-inside flex flex-col gap-2">
            <li className="py-2 px-2 rounded-sm shadow-sm hover:shadow">
              That the scriptures, both Old and New Testament are fully inspired
              by the Holy Spirit are the final authority for the church
            </li>
            <li className="py-2 px-2 rounded-sm shadow-sm hover:shadow">
              Justification is by grace alone through the finished work on the
              Cross
            </li>
            <li className="py-2 px-2 rounded-sm shadow-sm hover:shadow">
              The church believes in the marriage of man and woman only (male to
              female)
            </li>
          </ul>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-12"></div>

      {/* Our Leadership */}
      <section id="leadership">
        <div className="container mx-auto">
          <div className="pb-4">
            <h2 className="mt-1 mb-2 text-2xl text-secondary-color sm:text-2xl text-left">
              Leadership
            </h2>
            <p className="text-sm font-normal text-left">
              The SCE Church as body of Jesus Christ beleives
            </p>
          </div>

          {React.Children.toArray(
            itemss.map((item) => {
              return (
                <article className="w-full mb-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <StaticImage
                    className="block w-full h-60 sm:w-96"
                    src="../images/home.jpg"
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg text-left font-medium">
                      {item.name}
                    </h4>
                    <small className="uppercase">Senior Pastor</small>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-12"></div>
    </Layout>
  );
};

export default About;
