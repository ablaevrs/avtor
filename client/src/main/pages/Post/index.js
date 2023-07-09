import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Post() {
  const [data, setData] = useState()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data)
    }).catch((err) => {
      console.warn(err)
      alert('Error during getting post')
    })
  }, [])

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
                <span>{ data?.firstName } { data?.lastName }</span>
                </a>
            </li>
            <li class="list-inline-item">
                <i class="ti-calendar"></i>{ data?.createdAt }
            </li>
            <li class="list-inline-item">
                <ul class="card-meta-tag list-inline">
                <li class="list-inline-item"><a href="tags.html">Decorate</a></li>
                <li class="list-inline-item"><a href="tags.html">Creative</a></li>
                </ul>
            </li>
            </ul>
            <p>{ data?.description }</p>
            <a href='' class="btn btn-outline-primary">Read More</a>
        </div>
    </article> 

  )
}
