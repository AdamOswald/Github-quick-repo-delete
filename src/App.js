import "./styles.css";

import { Octokit } from "@octokit/core";
import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../src/components/Card";

require("dotenv").config();

export default function App() {
  const [name, setName] = useState("");
  const [repos, setRepos] = useState();
  const [delRepos, setdelRepos] = useState([]);
  const [reposKeep, setReposKeep] = useState([]);
  const [page, setPage] = useState(1);

  const handleAdd = (val) => {
    if (!delRepos.includes(val.url)) {
      setdelRepos((delRepos) => [...delRepos, val]);
    }
  };

  const GITHUB_API_TOKEN = "your-access-token";

  const getData = async () => {
    await axios
      .get(`https://api.github.com/users/AdamOswald/repos?per_page=100`)
      .then((response) => setRepos(response));
  };

  return (
    <div className="App">
      <h1>GITHUB QUICK DELETE</h1>
      <h2>A simple and fast way to delete unwanted repositories</h2>

      {/* <div className="horizontal-flex-space">
        {page > 0 ? (
          <div className="show">
            <button onClick={() => handlePrevPage()}>{"<"}</button>
          </div>
        ) : (
          <div>
            {" "}
            <button className="inactive">{"<"}</button>
          </div>
        )}

        <div className="black-background">{page}</div>
        <button onClick={() => handleNextPage()}>{">"}</button>
      </div>

      <input onChange={(e) => setName(e.target.value)} /> */}

      <button onClick={() => getData()}>Get Repos</button>
      {repos &&
        repos.data.map((val, key) => {
          return <Card key={key} props={val} />;
        })}
    </div>
  );
}
