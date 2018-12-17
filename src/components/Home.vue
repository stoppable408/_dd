<template>
  <div class="home">
    <header>
      <nav class="navbar fixed-top navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">Dungeons & Dragons</a>
          <button class="navbar-toggler menu-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#summary">Summary</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#dungeon-masters">Dungeon Masters</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#gallery">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#faqs">FAQs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link left-nav-item" href="#contact ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="header container">
        <h1 class="title">D & D</h1>
        <h3 class="subtitle mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum modi et non tempore distinctio.</h3>
        <a href="#contact" class="btn action-btn mt-5">Get In Touch!</a>
      </section>
    </header>


    <main>
      <section class="summary text-center" id="summary">
        <div class="container">
          <div class="summary-title mb-5">
            <h2>Who We Are</h2>
          </div>

          <div class="summary-subtitle">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque totam neque atque facilis. Et saepe quia maxime fuga quis rerum repudiandae explicabo provident consequatur tenetur! Ut, ratione nam sunt hic a soluta dolores consequuntur iure consequatur molestias praesentium officia alias rem voluptatibus doloribus amet perferendis voluptates, explicabo ipsam omnis non.</p>
          </div>
        </div>
      </section>

      <section class="dd-masters" id="dungeon-masters">
        <div class="container">
          <div class="dd-title text-center mb-5">
            <h2>Meet Your Dungeon Masters</h2>
          </div>

          <div class="masters">
            <div class="row">
              <div class="shadow card col-lg master-card">
                <div class="card-body">
                  <div class="master">
                    <img src="../assets/profile-1.jpg" alt="Profile Pic" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Jason Tiller</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Detroit, MI</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod.</p>
                  <div class="more text-center">
                    <button class="btn more-btn" data-toggle="modal" data-target="#modal">More</button>
                  </div>
                </div>
              </div>

              <div class="shadow card col-lg master-card">
                <div class="card-body">
                  <div class="master">
                    <img src="../assets/profile-2.png" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Arron Cambridge</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Ann Arbor, MI</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod.</p>
                  <div class="more text-center">
                    <button class="btn more-btn" data-toggle="modal" data-target="#modal-2">More</button>
                  </div>
                </div>
              </div>

              <div class="shadow card col-lg master-card">
                <div class="card-body">
                  <div class="master">
                    <img src="../assets/profile-3.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Cameron Rivers</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Grand Rapids, MI</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod.</p>
                  <div class="more text-center">
                    <button class="btn more-btn" data-toggle="modal" data-target="#modal-3">More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-title">Dungeon Master</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="master">
                    <img src="../assets/profile-1.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Jason Tiller</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Detroit, MI</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos voluptatem ullam quo quia sed? Id molestiae enim aliquam harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, necessitatibus mollitia. Expedita sunt impedit ratione!</p>
                </div>
                <div class="modal-footer">
                  <a href="#" class="wiki-link">Link to Wiki</a>
                  <button type="button" class="btn modal-close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modal-2" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-title">Dungeon Master</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="master">
                    <img src="../assets/profile-2.png" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Arron Cambridge</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Ann Arbor, MI</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error incidunt sunt ipsam porro, itaque necessitatibus repellat eum quis beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis dolore officia repellat minus quam reiciendis blanditiis, vero beatae architecto?</p>
                </div>
                <div class="modal-footer">
                  <a href="#" class="wiki-link">Link to Wiki</a>
                  <button type="button" class="btn modal-close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modal-3" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-title">Dungeon Master</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="master">
                    <img src="../assets/profile-3.jpg" alt="" class="master-img">
                    <div class="master-info">
                      <h5 class="card-title">Cameron Rivers</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Region: Grand Rapids, MI</h6>
                    </div>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur assumenda doloremque, at quas doloribus aut veritatis nulla ut illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.</p>
                </div>
                <div class="modal-footer">
                  <a href="#" class="wiki-link">Link to Wiki</a>
                  <button type="button" class="btn modal-close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery" id="gallery">
        <div class="galler-title">
          <h2 class="text-center mb-5">Gallery</h2>
        </div>
        <div class="container">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 gallery-img" src="../assets/gallery-1.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 gallery-img" src="../assets/gallery-2.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 gallery-img" src="../assets/gallery-5.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <section class="join-us container">
        <div class="join-content">
          <h2 class="join-text">Dont wait untill tomorrow</h2>
        </div>

      </section>
      
      <div class="join-action">
        <a href="#contact" class="join-btn btn">Join Today</a>
      </div>


      <section class="faqs" id="faqs">
        <div class="container">
          <div class="faqs-title text-center mb-5">
            <h2>FAQs</h2>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="faq-header card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <h5 class="mb-0">
                  <p class="question">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates.
                  </p>
                </h5>
              </div>

              <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body answer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem voluptate vitae tenetur voluptas sequi, possimus expedita repellendus cumque officiis!
                </div>
              </div>
            </div>
            <div class="card">
              <div class="faq-header card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5 class="mb-0">
                  <p class="question">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, eum.
                  </p>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body answer">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, autem. Reiciendis reprehenderit magnam fugiat deleniti rem ipsum architecto veniam minima.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="faq-header card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h5 class="mb-0">
                  <p class="question">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, quae?
                  </p>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body answer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum molestias minus laboriosam assumenda consequuntur, delectus nihil placeat officiis nemo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer" id="contact">
      <div class="container">
        <div class="row footer-container">
          <div class="footer-content col-md">
            <h3 class="contact-title">Contact Us</h3>
            <p class="motto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus sunt, magnam ullam tempora pariatur earum quod maxime ipsam nostrum?</p>
            <div class="social">
              <a href="#" class="social-item"><i class="fab fa-facebook"></i></a>
              <a href="#" class="social-item"><i class="fab fa-twitter-square"></i></a>
              <a href="#" class="social-item"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-item"><i class="fas fa-envelope"></i></a>
            </div>
          </div>

          <form action="https://submit-form.com/" class="footer-form col-md">
            <input type="hidden" name="_redirect" value="http://localhost:8080/thanks" />
            <input type="checkbox" name="_honeypot" style="display:none" tabindex="-1" autocomplete="off">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control form-input" id="name" name="name" placeholder="Enter name" required>
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control form-input" id="email" name="email" placeholder="Enter email" required>
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea type="text" class="form-control form-input" id="message" name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn submit-btn">Submit</button>
          </form>
        </div>

        <div class="copywrite">
          <p>Dungeons & Dragons <span>&copy;</span> 2018</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  $primary: #9D0A0E;
  $secondary: #E6E6DB;
  $white: #fff;
  $black: #000;
  $grey: #CACACA;

  nav {
    padding: 20px;
    background: $secondary;
  }

  .navbar-brand {
    color: $primary;
    
  }

  .left-nav-item {
    color: $black;
  }

  .menu-btn {
    outline-color: $primary;
    font-size: 1.5rem;  
  }

  header {
    height: 100vh;
  }
  
  .header {
    text-align: center; 
    padding-top: 150px;
  }

  .title {
    font-size: 5rem;
  }

  .subtitle {
    font-weight: 300;
  }

  .action-btn {
    background: #9D0A0E;
    color: $white;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.5rem;
  }

  .summary {
    background: $primary;
    color: $white;
    padding: 150px 0;
  }

  .summary-title h2 {
    font-size: 2.4rem;
  }

  .summary-subtitle p {
    font-size: 1.2rem;
  }

  .dd-masters {
    padding-top: 170px;
    margin-bottom: 170px;
  }

  .master {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  img.master-img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .master-card {
    margin: 10px;
    background: $secondary;
    border: none;
    border-radius: 5px;
  }

  .more-btn {
    background: transparent;
    color: $primary;
    border-radius: 50px;
    padding: 10px 25px;
    border: 1px solid $primary;
    
    &:hover {
      color: $white;
      background: $primary;
      border: 1px solid $primary;
    }
  }

  .modal-header {
    background: $secondary;
    color: $primary;
  }

  .modal-footer {
    background: $secondary;
  }

  .wiki-link {
    color: $black;
  }

  .modal-close {
    outline: none;
    border: 1px solid $primary;
    background: transparent;
    padding: 10px 20px;
    border-radius: 50px;
    color: $primary;

    &:hover {
      color: $white;
      background: $primary;
    }
  }

  .gallery {
    z-index: 1px;
    max-width: 700px;
    max-height: 500px;
    margin: 0 auto;
  }

  .photo {
    width: 400px;
    height: 300px;
  }

  .gallery-img {
    max-width: 700px;
    max-height: 500px;
  }

  .join-us {
    height: 350px;
    background: $primary; 
    position: relative;
    bottom: 170px;
    z-index: -1;
    border-radius: 5px;
    margin: 0 auto;
  }

  .join-content {
    padding-top: 200px;
    padding-bottom: -200px;
    text-align: center;
    margin-top: 20px;
  }

  .join-text {
    color: $white;
  }

  .join-action {
    position: relative;
    bottom: 270px;
    text-align: center;
  }

  .join-btn {
    margin: 10px 0;
    border: 1px solid $white;
    color: $white;
    text-decoration: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.2rem;

    &:hover {
      background: $black;
      border: 1px solid $black;
    }
  }

  .faqs {
    margin-top: -80px;
    padding-bottom: 30px;
  }

  .faq-header {
    cursor: pointer;
    background: $secondary;
  }

  .question {
    color: $primary;
  }

  .answer {
    font-size: 1.2rem;
  }

  .footer {
    background: $primary;
    padding-top: 70px;
    padding-bottom: 10px;
    margin-top: 100px;
  }

  .footer-form {
    display: flex;
    flex-direction: column;
  }

  .contact-title {
    color: $white;
    margin-bottom: 20px;
  }

  .form-label {
    color: $white;
  }

  .form-input {
    border-radius: 0;
    outline: 0;
    border: none;
  }

  .submit-btn {
    border-radius: 50px;
    color: $white;
    background: transparent;
    border: 1px solid $white;
    outline: none;
    width: 50%;
    margin: 0 auto;
    font-size: 1.2rem;

    &:hover {
      background: $black;
      border: 1px solid $black;
    }
  }

  .footer-container {
    margin: 0 auto;
  }

  .footer-content {
    margin-bottom: 50px;  
  }

  .social {
    margin-top: 20px;
  }

  .social-item {
    color: $white;
    font-size: 2rem;
    margin-right: 15px;
  }

  .motto {
    color: $white;
    font-size: 1.3rem;
    font-weight: 300; 
  }

  .copywrite {
    margin-top: 50px;
    text-align: center;

    & p {
      color: $grey;
    }
  }

  @media only screen and (max-width: 1000px) {
    .photo {
      width: 100%;
      height: 400px;
      margin: 0 auto;
    }
  }
</style>
