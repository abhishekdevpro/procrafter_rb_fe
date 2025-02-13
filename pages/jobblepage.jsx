"use client";

import { useEffect } from "react";

export default function JoobleJobsPage() {
  useEffect(() => {
    var url = "https://fr.jooble.org/api/";
    var key = "<YOUR_API_KEY>";
    var params = JSON.stringify({ keywords: "it", location: "Bern" });

    // Create XMLHttpRequest object
    var http = new XMLHttpRequest();
    // Open connection (true = asynchronous)
    http.open("POST", url + key, true);

    // Send the proper header information
    http.setRequestHeader("Content-type", "application/json");

    // Callback when the state changes
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          alert(http.responseText);
        } else {
          console.error("Error fetching data:", http.statusText);
        }
      }
    };

    // Send request to the server
    http.send(params);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold">Fetching Jooble Jobs...</h1>
    </div>
  );
}
