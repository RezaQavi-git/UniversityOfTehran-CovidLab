import React from "react";

import Footer from "../../common/footer/Footer";
import Language from "../common/header/Language";
import Navbar from "../common/header/Navbar";

import "../common/total-page.css";
import './documents.css'

import $ from "jquery";

class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "مستندات" : "Documents";
    const dir = lang === "fa" ? "rtl" : "ltr";

    document.title = title;
    $("body").attr("dir", dir);
  }

  render() {
    const {
      lang,
      match: { params },
    } = this.props;
    return (
      <React.Fragment>
        <Language lang={lang} url={"/ventilator/documents/" + lang} />
        <div className="main">
          <Navbar lang={lang} />
          <p className="seprator">{lang === "fa" ? "مستندات" : "Documents"}</p>
          <DocumentsBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class DocumentsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="documents-body">
          <p>
            {lang === "fa"
              ? "این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است این متن فرضی است "
              : "This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This text is hypothetical This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text This is a hypothetical text It is hypothetical"}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Documents;