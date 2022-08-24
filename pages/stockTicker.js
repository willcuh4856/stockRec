
import React from 'react';

export default  class Tabsshow extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
  componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
        script.async = true;
        script.innerHTML =  JSON.stringify(   {
            "interval": "1m",
            "width": 425,
            "isTransparent": true,
            "height": 450,
            "symbol": "NASDAQ:AAPL",
            "showIntervalTabs": true,
            "locale": "en",
            "colorTheme": "dark"
          })

        this._ref.current.appendChild(script);
    }
    render() {
        return(
        <div class="tradingview-widget-container" ref={this._ref}>
            <div class="tradingview-widget-container__widget"></div>
           
        </div>
        );
    }
  }