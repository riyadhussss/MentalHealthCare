import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

import '../css/style.css';

const index = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="wrapper-col-1">
              <h2 className="fw-bold font-sen">MentalHealthCare</h2>
              <p className="fs-5">Find us</p>
              <BsLinkedin size={20} className="" />
              <BiLogoGmail size={20} />
              <BsInstagram size={20} />
              <BsFacebook size={30} />
            </div>
          </div>

          <div className="col-md-4 font-sen">
            <h4>Email</h4>
            <p>MentalHealthCare@gmail.com</p>
            <h5>Customer service</h5>
            <p>
              0852-5252-5252<br />
              0823-2323-2323
            </p>
          </div>
          <div className="col-md-4 font-sen">
            <h4>References</h4>
            <a href='https://ejournal.upnvj.ac.id/index.php/informatik/article/view/2185'>link referensi sistem pakar</a>
            {/* <p>MentalHealthCare@gmail.com</p> */}
            <h4 className='mt-3'>Sumber gambar</h4>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
