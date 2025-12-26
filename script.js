function checkEligibility() {
  const age = parseInt(document.getElementById("age").value);
  const edu = document.getElementById("education").value;
  const cat = document.getElementById("category").value;
  const resultsDiv = document.getElementById("results");

  if (!age || !edu) {
    resultsDiv.innerHTML = "⚠️ Please enter age and education.";
    return;
  }

  let relax = 0;
  if (cat === "obc") relax = 3;
  if (cat === "sc" || cat === "st") relax = 5;

  let results = [];

  if (age >= 21 && age <= 32 + relax && edu === "graduate") results.push("UPSC CSE");
  if (age >= 18 && age <= 32 + relax && edu === "graduate") results.push("SSC CGL");
  if (age >= 18 && age <= 27 + relax && (edu === "12" || edu === "graduate")) results.push("SSC CHSL");
  if (age >= 18 && age <= 23 + relax) results.push("SSC GD Constable");
  if (age >= 20 && age <= 30 + relax && edu === "graduate") results.push("IBPS PO");
  if (age >= 21 && age <= 30 + relax && edu === "graduate") results.push("SBI PO");

  if (results.length === 0) {
    resultsDiv.innerHTML = "❌ No exams found for your details.";
  } else {
    resultsDiv.innerHTML =
      "<h3>You may be eligible for:</h3><ul><li>" +
      results.join("</li><li>") +
      "</li></ul>";
  }
}

function sendContact(e) {
  e.preventDefault();
  document.getElementById("contactResponse").innerText =
    "Thank you! Your message has been received.";
}