import { useState } from "react";

export default function Vission () {


 const visionBlocks = document.querySelectorAll(".cign-new-vi-block");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cign-new-vi-active"); 
        }
      });
    },
    { threshold: 0.3 }
  );

  visionBlocks.forEach((block) => observer.observe(block));

    const [count,setcount] = useState(0)



    return (
        <>
        
       <section style={{ marginTop: "30px" }}>
         <button onClick={() => setcount(count + 1)}>increase</button>
         <button onClick={() => setcount (count >0 ? count - 1 : 0)}>decrease</button>
         
<h1>total : {count}</h1>

       </section>


<section class="cign-new-vi-editorial">
  <h1>total : {count}</h1>
  <div class="container">
    <div class="row">
      <div class="cign-new-vi-wrap">

        <header class="cign-new-vi-head">
          <h1>Terms and Conditions</h1>
          {/* <!-- <p class="cign-new-vi-subtitle">
            Freedom from addiction begins with understanding, compassion, and science.
          </p> --> */}
        </header>

        <div class="cign-new-vi-block">
          <span class="cign-new-vi-label">Belief</span>
          <p>
            We believe the world can gain true freedom from addiction by democratising
            the science of addiction. Addiction is not a moral failure or a lack of
            willpower—it is a complex interaction of biology, psychology, environment,
            and behaviour.
          </p>
          <p>
            When people understand how addiction works at a scientific level, shame is
            replaced with awareness, fear with clarity, and helplessness with control.
            By making this knowledge accessible, simple, and actionable, we empower
            individuals and communities to take informed steps toward recovery and
            prevention.
          </p>
        </div>

        <div class="cign-new-vi-block">
          <span class="cign-new-vi-label">Purpose</span>
          <p>
            Our purpose is to create effective, evidence-based interventions that help
            people achieve lasting freedom from addiction while actively protecting
            the youth from falling into this trap.
          </p>
          <p>
            We recognise that addiction often begins early, driven by misinformation,
            peer pressure, stress, and easy access to harmful substances. Prevention is
            just as critical as recovery.
          </p>
          <p>
            Through education, behavioural tools, digital solutions, and
            community-driven initiatives, we aim to interrupt the cycle of addiction
            before it takes hold and support those already affected with compassion
            and science-backed solutions.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

<section class="cign-new-vi-mission-section">
  <div class="container">
    <div class="row">
      <div class="cign-new-vi-mission-container">

        <div class="cign-new-vi-mission-header">
          <span class="cign-new-vi-mission-tag">Our Mission</span>
          <h2 class="cign-new-vi-mission-heading">
            Ten Million Products Buying by 2030
          </h2>
        </div>

        <div class="cign-new-vi-mission-content">
          <p>
            Our mission is to help one million people quit smoking by 2030. Smoking
            remains one of the most preventable causes of illness and death worldwide,
            yet millions struggle to quit despite repeated attempts. We aim to change
            this by combining scientific research, behavioural science, technology,
            and human-centred design to create quitting solutions that actually work
            in real life.
          </p>

          <p>
            By focusing on smoking cessation as a starting point, we address one of
            the most widespread and socially normalised forms of addiction. Our
            approach prioritises long-term success, relapse prevention, and
            sustainable behaviour change. Each individual who quits is not just a
            statistic, but a life improved, a family protected, and a future made
            healthier.
          </p>

          <p class="cign-new-vi-mission-emphasis">
            As we move toward 2030, our vision extends beyond numbers. We envision a
            future where addiction is understood, preventable, and treatable without
            stigma—where people are equipped with knowledge, support, and tools to
            reclaim control over their lives. Through collaboration, innovation, and
            unwavering commitment, we strive to create a world where freedom from
            addiction is not the exception, but the norm.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
        </>
    )
}