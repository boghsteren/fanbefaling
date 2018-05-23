import React from "react";
import Link from "next/link";
import { Message, Button, Container } from "semantic-ui-react";

let showCookieBanner;

export default class Cookiebanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCookieBanner: undefined
    };
  }
  componentDidMount() {
    showCookieBanner = document.cookie.replace(
      /(?:(?:^|.*;\s*)showCookieBannerFanbefaling\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (showCookieBanner === "false") {
      this.setState({ showCookieBanner: false });
    } else this.setState({ showCookieBanner: true });
  }
  update = () => {
    this.setState({ showCookieBanner: false });
  };

  render() {
    return (
      this.state.showCookieBanner === true &&
      <div
        style={{
          width: "100%",
          zIndex: "999",
          position: "fixed",
          bottom: "0"
        }}
      >
        <Message
          onDismiss={() => {
            document.cookie =
              "showCookieBannerFanbefaling=false;max-age=31536000";
            this.update();
          }}
          color="grey"
        >
          <Message.Header>Cookie Alert</Message.Header>
          Vi bruger cookies til at tælle vores besøgende og forstå deres
          opførsel!
          <Link href="/privatliv">
            <a> Læs om det!</a>
          </Link>
        </Message>
      </div>
    );
  }
}
