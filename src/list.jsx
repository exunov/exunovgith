import React from "react";

function List() {
  return (
    <div className="bg-gray-100 mt-1">
      <div className="flex flex-col p-5 space-y-5 md:(px-60) ">
        <h1 className="font-bold text-center text-xl md:(text-2xl)">
          What We Provide
        </h1>
        <div className="flex flex-row space-x-4 inline-block ">
          <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
          <p>
            {" "}
            <h2 className="font-bold italic text-xl md:(text-2xl)">
              Migration and infrastructure sizing, full support
            </h2>
            <p className="mt-2 md:(text-xl)">
              We will study the task at hand, calculate the amount of resources
              required and provide suggestions on how to optimize the
              configuration as needed. As your business grows, we will analyze
              the services you use and optimize the parameters according to your
              needs and budget
            </p>
          </p>
        </div>

        <div className="flex flex-row space-x-4 inline-block ">
          <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
          <p>
            {" "}
            <h2 className="font-bold italic text-2xl md:(text-2xl)">
              Technical support
            </h2>
            <p className="mt-2 md:(text-xl)">
              The technical support is available 24/7. Our English-speaking
              technical support team provides 24/7 Tier 1 support, manages
              incoming requests and monitors the status of your infrastructure
              in accordance with SLAs.
            </p>
          </p>
        </div>

        <div className="flex flex-row space-x-4 inline-block">
          <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
          <p>
            {" "}
            <h2 className="font-bold text-xl italic md:(text-2xl)">
              Easy and time-saving purchase
            </h2>
            <p className="mt-2 md:(text-xl)">
              All AWS services can refund VAT payments in rubles. You don't need
              to pay more due to different exchange rates, pass currency checks
              or prepare foreign currency transaction report forms.
            </p>
          </p>
        </div>

        <div className="flex flex-row space-x-4 inline-block">
          <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
          <p>
            {" "}
            <h2 className="font-bold text-xl italic md:(text-2xl)">
              Consultations on growing your business
            </h2>
            <p className="mt-2 md:(text-xl)">
              We will introduce the AWS product portfolio, help you choose a
              solution that meets your needs, and provide deployment
              recommendations. Service is provided by certified professionals.
            </p>
          </p>
        </div>

        <div className="flex flex-row space-x-4 inline-block">
          <div className="rounded-full p-2 w-3 h-3 bg-amber-500  mt-1"></div>
          <p>
            {" "}
            <h2 className="font-bold text-xl italic md:(text-2xl)">
              Optimized set of services
            </h2>
            <p className="mt-2 md:(text-xl)">
              We will analyze your needs and budgetary capabilities, and
              evaluate the effectiveness of the selected services according to
              your objectives.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default List;
