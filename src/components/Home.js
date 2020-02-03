import React from "react";

function Home() {
  return (
    <div id="home">
      <section className="sec">
        <div className="left fifty"></div>
        <div className="right fifty"></div>
      </section>
      <section className="sec">
        <div className="left thirty"></div>
        <div className="right seventy"></div>
      </section>
      <section className="sec">
        <div className="left seventy"></div>
        <div className="right thirty"></div>
      </section>
    </div>
  );
}

export default Home;
