import React from 'react';
import {Speedometer, List} from 'react-bootstrap-icons';

function Header() {
  return (<>
    <header id="header" className="fixed-top d-flex header align-items-center header-transparent" >
    <div className="container d-flex justify-content-between align-items-center">
    <div id="logo">
      <a href="index.html">
        <h2 className="text-dark" style={{ textDecoration: "none" }}> LOGO </h2>
      </a>
      {/* Uncomment below if you prefer to use a text logo */}
      {/*<h1><a href="index.html">Regna</a></h1>*/}
    </div>
    <nav id="navbar" className="navbar ">
      <ul>
        <li> <a className="nav-link scrollto  " href="index.html"> Home </a> </li>
        <li> <a className="nav-link scrollto" href="shop.html">  Shop </a> </li>
        <li> <a className="nav-link scrollto" href="services.html"> Returns/Exchange </a> </li>
        <li> <a className="nav-link scrollto" href="book.html"> Track </a> </li>
        <li> <a className="nav-link scrollto" href="photo.html"> FAQ's </a> </li>
        <li> <a className="nav-link scrollto" href=" contact.html">  About US </a> </li>
      </ul>
      <div className="d-flex">
        <svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>
        <svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg 
        // onClick="openModal()" 
        style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16" >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <List color='#22262a' size={28} />
        {/* <i className="bi bi-list mobile-nav-toggle" /> */}
      </div>
    </nav>
    {/* .navbar */}
  </div>
  {/* Modal container */}
  <div className="modal-container" id="myModal">
    {/* Modal content */}
    <div className="modal-content">
      <div className="d-flex justify-content-end" style={{ height: 60 }}>
        <svg 
       // onClick="closeModal()" 
        xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <h1>Add To Cart</h1> <br />
      <p>No Product Added</p>
      <hr />
      {/* Close button */}
      {/* <button>Close Modal</button>    */}
    </div>
  </div>
    </header>


<section id="hero">
  <div
    id="heroCarousel"
    data-bs-interval={5000}
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <ol className="carousel-indicators" id="hero-carousel-indicators" />
    <div className="carousel-inner" role="listbox">
      {/* Slide 1 */}
      <div
        className="carousel-item active"
        style={{
          backgroundImage: "url(assets/img/hero-bg.jpg)",
          backgroundSize: "cover"
        }}
      >
        <div className="carousel-container ">
          <div className="container">
            <h2 className="animate__animated animate__fadeInDown">
              COMFYAF <br />
              ESSENTIALS
            </h2>
            <p>#BEDRESSPONSIBLE</p>
            {/* <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
            <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a> */}
          </div>
        </div>
      </div>
      {/* Slide 2 */}
      <div
        className="carousel-item"
        style={{
          backgroundImage:
            "url(assets/img/trendy-stylish-woman-rejoicing-with-sales-shopping-time-isolated-pink-wearing-casual-outfit_273443-4585.avif)"
        }}
      >
        <div className="carousel-container">
          <div className="container">
            <h2 className="animate__animated animate__fadeInDown">
              #BE <br />
              DRESS <br />
              PONSIBLE
            </h2>
            {/* <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
            <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
    {/* <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <i class="bi bi-arrow-bar-left carousel-control-prev-icon" aria-hidden="true"></i>

      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <i class="bi bi-arrow-bar-right carousel-control-next-icon" aria-hidden="true"></i>
      </a> */}
  </div>
</section>



<section id="about" className="about">
  <p className="text-center">#BEDRESSPONSIBLE</p>
  <h1 className="text-center">The Vagabond Hipster Series</h1> <br />
  <br />
  <div className="container">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row row1">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshticompanyHaremPants5_705544aa-d64f-46ae-bdcd-78bf2fe50905_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row row1">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshticompanyHaremPants5_705544aa-d64f-46ae-bdcd-78bf2fe50905_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row row1">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshticompanyHaremPants5_705544aa-d64f-46ae-bdcd-78bf2fe50905_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-dark rounded-circle"
          aria-hidden="true"
        />
        {/* <span class="sr-only">Previous</span> */}
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-dark rounded-circle"
          aria-hidden="true"
        />
        {/* <span class="sr-only">Next</span> */}
      </a>
    </div>
  </div>
</section>




<section id="clients" className="clients">
  <div className="container" data-aos="zoom-in">
    <div className=" row row2 align-items-center">
      <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        sapiente, ab hic commodi maiores animi quos deleniti labore ut rerum
        tenetur voluptatum nihil assumenda exercitationem provident accusamus
        nulla cumque debitis? Eveniet non earum sequi quod dignissimos ullam
        consequatur nihil dolor fuga ducimus aliquid odit, doloribus eaque
        dolores ad ut eligendi?
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
        <img
          src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg"
          alt=""
        />
      </div>
    </div>
    <br />
    <br />
    <div className="container" data-aos="zoom-in">
      <div className=" row row2 align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
          <img
            src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sapiente, ab hic commodi maiores animi quos deleniti labore ut rerum
          tenetur voluptatum nihil assumenda exercitationem provident accusamus
          nulla cumque debitis? Eveniet non earum sequi quod dignissimos ullam
          consequatur nihil dolor fuga ducimus aliquid odit, doloribus eaque
          dolores ad ut eligendi?
        </div>
      </div>
    </div>
  </div>
</section>




<section id="iframe">
  <div className="position-relative">
    <div className="iframe">
      <iframe
        id="YouTubeVideo-template--16577403715829__hero-video"
        className="video-div"
        data-type="youtube"
        data-video-id="CSp5KEg4K-g"
        frameBorder={0}
        // allowFullScreen={1}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="The Veshti Company - An ode to all the ones who wear their opinions & are proud to #BEDRESSPONSIBLE!"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CSp5KEg4K-g?autohide=0&cc_load_policy=0&controls=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&&autoplay=1;origin=https%3A%2F%2Ftheveshticompany.com&widgetid=1?autoplay=1&mute=1"
        data-gtm-yt-inspected-11="true"
        tabIndex={-1}
      />
    </div>
    <div className="text-light position-absolute ">
      <h1 className="text-light">#Be</h1>
      <h1 className="text-light">Dress</h1>
      <h1 className="text-light">Ponsible</h1>
    </div>
  </div>
</section>


  <section id="instagram">
    <h1 className="text-center">Check out our Instagram</h1>
    <p className="text-center">#BeDressponsible</p>
    <br />
    <br />
    <div className="container justify-content-center" style={{ marginLeft: "20% !important" }}>
      <div className="row portfolio text-light">
        <div className="col-lg-4 col-md-6 col-sm-6 div1">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div2">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div3">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div4">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div5">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div6">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div7">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div8">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div9">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section style={{ paddingBottom: "0% !important" }}>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 text-start">
          <h4>Footer menu</h4>
          <ul>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">The TEAM</a>
            </li>
            <li>
              <a href="#">
                Registered Address : 695A, Sadhasiva Nagar, Vandiyur, Madurai -
                625020
              </a>
            </li>
            <li>
              <a href="#">
                Email Address :<br /> operations@theveshticompany.com
              </a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refund | Cancellation | Shipping Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <h4>Main Menu</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">The Vagabond</a>
            </li>
            <li>
              <a href="#">Hipster Series</a>
            </li>
            <li>
              <a href="#">BoHo Shorts (Out of Stock)</a>
            </li>
            <li>
              <a href="#">The TEAM</a>
            </li>
            <li>
              <a href="#">Track My Order</a>
            </li>
            <li>
              <a href="#">Returns Center</a>
            </li>
            <li>
              <a href="#">Help Centre</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <h4>Sign up and save</h4>
          <br />
          <p>
            Subscribe to get special offers, free giveaways, and once in a
            lifetime deals.
          </p>
          <br />
          <div className="start-info">
            <div className="input">
              <div className="input1 d-flex ">
                <i className="bi bi-envelope" />{" "}
                <input type="email" placeholder="Enter Your Email" id="" />
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <a href="#" style={{ paddingRight: 15 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="white"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a href="#" style={{ paddingRight: 15 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="White"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="white"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>



</>

  )
}

export default Header;