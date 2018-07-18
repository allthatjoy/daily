import React, {Component} from 'react';
import fetch from 'node-fetch'
import {sendErrorReport, isThereMulti} from './utility'
import './instagramImageGallery.css'

import InstagramFeedGalleryItem from './InstagramFeedGalleryItem'

class InstagramFeedGallery extends Component {

  constructor() {
    super()
    this.state = {
      instagramGalleryItems: []
    }
  }

  componentDidMount() {
    fetch('/instagram/feed', {method: 'POST'}).then(res => res.json()).then(res => {
      if (isThereMulti(res, res.status, res.items)) {
        let items = res.items.map(item => ({
          src: item.image,
          caption: item.caption,
          id: item.id,
          url: item.url
        })).slice(0,11)
        const instagramProfileLink = {
          src: "/assets/images/instagramProfileImage.png",
          caption: "Instagram Profile Image",
          id: "instagramProfileImage",
          url: "https://www.instagram.com/timhaagdev/"
        }
        items.push(instagramProfileLink)
        items = items.map(item => (<InstagramFeedGalleryItem src={item.src} caption={item.caption} id={item.id} url={item.url}/>))
        this.setState({instagramFeedGalleryItems: items})
      }
    }).catch(err => {
      if (err) {
        sendErrorReport('frontend - InstagramFeedGallery-component', `Error while requesting the instagram-feed: ${err}`)
      }
    })
  }

  render() {
    return (<div className="row col-12" id="instagramFeedGalleryWrapper">{this.state.instagramFeedGalleryItems}</div>);
  }
}

export default InstagramFeedGallery;
