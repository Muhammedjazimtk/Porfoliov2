import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./App.css";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col">
      {/* navbar */}
      <div className="flex w-screen min-h-[50px] fixed z-10  ">
        <div className="flex justify-start items-center p-9 w-1/2 group-hover:opacity-100 transition duration-200">
          <div className="bg-pink-600 h-10 w-10 absolute rounded-lg blur-lg opacity-75 "></div>
          <a href="#">
            <img
              alt=""
              src="/images/favicon-32x32.png"
              className="relative h-10 w-10 "
            ></img>
          </a>
        </div>
        <div className="flex justify-end w-1/2 items-center gap-5 mr-10">
          <h3 className="text-[#EA047E] font-semibold pr-10">
            <a href="#about">About</a>
          </h3>
          <h3 className="text-[#EA047E] font-semibold pr-10">Projects</h3>
          <h3 className="text-[#EA047E] font-semibold pr-10">
            <a href="mailto:jazimsadath@gmail.com">Contact</a>
          </h3>
        </div>
      </div>

      {/*body */}
      <div className="flex flex-col justify-center min-h-screen m-0 gap-2">
        <div className="flex justify-center ">
          <div className="flex flex-col w-1/3 justify-center items-start ">
            <h1 className="text-2xl text-[#EA047E] ml-[200px] font-semibold desktop:ml-[400px] ">
              Hey, I&apos;m Jazim ,
            </h1>

            <h1 className="flex text-2xl text-[#EA047E] ml-[200px] font-semibold gap-2 desktop:ml-[400px] ">
              I&apos;m a
              <span className="underline">
                <Typewriter
                  options={{
                    strings: ["Developer </>", "Human. :)", "Learner."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center   w-1/3">
            <img
              className="animate__animated animate__jackInTheBox w-[500px] desktop:mr-[300px]"
              src="./images/1.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="  flex justify-center items-center pb-10">
        <div className="flex justify-center w-1/2  items-center" id="about">
          <div className="flex gap-12">
            <img
              src="./images/j.jpg"
              className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:duration-300 "
              alt=""
              width={350}
            ></img>
            <div className="flex flex-col gap-2 ">
              <p className="text-white text-md underline underline-offset-2">
                {" "}
                A BIT ABOUT ME
              </p>
              <p className="text-white text-sm leading-5 ">
                I'm a BTech Computer Science graduate from{" "}
                <span className="font-extrabold underline">
                  Cochin University of Science And Technology.{" "}
                </span>
                <br></br> I'm passionate about{" "}
                <span className="font-extrabold underline">
                  Web Developement.
                </span>{" "}
                My goal is not just to build websites but to create digital
                experiences that drive results.
              </p>

              <p className="text-white  text-sm ">
                Want to work together?
                <span className="font-extrabold underline">
                  <a href="mailto:jazimsadath@gmail.com">Lets collaborate</a>
                </span>
                <br />
                Feel free to explore my portfolio, check out some of my latest
                projects, and get in touch to discuss how we can turn your ideas
                into a digital reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
