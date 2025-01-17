// script.js
document.addEventListener('DOMContentLoaded', function () {
    const emojis = document.querySelectorAll('.emoji');
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close');
    const searchBox = document.getElementById('search');

    // 显示模态框
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function () {
            modal.style.display = 'flex';
            modalImage.src = emoji.src;
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // 点击modal外区域关闭
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 搜索功能
    searchBox.addEventListener('input', function () {
        const query = searchBox.value.toLowerCase();

        emojis.forEach(emoji => {
            const name = emoji.getAttribute('data-name').toLowerCase();
            if (name.includes(query)) {
                emoji.style.display = 'block';  // 显示符合的表情包
            } else {
                emoji.style.display = 'none';  // 隐藏不符合的表情包
            }
        });
    });
});
// 显示弹出框
function showPopup() {
    document.getElementById('infoPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// 隐藏弹出框
function closePopup() {
    document.getElementById('infoPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
