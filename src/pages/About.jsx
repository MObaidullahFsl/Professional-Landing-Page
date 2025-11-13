import React from "react";
import "../styles/about.css";
import { si8, si7, sec, sec2 } from "../assets/constants";
import FadeIn from "../components/FadeIn";
import servicesList from "../data/Allservice.json";
function About() {
  return (
    <>
    <FadeIn>

      <div className="aboutTitle">
        About Ms. Javeria Zahra Leading Dubai Based Psychologist
      </div>
    </FadeIn>
      <div className="abtAll">
        <section className="abt first">
          <div className="contentabt">
            <div className="titleabt">Professional Career</div>
            <FadeIn>
              <div className="textabt">
                {/* {Array(3)
              .fill()
              .map((_, i) => {
              return  <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  nesciunt atque adipisci minima, autem asperiores pariatur
                  saepe illo voluptatum aspernatur rem, odit distinctio
                  consectetur unde doloribus earum voluptatem, sed consequatur
                  ad at fugit delectus. Nostrum officiis expedita est a unde!
                </li>;
              })} */}
                <b>Javaria Zahra</b> is a highly motivated and passionate
                Psychologist and Mental Health Professional / Trainer boasting
                over <b>16 years </b>
                of professional and clinical experience. She is licensed by the
                <b> CDA</b> and holds an <b>MSc in Applied Psychology</b> with
                major areas in
                <b> Clinical Psychology, Child Psychology,</b> and
                <b> Health Psychology </b>
                from the <b>University of Punjab, Lahore (2004)</b>.
                Additionally, she obtained a Diploma in Clinical Psychology from
                <b>PIMS</b> and furthered her academic achievements with an
                <b> MD/ MS/ MPhil </b>in
                <b>Applied Psychology</b>, earning a <b> Gold Medal Award </b>
                and Distinction in Research from Beacon House National
                University <b> (BNU)</b>, Lahore in 2013. With a background in
                Applied Psychology, she has a deep understanding of the
                underlying causes of various mental health issues and has a
                proven track record of delivering result-oriented &
                evidence-based therapy.
              </div>
            </FadeIn>
          </div>
          <img src={sec} alt="" className="abtimg" />
        </section>
        <FadeIn>
          <section className="abt inter1">
            Ms Javaria started her career path in the <b>UAE</b> in <b>2019</b>{" "}
            and worked as a Psychologist & <b>SENCO</b> at The{" "}
            <b>Bloomington Academy (TBAC), Ajman</b>. Next, she served as a
            Psychologist, <b>SENCO</b> & <b>Team Lead</b> of The
            <b>Counselling</b> & <b>Inclusion Team</b> for{" "}
            <b>The American School of Creative Science-ASCS, Sharjah</b>. Later,
            she was appointed as a <b>Cluster Psychologist</b> at{" "}
            <b>Bloom Charter Education in Abu Dhabi, Al Ain</b>, from 2020 to
            2022 and provided psychological services to 6 Charter Schools.
          </section>
        </FadeIn>
        <section className="abt second">
          <img src={sec2} alt="" className="abtimg" />
          <div className="contentabt">
            <div className="titleabt">Acheivements</div>
            <FadeIn>
              <div className="textabt">
                <li>
                  <b>Ms. Javaria's</b> notable contributions include the
                  development of the <b>first indigenous Scale</b> to assess{" "}
                  <b>Learning Disabilities</b>
                  among <b>primary school children</b> in Pakistan during her
                  <b>MD/MS/MPhil</b>. The Learning Disabilities Scale{" "}
                  <b>(LDS)</b> she created is a <b>valid</b> and <b>reliable</b>{" "}
                  indigenous scale (having excellent psychometric properties)
                  for assessment of Learning Disabilities with{" "}
                  <b>Cronbach alpha (α = .98)</b> that is an excellent
                  reliability. Her work has been recognized for its validity and
                  reliability, and her scale is widely used for research and
                  assessment purposes.
                </li>
                <li>
                  Additionally, <b>Ms. Javaria</b> has published a research
                  article titled{" "}
                  <b>
                    “Development and Preliminary Validation of an Indigenous
                    Scale for Assessment of Learning Disabilities”
                  </b>{" "}
                  in the{" "}
                  <b>
                    Pakistan Journal of Social and Clinical Psychology-2014,
                    Vol. 12, No.2, 27-37
                  </b>
                  . She has also authored a book,
                  <b>"Development of Learning Disabilities Scale (LDS)"</b>{" "}
                  published by <b>LAP- LAMBERT Academic Publishing</b> in{" "}
                  <b>Germany</b>.
                </li>
              </div>
            </FadeIn>
          </div>
        </section>
        <FadeIn>
          <section className="abt inter2">
            <div>
              Currently, she is employed by the{" "}
              <b>Emirates Schools Establishment (ESE)</b> in <b>Fujairah</b> as
              the Head of <b>Well-being, Pastoral Care,</b> and Safeguarding
              Leader at <b>Taaleem</b>.
            </div>
          </section>
        </FadeIn>

        <section className="listabt">
          <div className="titleabt">Specializations</div>
          <div className="textabt list">
            Her areas of expertise include Counseling &amp; Guidance,
            Psychoeducation, Psychotherapy, Psychological Assessment, Behavior
            Therapy, Cognitive Behavior Therapy (CBT), Learning Therapy, Social
            Skills Training, Specialized Individual Therapy &amp; Group Therapy
            with individuals of all ages.
          </div>
          <div className="listText">
            {servicesList.map((e, i) => {
              return (
                <FadeIn>
                  <li key={e.id || i}>{e.service}</li>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="listabt">
          <div className="titleabt">Qualifications</div>
          <div className="listText">
            <FadeIn>
              <li>
                MSc in Applied Psychology (Clinical Psychology, Child Psychology
                & Health Psychology)
              </li>
              <li>MD / MS / MPhil in Applied Psychology (Gold Medal)</li>
            </FadeIn>
          </div>
        </section>

        <section className="listabt">
          <div className="titleabt">Subspecialities</div>
          <div className="listText">
            <FadeIn>
              <li>Counselling Psychology</li>
              <li>Brief Psychological Interventions</li>
              <li>Clinical Psychology</li>
              <li>Cognitive Behavioural Therapy</li>
              <li>Health Psychology</li>
              <li>Neuropsychology</li>
            </FadeIn>
          </div>
        </section>

        <section className="listabt">
          <div className="titleabt">Languages</div>
          <div className="listText">
            <FadeIn>
              <li>English</li>
              <li>Urdu</li>
              <li>Hindi</li>
              <li>Arabic</li>  
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
