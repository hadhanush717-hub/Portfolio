document.getElementById("resumeBtn").addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "Resume.pdf"; 
    a.download = "Dhanush_H_A_Resume.pdf";
    a.click();
});

document.querySelector(".contact-box").addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Message sent (demo only)");
});
