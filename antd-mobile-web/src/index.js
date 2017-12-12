import React from 'react'
import ReactDOM from 'react-dom'



import Badge from 'antd-mobile-web/lib/badge'


import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile-web';

import './index.css'

//const repo = 'https://github.com/cncolder/antd-mobile-web'
class App extends React.Component{
	constructor(props){
		super(props)
		
		 this.state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
	}
	
	
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank>
        <div className="sub-title">normal</div>
        <Carousel
          className="my-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>

        <WhiteSpace />
        <div className="sub-title">vertical</div>
        <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
        >
          <div className="v-item">Carousel 111111</div>
          <div className="v-item">Carousel 222222</div>
          <div className="v-item">Carousel 333333</div>
        </Carousel>

        <WhiteSpace />
        <div className="sub-title">lottery</div>
        <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
          speed={200}
          autoplayInterval={300}
          resetAutoplay={false}
        >
          {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
            <div className="v-item" key={type}>{type}</div>
          ))}
        </Carousel>
      </WingBlank>)
    }
}

ReactDOM.render(<App /> , document.getElementById('example'))
