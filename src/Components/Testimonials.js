import React from 'react'

function Testimonials() {
  return (
    <section style={{color: '#000'}}>
  <div class="container py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-xl-8 text-center">
        <h3 class="fw-bold mb-4">Testimonials</h3>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-md-4 mb-4 mb-md-0">
        <div class="card">
          <div class="card-body py-4 mt-2">
            <div class="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 class="font-weight-bold">Teresa May</h5>
            {/* <h6 class="font-weight-bold my-3">Founder at ET Company</h6> */}
           
            <p class="mb-2">
             Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <div class="card">
          <div class="card-body py-4 mt-2">
            <div class="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 class="font-weight-bold">Alexa Horwitz</h5>
            {/* <h6 class="font-weight-bold my-3">Founder at ET Company</h6> */}
           
            <p class="mb-2">
             Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div><div class="col-md-4 mb-4 mb-md-0">
        <div class="card">
          <div class="card-body py-4 mt-2">
            <div class="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                class="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 class="font-weight-bold">Maggie McLoan</h5>
            {/* <h6 class="font-weight-bold my-3">Founder at ET Company</h6> */}
           
            <p class="mb-2">
             Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonials