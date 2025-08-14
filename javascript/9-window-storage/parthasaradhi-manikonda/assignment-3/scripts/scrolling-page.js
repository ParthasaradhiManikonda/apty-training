      // Get references to HTML elements
      const xInput = document.getElementById("xInput");
      const yInput = document.getElementById("yInput");
      const scrollToBtn = document.getElementById("scrollToBtn");
      const scrollUpBtn = document.getElementById("scrollUpBtn");
      const scrollDownBtn = document.getElementById("scrollDownBtn");

      // Function to scroll to the specified X, Y coordinates
      scrollToBtn.addEventListener("click", () => {
        const x = parseFloat(xInput.value) || 0; // Default to 0 if input is empty or invalid
        const y = parseFloat(yInput.value) || 0; // Default to 0 if input is empty or invalid
        window.scrollTo({
          left: x,
          top: y,
          behavior: "smooth", // Smooth scrolling effect
        });
      });

      // Function to scroll up by 10 pixels
      scrollUpBtn.addEventListener("click", () => {
        window.scrollBy({
          top: -10, // Scroll up by 10 pixels
          behavior: "smooth", // Smooth scrolling effect
        });
      });

      // Function to scroll down by 10 pixels
      scrollDownBtn.addEventListener("click", () => {
        window.scrollBy({
          top: 10, // Scroll down by 10 pixels
          behavior: "smooth", // Smooth scrolling effect
        });
      });

      // Optional: Pre-fill some values for demonstration
      window.onload = () => {
        xInput.value = 0;
        yInput.value = 500; // Example: Scroll to 500px down initially
      };