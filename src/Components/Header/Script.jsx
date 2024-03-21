import "./Style.css";
import { FaSnowman } from "react-icons/fa";

export default function Script() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="content">Content</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
        <li>
          <a href="About">About</a>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
      <p className="font">Login</p>
      <span class="material-symbols-outlined">login</span>
      {/* <span class="material-symbols-outlined">account_circle</span> */}
      <span><FaSnowman /></span>
    </div>
  );
}
