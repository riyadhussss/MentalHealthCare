import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import '../../components/css/style.css';

const index = () => {
  return (
    <>
      <Navbar />
      <section class="vh-100 hero-background">
        <div className="h-100 row container mx-auto">
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="text-center font-sen p-4 mt-xl-5">Baca panduannya yuk!</h4>
            <div className="row align-items-center px-lg-5">
              <div className="card card-body shadow-sm rounded-4 m-2 flex-row align-items-center font-sen " style={{ backgroundColor: '#cbd6dc' }}>
                Terdapat jawaban Ya dan Tidak. Isilah sesuai persfektif anda terhadap gelaja anak Anda.
              </div>
              <div className="card card-body shadow-sm rounded-4 m-2 font-sen flex-row align-items-center" style={{ backgroundColor: '#cbd6dc' }}>
                Tes ini tidak diberi batas waktu. Jadi perlahan saja dalam mengisi.
              </div>
              <div className="card card-body shadow-sm rounded-4 m-2 font-sen flex-row align-items-center" style={{ backgroundColor: '#cbd6dc' }}>
                Cari tempat yang nyaman dan kondusif supaya Anda lebih fokus
              </div>
              <div className="card card-body shadow-sm rounded-4 m-2 font-sen flex-row align-items-center" style={{ backgroundColor: '#cbd6dc' }}>
                Jika Anda keluar di tengah tes, maka seluruh proses tes dan jawaban akan hilang.
              </div>
              <div className="card card-body  shadow-sm rounded-4 m-2 font-sen flex-row align-items-center" style={{ backgroundColor: '#cbd6dc' }}>
                Hasil tes dan solusi bisa Anda dapatkan setelah mengisi semua pertanyaan dengan lengkap.
              </div>
              <div className="card card-body shadow-sm rounded-4 m-2 font-sen flex-row align-items-center" style={{ backgroundColor: '#cbd6dc' }}>
                Terdapat jawaban Ya dan Tidak. Isilah sesuai persfektif anda terhadap gelaja anak Anda.
              </div>
              {/* <!-- <a className="btn btn-primary m-3" href="question.html" role="button">Mulai tes</a> --> */}
            </div>

            <div className="w-100 d-flex justify-content-center mt-4 mb-4">
              <Link to={'/questions'}>
                <button className="btn btn-primary mb-5 ">Mulai Tes!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
