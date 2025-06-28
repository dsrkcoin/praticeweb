import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Contact7 } from "components/blocks/contact";
import { Testimonial5 } from "components/blocks/testimonial";
import FigureImage from "components/reuseable/FigureImage";
import Megaphone from "icons/lineal/Megaphone";

// CUSTOM DATA

export default function Proprietorship() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper bg-gray">
        <div className="container pt-90 pt-md-14 text-center ">
          <div className="row py-md-8">
            <div className="col-xl-6 mx-auto">
              <h1 className="display-1 mb-4">Proprietorship Registration</h1>
              <p className="lead fs-lg mb-0">
                A company turning ideas into beautiful things.
              </p>
            </div>
          </div>
        </div>

        <FigureImage
          width={2800}
          height={1000}
          src="/img/photos/bg12.jpg"
          className="position-absoute"
          style={{ bottom: 0, left: 0, zIndex: 2 }}
        />
      </section>

      <section className="wrapper bg-light angled upper-end lower-end">
        <div className="container py-14 py-md-8">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-8">
            <div className="col-lg-5 position-relative order-lg-2">
              <Fragment>
                <div
                  className="shape bg-dot primary rellax w-16 h-20"
                  style={{ top: "3rem", left: "5.5rem" }}
                />

                <div className="overlap-grid overlap-grid-2">
                  <div className="item">
                    <figure className="rounded shadow">
                      <img
                        src={`/img/photos//about3@2x.jpg`}
                        srcSet={`/img/photos/about3@2x.jpg`}
                        alt="Hi"
                      />
                    </figure>
                  </div>
                </div>
              </Fragment>
            </div>

            <div className="col-lg-7">
              <Megaphone className="icon-svg-md mb-4" />

              <h2 className="display-4 mb-3">Proprietorship Registration</h2>

              <h3>
                Sole Proprietorship: A Simple and Popular Business Structure in
                India
              </h3>

              <p>
                A sole proprietorship is one of the oldest and simplest forms of
                business in India. It is owned, managed, and controlled by a
                single individual — the proprietor. Since there is no legal
                distinction between the proprietor and the business, setting up
                a sole proprietorship is quick and involves minimal compliance.
              </p>

              <p>
                Because the business and the proprietor are legally the same
                entity, a proprietorship cannot have partners or shareholders.
                Additionally, the proprietor bears full personal liability for
                any business obligations. As such, this structure is best suited
                for small businesses with up to 5 employees.
              </p>
              <h3>
                Register Your Sole Proprietorship Online with IndiaFilings
              </h3>
              <p>
                IndiaFilings makes it easy to register your proprietorship firm
                online. Our expert team ensures a smooth and efficient
                registration process, helping solo entrepreneurs bring their
                business ideas to life. Get started with your sole
                proprietorship registration today and take the first step toward
                growing your business.
              </p>
              <h3>Sole Proprietorship Registration in India</h3>
              <p>
                In India, sole proprietorship registration follows a unique
                process, as there is no specific government-issued registration
                exclusively for this business type. Instead, a sole
                proprietorship is recognized through various tax registrations
                required under Indian laws. One of the key registrations is GST
                (Goods and Services Tax), which must be obtained in the
                proprietor’s name. This serves as official proof that the
                individual is operating as a sole proprietorship.
              </p>

              <p>
                At IndiaFilings, we make the process of registering your
                proprietorship firm online simple and hassle-free. With our
                expert support, you can quickly formalize your business and
                start operating with confidence.
              </p>
              <h3>Essential Licenses and Registrations for Proprietorships</h3>
              <p>
                To register proprietorship firm online and run in India, you
                need important licenses and registrations, including:
              </p>

              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Get a Permanent Account
                      Number (PAN) and an Aadhaar card for your business
                      identification.
                    </li>
                    <li className="mt-3">
                      <i className="uil uil-check"></i> Register under UDYAM,
                      which recognizes your business as a Micro, Small, or
                      Medium Enterprise (MSME) and offers government benefits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If your business exceeds
                      specific thresholds, you must register for Goods and
                      Services Tax (GST) to collect and pay GST.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Open a separate bank
                      account for your business to manage finances smoothly.{" "}
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Depending on your
                      business location, register under your state's Shops and
                      Establishment Act to follow local labor regulations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== testimonial section ========== */}
      <Testimonial5 />

      {/* ========== contact section ========== */}
      <Contact7 />
    </Fragment>
  );
}
