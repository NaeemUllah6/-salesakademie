// Language Toggle function
// $(document).ready(function() {
//     if (localStorage.getItem('language') === 'cz') {
//     $('.language_toggle').val('cz');
//     $('[data-localize]').localize("language", { language: "cz" });
//     } else {
//     $('.language_toggle').val('en');
//     $('[data-localize]').localize("language", { language: "en" });
//     }

//     $('.language_toggle').on('change', function() {
//     let value = $(this).val();

//     $('[data-localize]').localize("language", { language: value });
//     localStorage.setItem('language', value);
//     });
// });
// Language Toggle function
// $(document).ready(function() {
//     // Check if language is stored in localStorage
//     if (localStorage.getItem('language') === 'gr') {
//         $('.language_toggle').val('gr');
//         $('[data-localize]').localize("language", { language: "gr" });
//     } else {
//         $('.language_toggle').val('en');
//         $('[data-localize]').localize("language", { language: "en" });
//     }

//     // Handle language toggle change
//     $('.language_toggle').on('change', function() {
//         let value = $(this).val();
        
//         $('[data-localize]').localize("language", { language: value });
//         localStorage.setItem('language', value);
//     });
// });


// ------------------------------default language switch script--------------------------------
$(document).ready(function() {
    // Set Greek as default on page load if no language is stored
    function loadLanguage() {
        if (localStorage.getItem('language') === 'gr') {
            $('.language_toggle').val('gr');
            $('[data-localize]').localize("language", { language: "gr" });
        } else {
            // Default to Greek if no language is stored
            $('.language_toggle').val('gr');
            $('[data-localize]').localize("language", { language: "gr" });
            localStorage.setItem('language', 'gr');
        }
    }
    // Call the loadLanguage function on page load
    loadLanguage();
    // Handle language toggle change
    $('.language_toggle').on('change', function() {
        let value = $(this).val();
        $('[data-localize]').localize("language", { language: value });
        localStorage.setItem('language', value);
    });
});
// ------------------------------default language switch script--------------------------------



document.querySelectorAll('.btn-toggle').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });