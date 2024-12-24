// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // تحديد جميع الروابط التي تحتوي على خاصية 'data-popup'
    const popupLinks = document.querySelectorAll('a[data-popup]');
    const popup = document.querySelector('.popup');
    const closePopupBtn = document.querySelector('.popup .close-btn');

    // عند النقر على رابط، يتم عرض الصورة في النافذة المنبثقة
    popupLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // منع الانتقال إلى الرابط
            const imageUrl = link.getAttribute('href'); // الحصول على رابط الصورة
            popup.querySelector('img').src = imageUrl; // إضافة الصورة إلى النافذة المنبثقة
            popup.style.display = 'flex'; // عرض النافذة المنبثقة
        });
    });

    // عند النقر على زر الإغلاق في النافذة المنبثقة
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none'; // إغلاق النافذة المنبثقة
    });

    // إغلاق النافذة المنبثقة عند النقر خارج النافذة
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none'; // إغلاق النافذة المنبثقة
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // إنشاء زر البرجر
    const burgerMenu = document.createElement('div');
    burgerMenu.className = 'burger-menu';
    burgerMenu.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const nav = document.querySelector('nav');
    nav.insertBefore(burgerMenu, nav.firstChild);
    
    // تفعيل/تعطيل القائمة عند النقر على زر البرجر
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // إضافة تأثير النقر للروابط في القائمة
    const menuItems = nav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                // إذا كان الرابط لا يحتوي على قائمة فرعية، أغلق القائمة
                if (!this.parentElement.querySelector('ul')) {
                    burgerMenu.classList.remove('active');
                    nav.classList.remove('active');
                }
            }
        });
    });
});