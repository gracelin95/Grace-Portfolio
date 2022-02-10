import "./tech.css";
import IoLogoJavascript from "react-icons/io";

const Tech = () => {
  return (
    <div>
      {" "}
      <div className="tech-header"> Technology Stack</div>
      <div>
        <table
          className="tech-tables1"
          style={{
            display: "inline-block",
            paddingLeft: "100px",
            fontSize: 18,
          }}
        >
          <tr style={{ fontSize: 20 }}>
            <th>Experienced in:</th>
          </tr>

          <tr>
            <td>
              <img
                className="javascript-icon"
                src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png"
              />
            </td>
            <td>Javascript</td>
          </tr>

          <tr>
            <td>
              <img
                className="html-css"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/791px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"
              />
            </td>
            <td>HTML5 & CSS </td>
          </tr>

          <tr>
            <td>
              <img
                className="react-icon"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              />
            </td>
            <td>React & React Native </td>
          </tr>

          <tr>
            <td>
              <img
                className="redux-icon"
                src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png"
              />
            </td>
            <td>Redux </td>
          </tr>

          <tr>
            <td>
              <img
                className="node-icon"
                src="https://miro.medium.com/max/1400/1*MuVcoMPyJcq8G4qf5s3HGQ.png"
              />
            </td>
            <td>Node JS </td>
          </tr>

          <tr>
            <td>
              <img
                className="postgres-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png"
              />
            </td>
            <td>Postgres </td>
          </tr>

          <tr>
            <td>
              <img
                className="react-icon"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              />
            </td>
            <td>React & React Native </td>
          </tr>

          <tr>
            <td>
              <img
                className="sql-icon"
                src="https://iconape.com/wp-content/files/gq/99606/svg/sequelize.svg"
              />
            </td>
            <td>SQL & Sequelize </td>
          </tr>

          <tr>
            <td>
              <img
                className="firebase-icon"
                src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
              />
            </td>
            <td>Firebase </td>
          </tr>

          <tr>
            <td>
              <img
                className="webpack-icon"
                src="https://seeklogo.com/images/W/webpack-logo-9E66EE203A-seeklogo.com.png"
              />
            </td>
            <td>Webpack </td>
          </tr>

          <tr>
            <td>
              <img
                className="mui-icon"
                src="https://v4.mui.com/static/logo.png"
              />
            </td>
            <td>Material UI </td>
          </tr>
        </table>
        <table
          className="tech-tables2"
          style={{ float: "right", paddingRight: 200, fontSize: 18 }}
        >
          <tr style={{ fontSize: 20 }}>
            <th>Learning:</th>
          </tr>
          <tr>
            <td>
              <img
                className="ts-icon"
                src="https://iconape.com/wp-content/png_logo_vector/typescript.png"
              />
            </td>
            <td>Typescript</td>
          </tr>
          <tr>
            <td>
              <img
                className="python-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
              />
            </td>
            <td>Python</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Tech;
