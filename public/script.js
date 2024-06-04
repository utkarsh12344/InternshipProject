document.addEventListener("DOMContentLoaded", function () {
    const startingMinutes = 1; // Change this to 1 for a 1-minute countdown
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById('countdown');
    const wheelVideo = document.getElementById('wheel-video');
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownEl.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;

        if (time < 0) {
            time = startingMinutes * 60; // Reset the timer
            wheelVideo.play(); // Start playing the video
        }
    }
});


  

//   //selecting buttons functionality
  
//   document.addEventListener('DOMContentLoaded', (event) => {
//   // Attach the click event listener to the buttons
//   document.querySelectorAll('.image-button').forEach(button => {
//       button.addEventListener('click', handleClick);
//   });
//   });
  
//   function handleClick(event) {
//   event.preventDefault();
  
//   // Remove the 'hover-effect' class from all buttons
//   document.querySelectorAll('.image-button1').forEach(button => {
//       button.classList.remove('hover-effect');
//   });
  
//   // Add the 'hover-effect' class to the specified buttons based on the clicked button
//   let buttonIds = [];
//   if (event.target.id === 'ImageButton47') {
//       buttonIds = ['ImageButton11', 'ImageButton12', 'ImageButton13', 'ImageButton14',
//           'ImageButton15', 'ImageButton16', 'ImageButton17', 'ImageButton18',
//           'ImageButton19', 'ImageButton20', 'ImageButton21', 'ImageButton22'];
//   } else if (event.target.id === 'ImageButton48') {
//       buttonIds = ['ImageButton23', 'ImageButton24', 'ImageButton25', 'ImageButton26', 'ImageButton27',
//           'ImageButton28', 'ImageButton29', 'ImageButton30', 'ImageButton31', 'ImageButton32',
//           'ImageButton33', 'ImageButton34'];
//   } else if (event.target.id === 'ImageButton49') {
//       buttonIds = ['ImageButton35', 'ImageButton36', 'ImageButton37', 'ImageButton38', 'ImageButton39',
//           'ImageButton40', 'ImageButton41', 'ImageButton42', 'ImageButton43', 'ImageButton44',
//           'ImageButton45', 'ImageButton46'];
//   } else if (event.target.id === 'ImageButton50') {
//       buttonIds = ['ImageButton11', 'ImageButton12', 'ImageButton13', 'ImageButton14',
//           'ImageButton15', 'ImageButton16', 'ImageButton17', 'ImageButton18',
//           'ImageButton19', 'ImageButton20', 'ImageButton21', 'ImageButton22','ImageButton23','ImageButton24','ImageButton25','ImageButton26','ImageButton27','ImageButton28'];
//   } else if (event.target.id === 'ImageButton55') {
//       buttonIds = ['ImageButton29', 'ImageButton30', 'ImageButton31', 'ImageButton32',
//           'ImageButton33', 'ImageButton34', 'ImageButton35', 'ImageButton36',
//           'ImageButton37', 'ImageButton38', 'ImageButton39', 'ImageButton40','ImageButton41','ImageButton42','ImageButton43','ImageButton44','ImageButton45','ImageButton46'];
//   } else if (event.target.id === 'ImageButton51') {
//       buttonIds = ['ImageButton12', 'ImageButton14', 'ImageButton16', 'ImageButton18',
//           'ImageButton20', 'ImageButton22', 'ImageButton24', 'ImageButton26',
//           'ImageButton28', 'ImageButton30', 'ImageButton32', 'ImageButton34','ImageButton36','ImageButton38','ImageButton40','ImageButton42','ImageButton44'];
//   } else if (event.target.id === 'ImageButton54') {
//       buttonIds = ['ImageButton11', 'ImageButton13', 'ImageButton15', 'ImageButton17',
//           'ImageButton19', 'ImageButton21', 'ImageButton23', 'ImageButton25',
//           'ImageButton27', 'ImageButton29', 'ImageButton31', 'ImageButton33','ImageButton35','ImageButton37','ImageButton39','ImageButton41','ImageButton43','ImageButton45'];
//   } else if (event.target.id === 'ImageButton52') {
//       buttonIds = ['ImageButton11', 'ImageButton13', 'ImageButton15', 'ImageButton17',
//           'ImageButton19', 'ImageButton22', 'ImageButton24', 'ImageButton26',
//           'ImageButton28', 'ImageButton29', 'ImageButton31', 'ImageButton33','ImageButton35','ImageButton37','ImageButton40','ImageButton42','ImageButton44','ImageButton46'];
//   } else if (event.target.id === 'ImageButton53') {
//       buttonIds = ['ImageButton12', 'ImageButton14', 'ImageButton16', 'ImageButton18',
//           'ImageButton20', 'ImageButton21', 'ImageButton23', 'ImageButton25',
//           'ImageButton27', 'ImageButton30', 'ImageButton32', 'ImageButton34','ImageButton36','ImageButton38','ImageButton39','ImageButton41','ImageButton43','ImageButton45'];
//   }
  
//   // Add the 'hover-effect' class to the appropriate buttons
//   buttonIds.forEach(id => {
//       document.getElementById(id).classList.add('hover-effect');
//   });
  
  
//   }


//selecting buttons functionality
document.addEventListener('DOMContentLoaded', (event) => {
    // Attach the click event listener to the buttons
    document.querySelectorAll('.image-button').forEach(button => {
        button.addEventListener('click', handleClick);
    });
});

function handleClick(event) {
    event.preventDefault();

    // Remove the 'hover-effect' class from all buttons
    document.querySelectorAll('.image-button').forEach(button => {
        button.classList.remove('hover-effect');
    });

    // Add the 'hover-effect' class to the specified buttons based on the clicked button
    let buttonIds = [];
    if (event.target.id === 'ImageButton47') {
        buttonIds = ['ImageButton11', 'ImageButton12', 'ImageButton13', 'ImageButton14',
            'ImageButton15', 'ImageButton16', 'ImageButton17', 'ImageButton18',
            'ImageButton19', 'ImageButton20', 'ImageButton21', 'ImageButton22'];
    } else if (event.target.id === 'ImageButton48') {
        buttonIds = ['ImageButton23', 'ImageButton24', 'ImageButton25', 'ImageButton26', 'ImageButton27',
            'ImageButton28', 'ImageButton29', 'ImageButton30', 'ImageButton31', 'ImageButton32',
            'ImageButton33', 'ImageButton34'];
    } else if (event.target.id === 'ImageButton49') {
        buttonIds = ['ImageButton35', 'ImageButton36', 'ImageButton37', 'ImageButton38', 'ImageButton39',
            'ImageButton40', 'ImageButton41', 'ImageButton42', 'ImageButton43', 'ImageButton44',
            'ImageButton45', 'ImageButton46'];
    } else if (event.target.id === 'ImageButton50') {
        buttonIds = ['ImageButton11', 'ImageButton12', 'ImageButton13', 'ImageButton14',
            'ImageButton15', 'ImageButton16', 'ImageButton17', 'ImageButton18',
            'ImageButton19', 'ImageButton20', 'ImageButton21', 'ImageButton22','ImageButton23','ImageButton24','ImageButton25','ImageButton26','ImageButton27','ImageButton28'];
    } else if (event.target.id === 'ImageButton55') {
        buttonIds = ['ImageButton29', 'ImageButton30', 'ImageButton31', 'ImageButton32',
            'ImageButton33', 'ImageButton34', 'ImageButton35', 'ImageButton36',
            'ImageButton37', 'ImageButton38', 'ImageButton39', 'ImageButton40','ImageButton41','ImageButton42','ImageButton43','ImageButton44','ImageButton45','ImageButton46'];
    } else if (event.target.id === 'ImageButton51') {
        buttonIds = ['ImageButton12', 'ImageButton14', 'ImageButton16', 'ImageButton18',
            'ImageButton20', 'ImageButton22', 'ImageButton24', 'ImageButton26',
            'ImageButton28', 'ImageButton30', 'ImageButton32', 'ImageButton34','ImageButton36','ImageButton38','ImageButton40','ImageButton42','ImageButton44'];
    } else if (event.target.id === 'ImageButton54') {
        buttonIds = ['ImageButton11', 'ImageButton13', 'ImageButton15', 'ImageButton17',
            'ImageButton19', 'ImageButton21', 'ImageButton23', 'ImageButton25',
            'ImageButton27', 'ImageButton29', 'ImageButton31', 'ImageButton33','ImageButton35','ImageButton37','ImageButton39','ImageButton41','ImageButton43','ImageButton45'];
    } else if (event.target.id === 'ImageButton52') {
        buttonIds = ['ImageButton11', 'ImageButton13', 'ImageButton15', 'ImageButton17',
            'ImageButton19', 'ImageButton22', 'ImageButton24', 'ImageButton26',
            'ImageButton28', 'ImageButton29', 'ImageButton31', 'ImageButton33','ImageButton35','ImageButton37','ImageButton40','ImageButton42','ImageButton44','ImageButton46'];
    } else if (event.target.id === 'ImageButton53') {
        buttonIds = ['ImageButton12', 'ImageButton14', 'ImageButton16', 'ImageButton18',
            'ImageButton20', 'ImageButton21', 'ImageButton23', 'ImageButton25',
            'ImageButton27', 'ImageButton30', 'ImageButton32', 'ImageButton34','ImageButton36','ImageButton38','ImageButton39','ImageButton41','ImageButton43','ImageButton45'];
    }

    // Add the 'hover-effect' class to the appropriate buttons
    buttonIds.forEach(id => {
        document.getElementById(id).classList.add('hover-effect');
    });

    // Call overlayImage function to overlay an image over the clicked button
    addOverlayImage(event.target);
}

function addOverlayImage(button) {
    // Create a new overlay image element
    const overlayImage = document.createElement("img");
    overlayImage.src = "Images/Images-1/Bet1.png"; // Specify the overlay image path here
    overlayImage.className = "image-overlay";

    // Position the overlay image over the clicked button
    const buttonRect = button.getBoundingClientRect();
    overlayImage.style.position = "absolute";
    overlayImage.style.top = buttonRect.top + window.scrollY + "px"; // Account for scrolling
    overlayImage.style.left = buttonRect.left + window.scrollX + "px"; // Account for scrolling

    // Make the overlay image slightly smaller
    const scaleFactor = 0.5; // Adjust this factor to make the overlay smaller or larger
    overlayImage.style.width = buttonRect.width * scaleFactor + "px";
    overlayImage.style.height = buttonRect.height * scaleFactor + "px";

    // Center the overlay image over the button
    overlayImage.style.top = (buttonRect.top + window.scrollY + (buttonRect.height * (1 - scaleFactor) / 2)) + "px";
    overlayImage.style.left = (buttonRect.left + window.scrollX + (buttonRect.width * (1 - scaleFactor) / 2)) + "px";

    // Append the overlay image to the body
    document.body.appendChild(overlayImage);
}
