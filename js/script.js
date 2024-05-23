// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"
/**
* Check service worker.
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2OR-Unit6-02-HTML/sw.js", {
    scope: "/ICD2OR-Unit6-02-HTML",
  })
}

function cookies() {
  if (localStorage.hits) {
    localStorage.hits++
  } else {
    localStorage.hits = 1
  }

  document.getElementById("total").innerHTML =
    "The time that you click is " + localStorage.hits + "!"
}
