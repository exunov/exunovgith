import React from "react";
import Head from "./header";
import HeaderTop from "./headertop";
import icon1 from "./images/ecommerce.jpg";
import icon2 from "./images/framework.png";
import icon3 from "./images/database.png";
import icon4 from "./images/desgn_tool.png";
import icon5 from "./images/opensource.png";
import icon6 from "./images/softwaredev.png";
import Footer from "./footer";
import Body1 from "./devlist";
import "./sectio.css";

function Devweb() {
  return (
    <div className="bg-light-100 ">
      <HeaderTop />
      <Head />
      <div className="">
        <Body />
        <Body1 />
        <Body2 />
        <Bodytext />
      </div>

      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div>
      <div className=" web   text-light-100 md:(p-10 h-110  space-y-5) h-90  ">
        <p className="space-y-2  text-white  md:(space-y-8 p-15 )">
          <h1 className="font-bold p-5 text-xl md:(text-4xl p-0)">
            <marquee behavior="" direction="">
              {" "}
              Outsource custom software development
            </marquee>
          </h1>
          <p className="  md:(text-xl p-0 ) p-10 italic">
            Exunov with a team of experienced software developers and
            programers,
            <br />
            state-of-the-art infrastructure, advanced software and latest
            equipment,
            <br />
            we develop custom software on various platforms for users worlwide
          </p>
        </p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="bg-amber-700 p-4 text-white hover:bg-blue-light-800">
      <div className="space-y-2">
        <h1 className="font-bold text-center text-white italic md:(text-2xl pt-2)">
          Tehnologies we use
        </h1>
        <p className="md:(text-xl px-50) text-sm ">
          Offshore software development has proven to be effective and essential
          for organisations.
          <br /> Outsourcing custom software development to Exunov ensures that
          you have a solution that meets
          <br /> global software development standards.We use the following
          technologies to taillor our software
          <br /> solution to our clients :
        </p>
      </div>

      <Body3 />
    </div>
  );
}

function Body3() {
  return (
    <div className=" grid grid-cols-1 gap-1 justify-center items-center p-5 md:( justify-center items-center grid grid-cols-3 gap-2 pl-50 py-5 ) ">
      <div className="flex flex-col border-1 justify-center items-center shadow-2xl rounded-xl space-y-2 p-2  text-black bg-light-50 transform transition-all hover:(scale-125 bg-indigo-50 translate-x-10)  md:(p-4 w-60 )">
        <img src={icon1} alt="" className=" w-20 place-item-center  " />
        <div className="divide-y-3  divide-yellow-500  font-bold ">
          <h1 className="text-center">E-commerce</h1>
          <p className=" ">
            OpenCart,
            <br />
            osCommerce, X-cart, Magento, etc
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-2 p-2 text-black bg-light-50 border-1 shadow-2xl transform transition-all hover:(scale-125 bg-indigo-50 translate-x-10) rounded-xl justify-center items-center md:(p-5 w-58 )">
        <img src={icon4} alt="" className=" w-20 " />
        <div className="divide-y-3  divide-yellow-500 font-bold ">
          <h1 className="text-center">Design Tools</h1>
          <p>Fireworks, Pack Adobe, SWiSH Max4, Flash, etc.</p>
        </div>
      </div>

      <div className="flex flex-col space-y-3 p-5 text-black bg-light-50 border-1 shadow-2xl transform transition-all hover:(scale-125 bg-indigo-50 translate-x-10) rounded-xl justify-center items-center md:(p-5 w-60 )">
        <img src={icon6} alt="" className=" w-20" />
        <div className="divide-y-3  divide-yellow-500 font-bold ">
          <h1 className="text-center">Programming</h1>
          <p>Node JS, Flutter,ASP.NET, PHP, Java, etc.</p>
        </div>
      </div>

      <div className="flex flex-col space-y-3 p-5 text-black bg-light-50  border-1 shadow-2xl transform transition-all hover:(scale-125 bg-indigo-50 translate-y-10) rounded-xl justify-center items-center md:(p-5 w-60 )">
        <img src={icon3} alt="" className=" w-20" />
        <div className="divide-y-3  divide-yellow-500 font-bold ">
          <h1 className="text-center">Frameworks</h1>
          <p>Zend, CakePHP, Kohana, Codelgniter, etc</p>
        </div>
      </div>

      <div className="flex flex-col space-y-3 p-2 text-black bg-light-50 border-1 shadow-2xl transform transition-all hover:(scale-125 bg-indigo-50 translate-y-10) rounded-xl justify-center items-center md:(p-5 w-60 )">
        <img src={icon2} alt="" className=" w-20" />
        <div className="divide-y-3   divide-yellow-500 font-bold ">
          <h1 className="text-center">Data Base</h1>
          <p>
            Oracle, <br /> MySQL, MSSQL
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-2 p-2 text-black bg-light-50 justify-center transform transition-all hover:(scale-125 bg-indigo-50 translate-y-10) items-center border-1 shadow-2xl rounded-xl  md:(p-5 w-60 )">
        <img src={icon5} alt="" className=" w-20" />
        <div className="divide-y-3  divide-yellow-500 font-bold ">
          <h1 className="text-center">Open Source</h1>
          <p>Drupal, Joomla, Wordpress, Magento, etc</p>
        </div>
      </div>
    </div>
  );
}

function Bodytext() {
  return (
    <div className="flex flex-col p-5 space-y-5 md:(px-80) ">
      <h1 className="font-bold text-center text-xl md:(text-5xl underline)">
        Our Expertize
      </h1>
      <div className="flex flex-row space-x-4 inline-block  text-sm md ">
        <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
        <p>
          {" "}
          <h2 className="font-bold italic text-xl md:(text-2xl)">
            Custom Software Developement
          </h2>
          <p className="text-sm md:(text-xl) text-justify">
            From investment banking to insurance, publishing and multimedia,
            travel and e-commerce, materials science and surface science, we
            have extensive experience in personal software development. Our
            personal software development services also include biometric and
            medical application development, SQL server software, WebLogic,
            WebSphere application servers, MySQL database programming, Java and
            web applications. Moreover, if you are opting for more software
            solutions and considering outsourcing your custom software
            development to India, you can contact our team.
          </p>
        </p>
      </div>

      <div className="flex flex-row space-x-4 inline-block ">
        <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
        <p>
          {" "}
          <h2 className="font-bold italic text-xl md:(text-2xl)">
            Custom Dersignedn Website
          </h2>
          <p className="text-sm md:(text-xl) text-justify">
            Exunov is more than just a personal software development company. We
            also develop websites worldwide that promote your business in an
            attractive and professional manner. It is involved in graphic design
            and redesign, creative conceptualization, implementation and
            technical production. Work closely with your internal creative,
            management and development teams to achieve the desired results.
          </p>
        </p>
      </div>

      <div className="flex flex-row space-x-4 inline-block">
        <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
        <p>
          {" "}
          <h2 className="font-bold text-xl italic md:(text-2xl)">
            Sofware Migration And Modernisation
          </h2>
          <p className="text-sm md:(text-xl) text-justify">
            Typical software developers may not understand the importance of
            migrations and upgrades. In today's competitive world, software
            systems must be updated with the latest technologies and concepts.
            At Exunov, we understand the importance of migration and that
            migration has a direct impact on business performance and
            efficiency. We provide services such as data migration, igration
            assistance, serious system migration, cloud migration, migration
            planning and assessment..
          </p>
        </p>
      </div>

      <div className="flex flex-row space-x-4 inline-block">
        <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
        <p>
          {" "}
          <h2 className="font-bold text-xl italic md:(text-2xl)">
            Web Application & E-Commerce Solutions
          </h2>
          <p className="text-sm md:(text-xl) text-justify">
            In addition to software development and migration services, we also
            offer custom e-commerce development. With the help of our solution,
            you need a simple web browser to effectively manage your inventory
            and accounts online from anywhere in the world. Manage sales
            commissions, coupon tracking, customer discounts, buying advice and
            other specific business requirements
          </p>
        </p>
      </div>

      <div className="flex flex-row space-x-4 inline-block">
        <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
        <p>
          {" "}
          <h2 className="font-bold text-xl italic md:(text-2xl)">
            Content Management Systems
          </h2>
          <p className="text-sm md:(text-xl) text-justify">
            In the age of e-commerce and web applications, it is important to be
            able to monitor and customize websites throughout the year. Our
            extensive knowledge and experience in software development will help
            you develop an easy-to-use web management system that allows you to
            manage your website content. Most third party CMS systems slow down
            your website, but our system is precisely tailored to your website
            and is ideal for all types of businesses. It also has extensive
            experience with all major open source content management tools
          </p>
        </p>
      </div>
      <div className="flex flex-row space-x-4 inline-block">
        <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
        <p>
          {" "}
          <h2 className="font-bold text-xl italic md:(text-2xl)">
            Software Integrations
          </h2>
          <p className="text-sm md:(text-xl) text-justify">
            As part of our software development services, we also offer
            third-party software integration services. Planning, assessment,
            custom integration, configuration and implementation are some of our
            most important products. We first understand your business needs and
            then provide reliable software integration services that meet your
            exact requirements. It helps you keep your business running.
          </p>
        </p>
      </div>

      <div className="flex flex-row space-x-4 inline-block">
        <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
        <p>
          {" "}
          <h2 className="font-bold text-xl italic md:(text-2xl)">
            Outsource Software Development To Exunov
          </h2>
          <p className="text-sm md:(text-xl) text-justify">
            Exunov is at the forefront of providing software development
            services to businesses ranging from sole proprietors to Fortune 500
            companies. If you want to outsource your online presence on a global
            stage, you need to outsource your web and web development software.
            Visit Exunov to discover the best software development talent in the
            industry.
          </p>
        </p>
      </div>
    </div>
  );
}

export default Devweb;
