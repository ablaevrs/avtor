import React, { useEffect, useState } from 'react'
import TopBanner from '../../components/TopBanner'
import Trends from '../../components/Trends'
import Sidebar from '../../components/Sidebar'
import Post from '../../components/Post'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../../redux/slices/posts'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const { posts } = useSelector(state => state.posts)
  
  return (
    <>
      <TopBanner />
      <Trends />
      <section class="section-sm">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8  mb-5 mb-lg-0">
              <h2 class="h5 section-title">Recent Post</h2>

              <Post />
              
              <ul class="pagination justify-content-center">
                <li class="page-item page-item active ">
                    <a href="#!" class="page-link">1</a>
                </li>
                <li class="page-item">
                    <a href="#!" class="page-link">2</a>
                </li>
                <li class="page-item">
                    <a href="#!" class="page-link">&raquo;</a>
                </li>
              </ul>
            </div>
            
            <Sidebar />
            
          </div>
        </div>
      </section>
    </> 
  )
}

