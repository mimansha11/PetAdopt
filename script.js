document.addEventListener('DOMContentLoaded', () => {
    const rescueLoginButton = document.querySelector('.rescue-login');
    const petImages = document.querySelectorAll('.pet img');
    
    // Rescue Login button click event
    rescueLoginButton.addEventListener('click', () => {
        window.location.href = 'login.html'; // Redirect to login page or show a login form
    });

    // Pet images hover event
    petImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.opacity = '0.7'; // Reduce opacity on hover
        });

        img.addEventListener('mouseout', () => {
            img.style.opacity = '1'; // Reset opacity when not hovered
        });
    });
});
