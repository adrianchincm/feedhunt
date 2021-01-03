# Feedhunt

A portfolio project on the MERN stack

## Website

https://feedhunt.web.app

## Backend application repo

https://github.com/adrianchincm/feedhunt-api

## Description

Feedhunt is Twitter meeting a shopping cart. It allows users to share deals about products by embedding them in their posts.  
All users are able to buy and sell items on the platform without having to be redirected elsewhere!

## Features

Shares posts about your favorite product.  
Find good deals from friends or strangers.  
Follow your favorite users to get the latest updates.   
View and purchase items without leaving the website.

## App Design

### Functional

User - Users can share posts that contain text and images, while also embedding products on their Posts.
Post - Post can contain text, images and Products.
Product - Products can be added by any user and be shared through a post

### UI/UX
Design is 99% copied from Twitter, this is to ensure a clean design without spending too much time on it.

## Stack
Running on a MERN stack :-  
  
Reactjs application is hosted on Firebase Hosting  

NodeJS application is hosted on Heroku  
MongoDB is hosted by MongoDB Atlas  
AWS S3 for image uploads

## Current progress

### Phase 1 **(DONE)**  
Setup user and post models   
Allow user to make a post and read it    

### Phase 2 **(DONE)**   
Users can view another user's profile + posts  
Users can follow/unfollow another user  
Users can view followed users' posts in their feed  

### Phase 3 **(DONE)**   
Users can upload images in their post  
Introduction of product model  
User can create and view their own products  
User can embed products on their posts  
All users can view product details from embedded product  

### Phase 4 **(DONE)**   
Users have a cart feature  
Users can add/remove products into their cart  

Phase 4.1 : Added recommended users section **(DONE)**  

### Phase 5  
Integrate Stripe payment  
Users can enter delivery details before checkout  
Users can view their orders
