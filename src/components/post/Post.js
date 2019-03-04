import $ from 'jquery';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import './post.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

import { CONTENT_TYPES } from '../../posts/constants';
import Posts from '../../posts';

import Footer from '../footer';
import Header from '../header';
import PostItem from './PostItem';

const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

class Post extends Component {
  static propTypes = {
    post: PropTypes.string.isRequired
  }

  state = {
    galleryImage: ''
  };

  componentDidMount() {
    const { post } = this.props;

    document.title = `How Far South - ${Posts[post].title}`;

    this.adChecker = setInterval(() => {
      $.each($('iframe'), (arr,x) => {
        let src = $(x).attr('src');
        if (src && src.match(/(ads)|(ads-iframe)|(disqusads)/gi)) {
          $(x).remove();
        }
      });
    }, 300);

    this.loadDisqus();

    this.prepGallery();
  }

  componentWillUnmount() {
    if (this.adChecker) {
      clearInterval(this.adChecker);
      this.adChecker = null;
    }
  }

  componentDidUpdate(prevProps) {
    const { post } = this.props;

    document.title = `How Far South - ${Posts[post].title}`;

    if (this.props.post !== prevProps.post) {
      this.loadDisqus();

      window.scrollTo(0, 0)

      this.prepGallery();
    }
  }

  loadDisqus = () => {
    global.disqusConfig = function() {
      this.page.url = `${window.location.origin}/${window.location.pathname}`; // + window.location.pathname
      this.page.identifier = `${this.props.post}`;
    }

    const d = document, s = d.createElement('script');
    s.src = 'https://how-far-south.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  prepGallery = () => {
    // Pull all the images together. When one is clicked we enter gallery mode.
    // Gallery mode can be used to go image to image. Exit button at top right. Borders on big width.

    this.imageUrlsForGallery = [];

    const { post } = this.props;
    const postContent = Posts[post].content;

    const checkItemForImages = item => {
      if (item.type === CONTENT_TYPES.GRID) {
        item.items.map(checkItemForImages);
      } else if (item.type === CONTENT_TYPES.IMAGE) {
        this.imageUrlsForGallery.push({original: item.url, thumbnail: item.thumbnailUrl ? item.thumbnailUrl : item.url});
      }
    }

    postContent.map(checkItemForImages);
  }

  imageClicked = imageUrl => {
    let imageIndex = 0;

    for (let i = 0; i < this.imageUrlsForGallery.length; i++) {
      if (this.imageUrlsForGallery[i].original === imageUrl) {
        imageIndex = i;
      }
    }

    this.setState({
      showGallery: true,
      galleryImageIndex: imageIndex
    });
  }

  render() {
    const { post: postUrl } = this.props;
    const post = Posts[postUrl];
    const { showGallery, galleryImageIndex } = this.state;

    const previousPost = post.previousPostUrl ? Posts[post.previousPostUrl] : null;
    const nextPost = post.nextPostUrl ? Posts[post.nextPostUrl] : null;
    const postDate = post.date ? post.date.toLocaleDateString('en-US', dateOptions) : '';
    const postLink = post.link;
    const postTitle = post.title;
    const postContent = post.content;

    return (
      <React.Fragment>
        {showGallery && (
          <div className="post-gallery">
            <div className="post-gallery-background" onClick={() => this.setState({showGallery: false})}/>
            <div className="post-gallery-container">
              <ImageGallery
                items={this.imageUrlsForGallery}
                startIndex={galleryImageIndex}
                showPlayButton={false}
              />
              <div className="post-gallery-close" onClick={() => this.setState({showGallery: false})}>X</div>
            </div>
          </div>
        )}
        <Header />
        <div className="container">
          <div className="container-padding">
            <h1 className="post-title">{postTitle}</h1>
            <div className="post-date">
              {postDate}
            </div>
            {postContent.map((item, index) => <PostItem onImageClick={this.imageClicked} key={`${postLink}_${index}`} item={item} />)}
          </div>
          {(previousPost || nextPost) && (
            <div className="post-next-and-prev-container">
              {previousPost && (
                <Link
                  className={`post-previous post-next-and-prev nice-link`}
                  to={previousPost.url}
                  data-title={`← Previous Post: ${previousPost.title}`}
                >
                  &larr; Previous Post: {previousPost.title}
                </Link>
              )}
              {nextPost && (
                <Link
                  className={`post-next post-next-and-prev nice-link`}
                  to={nextPost.url}
                  data-title={`Next Post: ${nextPost.title} →`}
                >
                  Next Post: {nextPost.title} &rarr;
                </Link>
              )}
            </div>
          )}
          {/* <div className="commentbox" /> */}
          <div id="disqus_thread" />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Post;