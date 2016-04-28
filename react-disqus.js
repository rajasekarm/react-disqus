import React from 'react';

class ReactDisqus extends React.Component{
  componentDidMount() {
    this.embedDisqus();
  }
  render() {
    return(
      <div>
        <div id="disqus_thread">
          <noscript>
            <span>
              Please enable JavaScript to view the
              <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a>
            </span>
          </noscript>
        </div>
      </div>
    )
  }
  embedDisqus() {
    var disqus_config = function () {
    this.page.url = this.props.pageurl;
    this.page.identifier = this.props.identifier;
    };
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'http://' + this.props.shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }
}

ReactDisqus.propTypes = {
  shortname: React.PropTypes.string.isRequired,
  pageurl: React.PropTypes.string,
  identifier: React.PropTypes.string,

}
ReactDisqus.defaultProps = {
    shortname: null,
    pageurl: window.location.href,
    identifier: null
};

export default ReactDisqus;
