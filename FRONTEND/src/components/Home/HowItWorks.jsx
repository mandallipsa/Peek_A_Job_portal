import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
const HowItWorks = () => {
  return (
      <>
        <div className="howitworks">
          <div className="container">
            <h3>How PeekAJob Works</h3>
            <div className="banner">
              <div className="card">
                <FaUserPlus />
                <p>Create Account</p>
                <p>
                  Reister yourself and log in to your account.
                </p>
              </div>
              <div className="card">
                <MdFindInPage />
                <p>Find a Job/Post a Job</p>
                <p>
                  Find your job according to your need / Post job for your company.
                </p>
              </div>
              <div className="card">
                <IoMdSend />
                <p>Apply For Job/Recruit Suitable Candidates</p>
                <p>
                  Apply for jobs/Hire the candidate
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default HowItWorks
