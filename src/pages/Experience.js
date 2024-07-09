import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cherrs from "../images/cherrs.jpg";
import cherr2 from "../images/cherr2.jpg";
import che1 from "../images/che1.jpg";
import post from "../images/post.jpg";
import posty from "../images/posty.jpg";
import peste1 from "../images/peste1.jpg";

function Experience() {
  return (
    <div className="px-5">
      <h1 className="abouts">Experience</h1>
      <hr />

      <div className="row">
        <div className="col-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <ul>
                <li>Performed data encoding in different Microsoft Office.</li>
                <li>Performed data sorting.</li>
                <li>Performed data tracking.</li>
                <li>Performed data organizing.</li>
                <li>Performed customer service.</li>
                <li>Troubleshooting.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Graduation</h2>
              <h5 className="card-title">Central Philippines State University Main Campus</h5>
              <p>Bachelor of Science in Information Technology.</p>
              <ul>
                <li>Developed a CPSU Events system.</li>
                <li>Developed websites.</li>
                <li>Performed Networking.</li>
                <li>Photography, Videography, and Logo making Workshop.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
        <div className="card text-center">
        <div className="card-body" style={{ height: '27rem',maxWidth:'50rem' }}>
          <h2>Internship</h2>
          <h5 className="card-title">Philpost Kabankalan Branch</h5>
          <div className="overflow-hidden ">
               <img
               src={cherr2}
              style={{ width: '100%', height: '20rem' }}
              className="img-fluid border rounded-5 transform-images"
              alt="CPSU Events System"
             />
            </div>
         </div>
         </div>
        </div>



        <div className="col-6 mb-4">
          <div className="card  text-center">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <div className="overflow-hidden">
                <img
                  src={cherrs}
                  style={{width: '100%',height: '20rem'}}
                  className="img-fluid border rounded-5 transform-images"
                  alt="CPSU Events System"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
          <div className="card  text-center">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <div className="overflow-hidden">
                <img
                  src={che1}
                  style={{width: '100%',height: '20rem'}}
                  className="img-fluid border rounded-5 transform-images"
                  alt="CPSU Events System"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
          <div className="card  text-center">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <div className="overflow-hidden">
                <img
                  src={post}
                  style={{width: '100%',height: '20rem'}}
                  className="img-fluid border rounded-5 transform-images"
                  alt="CPSU Events System"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
          <div className="card  text-center">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <div className="overflow-hidden">
                <img
                  src={posty}
                  style={{width: '100%',height: '20rem'}}
                  className="img-fluid border rounded-5 transform-images"
                  alt="CPSU Events System"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
  <div className="card text-center">
    <div className="card-body">
      <h2>Internship</h2>
      <h5 className="card-title">Philpost Kabankalan Branch</h5>
      <div className="overflow-hidden">
        <img
          src={peste1}
          style={{ width: '100%', height: '20rem' }}
          className="img-fluid border rounded-5 transform-images"
          alt="CPSU Events System"
        />
      </div>
    </div>
  </div>
</div>
  
                     
      </div>

      <hr />
    </div>
  );
}

export default Experience;
