import React from 'react'

export default function Post({ item }) {
    console.log('item', item)
  return (
    <article class="card mb-4">
        <div class="post-slider">
            <img src="images/post/post-3.jpg" class="card-img-top" alt="post-thumb" />
        </div>
        <div class="card-body">
            <h3 class="mb-3">
                <a class="post-title" href="post-details.html">Advice From a Twenty Something</a>
            </h3>
            <ul class="card-meta list-inline">
            <li class="list-inline-item">
                <a href="author-single.html" class="card-meta-author">
                <img src="images/john-doe.jpg" />
                <span>Rustem</span>
                </a>
            </li>
            <li class="list-inline-item">
                <i class="ti-timer"></i>2 Min To Read
            </li>
            <li class="list-inline-item">
                <i class="ti-calendar"></i>14 jan, 2020
            </li>
            <li class="list-inline-item">
                <ul class="card-meta-tag list-inline">
                <li class="list-inline-item"><a href="tags.html">Decorate</a></li>
                <li class="list-inline-item"><a href="tags.html">Creative</a></li>
                </ul>
            </li>
            </ul>
            <p>Description</p>
            <a href='' class="btn btn-outline-primary">Read More</a>
        </div>
    </article> 

  )
}
