import { withRouter } from "next/router";
import Layout from "../components/Layout.js";

const About = withRouter(props => {
  //const { router } = props;

  return (
    <Layout>
      <p>About us</p>
    </Layout>
  );
});

export default About;
