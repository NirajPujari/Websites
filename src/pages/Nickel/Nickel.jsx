import "./styles.css";
import "./styles2.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { variation, otherProduct } from "./data";
import { DropDown } from "../@components/DropDown/DropDown";
import { ContainerMetal } from "../@components/Container/ContainerMetal";
import { elementsData } from "../../Data/element";

export const Nickel = () => {
  const navigate = useNavigate();

  return (
    <div className="nickel-container">
      <DropDown position={4} />
      <div className="nickel-main-content">
        <ContainerMetal
          header="Nickel Alloy"
          image={elementsData["nickel"][0]}
          contentHeader="Nickel Alloy Products"
          content={elementsData["nickel"][1]}
          button="Enquire Us"
        />
        <div className="nickel-extras">
          <div className="nickel-extras-divs">
            <h2 className="header">
              Nickel Alloy Products stockist & supplier in India
            </h2>
            <p>
              <span style={{ fontWeight: "bold" }}>Nickel</span> is a lustrous
              chemical element with a slight golden tinge.{" "}
              <span style={{ fontWeight: "bold" }}>Nickel Alloy</span> is
              designed with high-concentration of nickel and with combinations
              of chromium and molybdenum. These alloys are also mixed with
              copper and a few other elements. This gives these alloys superior
              protection against corrosion and oxidations in different
              environments. The Ni Alloy has superior mechanical properties.
              These alloys possess superior tensile and yield strength. They
              have improved magnetic and electronic properties. The{" "}
              <span style={{ fontWeight: "bold" }}>Nickel Steel Alloy</span> is
              highly versatile and can be drawn in different shapes to be used
              in different applications. They are widely used in heavy forgings,
              turbine blades, propeller shafts, fasteners, etc. We are the top{" "}
              <span style={{ fontWeight: "bold" }}>
                Nickel suppliers in India
              </span>
              . Our institution aims at supplying top-quality at the most
              reasonable rates.
            </p>
          </div>
          <div className="nickel-extras-divs">
            <h3 className="header">
              Check Ni Alloy 201 Material Price per kg in Mumbai
            </h3>
            <p>
              <span style={{ fontWeight: "bold" }}>Nickel 201</span> is an alloy
              of nickel that is produced with a concentration of 0.02% carbon.
              This alloy is highly ductile and is neutral in moderate reducing
              environments This Alloy 201 is ferromagnetic and can suffice in
              high as well as low temperatures. These alloys are resistant to
              mineral acids and alkalis at room temperature. They can be easily
              elongated by 50% after the annealing process. High Nickel Alloys
              can be formed by hot and cold rolling processes. These alloys have
              higher resistance against corrosion and creep rupture. These
              alloys can be polished to give them a smooth and aesthetic finish.{" "}
              <span style={{ fontWeight: "bold" }}>Nickel Based Alloys</span>{" "}
              are designed with superior strength. These alloys are easy to
              maintain and have a long service life. All our products can be
              customized in different shapes and sizes to suit all your
              requirements.
            </p>
            <p>
              The{" "}
              <span style={{ fontWeight: "bold" }}>
                Nickel Alloy Price per Kg
              </span>{" "}
              is available between Rs 2000 to Rs 2500. The thickness, size, and
              other features influence the pricing of the products in this
              grade. Visit our outlets to get an exact quote on these products
              as well as our other products. We are the{" "}
              <span style={{ fontWeight: "bold" }}>Nickel Alloy suppliers</span>{" "}
              who make use of the latest technology and the best raw materials
              to produce the best products in the market. These products are
              produced under the strict guidance of our workers, following all
              rules and norms set by international and national unions. If you
              want to get a quote on our products or want to know more about
              them, contact us for more information.
            </p>
            <div className="variation-container">
              {variation.map((value, index1) => {
                return (
                  <div className="row" key={index1}>
                    {value.map((data, index2) => {
                      return (
                        <div
                          key={index2}
                          className={data["id"]}
                          onClick={() => navigate(data["link"])}
                        >
                          <img src={data["img"]} alt={data["text"]} />
                          <h3 className={data["id"] + "-text"}>
                            {data["text"]}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="nickel-extras-divs">
            <h3 className="header">Other Nickel Alloy Products we stock</h3>
            <h6 className="sub-header">
              View High Nickel Alloys grades, Chemical and Mechanical Properties
            </h6>
            <div className="variation-container">
              {otherProduct.map((value, index1) => {
                return (
                  <div className="row" key={index1}>
                    {value.map((data, index2) => {
                      return (
                        <div
                          key={index2}
                          className={data["id"]}
                          onClick={() => navigate(data["link"])}
                        >
                          <img src={data["img"]} alt={data["text"]} />
                          <h3 className={data["id"] + "-text"}>
                            {data["text"]}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
