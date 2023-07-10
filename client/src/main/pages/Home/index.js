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

  const userData = useSelector(state => state.auth.data)
  const { posts } = useSelector(state => state.posts)
  console.log('posts', posts)

  const isPostsLoading = posts.status === 'loading'
  
  return (
    <>
      <TopBanner />
      <Trends />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8  mb-5 mb-lg-0">
              <h2 className="h5 section-title">Recent Post</h2>

              { 
                (
                  isPostsLoading ? [...Array(5)] : posts.items.posts).map((item, index) => 
                  // isPostsLoading ? (
                  //   <Post key={index} isLoading={true} />
                  // ) : (
                    <Post 
                      item={item || []}
                      isOwner={ userData?._id === item?.userId } 
                    />
                  // )
                )
              }
              
              <ul className="pagination justify-content-center">
                <li className="page-item page-item active ">
                    <a href="#!" className="page-link">1</a>
                </li>
                <li className="page-item">
                    <a href="#!" className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#!" className="page-link">&raquo;</a>
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

