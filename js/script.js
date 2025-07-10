// Loading Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(function() {
        loader.classList.add('fade-out');
    }, 1500);
});

function openmenu() {
    const sidemenu = document.getElementById('sidemenu');
    sidemenu.classList.add('active');
}

function closemenu() {
    const sidemenu = document.getElementById('sidemenu');
    sidemenu.classList.remove('active');
}

// Tab Switching
function opentab(tabname) {
    const tablinks = document.getElementsByClassName('tab-links');
    const tabcontents = document.getElementsByClassName('tab-contents');
    
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Certification Tabs
document.addEventListener('DOMContentLoaded', function() {
    const certTabs = document.querySelectorAll('.cert-tab');
    
    certTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabType = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            certTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all cert contents
            document.querySelectorAll('.cert-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected cert content
            document.getElementById(`${tabType}-certs`).classList.add('active');
        });
    });
});

// Project Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Skill Bar Animation
// Skill Bar Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const animateSkillBars = () => {
        skillItems.forEach(item => {
            const level = item.getAttribute('data-level');
            const bar = item.querySelector('.skill-bar');
            if (bar) {
                bar.style.setProperty('--width', level + '%');
            }
        });
    };

    // Animate when skills section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});

// Back to Top Button
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                closemenu();
            }
        }
    });
});

// Typing Effect for Header Text
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    const texts = [
        "Computer Programmer & Analyst",
        "AI/ML Enthusiast",
        "Data Specialist",
        "Full Stack Developer",
        "Tech Innovator"
    ];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentText = texts[index];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index++;
            if (index === texts.length) {
                index = 0;
            }
            setTimeout(type, 500);
        } else {
            const speed = isDeleting ? 100 : 150;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 1000);
});

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});