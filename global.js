if (!localStorage.getItem("allStage")) {
  const allStage = [];
  localStorage.setItem("allStage", JSON.stringify(allStage));
}

if (sessionStorage.getItem("select-defalut-stage")) {
  sessionStorage.removeItem("select-defalut-stage");
}
