import React from "react";
import Footer from "./footer";
import Head from "./header";
import Headertop from "./headertop";
import "./back.css";

function Mobile() {
  return (
    <div>
      <Body />
      <Body1 />
      <Body2 />
      <Body3 />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div>
      <Headertop />
      <Head />

      <div className="mobile  text-light-100 md:(p-40 h-full) p-8 space-y-5 transform transition-all  ">
        <h1 className="font-bold text-xl md:(text-5xl)">
          <marquee behavior="" direction="">
            {" "}
            Outsource custom software development
          </marquee>
        </h1>
        <p className="md:(text-2xl ) text-sm italic">
          Exunov with a team of experienced software developers and programers,
          <br />
          state-of-the-art infrastructure, advanced software and latest
          equipment,
          <br />
          we develop custom software on various platforms for users worlwide
        </p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="flex flex-col space-y-5 p-4 md:(mt-5 text-lg  font-thin justify-center items-center)">
      <h2 className="font-bold text-center text-xl md:(text-3xl) underline">
        MORE SERVICES
      </h2>
      <p className="text-center text-sm md:(text-xl)">
        In addition to the above services, our software development team is
        proficent in developing application in different language platforms.
        Some of them include.
      </p>
      <div className="  font-semibold font-thin italic md:(flex flex-row divide-x-4 space-x-5  divide-yellow-400 py-5 place-items-center justify-center )">
        <div className="md:()">
          <ul className="md:(space-y-2 mt-5) ">
            <div className="flex space-x-4">
              <Puce />
              <li>Respond to native development</li>
            </div>
            <div className="flex space-x-4">
              <Puce /> <li>Web application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Native Application Development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>IPhone applicatin development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Portable application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Ionic mobile application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Apple Watch application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Arabic application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>IPad application development</li>
            </div>
          </ul>
        </div>

        <div className="md:(px-5)">
          <ul className=" space-y-2 md:(space-y-2 mt-5) ">
            <div className="flex space-x-4">
              <Puce /> <li>Progressive development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>DevOps Sofware Development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Microsoft PowerApps Services</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Fultter Application Development Services</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Cross-Platform application development services</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Fintech application development services</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Rapid application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Kotlin Application Development Services</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>SPA Development Services</li>
            </div>
          </ul>
        </div>

        <div className="md:(px-5)">
          <ul className=" space-y-2 md:(space-y-2 mt-5) ">
            <div className="flex space-x-4">
              <Puce /> <li>HTML5 mobile application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Enterprise Mobility Solution</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Xamarin Development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>J2ME application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce /> <li>Development of mobile commerce</li>
            </div>

            <div className="flex space-x-4">
              <Puce />
              <li>Swift application development</li>
            </div>

            <div className="flex space-x-4">
              <Puce />
              <li>PhoneGap applicaion development</li>
            </div>

            <div className="flex flex-row space-x-4">
              <Puce />
              <li>Mobile application design services</li>
            </div>

            <div className="flex space-x-4">
              <Puce />
              <li>Mobile application testing</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Puce() {
  return (
    <div className="md:(text-5xl text-amber-400 hover:animate-none)4 text-amber-600 text-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class=" w-6 md:(w-10)"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex flex-col items-center justify-center text-justify px-5  md:(px-50 mt-10)">
      <h1 className="font-bold text-center md:(text-3xl underline)">
        MOBILE APPLICATION DEVELOPMENT SERVICES WE OFFER
      </h1>

      <p className=" md:(text-xl mt-3 px-40 ) text-sm ">
        We design and develop innovative and powerful applications for our
        clients to take emerging ideas to the next level. Our mobile app
        development services include:
      </p>
      <div className="space-y-4 md:(hover:(border-1 shadow-2xl translate-x-5 text-justify text-center rounded-2xl bg-gray-200) )">
        <h2 className="font-bold italic mt-5  md:(text-2xl px-8 font-semibold)">
          IOS application development
        </h2>
        <p className="  md:(text-xl mt-3 px-40 ) text-sm">
          {" "}
          IOS is one of the most popular operating systems in the world, and
          iPhone and iPad apps are just as popular as these sleek devices. Our
          developers specialize in developing apps for iPhone, iPad and iPod
          touch using Swift and Objective-C. These apps can be commercial, free,
          corporate or internal. It is also custom designed according to your
          needs.
        </p>
      </div>

      <div className="space-y-4 md:(hover:(border-1 shadow-2xl translate-x-5 text-justify text-center rounded-2xl bg-gray-200) )  ">
        <h2 className="font-bold italic mt-5  md:(text-2xl px-8 font-semibold ) ">
          Android application development
        </h2>
        <p className="  md:(text-xl  px-40 ) text-sm ">
          {" "}
          Ever since the advent of Android, mobile app development in India has
          increased in business. Today, with a market share of over 80%, the
          usage and demand for Android apps is exploding. Our Android app
          developers are familiar with the latest versions of Android and can
          leverage their knowledge of Java, C, Python and more. Get the most out
          of the Android SDK and its development tools.
        </p>
      </div>

      <div className="space-y-4 md(hover:(border-1 shadow-2xl translate-x-5 text-justify text-center rounded-2xl bg-gray-200) )">
        <h2 className="font-bold italic mt-5  md:(text-2xl px-8 font-semibold)">
          Hybrid application development
        </h2>
        <p className="  md:(text-xl mt-3 px-40 ) text-sm">
          {" "}
          EXUNOV has the best mobile app platform development team that can
          provide complete mobile app development services for various platforms
          such as Android, iOS and Windows. We also have the expertise to
          provide innovative mobile app designs that ensure faster marketing and
          better customer satisfaction.
        </p>
      </div>

      <div className="space-y-4 md(hover:(border-1 shadow-2xl translate-x-5 text-justify text-center rounded-2xl bg-gray-200) )">
        <h2 className="font-bold italic mt-5 md:(font-semibold px-8 text-2xl)">
          Windows application development
        </h2>
        <p className=" md:(text-xl mt-3 px-40 ) text-sm">
          {" "}
          EXUNOV offers a complete solution for universal Windows application
          development, including backward compatibility with Windows on demand.
          Windows 10 has been adopted earlier than any other version of Windows,
          so it's a good time to start developing Windows applications. A
          thorough understanding of the latest Windows design languages and a
          combination of Visual Studio and .NET experience can help you create
          great Windows apps.
        </p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="flex flex-col mt-5 text-justify px-5 ">
      <h1 className="font-bold text-center md:(text-3xl underline)">
        ADDITIONAL SERVICES FOR MOBILE APPLICATION DEVELOPMENT OUTSOURCING
      </h1>
      <div className="bg-gray-200 space-y-2 mt-2 p-2 md:(w-300 ml-20 px-15 py-8) ">
        <h2 className="font-semibold  md:(text-2xl)">
          Design of mobile applications
        </h2>
        <p className=" md:(text-xl mt-3 px-40 ) text-sm">
          Whether you want to follow the latest iOS design principles, Google's
          hardware design guidelines, or the modern design perspectives of
          Windows 10, you've come to the right place. Our app design services
          help you refine your app design, define user flows and create basic
          wireframes, etc. to create engaging and intuitive mobile apps.
        </p>
      </div>

      <div className="bg-gray-200 space-y-2 mt-2 p-2 md:(w-300 ml-20 px-15 py-8) ">
        <h2 className="font-semibold  md:(text-2xl)">
          Mobile application testing
        </h2>
        <p className=" md:(text-xl mt-3 px-40 ) text-sm">
          As mobile apps become more routine, customers want nothing more than
          fully functional apps. Our QA testers test your apps in challenging
          real-world conditions, checking usage patterns, device fragmentation
          issues, screen sizes and more in a timely manner. In addition to
          mobile app development, we also offer mobile app testing services.
        </p>
      </div>

      <div className="bg-gray-200 space-y-2 mt-2 p-2 md:(w-300 ml-20 px-15 py-8) ">
        <h2 className="font-semibold  md:(text-2xl)">
          Mobile application porting
        </h2>
        <p className=" md:(text-xl mt-3 px-40 ) text-sm">
          Mobile app outsourcing is not an easy task, and if you're worried
          about increasing access to enterprise platforms, you need an
          experienced mobile app migration provider on your side. Not only can
          we push an app across multiple devices and operating systems, but we
          can also ensure that it is compliant with the operating system
          instructions at all times.
        </p>
      </div>
    </div>
  );
}
export default Mobile;
