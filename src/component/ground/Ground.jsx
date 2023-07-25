import React, { useState } from "react";
import "./ground.css";
import img1 from "../../images/babi.jpg";
import Nav from "../nav/Nav";
import prod from "../array.json";

const Ground = () => {
  const productsPerPage = 6; // Number of products per page
  const totalPages = Math.ceil(prod.length / productsPerPage); // Calculate the total number of pages

  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  // Get the products to display on the current page
  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return prod.slice(startIndex, endIndex);
  };

  // Handle page navigation
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentProducts = getCurrentProducts(); // Get the products for the current page

  const openImageInNewTab = (imgDetail) => {
    const newTab = window.open("", "_blank");
    newTab.document.write(`
      <html>
        <head>
          <title>${imgDetail.nam}</title>
        </head>
        <style>
        body{
          line-height: 1.5;
        }
        body .infoDetail-container {
          width: 99%;
        }
        body .infoDetail-container img{
          width: 100%;
          height:auto;
        }
        body .infoDetail-container p {
          text-align: justify;
          font-size: 1rem;
        }
      </style>

        <body>
         <div class="infoDetail-container"> 
          <img src="${imgDetail.imgUrl}" alt=""/>
          <h3>${imgDetail.nam}</h3>
          <p>description will be here</p>
        </div>
        </body>
      </html>
    `);
    newTab.document.close();
  };

  return (
    <>
      <Nav />
      <section className="ground-container">
        <h2 className="mainHeading">Grounded Area</h2>
        <div className="ground-main-container">
          {currentProducts.map((item) => (
            <div key={item.id} className="child-one">
              <img src={item.imgUrl || img1} alt="" />
              <h3>{item.nam}</h3>
              <p>{item.des}</p>
              <button className="btn" onClick={() => openImageInNewTab(item)}>
                Detail
              </button>
            </div>
          ))}
        </div>
        <div className="pagination">
          <div className="pagDiv-one">
            <button
              className="btn"
              disabled={currentPage === 1}
              onClick={goToFirstPage}
            >
              First Page
            </button>
            <button
              className="btn"
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
            >
              Previous Page
            </button>
          </div>
          <div className="pagDiv-two">
            {Array.from(Array(totalPages)).map((_, index) => (
              <button
                key={index + 1}
                className={`btn ${
                  currentPage === index + 1 ? "active" : ""
                } btn-nos`}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="pagDiv-three">
            <button
              className="btn"
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
            >
              Next Page
            </button>
            <button
              className="btn"
              disabled={currentPage === totalPages}
              onClick={goToLastPage}
            >
              Last Page
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ground;
