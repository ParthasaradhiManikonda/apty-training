const urlInput = document.getElementById("urlInput");

      document.getElementById("goBtn").addEventListener("click", function () {
        let urlValue = urlInput.value.trim();
        if (!urlValue) {
          alert("Please enter a valid URL");
          return;
        }
        if (
          !urlValue.startsWith("http://") &&
          !urlValue.startsWith("https://")
        ) {
          urlValue = "https://" + urlValue;
        }
        window.location.href = urlValue;
      });

      document.getElementById("backBtn").addEventListener("click", () => {
        window.history.back();
      });

      document.getElementById("forwardBtn").addEventListener("click", () => {
        window.history.forward();
      });

      document.getElementById("reloadBtn").addEventListener("click", () => {
        window.location.reload();
      });