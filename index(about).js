import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';

import gambar3 from '../../assets/gambar-3.png';
import OurTeams from '../../components/Partials/OurTeams';
import Team1 from '../../assets/riyad.jpg';
import Team2 from '../../assets/pryta.jpg';
import Team3 from '../../assets/azra.jpg';
import Team4 from '../../assets/tami2.jpg';
import Team5 from '../../assets/rehan.jpg';

import '../../components/css/style.css';

const data = [
  {
    id: 1,
    name: 'Riyadhusshadiqin',
    img: Team1,
  },
  {
    id: 2,
    name: 'Pryta Rosela',
    img: Team2,
  },
  {
    id: 3,
    name: 'Azzariyat Azra',
    img: Team3,
  },
  {
    id: 4,
    name: 'Berliani Utami',
    img: Team4,
  },
  {
    id: 5,
    name: 'Raihan Firyal',
    img: Team5,
  },
];

const index = () => {
  return (
    <>
      <Navbar />
      <section class="vh-100 hero-background">
        <div className="h-100 row container mx-auto">
          <div className="col-7 d-flex flex-column align-items-start justify-content-center h-100">
            <h1 className="display-4 fw-bold font-sen">
              Kenalan <br />
              Dengan Kami Yuk!
              <br />
            </h1>
            <hr className="w-25" />
            <p className="fw-medium font-sen">
              Kesehatan Mental Health Care Anak adalah inti dari pendidikan inovatif, Kami berkomitmen untuk memberdayakan orang tua dan anak-anak dengan pengetahuan serta keterampilan kesehatan mental yang esensial.
            </p>
          </div>
        </div>

        <img src={gambar3} className="position-absolute end-0 bottom-0" alt="gambar-3" width="400px" />
      </section>
      {/* <!-- akhir jumbotron --> */}

      {/* <!-- how it started --> */}
      <section
        className="py-5 w-100"
        id="how"
        style={{
          backgroundColor: '#bdd2de',
        }}
      >
        <div className="container text-center px-4">
          <h2 className="font-sen" style={{ color: '#28363e' }}>
            How it started?
          </h2>
          <div className="mx-auto mt-3 font-sen" style={{ width: '600px' }}>
            <p>
              Berawal dari visi perhatian khusus pada kesehatan mental anak-anak, kami membentuk inisiatif ini sebagai respons terhadap kurangnya perhatian di sekolah dan masyarakat. Melalui penelitian dan program pengembangan, kami
              membentuk layanan kesehatan mental anak yang komprehensif, memahami kebutuhan mereka secara mental dan emosional.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- end --> */}

      {/* <!-- visi --> */}
      <section className="py-5 w-100" id="visi">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="text-center">
                <h2 className="font-sen" style={{ color: '#28363e' }}>
                  Visi
                </h2>
                <div className="mt-3 font-sen">
                  <p>
                    Kami berawal dari visi memberikan perhatian khusus pada kesehatan mental anak-anak, didorong oleh kepedulian mendalam terhadap kesejahteraan emosional generasi masa depan. Inisiatif ini kami bentuk sebagai tanggapan atas
                    kurangnya perhatian terhadap kesehatan mental anak-anak di lingkungan sekolah dan masyarakat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="text-center">
                <h2 className="font-sen" style={{ color: '#28363e' }}>
                  Misi
                </h2>
                <div className="mt-3 font-sen">
                  <p>
                    Kami berawal dari visi memberikan perhatian khusus pada kesehatan mental anak-anak, didorong oleh kepedulian mendalam terhadap kesejahteraan emosional generasi masa depan. Inisiatif ini kami bentuk sebagai tanggapan atas
                    kurangnya perhatian terhadap kesehatan mental anak-anak di lingkungan sekolah dan masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end visi --> */}

      {/* <!-- our values --> */}
      <section className="our-values">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="text-center">
            <h2 style={{ color: '#28363e' }} className="mb-5">
              Our Values
            </h2>
            <div className="row">
              <div className="col-6 font-sen">
                <h4 style={{ color: '#28363e' }}>Mental Wellness Insight</h4>
                <p>Membangun kesadaran diri Anak untuk kesejahteraan emosional yang unggul.</p>
              </div>
              <div className="col-6 font-sen">
                <h4 style={{ color: '#28363e' }}>Mental Resilience Builder</h4>
                <p>Setiap anak diberdayakan untuk mengatasi tantangan emosional dan menyelesaikan masalah secara aktif.</p>
              </div>
              <div className="col-6 mx-auto mt-4 font-sen">
                <h4 style={{ color: '#405e6f' }}>Growth Mindset Emosional</h4>
                <p>Anak-anak didorong untuk selalu ingin berkembang dan belajar sepanjang hidup mereka.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-teams">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-5 font-sen">Our Team</h2>
            {data.map((item) => (
              <OurTeams item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default index;
