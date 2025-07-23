var varDeclare = "I am declared using var";
      document.getElementById("var-declare").innerText = varDeclare;

      var varDeclare = "I am redeclared using var";
      document.getElementById("var-redeclared").innerText = varDeclare;

      varDeclare = "I am reassigned using var";
      document.getElementById("var-reassigned").innerText = varDeclare;

      // ----- LET -----
      let letDeclare = "I am declared using let";
      document.getElementById("let-declared").innerText = letDeclare;

      try {
        let letDeclare = "I am redeclared using let but not in the same scope"; // Same scope — will throw error
        document.getElementById("let-redeclared").innerText = letDeclare;
      } catch (error) {
        document.getElementById("let-redeclared").innerText = "Error: " + error.message;
      }

      letDeclare = "I am reassigned using let";
      document.getElementById("let-reassigned").innerText = letDeclare;

      // ----- CONST -----
      const constDeclare = "I am declared using const";
      document.getElementById("const-declared").innerText = constDeclare;

      try {
        const constDeclare = "Trying to redeclare const"; // Will throw error
        document.getElementById("const-redeclared").innerText = constDeclare;
      } catch (error) {
        document.getElementById("const-redeclared").innerText = "Error: " + error.message;
      }

      try {
        constDeclare = "Trying to reassign const"; // Will throw error
        document.getElementById("const-reassigned").innerText = constDeclare;
      } catch (error) {
        document.getElementById("const-reassigned").innerText = "Error: " + error.message;
      }

      const vardiv =document.getElementById('var-div');
      vardiv.style.color="blue";

      const letdiv = document.getElementById("let-div");
      letdiv.style.color="red";

      const constdiv = document.getElementById("const-div");
      constdiv.style.color="green"