let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = "auto";
})

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1300;
})

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += -1300;
})


const modal = document.getElementById("modal");
  const openModal= document.querySelectorAll(".openModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  console.log(openModal)
  
  openModal.forEach((btn) => {
    btn.addEventListener("click", () => {

      const imageSrc = btn.querySelector("img").src;
      const nameText = btn.querySelector("h2").innerText;
      const titleText = btn.querySelector("h4").innerText;
      const companyText = btn.querySelector("p").innerText;

      // Set modal content dynamically
      document.getElementById("modalImage").src = imageSrc;
      document.getElementById("modalName").innerText = nameText;
      document.getElementById("modalTitle").innerText = titleText;
      document.getElementById("modalCompany").innerText = companyText;

      modal.style.display = "block";
      modal.classList.add("transition");
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });


