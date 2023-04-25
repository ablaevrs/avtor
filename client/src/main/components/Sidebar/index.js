import React from 'react'

export default function Sidebar() {
  return (
    <>
    <aside className="col-lg-4 @@sidebar">

        <div className="widget">
        <h4 className="widget-title"><span>Search</span></h4>
        <form action="#!" className="widget-search">
            <input className="mb-3" id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..." />
            <i className="ti-search"></i>
            <button type="submit" className="btn btn-primary btn-block">Search</button>
        </form>
        </div>

        <div className="widget widget-about">
        <h4 className="widget-title">Hi, I am Alex!</h4>
        <img className="img-fluid" src="images/author.jpg" alt="Themefisher" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel in in donec iaculis tempus odio nunc laoreet . Libero ullamcorper.</p>
        <ul className="list-inline social-icons mb-3">
            
            <li className="list-inline-item"><a href="#"><i className="ti-facebook"></i></a></li>
            
            <li className="list-inline-item"><a href="#"><i className="ti-twitter-alt"></i></a></li>
            
            <li className="list-inline-item"><a href="#"><i className="ti-linkedin"></i></a></li>
            
            <li className="list-inline-item"><a href="#"><i className="ti-github"></i></a></li>
            
            <li className="list-inline-item"><a href="#"><i className="ti-youtube"></i></a></li>
            
        </ul>
        <a href="about-me.html" className="btn btn-primary mb-2">About me</a>
        </div>

        <div className="promotion">
        <img src="images/promotion.jpg" className="img-fluid w-100" />
        <div className="promotion-content">
            <h5 className="text-white mb-3">Create Stunning Website!!</h5>
            <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur sociis. Etiam nunc amet id dignissim. Feugiat id tempor vel sit ornare turpis posuere.</p>
            <a href="https://themefisher.com/" className="btn btn-primary">Get Started</a>
        </div>
        </div>

        <div className="widget widget-author">
        <h4 className="widget-title">Authors</h4>
        <div className="media align-items-center">
            <div className="mr-3">
            <img className="widget-author-image" src="images/john-doe.jpg" />
            </div>
            <div className="media-body">
            <h5 className="mb-1"><a className="post-title" href="author-single.html">Charls Xaviar</a></h5>
            <span>Author &amp; developer of Bexer, Biztrox theme</span>
            </div>
        </div>
        <div className="media align-items-center">
            <div className="mr-3">
            <img className="widget-author-image" src="images/kate-stone.jpg" />
            </div>
            <div className="media-body">
            <h5 className="mb-1"><a className="post-title" href="author-single.html">Kate Stone</a></h5>
            <span>Author &amp; developer of Bexer, Biztrox theme</span>
            </div>
        </div>
        <div className="media align-items-center">
            <div className="mr-3">
            <img className="widget-author-image" src="images/john-doe.jpg" alt="John Doe" />
            </div>
            <div className="media-body">
            <h5 className="mb-1"><a className="post-title" href="author-single.html">John Doe</a></h5>
            <span>Author &amp; developer of Bexer, Biztrox theme</span>
            </div>
        </div>
        </div>

        <div className="widget">
        <h4 className="widget-title"><span>Never Miss A News</span></h4>
        <form action="#!" method="post" name="mc-embedded-subscribe-form" target="_blank"
            className="widget-search">
            <input className="mb-3" id="search-query" name="s" type="search" placeholder="Your Email Address" />
            <i className="ti-email"></i>
            <button type="submit" className="btn btn-primary btn-block" name="subscribe">Subscribe now</button>
            <div style={{position: 'absolute',  left: '-5000px;',  ariaHidden: 'true'}}>
            <input type="text" name="b_463ee871f45d2d93748e77cad_a0a2c6d074" tabIndex="-1" />
            </div>
        </form>
        </div>

        <div className="widget widget-categories">
        <h4 className="widget-title"><span>Categories</span></h4>
        <ul className="list-unstyled widget-list">
            <li><a href="tags.html" className="d-flex">Creativity <small className="ml-auto">(4)</small></a></li>
            <li><a href="tags.html" className="d-flex">Demo <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Elements <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Food <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Microwave <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Natural <small className="ml-auto">(3)</small></a></li>
            <li><a href="tags.html" className="d-flex">Newyork city <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Nice <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Tech <small className="ml-auto">(2)</small></a></li>
            <li><a href="tags.html" className="d-flex">Videography <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Vlog <small className="ml-auto">(1)</small></a></li>
            <li><a href="tags.html" className="d-flex">Wondarland <small className="ml-auto">(1)</small></a></li>
        </ul>
        </div>

        <div className="widget">
        <h4 className="widget-title"><span>Tags</span></h4>
        <ul className="list-inline widget-list-inline widget-card">
            <li className="list-inline-item"><a href="tags.html">City</a></li>
            <li className="list-inline-item"><a href="tags.html">Color</a></li>
            <li className="list-inline-item"><a href="tags.html">Creative</a></li>
            <li className="list-inline-item"><a href="tags.html">Decorate</a></li>
            <li className="list-inline-item"><a href="tags.html">Demo</a></li>
            <li className="list-inline-item"><a href="tags.html">Elements</a></li>
            <li className="list-inline-item"><a href="tags.html">Fish</a></li>
            <li className="list-inline-item"><a href="tags.html">Food</a></li>
            <li className="list-inline-item"><a href="tags.html">Nice</a></li>
            <li className="list-inline-item"><a href="tags.html">Recipe</a></li>
            <li className="list-inline-item"><a href="tags.html">Season</a></li>
            <li className="list-inline-item"><a href="tags.html">Taste</a></li>
            <li className="list-inline-item"><a href="tags.html">Tasty</a></li>
            <li className="list-inline-item"><a href="tags.html">Vlog</a></li>
            <li className="list-inline-item"><a href="tags.html">Wow</a></li>
        </ul>
        </div>

        <div className="widget">
        <h4 className="widget-title">Recent Post</h4>

        <article className="widget-card">
            <div className="d-flex">
            <img className="card-img-sm" src="images/post/post-10.jpg" />
            <div className="ml-3">
                <h5><a className="post-title" href="post/elements/">Elements That You Can Use In This Template.</a></h5>
                <ul className="card-meta list-inline mb-0">
                <li className="list-inline-item mb-0">
                    <i className="ti-calendar"></i>15 jan, 2020
                </li>
                </ul>
            </div>
            </div>
        </article>
        
        <article className="widget-card">
            <div className="d-flex">
            <img className="card-img-sm" src="images/post/post-3.jpg" />
            <div className="ml-3">
                <h5><a className="post-title" href="post-details.html">Advice From a Twenty Something</a></h5>
                <ul className="card-meta list-inline mb-0">
                <li className="list-inline-item mb-0">
                    <i className="ti-calendar"></i>14 jan, 2020
                </li>
                </ul>
            </div>
            </div>
        </article>
        
        <article className="widget-card">
            <div className="d-flex">
            <img className="card-img-sm" src="images/post/post-7.jpg" />
            <div className="ml-3">
                <h5><a className="post-title" href="post-details.html">Advice From a Twenty Something</a></h5>
                <ul className="card-meta list-inline mb-0">
                <li className="list-inline-item mb-0">
                    <i className="ti-calendar"></i>14 jan, 2020
                </li>
                </ul>
            </div>
            </div>
        </article>
        </div>

        <div className="widget">
        <h4 className="widget-title"><span>Social Links</span></h4>
        <ul className="list-inline widget-social">
            <li className="list-inline-item"><a href="#"><i className="ti-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="ti-twitter-alt"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="ti-linkedin"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="ti-github"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="ti-youtube"></i></a></li>
        </ul>
        </div>

        </aside>
    </>
  )
}
