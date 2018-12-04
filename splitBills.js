var arr = Array();
		let x = 1;
		function addConti() {
			arr[x] = document.getElementById("conti").value;
			alert("Added successfully");
			x ++;
			document.getElementById("conti").value = "";
		}
		function calc() {
			var i;
			var j;
			var disp = "<hr/>";
			for(i = 1; i<arr.length; i++) {
				disp += "Person " + i + " paid &#x20B9;" + arr[i] + "<br/>";
			}
			var n = arr.length-1;
			for(i = 1; i<arr.length; i++) {
				for(j = i+1; j<arr.length; j++) {
					if(arr[i]/n > arr[j]/n) {
						disp += "Person " + i + " gets back &#x20B9;" + (arr[i]/n-arr[j]/n) + " from Person " + j + "<br/>"; 
					}
					else if(arr[i]/n < arr[j]/n) {
						disp += "Person " + i + " gives &#x20B9;" + (arr[j]/n-arr[i]/n)+ " to Person " + j + "<br/>"; 
					}
					else if(arr[i] == arr[j]) {
						disp += "Person " + i + " and Person " + j + " are settled up! " + "<br/>"; 
					}
				}
			}

			document.getElementById("out").innerHTML += disp;
		}
