import React from "react"
import Layout from "../components/layout"
import AboutStyle from "../styles/about.module.scss"
import SEO from "../components/seo"

import { clara, audreyFunny } from "../images/team"

import { FaTwitter, FaLinkedinIn } from "react-icons/fa"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div className={AboutStyle.container}>
      <section className={AboutStyle.aboutSection}>
        <h1>About Us</h1>
        <h5>
          WaffiiHub is an innovation center in Warri catalyzing innovations{" "}
          <br />
          and technologies with high growth potentials built by Africans to
          solve local or global problems.
        </h5>
      </section>

      <section className={AboutStyle.teamSection}>
        <h2>Meet the Team</h2>
        <div className={AboutStyle.teamContainer}>
          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866265/team/paul_xbty5i.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866266/team/paulFunny_sikfth.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/okoropaul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://www.linkedin.com/in/okoropaul/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div
              className={
                AboutStyle.teamMemberDetails + " " + AboutStyle.textColor
              }
            >
              <h3>Paul Okoro</h3>
              <h4>Founder/CEO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866268/team/tim_qrozwh.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866267/team/timFunny_unuvzn.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/Timothy_Ovie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://www.linkedin.com/in/timothy-ovie-3237aa166/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Timothy Ovie</h3>
              <h4>Co-Founder/Marketing & Comms</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866266/team/sink_arynxl.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866266/team/sinkFunny_dypolo.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/synkode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://www.linkedin.com/in/sinkopere-opuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Sinkopere Opuba</h3>
              <h4>CTO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866261/team/audrey_aivgew.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866260/team/audreyFunny_bxsvct.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="https://twitter.com/audrey_mukoro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="https://ng.linkedin.com/in/audrey-mukoro-a3130b192"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Audrey Mukoro</h3>
              <h4>CFO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866262/team/newton_wc9bi0.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866266/team/newtonFunny_chcpda.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div
              className={
                AboutStyle.teamMemberDetails + " " + AboutStyle.textColor
              }
            >
              <h3>Newton Ewhrudjakpor</h3>
              <h4>COO</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866254/team/austin_gafrw1.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866254/team/austinFunny_ccfqij.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Austin K. Ngwu</h3>
              <h4>Legal Advisor</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866258/team/funny_oahejc.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866258/team/marvinoFunny_c5nuu5.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Mavino Michael</h3>
              <h4>Mobile Dev Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://via.placeholder.com/350x500.png?text=Amaju+Ashon"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://via.placeholder.com/350x500.png?text=Amaju+Ashon"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Amaju Ashon</h3>
              <h4>Media Manager</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866270/team/okoro_bqwnis.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866264/team/okoroFunny_aqviwh.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Ejevwoke Ikuiagbe</h3>
              <h4>HR</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866262/team/efiri_hspv4k.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866255/team/efiriFunny_jqjnyz.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Dr Tamaradeinyefa Efiri</h3>
              <h4>Social Impact Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://via.placeholder.com/350x500.png?text=Marvis+Ofure"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://via.placeholder.com/350x500.png?text=Marvis+Ofure"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Marvis Ofure</h3>
              <h4>Design Lead</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866258/team/floraFunny_ccxwuw.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866256/team/flora_mmmyqv.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Flora Owhiroro</h3>
              <h4>Android Developer</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866263/team/mercy_g5nvhs.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866262/team/mercyFunny_aasyu3.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Mercy</h3>
              <h4>Media Associate</h4>
            </div>
          </div>

          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src={clara}
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866256/team/claraFunny_yy0ywt.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div className={AboutStyle.teamMemberDetails}>
              <h3>Clara Akpovwovwo</h3>
              <h4>Customer Relations</h4>
            </div>
          </div>
          <div className={AboutStyle.teamMember}>
            <figure className={AboutStyle.teamShape}>
              <img
                className={AboutStyle.teamImg + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866255/team/ajiri_iw5gfm.jpg"
              />
              <img
                className={AboutStyle.teamImgFunny + " " + AboutStyle.img}
                alt=""
                src="https://res.cloudinary.com/waffiihub/image/upload/v1579866254/team/ajiriFunny_vmqrit.jpg"
              />

              <figcaption className={AboutStyle.teamSocials}>
                <a
                  className={AboutStyle.twColor}
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className={AboutStyle.lnColor}
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </figcaption>
            </figure>
            <div
              className={
                AboutStyle.teamMemberDetails + " " + AboutStyle.textColor
              }
            >
              <h3>Ajiri Onaemo</h3>
              <h4>Sales Associate</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default SecondPage
