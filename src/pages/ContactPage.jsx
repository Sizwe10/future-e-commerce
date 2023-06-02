import React from 'react'
import NavHeader from '../component/NavHeader'
import Footer from '../component/Footer'

const ContactPage = () => {
  return (
    <div>
      <NavHeader />
      <div className='container mt-5'>
        <div className='row'>
          <div className='display-5 text-center my-3'>Contact Us</div>
        </div>

        <div className="container mt-5">
          <h2 className="mb-3">Send us a message</h2>
          <form >
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-dark" type="submit">
              submit
            </button>
          </form>
        </div>

        <div className='mt-5'>
          <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=912&amp;height=399&amp;hl=en&amp;q=johannesburg&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://capcuttemplate.org/">Capcuttemplate.org</a></div><style></style></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default ContactPage
