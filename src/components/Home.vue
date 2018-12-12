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
              <div class="card col-lg">
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

              <div class="card col-lg">
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

              <div class="card col-lg">
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
                  <button type="button" class="btn modal-close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faqs" id="faqs">
        <div class="container">
          <ul class="faqs-list accordion" id="accordion">
            <div class="faqs-title">
              <h2>FAQs</h2>
            </div>
            <li class="faqs-list-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li class="faqs-list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li class="faqs-list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li class="faqs-list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li class="faqs-list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
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

          <form action="" class="footer-form col-md">
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

<script>
export default {
  data() {
    return {
      masters: [
        { 
          name: 'Jason Tiller', 
          imageUrl: '../assets/profile-1.jpg', 
          region: 'Detroit, MI', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod.' 
        },
        { 
          name: 'Cameron Rivers', 
          imageUrl: '../assets/profile-2.png', 
          region: 'Grand Rapids, MI', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod.' 
        },
        { 
          name: 'Arron Cambridge', 
          imageUrl: '../assets/profile-3.jpg', 
          region: 'Ann Arbor, MI', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo officia delectus corrupti voluptatum quod.' 
        },
      ]
    }
  },
}
</script>

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
    padding-top: 100px;
  }

  .master {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .card {
    margin: 10px;
    background: $secondary;
    border: none;
    border-radius: 0;
  }

  .more-btn {
    background: #9D0A0E;
    color: $white;
    border-radius: 50px;
    padding: 10px 25px;
  }

  .modal-header {
    background: $secondary;
    color: $primary;
  }

  .modal-footer {
    background: $secondary;

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

  .faqs {
    padding-top: 100px;
    padding-bottom: 30px;
  }

  div.faqs-title {
    border-bottom: .2px solid $grey;
    padding-bottom: 10px;
  }

  .faqs-list {
    list-style: none;
  }

  .faqs-list-item {
    border-bottom: .2px solid $grey;
    padding: 20px;
    color: $primary;
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
</style>
