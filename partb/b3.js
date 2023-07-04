function performOperations() {
      return new Promise(function(resolve) {
        const a = parseInt(prompt("Enter the first number:"));
        const b = parseInt(prompt("Enter the second number:"));
        
        setTimeout(function() {
          const sum = a + b;
          alert("Sum: " + sum);
          
          setTimeout(function() {
            const difference = a - b;
            alert("Difference: " + difference);
            
            setTimeout(function() {
              const product = a * b;
              alert("Product: " + product);
              
              setTimeout(function() {
                const quotient = a / b;
                alert("Quotient: " + quotient);
                
                resolve();
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      });
    }
