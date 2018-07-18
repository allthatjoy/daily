import React, {Component} from 'react';

class InstagramFeedGalleryItem extends Component {

  openInstagramPostPage() {
    window.open(this.props.url, '_blank')
  }

  render() {
    return (<div className="col-lg-2 col-md-2 col-xs-3"><img onClick={this.openInstagramPostPage.bind(this)} src={this.props.src} id={this.props.id} url={this.props.url} caption={this.props.caption} className="instagramGalleryItem"/></div>);
  }
}

export default InstagramFeedGalleryItem;
