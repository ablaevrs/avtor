import React from 'react'

export default function Post({ item, isOwner }) {
  return (
    <article class="card mb-4">
        <div class="post-slider">
            <img src="images/post/post-3.jpg" class="card-img-top" alt="post-thumb" />
        </div>
        { isOwner && console.log('it is my post!!!!!') }
        <div class="card-body">
            <h3 class="mb-3">
                <a class="post-title" href="post-details.html">Advice From a Twenty Something</a>
            </h3>
            <ul class="card-meta list-inline">
            <li class="list-inline-item">
                <a href="author-single.html" class="card-meta-author">
                <img src="images/john-doe.jpg" />
                <span>{ item.firstName } { item.lastName }</span>
                </a>
            </li>
            <li class="list-inline-item">
                <i class="ti-calendar"></i>{ item.createdAt }
            </li>
            <li class="list-inline-item">
                <ul class="card-meta-tag list-inline">
                <li class="list-inline-item"><a href="tags.html">Decorate</a></li>
                <li class="list-inline-item"><a href="tags.html">Creative</a></li>
                </ul>
            </li>
            </ul>
            <p>{ item.description }</p>
            <a href={ '/posts/' + item._id } class="btn btn-outline-primary">Read More</a>
        </div>
    </article> 

  )
}
