// console.log('Starting up');
// $(onInit)
$(onInit)
function onInit() {

  console.log('hi mofofasfa');
  renderProjectsCards()
  renderProjectsModals()
  $('.form .submit-button').on('click', sendMail)
  $('.nav-contact').on('click', function () {
    $('.offcanvas-btn').addClass('offcanvas-btn-open')
    $('.form-container').addClass('offcanvas-aside-open')
  })
}


function sendMail(ev) {
  ev.preventDefault()
  var email = $('#email').val()
  var subject = $('#textSubject').val()
  var messageBody = $('#messageBody').val()
  var myEmail = `OrenSalomonKot@gmail.com`
  window.open(`https://mail.google.com/mail/u/0/?fs=1&to=${myEmail}&su=${subject}&body=${messageBody}&bcc=${email}&tf=cm`, `_blank`)
}

function renderProjectsCards() {

  var projects = getProject()
  console.log('projects', projects);

  var strHTMLs = projects.map(project => `
     <div data-portfolio-id="${project.id}" class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.title}</p>
    </div>
  </div>` )
  // need to add pictures!
  var $elPortfolio = $('.portfolio-section .protfolio-container')
  $elPortfolio.html(strHTMLs)
}


function renderProjectsModals() {

  var projects = getProject()
  console.log('projects', projects);

  var strHTMLs = projects.map(project => `
    <div class="portfolio-modal modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">${project.title}</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt="">
                  <p>${project.desc}</p>
                  <ul class="list-inline">
                    <li>published at :${Date(project.publishedAt)}</li>
                    <li>${project.labels}</li>
                    <li>${project.name}</li>
                    <li><a class="text-info" href="${project.url}">Project : ${project.name}</a></li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>` )
  // need to add pictures!
  var $elPortfolioModal = $('.modal-container')
  $elPortfolioModal.html(strHTMLs)
}


