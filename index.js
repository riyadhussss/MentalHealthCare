/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';

import gambar2 from '../../assets/gambar2.png';

import '../../components/css/style.css';
import { Link, useParams } from 'react-router-dom';
import API from '../../utils/API';

const index = () => {
  const params = useParams();
  const [solution, setSolution] = React.useState('');
  const [disease, setDisease] = React.useState('');

  console.log('Kode Disease: ', params.kode_disease);

  React.useEffect(() => {
    getSolution();
    getDisease();
  }, []);

  const getSolution = () => {
    API.get(`/solutions/getSolution/${params.kode_disease}`)
      .then((res) => {
        console.log('Data Solution: ', res.data);
        setSolution(res.data.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDisease = () => {
    API.get(`/diseases/getDisease/${params.kode_disease}`)
      .then((res) => {
        console.log('Data Disease: ', res.data.data.name);
        setDisease(res.data.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log('Solution: ', solution);

  return (
    <>
      <Navbar />
      <section class="vh-100 hero-background">
        <div class="h-100 row container mx-auto">
          <div class="col-7 d-flex flex-column align-items-start justify-content-center h-100">
            <h1 class="display-4 fw-bold font-sen">
              Tes Diagnosa <br />
              Penyakit Mental <br />
              Pada Anak
            </h1>
            <hr class="w-25" />
            <p class="fw-medium font-sen">Tes ini dapat mengukur kesehatan mental baik atau buruk terhadap anak. Hasil dari tes ini akan membantu Anda untuk mengetahui kesehatan mental Anak Anda saat ini.</p>
          </div>
          <div class="col-5 h-100 d-flex flex-column justify-content-end">
            <img
              src={gambar2}
              alt="heroImage"
              style={{
                width: '100%',
              }}
            />
          </div>
        </div>
      </section>
      {/* <!-- akhir jumbotron --> */}

      {/* <!-- body page --> */}
      <section class=" row vh-100 mt-3 bg-bluesky" id="hasil">
        <div class="container">
          <div class="row text-center mt-5">
            <div class="col">
              <h3 class="fs-3 font-sen">Hasil</h3>
              <p class="fw-normal font-sen">Kondisi buah hati anda mengalami {disease}</p>
              <div class="row justify-content-center text-center mt-3">
                <div class="col-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="solusi">
          <div class="text-center mt-1">
            <div class="col">
              <h3 class="fs-3 font-sen">Solusi</h3>

              <div class="justify-content-center text-center mt-3">
                <div class="col-6"></div>

                <p class="fw-normal font-sen">{solution}</p>
              </div>
              <div className="w-100 d-flex justify-content-center mt-4 mb-4">
                <Link to={'/'}>
                  <button className="btn btn-primary mb-5 ">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- akhir --> */}

      <Footer />
    </>
  );
};

export default index;
